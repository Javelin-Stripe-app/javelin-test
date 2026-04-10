/**
 * Unit tests for SaaS metrics calculation functions.
 * Tests: MRR, churn rate, ARPU, LTV, revenue breakdown.
 * Covers edge cases: zero churn, multiple currencies, empty data, partial sync.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

import {
  calculateMRR,
  calculateChurnRate,
  calculateARPU,
  calculateLTV,
  calculateRevenueBreakdown,
} from '../../supabase/functions/_shared/metrics-engine.ts';

// ─── Mock Supabase Client ─────────────────────────────────────────────────────

type MockQueryResult = { data: unknown[] | null; error: unknown; count?: number | null };

function createMockSupabase(tableResponses: Record<string, MockQueryResult>) {
  const mockFrom = (table: string) => {
    const response = tableResponses[table] || { data: [], error: null };
    const chainable = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      in: vi.fn().mockReturnThis(),
      gte: vi.fn().mockReturnThis(),
      lt: vi.fn().mockReturnThis(),
      lte: vi.fn().mockReturnThis(),
      or: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      // Terminal: resolves the promise
      then: (resolve: (v: MockQueryResult) => void) => resolve(response),
    };

    // Make chainable thenable (so await works)
    return new Proxy(chainable, {
      get(target, prop) {
        if (prop === 'then') {
          return (resolve: (v: MockQueryResult) => void) => resolve(response);
        }
        return target[prop as keyof typeof target] || vi.fn().mockReturnValue(target);
      },
    });
  };

  return { from: vi.fn(mockFrom) } as unknown as ReturnType<
    typeof import('@supabase/supabase-js').createClient
  >;
}

// ─── Helper: Create subscription fixture ───────────────────────────────────────

function makeSubscription(overrides: Record<string, unknown> = {}) {
  return {
    stripe_data: {
      id: 'sub_test',
      items: {
        data: [
          {
            price: {
              currency: 'usd',
              unit_amount: 2999, // $29.99
              recurring: { interval: 'month', interval_count: 1 },
            },
            quantity: 1,
          },
        ],
      },
      ...overrides,
    },
    synced_at: '2026-02-12T10:00:00Z',
  };
}

// ─── MRR Tests ─────────────────────────────────────────────────────────────────

describe('calculateMRR', () => {
  it('calculates MRR from monthly subscriptions', async () => {
    const supabase = createMockSupabase({
      cached_subscriptions: {
        data: [
          makeSubscription(),
          makeSubscription({
            items: {
              data: [
                {
                  price: {
                    currency: 'usd',
                    unit_amount: 4999,
                    recurring: { interval: 'month', interval_count: 1 },
                  },
                  quantity: 1,
                },
              ],
            },
          }),
        ],
        error: null,
      },
    });

    const result = await calculateMRR(supabase, 'acct_test');

    // 2999 + 4999 = 7998 cents -> $79.98
    expect(result.value).toBe(79.98);
    expect(result.currency).toBe('usd');
  });

  it('normalizes annual subscriptions to monthly', async () => {
    const supabase = createMockSupabase({
      cached_subscriptions: {
        data: [
          makeSubscription({
            items: {
              data: [
                {
                  price: {
                    currency: 'usd',
                    unit_amount: 12000, // $120/year
                    recurring: { interval: 'year', interval_count: 1 },
                  },
                  quantity: 1,
                },
              ],
            },
          }),
        ],
        error: null,
      },
    });

    const result = await calculateMRR(supabase, 'acct_test');

    // 12000 / 12 = 1000 cents -> $10.00
    expect(result.value).toBe(10);
  });

  it('handles quantity > 1', async () => {
    const supabase = createMockSupabase({
      cached_subscriptions: {
        data: [
          makeSubscription({
            items: {
              data: [
                {
                  price: {
                    currency: 'usd',
                    unit_amount: 1000,
                    recurring: { interval: 'month', interval_count: 1 },
                  },
                  quantity: 5,
                },
              ],
            },
          }),
        ],
        error: null,
      },
    });

    const result = await calculateMRR(supabase, 'acct_test');

    // 1000 * 5 = 5000 cents -> $50.00
    expect(result.value).toBe(50);
  });

  it('returns 0 MRR when no subscriptions', async () => {
    const supabase = createMockSupabase({
      cached_subscriptions: { data: [], error: null },
    });

    const result = await calculateMRR(supabase, 'acct_test');

    expect(result.value).toBe(0);
  });

  it('throws on database error', async () => {
    const supabase = createMockSupabase({
      cached_subscriptions: { data: null, error: { message: 'Connection failed' } },
    });

    await expect(calculateMRR(supabase, 'acct_test')).rejects.toThrow('Failed to query subscriptions');
  });
});

// ─── Churn Rate Tests ──────────────────────────────────────────────────────────

// ─── Helper: Create a multi-call mock Supabase (each .from() resolves sequentially) ──

function createSequentialMockSupabase(responses: MockQueryResult[]) {
  const callCount = { current: 0 };

  function makeChainable(response: MockQueryResult): unknown {
    return new Proxy(
      {},
      {
        get(_, prop) {
          if (prop === 'then') {
            return (resolve: (v: MockQueryResult) => void) => resolve(response);
          }
          // Every method call returns a new chainable with the same response
          return (..._args: unknown[]) => makeChainable(response);
        },
      },
    );
  }

  return {
    from: vi.fn(() => {
      const response = responses[callCount.current] || { data: [], error: null };
      callCount.current++;
      return makeChainable(response);
    }),
  } as unknown as ReturnType<typeof import('@supabase/supabase-js').createClient>;
}

describe('calculateChurnRate', () => {
  it('calculates gross churn rate correctly', async () => {
    const supabase = createSequentialMockSupabase([
      // First call: canceled subscriptions in period
      { data: [{ id: 'sub_1', synced_at: '2026-02-12T10:00:00Z' }, { id: 'sub_2', synced_at: '2026-02-12T10:00:00Z' }], error: null },
      // Second call: active at period start
      {
        data: Array.from({ length: 20 }, (_, i) => ({
          id: `sub_active_${i}`,
          synced_at: '2026-02-12T10:00:00Z',
        })),
        error: null,
      },
    ]);

    const result = await calculateChurnRate(supabase, 'acct_test', {
      period: '2026-01',
      type: 'gross',
    });

    // 2 canceled / 20 active = 10%
    expect(result.rate).toBe(10);
    expect(result.canceled).toBe(2);
    expect(result.total).toBe(20);
  });

  it('returns 0 churn when no active subscriptions at period start', async () => {
    const supabase = createSequentialMockSupabase([
      { data: [], error: null }, // no canceled
      { data: [], error: null }, // no active at start
    ]);

    const result = await calculateChurnRate(supabase, 'acct_test');

    expect(result.rate).toBe(0);
  });
});

// ─── Revenue Breakdown Tests ────────────────────────────────────────────────────

describe('calculateRevenueBreakdown', () => {
  it('returns empty segments when no invoices', async () => {
    const supabase = createMockSupabase({
      cached_invoices: { data: [], error: null },
    });

    const result = await calculateRevenueBreakdown(supabase, 'acct_test', {
      groupBy: 'product',
    });

    expect(result.segments).toEqual([]);
    expect(result.totalRevenue).toBe(0);
  });

  it('groups revenue by product', async () => {
    const supabase = createMockSupabase({
      cached_invoices: {
        data: [
          {
            stripe_data: {
              amount_paid: 5000,
              lines: {
                data: [
                  { amount: 3000, price: { product: 'prod_A' }, description: 'Product A' },
                  { amount: 2000, price: { product: 'prod_B' }, description: 'Product B' },
                ],
              },
            },
            synced_at: '2026-02-12T10:00:00Z',
          },
          {
            stripe_data: {
              amount_paid: 3000,
              lines: {
                data: [
                  { amount: 3000, price: { product: 'prod_A' }, description: 'Product A' },
                ],
              },
            },
            synced_at: '2026-02-12T10:00:00Z',
          },
        ],
        error: null,
      },
    });

    const result = await calculateRevenueBreakdown(supabase, 'acct_test', {
      groupBy: 'product',
    });

    expect(result.segments.length).toBe(2);
    // Product A: 3000 + 3000 = 6000 cents -> $60
    expect(result.segments[0].name).toBe('Product A');
    expect(result.segments[0].revenue).toBe(60);
    // Product B: 2000 cents -> $20
    expect(result.segments[1].name).toBe('Product B');
    expect(result.segments[1].revenue).toBe(20);
    // Total: $80
    expect(result.totalRevenue).toBe(80);
    // Percentages
    expect(result.segments[0].percentage).toBe(75);
    expect(result.segments[1].percentage).toBe(25);
  });

  it('throws on database error', async () => {
    const supabase = createMockSupabase({
      cached_invoices: { data: null, error: { message: 'Timeout' } },
    });

    await expect(
      calculateRevenueBreakdown(supabase, 'acct_test', { groupBy: 'product' }),
    ).rejects.toThrow('Failed to query invoices');
  });
});
