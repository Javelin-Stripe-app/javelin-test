// Proactive insight generation engine
// Detects anomalies, trends, and benchmarking signals from cached Stripe data

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface Insight {
  id: string;
  type: 'anomaly' | 'trend' | 'benchmark';
  content: string;
  /** Higher = more significant (used for ranking) */
  significance: number;
}

type SupabaseClient = ReturnType<typeof createClient>;

// ─── Anomaly Detection (Task 9.2) ───────────────────────────────────────────────
// Compare current month metrics vs previous month.
// Flag: churn rate > 2x previous, revenue drop > 20%, subscriber spike > 30%.

export async function detectAnomalies(
  supabase: SupabaseClient,
  stripeAccountId: string,
): Promise<Insight[]> {
  const insights: Insight[] = [];

  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const prevMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const prevMonthEnd = currentMonthStart;

  const currentMonthIso = currentMonthStart.toISOString();
  const prevMonthStartIso = prevMonthStart.toISOString();
  const prevMonthEndIso = prevMonthEnd.toISOString();

  try {
    // ── Churn anomaly: compare cancellations current vs previous month ──

    const [{ data: currentCanceled }, { data: prevCanceled }] =
      await Promise.all([
        supabase
          .from('cached_subscriptions')
          .select('id')
          .eq('stripe_account_id', stripeAccountId)
          .eq('status', 'canceled')
          .gte('canceled_at', currentMonthIso),
        supabase
          .from('cached_subscriptions')
          .select('id')
          .eq('stripe_account_id', stripeAccountId)
          .eq('status', 'canceled')
          .gte('canceled_at', prevMonthStartIso)
          .lt('canceled_at', prevMonthEndIso),
      ]);

    const currentCancelCount = currentCanceled?.length || 0;
    const prevCancelCount = prevCanceled?.length || 0;

    // Only flag if there's a meaningful baseline (at least 2 cancellations last month)
    if (prevCancelCount >= 2 && currentCancelCount >= prevCancelCount * 2) {
      const ratio = Math.round((currentCancelCount / prevCancelCount) * 10) / 10;
      insights.push({
        id: `anomaly-churn-spike-${now.toISOString().slice(0, 7)}`,
        type: 'anomaly',
        content: `Churn spike detected: ${currentCancelCount} cancellations so far this month vs ${prevCancelCount} last month (${ratio}x increase). Review recent cancellations to identify common factors.`,
        significance: Math.min(ratio * 30, 100),
      });
    }

    // ── Revenue anomaly: compare paid invoice totals ──

    const [{ data: currentInvoices }, { data: prevInvoices }] = await Promise.all([
      supabase
        .from('cached_invoices')
        .select('amount_paid')
        .eq('stripe_account_id', stripeAccountId)
        .eq('status', 'paid')
        .gte('created', currentMonthIso),
      supabase
        .from('cached_invoices')
        .select('amount_paid')
        .eq('stripe_account_id', stripeAccountId)
        .eq('status', 'paid')
        .gte('created', prevMonthStartIso)
        .lt('created', prevMonthEndIso),
    ]);

    const currentRevenue = (currentInvoices || []).reduce(
      (sum, i) => sum + ((i.amount_paid as number) || 0),
      0,
    );
    const prevRevenue = (prevInvoices || []).reduce(
      (sum, i) => sum + ((i.amount_paid as number) || 0),
      0,
    );

    // Only flag if previous month had meaningful revenue (> $10 equivalent in cents)
    if (prevRevenue > 1000 && currentRevenue < prevRevenue * 0.8) {
      const dropPct = Math.round((1 - currentRevenue / prevRevenue) * 100);
      const prevDollars = Math.round(prevRevenue / 100);
      const currDollars = Math.round(currentRevenue / 100);
      insights.push({
        id: `anomaly-revenue-drop-${now.toISOString().slice(0, 7)}`,
        type: 'anomaly',
        content: `Revenue down ${dropPct}% this month ($${currDollars.toLocaleString()} vs $${prevDollars.toLocaleString()} last month). Check for failed payments, plan downgrades, or increased churn.`,
        significance: Math.min(dropPct, 100),
      });
    }

    // ── Subscriber spike: new subscriptions > 30% above previous month ──

    const [{ data: currentNewSubs }, { data: prevNewSubs }] = await Promise.all([
      supabase
        .from('cached_subscriptions')
        .select('id')
        .eq('stripe_account_id', stripeAccountId)
        .gte('created', currentMonthIso)
        .in('status', ['active', 'past_due', 'trialing']),
      supabase
        .from('cached_subscriptions')
        .select('id')
        .eq('stripe_account_id', stripeAccountId)
        .gte('created', prevMonthStartIso)
        .lt('created', prevMonthEndIso)
        .in('status', ['active', 'past_due', 'trialing', 'canceled']),
    ]);

    const currentNewCount = currentNewSubs?.length || 0;
    const prevNewCount = prevNewSubs?.length || 0;

    // Only flag with meaningful baseline (at least 3 new subs last month)
    if (prevNewCount >= 3 && currentNewCount > prevNewCount * 1.3) {
      const growthPct = Math.round(((currentNewCount - prevNewCount) / prevNewCount) * 100);
      insights.push({
        id: `anomaly-subscriber-spike-${now.toISOString().slice(0, 7)}`,
        type: 'anomaly',
        content: `New subscriber surge: ${currentNewCount} new subscriptions this month, up ${growthPct}% from ${prevNewCount} last month. Consider whether your infrastructure and support capacity can handle this growth.`,
        significance: Math.min(growthPct * 0.5, 80),
      });
    }
  } catch (err) {
    // Non-fatal: log and return whatever insights we collected
    console.error('Anomaly detection error:', err);
  }

  return insights;
}

