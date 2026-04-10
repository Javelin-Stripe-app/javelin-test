import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── MRR ────────────────────────────────────────────────────────────────────────
// Sum active subscription amounts normalized to monthly.
// Excludes trialing, incomplete, incomplete_expired, canceled.
// Groups by currency if multiple currencies exist.

export async function calculateMRR(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  options?: { currency?: string; period?: string },
): Promise<{ value: number; currency: string; period: string; syncedAt: string }> {
  const { data: subscriptions, error } = await supabase
    .from('cached_subscriptions')
    .select('stripe_data, synced_at')
    .eq('stripe_account_id', stripeAccountId)
    .in('status', ['active', 'past_due']);

  if (error) {
    throw new Error(`Failed to query subscriptions: ${error.message}`);
  }

  let mrr = 0;
  let latestSync: string | null = null;

  for (const sub of subscriptions || []) {
    const stripeData = sub.stripe_data as Record<string, unknown>;
    const items = (stripeData.items as Record<string, unknown>)?.data as Array<Record<string, unknown>> || [];

    for (const item of items) {
      const price = item.price as Record<string, unknown> | null;
      if (!price?.recurring) continue;

      const recurring = price.recurring as Record<string, unknown>;
      const currency = (price.currency as string) || 'usd';

      // Filter by currency if specified
      if (options?.currency && currency !== options.currency) continue;

      const amount = (price.unit_amount as number) || 0;
      const quantity = (item.quantity as number) || 1;
      const interval = recurring.interval as string;
      const intervalCount = (recurring.interval_count as number) || 1;

      // Normalize to monthly
      let monthlyAmount: number;
      switch (interval) {
        case 'month':
          monthlyAmount = (amount * quantity) / intervalCount;
          break;
        case 'year':
          monthlyAmount = (amount * quantity) / (12 * intervalCount);
          break;
        case 'week':
          monthlyAmount = (amount * quantity * 4.33) / intervalCount;
          break;
        case 'day':
          monthlyAmount = (amount * quantity * 30) / intervalCount;
          break;
        default:
          monthlyAmount = amount * quantity;
      }
      mrr += monthlyAmount;
    }

    if (!latestSync || sub.synced_at > latestSync) {
      latestSync = sub.synced_at;
    }
  }

  return {
    value: Math.round(mrr) / 100, // Convert from cents to dollars
    currency: options?.currency || 'usd',
    period: options?.period || new Date().toISOString().slice(0, 7),
    syncedAt: latestSync || new Date().toISOString(),
  };
}

// ─── Churn Rate ─────────────────────────────────────────────────────────────────
// Gross churn: (canceled in period) / (active at period start) * 100
// Net churn: ((canceled - new) in period) / (active at period start) * 100

