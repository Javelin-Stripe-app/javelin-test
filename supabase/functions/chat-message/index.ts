import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { createLLMProvider, LLMError } from '../_shared/llm-provider.ts';
import { sanitizeForLLM, restorePII } from '../_shared/pii-sanitizer.ts';
import { buildSystemPrompt, buildUserPrompt } from '../_shared/system-prompt.ts';
import { generateInsights } from '../_shared/insight-engine.ts';
import { syncObjectType } from '../_shared/sync-engine.ts';
import { getStripeAccessToken } from '../_shared/stripe-token.ts';
import { z } from 'https://esm.sh/zod@3';

// Re-sync cached data if older than 1 hour
const SYNC_STALENESS_MS = 60 * 60 * 1000;

const chatMessageRequestSchema = z.object({
  conversationId: z.string().uuid().nullish(),
  content: z.string().min(1).max(4000),
});

// Simple keyword matching for v0 metric routing
// Maps keywords to the cached tables / metric types we should query
const METRIC_KEYWORDS: Record<string, string[]> = {
  mrr: ['subscriptions'],
  revenue: ['subscriptions', 'invoices', 'charges'],
  churn: ['subscriptions'],
  arpu: ['subscriptions', 'customers'],
  ltv: ['subscriptions', 'customers'],
  subscribers: ['subscriptions', 'customers'],
  subscriptions: ['subscriptions'],
  invoices: ['invoices'],
  charges: ['charges'],
  customers: ['customers'],
  products: ['products'],
  plans: ['products', 'prices'],
  pricing: ['prices'],
};

function detectRelevantMetrics(question: string): string[] {
  const lower = question.toLowerCase();
  const tables = new Set<string>();
  for (const [keyword, relatedTables] of Object.entries(METRIC_KEYWORDS)) {
    if (lower.includes(keyword)) {
      for (const t of relatedTables) tables.add(t);
    }
  }
  // Default: if no keywords matched, include subscriptions + customers for general questions
  if (tables.size === 0) {
    tables.add('subscriptions');
    tables.add('customers');
  }
  return Array.from(tables);
}

/**
 * Check each relevant cache table for freshness. If data is missing or stale
 * (older than SYNC_STALENESS_MS), sync those tables from Stripe before querying.
 */
async function ensureFreshData(
  supabase: ReturnType<typeof import('https://esm.sh/@supabase/supabase-js@2').createClient>,
  stripeAccountId: string,
  relevantTables: string[],
): Promise<void> {
  const tablesToSync: string[] = [];

  await Promise.all(relevantTables.map(async (table) => {
    const { data } = await supabase
      .from(`cached_${table}`)
      .select('synced_at')
      .eq('stripe_account_id', stripeAccountId)
      .order('synced_at', { ascending: false })
      .limit(1);

    const isEmpty = !data || data.length === 0;
    const isStale = !isEmpty &&
      (Date.now() - new Date(data[0].synced_at).getTime()) > SYNC_STALENESS_MS;

    if (isEmpty || isStale) {
      tablesToSync.push(table);
    }
  }));

  if (tablesToSync.length === 0) return;

  try {
    const token = await getStripeAccessToken(supabase, stripeAccountId);
    for (const table of tablesToSync) {
      await syncObjectType(supabase, token, stripeAccountId, table);
    }
  } catch (err) {
    // Non-fatal: continue with stale/empty data
    console.error('Auto-sync failed:', err instanceof Error ? err.message : err);
  }
}