// ─── Trend Detection (Task 9.3) ─────────────────────────────────────────────────
// Look at 3-month subscription growth trend.
// Identify growth acceleration/deceleration and MRR milestone crossings.

export async function detectTrends(
  supabase: SupabaseClient,
  stripeAccountId: string,
): Promise<Insight[]> {
  const insights: Insight[] = [];

  const now = new Date();

  try {
    // ── 3-month subscription growth trend ──

    // Count new subscriptions for each of the last 3 completed months
    const monthlyCounts: number[] = [];
    for (let i = 3; i >= 1; i--) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

      const { data: subs } = await supabase
        .from('cached_subscriptions')
        .select('id')
        .eq('stripe_account_id', stripeAccountId)
        .gte('created', monthStart.toISOString())
        .lt('created', monthEnd.toISOString());

      monthlyCounts.push(subs?.length || 0);
    }

    // Check for acceleration or deceleration
    // Need at least 2 months with data for a trend
    if (monthlyCounts[0] > 0 && monthlyCounts[1] > 0 && monthlyCounts[2] > 0) {
      const growth1to2 = monthlyCounts[1] - monthlyCounts[0]; // month-over-month change (m-2 to m-1)
      const growth2to3 = monthlyCounts[2] - monthlyCounts[1]; // month-over-month change (m-1 to m-0)

      if (growth2to3 > growth1to2 && growth2to3 > 0) {
        // Growth is accelerating
        insights.push({
          id: `trend-growth-accelerating-${now.toISOString().slice(0, 7)}`,
          type: 'trend',
          content: `Growth is accelerating: new subscriptions increased from ${monthlyCounts[0]} to ${monthlyCounts[1]} to ${monthlyCounts[2]} over the last 3 months. Your acquisition momentum is building.`,
          significance: 60,
        });
      } else if (growth2to3 < growth1to2 && growth2to3 < 0) {
        // Growth is decelerating
        insights.push({
          id: `trend-growth-decelerating-${now.toISOString().slice(0, 7)}`,
          type: 'trend',
          content: `Growth is slowing: new subscriptions went from ${monthlyCounts[0]} to ${monthlyCounts[1]} to ${monthlyCounts[2]} over the last 3 months. Consider reviewing your acquisition channels.`,
          significance: 55,
        });
      }
    }

    // ── MRR milestone crossing ──

    // Get active + past_due subscriptions to estimate MRR
    const { data: activeSubs } = await supabase
      .from('cached_subscriptions')
      .select('stripe_data')
      .eq('stripe_account_id', stripeAccountId)
      .in('status', ['active', 'past_due']);

    let mrrCents = 0;
    for (const sub of activeSubs || []) {
      const stripeData = sub.stripe_data as Record<string, unknown>;
      const items =
        (stripeData.items as Record<string, unknown>)?.data as Array<
          Record<string, unknown>
        > || [];

      for (const item of items) {
        const price = item.price as Record<string, unknown> | null;
        if (!price?.recurring) continue;

        const recurring = price.recurring as Record<string, unknown>;
        const amount = (price.unit_amount as number) || 0;
        const quantity = (item.quantity as number) || 1;
        const interval = recurring.interval as string;
        const intervalCount = (recurring.interval_count as number) || 1;

        let monthly: number;
        switch (interval) {
          case 'month':
            monthly = (amount * quantity) / intervalCount;
            break;
          case 'year':
            monthly = (amount * quantity) / (12 * intervalCount);
            break;
          case 'week':
            monthly = (amount * quantity * 4.33) / intervalCount;
            break;
          case 'day':
            monthly = (amount * quantity * 30) / intervalCount;
            break;
          default:
            monthly = amount * quantity;
        }
        mrrCents += monthly;
      }
    }

    const mrrDollars = Math.round(mrrCents) / 100;

    // Check milestone crossings
    const milestones = [1000, 5000, 10000, 50000, 100000];
    for (const milestone of milestones) {
      if (mrrDollars >= milestone && mrrDollars < milestone * 1.1) {
        // Just crossed or near this milestone (within 10% above)
        const label =
          milestone >= 1000
            ? `$${(milestone / 1000).toFixed(0)}k`
            : `$${milestone}`;
        insights.push({
          id: `trend-mrr-milestone-${milestone}-${now.toISOString().slice(0, 7)}`,
          type: 'trend',
          content: `MRR milestone reached: you've crossed ${label} MRR ($${mrrDollars.toLocaleString()}). This is a significant growth marker for subscription businesses.`,
          significance: 70,
        });
        break; // Only report the most recently crossed milestone
      }
    }
  } catch (err) {
    console.error('Trend detection error:', err);
  }

  return insights;
}