export async function calculateChurnRate(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  options?: { period?: string; type?: 'gross' | 'net' },
): Promise<{ rate: number; canceled: number; total: number; period: string; syncedAt: string }> {
  const period = options?.period || new Date().toISOString().slice(0, 7);
  const churnType = options?.type || 'gross';

  // Parse period into date range
  const periodStart = new Date(`${period}-01T00:00:00.000Z`);
  const periodEnd = new Date(periodStart);
  periodEnd.setMonth(periodEnd.getMonth() + 1);

  const periodStartIso = periodStart.toISOString();
  const periodEndIso = periodEnd.toISOString();

  // Count subscriptions canceled during the period
  const { data: canceledSubs, error: cancelError } = await supabase
    .from('cached_subscriptions')
    .select('id, synced_at')
    .eq('stripe_account_id', stripeAccountId)
    .eq('status', 'canceled')
    .gte('canceled_at', periodStartIso)
    .lt('canceled_at', periodEndIso);

  if (cancelError) {
    throw new Error(`Failed to query canceled subscriptions: ${cancelError.message}`);
  }

  const canceledCount = canceledSubs?.length || 0;

  // Count subscriptions that were active at the start of the period
  // These are subscriptions created before period start that are either:
  // - still active/past_due, OR
  // - canceled after the period start
  const { data: activeAtStart, error: activeError } = await supabase
    .from('cached_subscriptions')
    .select('id, synced_at')
    .eq('stripe_account_id', stripeAccountId)
    .lt('created', periodStartIso)
    .or(`status.in.(active,past_due),and(status.eq.canceled,canceled_at.gte.${periodStartIso})`);

  if (activeError) {
    throw new Error(`Failed to query active subscriptions: ${activeError.message}`);
  }

  const totalAtStart = activeAtStart?.length || 0;

  let rate: number;
  if (totalAtStart === 0) {
    rate = 0;
  } else if (churnType === 'net') {
    // For net churn, subtract new subscriptions gained in the period
    const { data: newSubs, error: newError } = await supabase
      .from('cached_subscriptions')
      .select('id')
      .eq('stripe_account_id', stripeAccountId)
      .gte('created', periodStartIso)
      .lt('created', periodEndIso)
      .in('status', ['active', 'past_due', 'trialing']);

    if (newError) {
      throw new Error(`Failed to query new subscriptions: ${newError.message}`);
    }

    const newCount = newSubs?.length || 0;
    rate = ((canceledCount - newCount) / totalAtStart) * 100;
  } else {
    rate = (canceledCount / totalAtStart) * 100;
  }

  // Find latest sync timestamp from queried data
  const allSubs = [...(canceledSubs || []), ...(activeAtStart || [])];
  let latestSync: string | null = null;
  for (const sub of allSubs) {
    if (!latestSync || sub.synced_at > latestSync) {
      latestSync = sub.synced_at;
    }
  }

  return {
    rate: Math.round(rate * 100) / 100, // Round to 2 decimal places
    canceled: canceledCount,
    total: totalAtStart,
    period,
    syncedAt: latestSync || new Date().toISOString(),
  };
}

// ─── ARPU ───────────────────────────────────────────────────────────────────────
// Average Revenue Per User: MRR / unique active customers

export async function calculateARPU(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  options?: { currency?: string },
): Promise<{ value: number; activeCustomers: number; mrr: number; syncedAt: string }> {
  // Calculate current MRR
  const mrrResult = await calculateMRR(supabase, stripeAccountId, { currency: options?.currency });

  // Count unique active customers (customers with active/past_due subscriptions)
  const { data: activeCustomerRows, error: customerError } = await supabase
    .from('cached_subscriptions')
    .select('customer_id')
    .eq('stripe_account_id', stripeAccountId)
    .in('status', ['active', 'past_due']);

  if (customerError) {
    throw new Error(`Failed to query active customers: ${customerError.message}`);
  }

  // Deduplicate customer IDs
  const uniqueCustomerIds = new Set<string>();
  for (const row of activeCustomerRows || []) {
    if (row.customer_id) {
      uniqueCustomerIds.add(row.customer_id as string);
    }
  }

  const activeCustomers = uniqueCustomerIds.size;
  const arpu = activeCustomers > 0 ? mrrResult.value / activeCustomers : 0;

  return {
    value: Math.round(arpu * 100) / 100, // Round to 2 decimal places
    activeCustomers,
    mrr: mrrResult.value,
    syncedAt: mrrResult.syncedAt,
  };
}

// ─── LTV ────────────────────────────────────────────────────────────────────────
// Customer Lifetime Value: ARPU / monthly churn rate
// If churn is 0, LTV is null (infinite/undefined)

export async function calculateLTV(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  options?: { currency?: string },
): Promise<{ value: number | null; arpu: number; churnRate: number; syncedAt: string }> {
  // Calculate ARPU
  const arpuResult = await calculateARPU(supabase, stripeAccountId, { currency: options?.currency });

  // Calculate current month's churn rate
  const churnResult = await calculateChurnRate(supabase, stripeAccountId, { type: 'gross' });

  // LTV = ARPU / (churn rate as decimal)
  // If churn rate is 0, LTV is theoretically infinite
  let ltv: number | null;
  if (churnResult.rate === 0) {
    ltv = null; // Infinite LTV - no churn
  } else {
    const monthlyChurnDecimal = churnResult.rate / 100;
    ltv = Math.round((arpuResult.value / monthlyChurnDecimal) * 100) / 100;
  }

  // Use the more recent sync timestamp
  const syncedAt = arpuResult.syncedAt > churnResult.syncedAt
    ? arpuResult.syncedAt
    : churnResult.syncedAt;

  return {
    value: ltv,
    arpu: arpuResult.value,
    churnRate: churnResult.rate,
    syncedAt,
  };
}