async function fetchMetricsData(
  supabase: ReturnType<typeof import('https://esm.sh/@supabase/supabase-js@2').createClient>,
  stripeAccountId: string,
  relevantTables: string[],
): Promise<{ metrics: Record<string, unknown>; syncedAt: string | null }> {
  const metrics: Record<string, unknown> = {};
  let latestSyncedAt: string | null = null;

  for (const table of relevantTables) {
    const tableName = `cached_${table}`;

    if (table === 'subscriptions') {
      // Fetch subscription summary
      const { data: activeSubs } = await supabase
        .from(tableName)
        .select('id, status, price_id, customer_id, current_period_start, current_period_end, synced_at')
        .eq('stripe_account_id', stripeAccountId)
        .eq('status', 'active');

      const { data: allSubs } = await supabase
        .from(tableName)
        .select('id, status, synced_at')
        .eq('stripe_account_id', stripeAccountId);

      const statusCounts: Record<string, number> = {};
      for (const sub of allSubs || []) {
        statusCounts[sub.status] = (statusCounts[sub.status] || 0) + 1;
        if (sub.synced_at && (!latestSyncedAt || sub.synced_at > latestSyncedAt)) {
          latestSyncedAt = sub.synced_at;
        }
      }

      metrics.subscriptions = {
        totalActive: activeSubs?.length || 0,
        totalAll: allSubs?.length || 0,
        byStatus: statusCounts,
      };
    } else if (table === 'customers') {
      const { data: customers, count } = await supabase
        .from(tableName)
        .select('id, name, email, created, synced_at', { count: 'exact' })
        .eq('stripe_account_id', stripeAccountId)
        .order('created', { ascending: false })
        .limit(50);

      metrics.customers = {
        total: count || 0,
        list: (customers || []).map((c: { id: string; name: string | null; email: string | null; created: string | null }) => ({
          id: c.id,
          name: c.name || '(no name)',
          email: c.email || '(no email)',
          created: c.created,
        })),
      };

      // Track freshness from customer data
      for (const c of customers || []) {
        const row = c as { synced_at?: string };
        if (row.synced_at && (!latestSyncedAt || row.synced_at > latestSyncedAt)) {
          latestSyncedAt = row.synced_at;
        }
      }
    } else if (table === 'invoices') {
      const { data: recentInvoices } = await supabase
        .from(tableName)
        .select('id, status, amount_paid, currency, created, synced_at')
        .eq('stripe_account_id', stripeAccountId)
        .order('created', { ascending: false })
        .limit(50);

      let totalPaid = 0;
      const currencies = new Set<string>();
      for (const inv of recentInvoices || []) {
        if (inv.status === 'paid' && inv.amount_paid) {
          totalPaid += inv.amount_paid;
        }
        if (inv.currency) currencies.add(inv.currency);
        if (inv.synced_at && (!latestSyncedAt || inv.synced_at > latestSyncedAt)) {
          latestSyncedAt = inv.synced_at;
        }
      }

      metrics.invoices = {
        recentCount: recentInvoices?.length || 0,
        totalPaidAmount: totalPaid,
        currencies: Array.from(currencies),
      };
    } else if (table === 'charges') {
      const { data: recentCharges } = await supabase
        .from(tableName)
        .select('id, status, amount, currency, created, synced_at')
        .eq('stripe_account_id', stripeAccountId)
        .order('created', { ascending: false })
        .limit(50);

      let totalSucceeded = 0;
      for (const ch of recentCharges || []) {
        if (ch.status === 'succeeded' && ch.amount) {
          totalSucceeded += ch.amount;
        }
        if (ch.synced_at && (!latestSyncedAt || ch.synced_at > latestSyncedAt)) {
          latestSyncedAt = ch.synced_at;
        }
      }

      metrics.charges = {
        recentCount: recentCharges?.length || 0,
        totalSucceededAmount: totalSucceeded,
      };
    } else if (table === 'products') {
      const { data: products } = await supabase
        .from(tableName)
        .select('id, name, active')
        .eq('stripe_account_id', stripeAccountId);

      metrics.products = {
        total: products?.length || 0,
        active: products?.filter((p: { active: boolean }) => p.active).length || 0,
        names: products?.filter((p: { active: boolean }) => p.active).map((p: { name: string }) => p.name) || [],
      };
    } else if (table === 'prices') {
      const { data: prices } = await supabase
        .from(tableName)
        .select('id, product_id, unit_amount, currency, recurring_interval, active')
        .eq('stripe_account_id', stripeAccountId)
        .eq('active', true);

      metrics.prices = {
        activeCount: prices?.length || 0,
        items: prices?.map((p: {
          id: string;
          unit_amount: number;
          currency: string;
          recurring_interval: string;
        }) => ({
          id: p.id,
          unitAmount: p.unit_amount,
          currency: p.currency,
          interval: p.recurring_interval,
        })) || [],
      };
    }
  }

  return { metrics, syncedAt: latestSyncedAt };
}