// ─── Benchmarking Insights (Task 10.4) ──────────────────────────────────────────
// Check benchmarking_cache for fresh data and extract notable comparisons.

const BENCHMARK_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchBenchmarkingInsights(
  supabase: SupabaseClient,
  stripeAccountId: string,
): Promise<Insight[]> {
  const insights: Insight[] = [];

  try {
    const { data: cached } = await supabase
      .from('benchmarking_cache')
      .select('data, fetched_at')
      .eq('stripe_account_id', stripeAccountId)
      .single();

    if (!cached || !cached.fetched_at) return insights;

    // Check freshness
    const fetchedAt = new Date(cached.fetched_at).getTime();
    if (Date.now() - fetchedAt > BENCHMARK_CACHE_TTL_MS) return insights;

    const benchData = cached.data as Record<string, unknown>;
    const comparisons = benchData.comparisons as Array<Record<string, unknown>> | undefined;
    if (!Array.isArray(comparisons)) return insights;

    for (const comparison of comparisons) {
      const percentile = comparison.percentile as number;
      const label = comparison.label as string;
      const metric = comparison.metric as string;

      if (typeof percentile !== 'number' || !label) continue;

      // Flag metrics above 75th percentile (strength) or below 25th percentile (weakness)
      if (percentile >= 75) {
        insights.push({
          id: `benchmark-strong-${metric}`,
          type: 'benchmark',
          content: `Your ${label} is in the ${percentile}th percentile compared to similar businesses — a competitive strength worth maintaining.`,
          significance: Math.min(percentile * 0.6, 60),
        });
      } else if (percentile <= 25) {
        // For churn, lower is better — invert the interpretation
        const isLowerBetter = metric === 'gross_churn_rate';
        if (isLowerBetter) {
          insights.push({
            id: `benchmark-strong-${metric}`,
            type: 'benchmark',
            content: `Your ${label} is in the ${percentile}th percentile — meaning lower churn than ${100 - percentile}% of similar businesses. Great retention.`,
            significance: Math.min((100 - percentile) * 0.6, 60),
          });
        } else {
          insights.push({
            id: `benchmark-weak-${metric}`,
            type: 'benchmark',
            content: `Your ${label} is in the ${percentile}th percentile vs similar businesses. There may be room for improvement here.`,
            significance: Math.min((100 - percentile) * 0.5, 50),
          });
        }
      }
    }
  } catch (err) {
    console.error('Benchmarking insight error:', err);
  }

  return insights;
}

// ─── Orchestrator ───────────────────────────────────────────────────────────────
// Runs all detectors in parallel, deduplicates, ranks, and returns top 2.

export async function generateInsights(
  supabase: SupabaseClient,
  stripeAccountId: string,
): Promise<Insight[]> {
  const [anomalies, trends, benchmarks] = await Promise.all([
    detectAnomalies(supabase, stripeAccountId),
    detectTrends(supabase, stripeAccountId),
    fetchBenchmarkingInsights(supabase, stripeAccountId),
  ]);

  // Combine all insights
  const all = [...anomalies, ...trends, ...benchmarks];

  // Deduplicate by id
  const seen = new Set<string>();
  const unique: Insight[] = [];
  for (const insight of all) {
    if (!seen.has(insight.id)) {
      seen.add(insight.id);
      unique.push(insight);
    }
  }

  // Rank by significance (descending) and return top 2
  unique.sort((a, b) => b.significance - a.significance);

  return unique.slice(0, 2).map(({ id, type, content }) => ({ id, type, content, significance: 0 }));
}