// ─── Revenue Breakdown ──────────────────────────────────────────────────────────
// Aggregate from paid invoices grouped by product, price, or customer

export async function calculateRevenueBreakdown(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  options: { groupBy: string; startDate?: string; endDate?: string },
): Promise<{
  segments: Array<{ id: string; name: string; revenue: number; percentage: number }>;
  totalRevenue: number;
  syncedAt: string;
}> {
  // Build query for paid invoices
  let query = supabase
    .from('cached_invoices')
    .select('stripe_data, synced_at')
    .eq('stripe_account_id', stripeAccountId)
    .eq('status', 'paid');

  // Apply date filters
  if (options.startDate) {
    query = query.gte('created', new Date(options.startDate).toISOString());
  }
  if (options.endDate) {
    query = query.lte('created', new Date(options.endDate).toISOString());
  }

  const { data: invoices, error } = await query;

  if (error) {
    throw new Error(`Failed to query invoices: ${error.message}`);
  }

  // Aggregate revenue by the specified grouping
  const revenueMap = new Map<string, { name: string; revenue: number }>();
  let totalRevenue = 0;
  let latestSync: string | null = null;

  for (const invoice of invoices || []) {
    const stripeData = invoice.stripe_data as Record<string, unknown>;
    const amountPaid = (stripeData.amount_paid as number) || 0;

    if (!latestSync || invoice.synced_at > latestSync) {
      latestSync = invoice.synced_at;
    }

    // Process line items for product/price grouping
    const lines = (stripeData.lines as Record<string, unknown>)?.data as Array<Record<string, unknown>> || [];

    if (options.groupBy === 'customer') {
      // Group by customer
      const customerId = (stripeData.customer as string) || 'unknown';
      const customerName = (stripeData.customer_name as string) || (stripeData.customer_email as string) || customerId;
      const existing = revenueMap.get(customerId);
      if (existing) {
        existing.revenue += amountPaid;
      } else {
        revenueMap.set(customerId, { name: customerName, revenue: amountPaid });
      }
      totalRevenue += amountPaid;
    } else {
      // Group by product or price from line items
      for (const line of lines) {
        const lineAmount = (line.amount as number) || 0;
        const price = line.price as Record<string, unknown> | null;

        let groupId: string;
        let groupName: string;

        if (options.groupBy === 'price') {
          groupId = (price?.id as string) || 'unknown';
          groupName = (price?.nickname as string) || groupId;
        } else {
          // Default: group by product
          groupId = (price?.product as string) || (line.product as string) || 'unknown';
          // We use the product ID as name; enrichment with product names would require a join
          const description = (line.description as string) || '';
          groupName = description || groupId;
        }

        const existing = revenueMap.get(groupId);
        if (existing) {
          existing.revenue += lineAmount;
        } else {
          revenueMap.set(groupId, { name: groupName, revenue: lineAmount });
        }
        totalRevenue += lineAmount;
      }
    }
  }

  // Build sorted segments with percentage
  const segments = Array.from(revenueMap.entries())
    .map(([id, { name, revenue }]) => ({
      id,
      name,
      revenue: Math.round(revenue) / 100, // Convert cents to dollars
      percentage: totalRevenue > 0 ? Math.round((revenue / totalRevenue) * 10000) / 100 : 0,
    }))
    .sort((a, b) => b.revenue - a.revenue);

  return {
    segments,
    totalRevenue: Math.round(totalRevenue) / 100, // Convert cents to dollars
    syncedAt: latestSync || new Date().toISOString(),
  };
}
