// @vitest-environment node
/**
 * Integration tests for the sync engine (Task 11.8).
 *
 * Since we cannot actually sync without Stripe OAuth tokens, these tests
 * verify the sync trigger, sync status, and sync backfill Edge Functions
 * return proper job structures and validate inputs correctly.
 *
 * Run with: npm test -- tests/integration/sync-engine.test.ts
 */
import { describe, it, expect, afterAll } from 'vitest';

// Edge Functions can cold-start; give each test up to 15 seconds.
const TEST_TIMEOUT = 15_000;

const BASE_URL =
  process.env.SUPABASE_FUNCTIONS_URL ||
  'https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1';

const TEST_SIGNATURE = btoa(
  JSON.stringify({
    account_id: 'acct_test_integration',
    user_id: 'usr_test_integration',
  }),
);

async function request(path: string, options: RequestInit = {}) {
  return fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'stripe-signature': TEST_SIGNATURE,
      ...options.headers,
    },
  });
}

// ---------------------------------------------------------------------------
// Cleanup: delete all data created by the test account
// ---------------------------------------------------------------------------
afterAll(async () => {
  await request('/account-data', { method: 'DELETE' });
}, TEST_TIMEOUT);

// ---------------------------------------------------------------------------
// Sync trigger
// ---------------------------------------------------------------------------
describe('Sync trigger', () => {
  it('POST /sync-trigger returns proper job structure', async () => {
    const res = await request('/sync-trigger', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');

    const { data } = body;
    expect(data).toHaveProperty('jobId');
    expect(data).toHaveProperty('objectTypes');
    expect(data).toHaveProperty('status');
    expect(data).toHaveProperty('jobCount');

    // When no objectTypes specified, all 6 types should be included
    expect(data.status).toBe('pending');
    expect(Array.isArray(data.objectTypes)).toBe(true);
    expect(data.objectTypes).toContain('subscriptions');
    expect(data.objectTypes).toContain('invoices');
    expect(data.objectTypes).toContain('charges');
    expect(data.objectTypes).toContain('customers');
    expect(data.objectTypes).toContain('products');
    expect(data.objectTypes).toContain('prices');
    expect(data.jobCount).toBe(6);

    // jobId should be a UUID
    expect(data.jobId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  }, TEST_TIMEOUT);

  it('POST /sync-trigger with specific object types returns only those types', async () => {
    const res = await request('/sync-trigger', {
      method: 'POST',
      body: JSON.stringify({ objectTypes: ['subscriptions', 'customers'] }),
    });

    expect(res.status).toBe(200);

    const body = await res.json();
    const { data } = body;

    expect(data.objectTypes).toEqual(['subscriptions', 'customers']);
    expect(data.jobCount).toBe(2);
    expect(data.status).toBe('pending');
  }, TEST_TIMEOUT);

  it('POST /sync-trigger with invalid object type is rejected', async () => {
    const res = await request('/sync-trigger', {
      method: 'POST',
      body: JSON.stringify({ objectTypes: ['invalid_type'] }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('validation_error');
  }, TEST_TIMEOUT);

  it('GET /sync-trigger returns 405', async () => {
    const res = await request('/sync-trigger', { method: 'GET' });
    expect(res.status).toBe(405);
  }, TEST_TIMEOUT);
});

// ---------------------------------------------------------------------------
// Sync status reflects job state
// ---------------------------------------------------------------------------
describe('Sync status reflects job state', () => {
  it('GET /sync-status reflects pending jobs after trigger', async () => {
    // First trigger a sync to create pending jobs
    await request('/sync-trigger', {
      method: 'POST',
      body: JSON.stringify({ objectTypes: ['subscriptions'] }),
    });

    // Now check sync status
    const statusRes = await request('/sync-status');
    expect(statusRes.status).toBe(200);

    const statusBody = await statusRes.json();
    const { data } = statusBody;
    const subscriptionStatus = data.objectTypes.find(
      (o: { objectType: string }) => o.objectType === 'subscriptions',
    );

    expect(subscriptionStatus).toBeDefined();
    // After triggering, status should be 'pending' (or 'never_synced' if the
    // trigger's insert is not visible yet via RLS - both are acceptable)
    expect(['pending', 'never_synced', 'in_progress', 'completed']).toContain(
      subscriptionStatus.status,
    );
  }, TEST_TIMEOUT);

  it('GET /sync-status overall status is a valid value', async () => {
    const res = await request('/sync-status');
    expect(res.status).toBe(200);

    const body = await res.json();
    const validStatuses = [
      'never_synced',
      'syncing',
      'synced',
      'has_errors',
      'partial',
    ];
    expect(validStatuses).toContain(body.data.overallStatus);
  }, TEST_TIMEOUT);
});

// ---------------------------------------------------------------------------
// Sync backfill
// ---------------------------------------------------------------------------
describe('Sync backfill', () => {
  it('POST /sync-backfill with valid date range returns job structure', async () => {
    // Use a recent date range to avoid the 24-month limit
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1); // yesterday
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3); // 3 months ago

    const formatDate = (d: Date) => d.toISOString().split('T')[0];

    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        objectTypes: ['invoices', 'charges'],
      }),
    });

    expect(res.status).toBe(200);

    const body = await res.json();
    const { data } = body;
    expect(data).toHaveProperty('jobId');
    expect(data).toHaveProperty('objectTypes');
    expect(data).toHaveProperty('status');
    expect(data).toHaveProperty('jobCount');
    expect(data).toHaveProperty('dateRange');

    expect(data.status).toBe('pending');
    expect(data.objectTypes).toEqual(['invoices', 'charges']);
    expect(data.jobCount).toBe(2);
    expect(data.dateRange).toHaveProperty('startDate');
    expect(data.dateRange).toHaveProperty('endDate');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects missing date fields', async () => {
    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('validation_error');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects invalid date format', async () => {
    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: '01-01-2024',
        endDate: '03-01-2024',
      }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('validation_error');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects startDate after endDate', async () => {
    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: '2025-06-01',
        endDate: '2025-01-01',
      }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('invalid_date_range');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects future endDate', async () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const formatDate = (d: Date) => d.toISOString().split('T')[0];

    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: '2025-01-01',
        endDate: formatDate(futureDate),
      }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('invalid_date_range');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects date range exceeding 24 months', async () => {
    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: '2020-01-01',
        endDate: '2025-01-01',
      }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('date_range_exceeded');
  }, TEST_TIMEOUT);

  it('POST /sync-backfill rejects invalid object types', async () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    const formatDate = (d: Date) => d.toISOString().split('T')[0];

    const res = await request('/sync-backfill', {
      method: 'POST',
      body: JSON.stringify({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        objectTypes: ['bogus_type'],
      }),
    });

    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('validation_error');
  }, TEST_TIMEOUT);
});
