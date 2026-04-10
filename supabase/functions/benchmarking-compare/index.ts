import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

// Minimum active subscriptions required for benchmarking eligibility
const MIN_ACTIVE_SUBSCRIPTIONS = 5;

// Cache TTL in milliseconds (24 hours)
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// TODO: Replace with actual Stripe Benchmarking API when publicly available.
// The Stripe Benchmarking API may not be publicly accessible yet.
// This stub returns mock data for v0 development and testing purposes.
function generateMockBenchmarkingData(activeSubCount: number): Record<string, unknown> {
  // Mock percentile calculations based on active subscription count
  const mrrPercentile = Math.min(95, Math.max(10, Math.round(activeSubCount * 1.5)));
  const churnPercentile = Math.min(90, Math.max(15, 100 - Math.round(activeSubCount * 0.8)));
  const arpuPercentile = Math.min(85, Math.max(20, Math.round(activeSubCount * 1.2)));

  return {
    comparisons: [
      {
        metric: 'mrr_growth',
        label: 'MRR Growth',
        yourValue: null, // Will be filled by actual MRR computation in future
        percentile: mrrPercentile,
        median: 8.5,
        unit: 'percent',
        description: `Your MRR growth is in the ${mrrPercentile}th percentile compared to similar businesses.`,
      },
      {
        metric: 'gross_churn_rate',
        label: 'Gross Churn Rate',
        yourValue: null,
        percentile: churnPercentile,
        median: 5.2,
        unit: 'percent',
        description: `Your gross churn rate is in the ${churnPercentile}th percentile (lower is better).`,
      },
      {
        metric: 'arpu',
        label: 'ARPU',
        yourValue: null,
        percentile: arpuPercentile,
        median: 45.0,
        unit: 'currency',
        description: `Your ARPU is in the ${arpuPercentile}th percentile compared to similar businesses.`,
      },
    ],
    cohort: {
      description: 'SaaS businesses with similar subscription volume',
      size: 'mock-cohort',
    },
    generatedAt: new Date().toISOString(),
    source: 'mock', // Indicates this is mock data — remove when real API is integrated
  };
}

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'GET' && req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use GET or POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Check eligibility: count active subscriptions from cache
    const { count: activeSubCount, error: countError } = await auth.supabase
      .from('cached_subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('stripe_account_id', auth.stripeAccountId)
      .eq('status', 'active');

    if (countError) {
      console.error('Subscription count error:', requestId, countError.code);
      return errorResponse('db_error', 'Failed to check eligibility', requestId, 500);
    }

    const subCount = activeSubCount || 0;

    if (subCount < MIN_ACTIVE_SUBSCRIPTIONS) {
      return jsonResponse({
        eligible: false,
        reason: `Benchmarking requires at least ${MIN_ACTIVE_SUBSCRIPTIONS} active subscriptions. You currently have ${subCount}.`,
        activeSubscriptions: subCount,
        requiredSubscriptions: MIN_ACTIVE_SUBSCRIPTIONS,
      });
    }

    // Check benchmarking_cache for a TTL hit
    const { data: cachedData } = await auth.supabase
      .from('benchmarking_cache')
      .select('data, fetched_at')
      .eq('stripe_account_id', auth.stripeAccountId)
      .single();

    if (cachedData && cachedData.fetched_at) {
      const fetchedAt = new Date(cachedData.fetched_at).getTime();
      const now = Date.now();

      if (now - fetchedAt < CACHE_TTL_MS) {
        // Cache hit — return cached data
        return jsonResponse(
          {
            eligible: true,
            activeSubscriptions: subCount,
            benchmarking: cachedData.data,
          },
          {
            freshness: 'cached',
            syncedAt: cachedData.fetched_at,
          },
        );
      }
    }

    // Cache miss or expired — fetch new benchmarking data
    // TODO: Replace mock data with actual Stripe Benchmarking API call
    const benchmarkingData = generateMockBenchmarkingData(subCount);

    // Store in cache
    const { error: upsertError } = await auth.supabase
      .from('benchmarking_cache')
      .upsert(
        {
          stripe_account_id: auth.stripeAccountId,
          data: benchmarkingData,
          fetched_at: new Date().toISOString(),
        },
        { onConflict: 'stripe_account_id' },
      );

    if (upsertError) {
      console.error('Benchmarking cache upsert error:', requestId, upsertError.code);
      // Non-fatal: we still have the data to return
    }

    // Audit log
    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'benchmarking_compare',
        request_id: requestId,
        metadata: { active_subscriptions: subCount, cache_hit: false },
      });

    return jsonResponse(
      {
        eligible: true,
        activeSubscriptions: subCount,
        benchmarking: benchmarkingData,
      },
      {
        freshness: 'live',
      },
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Benchmarking compare error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