async function collectPIIValues(
  supabase: ReturnType<typeof import('https://esm.sh/@supabase/supabase-js@2').createClient>,
  stripeAccountId: string,
): Promise<string[]> {
  // Fetch customer names and emails for PII sanitization
  const { data: customers } = await supabase
    .from('cached_customers')
    .select('name, email')
    .eq('stripe_account_id', stripeAccountId)
    .limit(200);

  const piiValues: string[] = [];
  for (const c of customers || []) {
    if (c.name) piiValues.push(c.name);
    if (c.email) piiValues.push(c.email);
  }
  return piiValues;
}

function generateConversationTitle(content: string): string {
  // Take the first 60 characters of the user message, trim to last word boundary
  const maxLen = 60;
  if (content.length <= maxLen) return content;
  const truncated = content.substring(0, maxLen);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 20 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Validate request body (already parsed by authenticateRequest)
    const parsed = chatMessageRequestSchema.safeParse(auth.body);
    if (!parsed.success) {
      return errorResponse(
        'validation_error',
        parsed.error.issues.map((i) => i.message).join(', '),
        requestId,
        400,
      );
    }

    const { conversationId, content } = parsed.data;

    // Create or fetch conversation
    let activeConversationId = conversationId;

    if (!activeConversationId) {
      // Create a new conversation
      const { data: newConv, error: convError } = await auth.supabase
        .from('conversations')
        .insert({
          stripe_account_id: auth.stripeAccountId,
          title: generateConversationTitle(content),
        })
        .select('id')
        .single();

      if (convError || !newConv) {
        console.error('Conversation creation error:', requestId, convError?.code);
        return errorResponse('db_error', 'Failed to create conversation', requestId, 500);
      }

      activeConversationId = newConv.id;
    } else {
      // Verify conversation exists and belongs to this account (RLS handles scoping)
      const { data: existingConv, error: fetchError } = await auth.supabase
        .from('conversations')
        .select('id')
        .eq('id', activeConversationId)
        .single();

      if (fetchError || !existingConv) {
        return errorResponse('not_found', 'Conversation not found', requestId, 404);
      }
    }

    // Store user message
    const { data: userMessage, error: userMsgError } = await auth.supabase
      .from('messages')
      .insert({
        conversation_id: activeConversationId,
        stripe_account_id: auth.stripeAccountId,
        role: 'user',
        content,
        metadata: { request_id: requestId },
      })
      .select('id, created_at')
      .single();

    if (userMsgError || !userMessage) {
      console.error('User message insert error:', requestId, userMsgError?.code);
      return errorResponse('db_error', 'Failed to store user message', requestId, 500);
    }

    // Load business context
    const { data: businessContextRow } = await auth.supabase
      .from('business_context')
      .select('profile')
      .eq('stripe_account_id', auth.stripeAccountId)
      .single();

    const businessContext = businessContextRow?.profile || {};

    // Detect relevant metrics, ensure fresh data, then fetch
    const relevantTables = detectRelevantMetrics(content);
    await ensureFreshData(auth.supabase, auth.stripeAccountId, relevantTables);
    const { metrics, syncedAt } = await fetchMetricsData(
      auth.supabase,
      auth.stripeAccountId,
      relevantTables,
    );

    // Collect PII values for sanitization
    const piiValues = await collectPIIValues(auth.supabase, auth.stripeAccountId);

    // Build prompts
    const systemPrompt = buildSystemPrompt(businessContext);
    const freshness = syncedAt
      ? { type: 'cached' as const, syncedAt }
      : { type: 'live' as const };
    const userPrompt = buildUserPrompt(content, metrics, freshness);

    // Sanitize PII before sending to LLM
    const { sanitizedText: sanitizedUserPrompt, tokenMap } = sanitizeForLLM(userPrompt, piiValues);
    const { sanitizedText: sanitizedSystemPrompt } = sanitizeForLLM(systemPrompt, piiValues);

    // Load previous messages for conversation context (last 10 messages)
    const { data: previousMessages } = await auth.supabase
      .from('messages')
      .select('role, content')
      .eq('conversation_id', activeConversationId)
      .order('created_at', { ascending: true })
      .limit(10);

    // Build LLM message array
    const llmMessages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
      { role: 'system', content: sanitizedSystemPrompt },
    ];

    // Add conversation history (excluding the current user message we just inserted)
    if (previousMessages && previousMessages.length > 1) {
      // Exclude the last message (the one we just inserted)
      for (const msg of previousMessages.slice(0, -1)) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          const { sanitizedText } = sanitizeForLLM(msg.content, piiValues);
          llmMessages.push({ role: msg.role, content: sanitizedText });
        }
      }
    }

    // Add current user message with metrics context
    llmMessages.push({ role: 'user', content: sanitizedUserPrompt });

    // Call LLM and generate proactive insights in parallel
    const llmProvider = createLLMProvider();
    const [llmResponse, proactiveInsights] = await Promise.all([
      llmProvider.chat(llmMessages, {
        maxTokens: 1500,
        temperature: 0.3,
      }),
      generateInsights(auth.supabase, auth.stripeAccountId).catch((err) => {
        console.error('Insight generation error (non-fatal):', requestId, err);
        return [];
      }),
    ]);

    // Restore PII in the response (handle empty LLM responses gracefully)
    const rawContent = llmResponse.content || "I wasn't able to generate a response. Please try again in a moment.";
    const restoredContent = restorePII(rawContent, tokenMap);

    // Format insights for response
    const insights = proactiveInsights.map((insight) => ({
      id: insight.id,
      type: insight.type,
      content: insight.content,
    }));

    // Store assistant message
    const { data: assistantMessage, error: assistantMsgError } = await auth.supabase
      .from('messages')
      .insert({
        conversation_id: activeConversationId,
        stripe_account_id: auth.stripeAccountId,
        role: 'assistant',
        content: restoredContent,
        metadata: {
          request_id: requestId,
          usage: llmResponse.usage,
          relevant_tables: relevantTables,
        },
      })
      .select('id, created_at')
      .single();

    if (assistantMsgError) {
      console.error('Assistant message insert error:', requestId, assistantMsgError.code);
      // Non-fatal: we still have the response to return
    }

    // Update conversation timestamp
    await auth.supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', activeConversationId);

    // Extract and update business context if the user revealed new info
    // Simple heuristic for v0: check for business-identifying keywords
    const contextKeywords = ['we sell', 'our product', 'we charge', 'our pricing', 'we offer', 'our business'];
    const lowerContent = content.toLowerCase();
    const hasContextInfo = contextKeywords.some((kw) => lowerContent.includes(kw));

    if (hasContextInfo) {
      // Store the raw user statement as context — LLM extraction can be added in v1
      const updatedProfile = {
        ...businessContext,
        user_statements: [
          ...((businessContext as Record<string, unknown>).user_statements as string[] || []),
          content,
        ].slice(-20), // Keep last 20 statements
      };

      await auth.supabase
        .from('business_context')
        .upsert({
          stripe_account_id: auth.stripeAccountId,
          profile: updatedProfile,
        }, { onConflict: 'stripe_account_id' });
    }

    // Audit log
    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'chat_message',
        request_id: requestId,
        metadata: {
          conversation_id: activeConversationId,
          usage: llmResponse.usage,
          insight_count: insights.length,
        },
      });

    return jsonResponse(
      {
        conversationId: activeConversationId,
        message: {
          id: assistantMessage?.id,
          role: 'assistant',
          content: restoredContent,
          createdAt: assistantMessage?.created_at,
        },
        insights,
        usage: llmResponse.usage,
      },
      {
        freshness: syncedAt ? 'cached' : 'live',
        syncedAt: syncedAt || undefined,
      },
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    if (error instanceof LLMError) {
      console.error('LLM error:', requestId, error.code, error.status);
      return errorResponse(error.code, error.message, requestId, error.status === 429 ? 429 : 502);
    }
    console.error('Chat message error:', requestId, error instanceof Error ? error.message : error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
