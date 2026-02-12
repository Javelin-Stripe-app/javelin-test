import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { createLLMProvider } from '../_shared/llm-provider.ts';
import type { ChatMessage } from '../_shared/llm-provider.ts';

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'GET' && req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use GET or POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Fetch recent cached data to generate insights from
    const [
      { data: subscriptions },
      { data: invoices },
      { data: customers },
    ] = await Promise.all([
      auth.supabase
        .from('cached_subscriptions')
        .select('id, status, price_id, customer_id, current_period_end, synced_at')
        .eq('stripe_account_id', auth.stripeAccountId)
        .order('synced_at', { ascending: false })
        .limit(100),
      auth.supabase
        .from('cached_invoices')
        .select('id, status, amount_paid, currency, created, synced_at')
        .eq('stripe_account_id', auth.stripeAccountId)
        .order('created', { ascending: false })
        .limit(50),
      auth.supabase
        .from('cached_customers')
        .select('id, synced_at')
        .eq('stripe_account_id', auth.stripeAccountId),
    ]);

    // Check if we have enough data to generate insights
    const hasSubscriptions = (subscriptions?.length || 0) > 0;
    const hasInvoices = (invoices?.length || 0) > 0;
    const hasCustomers = (customers?.length || 0) > 0;

    if (!hasSubscriptions && !hasInvoices && !hasCustomers) {
      // Insufficient data — return empty insights
      return jsonResponse({
        insights: [],
        message: 'Sync your Stripe data to receive personalized insights.',
      });
    }

    // Build a summary of the data for the LLM
    const activeSubCount = subscriptions?.filter((s) => s.status === 'active').length || 0;
    const canceledSubCount = subscriptions?.filter((s) =>
      s.status === 'canceled' || s.status === 'expired'
    ).length || 0;
    const totalSubCount = subscriptions?.length || 0;

    const paidInvoiceTotal = invoices
      ?.filter((i) => i.status === 'paid')
      .reduce((sum, i) => sum + (i.amount_paid || 0), 0) || 0;

    const latestSyncedAt = subscriptions?.[0]?.synced_at || invoices?.[0]?.synced_at || null;

    const dataSummary = {
      subscriptions: {
        total: totalSubCount,
        active: activeSubCount,
        canceled: canceledSubCount,
      },
      invoices: {
        recentCount: invoices?.length || 0,
        totalPaidAmountCents: paidInvoiceTotal,
      },
      customers: {
        total: customers?.length || 0,
      },
    };

    // Call LLM to generate insights
    const llmProvider = createLLMProvider();

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are Javelin, a concise business intelligence assistant for Stripe Dashboard users. Generate 1-2 brief, actionable insights from the provided data summary. Each insight should be 1-2 sentences maximum. Focus on notable patterns, potential issues, or opportunities. Format your response as a JSON array of objects with "title" (short, 5-8 words) and "body" (the insight text, 1-2 sentences) fields. Return ONLY the JSON array, no other text.`,
      },
      {
        role: 'user',
        content: `Here is the current data summary for this Stripe account:\n${JSON.stringify(dataSummary, null, 2)}\n\nGenerate 1-2 welcome insights based on these numbers.`,
      },
    ];

    const llmResponse = await llmProvider.chat(messages, {
      maxTokens: 500,
      temperature: 0.4,
    });

    // Parse LLM response as JSON array
    let insights: { title: string; body: string }[] = [];
    try {
      // Extract JSON from the response (handle markdown code blocks if present)
      let jsonStr = llmResponse.content.trim();
      if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.replace(/```(?:json)?\n?/g, '').trim();
      }
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed)) {
        insights = parsed.slice(0, 2).map((item: { title?: string; body?: string }) => ({
          title: String(item.title || ''),
          body: String(item.body || ''),
        }));
      }
    } catch {
      // If LLM response isn't valid JSON, wrap it as a single insight
      if (llmResponse.content.trim()) {
        insights = [{
          title: 'Quick Overview',
          body: llmResponse.content.trim().substring(0, 300),
        }];
      }
    }

    // Audit log
    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'insights_welcome',
        request_id: requestId,
        metadata: { insight_count: insights.length },
      });

    return jsonResponse(
      { insights },
      {
        freshness: 'cached',
        syncedAt: latestSyncedAt || undefined,
      },
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Insights welcome error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
