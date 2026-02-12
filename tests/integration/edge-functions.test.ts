// @vitest-environment node
/**
 * Integration tests for Edge Function handlers (Task 11.7).
 *
 * Tests the full request -> auth -> DB -> response flow against the deployed
 * Supabase Edge Functions. Covers auth rejection, CORS, metrics, sync status,
 * conversations list, and account data deletion.
 *
 * Run with: npm test -- tests/integration/edge-functions.test.ts
 * Set SUPABASE_FUNCTIONS_URL env var for CI, otherwise defaults to the
 * hardcoded development URL.
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
// Cleanup: delete all data created by the test account after all tests run
// ---------------------------------------------------------------------------
afterAll(async () => {
  await request('/account-data', { method: 'DELETE' });
}, TEST_TIMEOUT);

// ---------------------------------------------------------------------------
// Auth rejection
// ---------------------------------------------------------------------------
describe('Auth rejection', () => {
  const endpoints = [
    { path: '/metrics/mrr', method: 'GET' },
    { path: '/sync-status', method: 'GET' },
    { path: '/chat-conversations', method: 'GET' },
    { path: '/sync-trigger', method: 'POST' },
    { path: '/account-data', method: 'DELETE' },
  ];

  it.each(endpoints)(
    '$method $path rejects request with no stripe-signature (401)',
    async ({ path, method }) => {
      const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
      });

      expect(res.status).toBe(401);
      const body = await res.json();
      expect(body).toHaveProperty('error');
      expect(body.error).toHaveProperty('code');
      expect(body.error.code).toMatch(/missing_signature|unauthorized/);
    },
    TEST_TIMEOUT,
  );

  it.each(endpoints)(
    '$method $path rejects request with malformed stripe-signature (401)',
    async ({ path, method }) => {
      const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': '!!!not-base64!!!',
        },
      });

      expect(res.status).toBe(401);
      const body = await res.json();
      expect(body).toHaveProperty('error');
      expect(body.error.code).toMatch(/invalid_signature|unauthorized/);
    },
    TEST_TIMEOUT,
  );

  it.each(endpoints)(
    '$method $path rejects request with incomplete payload (401)',
    async ({ path, method }) => {
      const incompleteSignature = btoa(
        JSON.stringify({ account_id: 'acct_only' }),
      );
      const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': incompleteSignature,
        },
      });

      expect(res.status).toBe(401);
      const body = await res.json();
      expect(body).toHaveProperty('error');
    },
    TEST_TIMEOUT,
  );
});

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------
describe('CORS preflight', () => {
  const endpoints = [
    '/metrics/mrr',
    '/sync-status',
    '/chat-conversations',
    '/sync-trigger',
    '/account-data',
    '/chat-message',
  ];

  it.each(endpoints)(
    'OPTIONS %s returns proper CORS headers',
    async (path) => {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: 'OPTIONS',
        headers: {
          Origin: 'https://dashboard.stripe.com',
          'Access-Control-Request-Method': 'POST',
        },
      });

      expect(res.status).toBe(200);

      const headers = Object.fromEntries(res.headers.entries());
      expect(headers['access-control-allow-origin']).toBe('*');
      expect(headers['access-control-allow-methods']).toContain('GET');
      expect(headers['access-control-allow-methods']).toContain('POST');
      expect(headers['access-control-allow-methods']).toContain('DELETE');
      expect(headers['access-control-allow-headers']).toContain(
        'stripe-signature',
      );
    },
    TEST_TIMEOUT,
  );
});

// ---------------------------------------------------------------------------
// Metrics endpoint
// ---------------------------------------------------------------------------
describe('Metrics endpoint', () => {
  it('GET /metrics/mrr returns proper structure', async () => {
    const res = await request('/metrics/mrr');

    // Accept 200 (data available) or 200 with zeroed values (no synced data yet)
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('meta');

    // The MRR response should contain value, currency, and period
    const { data } = body;
    expect(data).toHaveProperty('value');
    expect(data).toHaveProperty('currency');
    expect(data).toHaveProperty('period');

    // value should be a number (may be 0 for test account)
    expect(typeof data.value).toBe('number');
    expect(typeof data.currency).toBe('string');
    expect(typeof data.period).toBe('string');
  }, TEST_TIMEOUT);

  it('GET /metrics/churn returns proper structure', async () => {
    const res = await request('/metrics/churn');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('rate');
  }, TEST_TIMEOUT);

  it('GET /metrics/arpu returns proper structure', async () => {
    const res = await request('/metrics/arpu');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('value');
    expect(body.data).toHaveProperty('activeCustomers');
    expect(body.data).toHaveProperty('mrr');

    expect(typeof body.data.value).toBe('number');
    expect(typeof body.data.activeCustomers).toBe('number');
    expect(typeof body.data.mrr).toBe('number');
  }, TEST_TIMEOUT);

  it('GET /metrics/unknown returns 404', async () => {
    const res = await request('/metrics/nonexistent');
    expect(res.status).toBe(404);

    const body = await res.json();
    expect(body).toHaveProperty('error');
    expect(body.error.code).toBe('unknown_metric');
  }, TEST_TIMEOUT);

  it('POST /metrics/mrr returns 405 (method not allowed)', async () => {
    const res = await request('/metrics/mrr', { method: 'POST' });
    expect(res.status).toBe(405);
  }, TEST_TIMEOUT);
});

// ---------------------------------------------------------------------------
// Sync status
// ---------------------------------------------------------------------------
describe('Sync status endpoint', () => {
  it('GET /sync-status returns object types array with status', async () => {
    const res = await request('/sync-status');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('overallStatus');
    expect(body.data).toHaveProperty('objectTypes');

    const { objectTypes } = body.data;
    expect(Array.isArray(objectTypes)).toBe(true);
    expect(objectTypes.length).toBeGreaterThan(0);

    // Each object type should have the expected shape
    for (const obj of objectTypes) {
      expect(obj).toHaveProperty('objectType');
      expect(obj).toHaveProperty('status');
      expect(obj).toHaveProperty('lastSyncedAt');
      expect(obj).toHaveProperty('recordsSynced');
      expect(typeof obj.objectType).toBe('string');
      expect(typeof obj.status).toBe('string');
      expect(typeof obj.recordsSynced).toBe('number');
    }

    // Verify the expected object types are present
    const typeNames = objectTypes.map(
      (o: { objectType: string }) => o.objectType,
    );
    expect(typeNames).toContain('subscriptions');
    expect(typeNames).toContain('invoices');
    expect(typeNames).toContain('customers');
    expect(typeNames).toContain('products');
    expect(typeNames).toContain('prices');
    expect(typeNames).toContain('charges');
  }, TEST_TIMEOUT);

  it('POST /sync-status returns 405', async () => {
    const res = await request('/sync-status', { method: 'POST' });
    expect(res.status).toBe(405);
  }, TEST_TIMEOUT);
});

// ---------------------------------------------------------------------------
// Conversations list
// ---------------------------------------------------------------------------
describe('Conversations list endpoint', () => {
  it('GET /chat-conversations returns conversations array', async () => {
    const res = await request('/chat-conversations');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('conversations');
    expect(body.data).toHaveProperty('pagination');

    expect(Array.isArray(body.data.conversations)).toBe(true);

    const { pagination } = body.data;
    expect(pagination).toHaveProperty('total');
    expect(pagination).toHaveProperty('limit');
    expect(pagination).toHaveProperty('offset');
    expect(pagination).toHaveProperty('hasMore');
    expect(typeof pagination.total).toBe('number');
    expect(typeof pagination.limit).toBe('number');
  }, TEST_TIMEOUT);

  it('GET /chat-conversations supports pagination params', async () => {
    const res = await request('/chat-conversations?limit=5&offset=0');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.data.pagination.limit).toBe(5);
    expect(body.data.pagination.offset).toBe(0);
  }, TEST_TIMEOUT);
});

// ---------------------------------------------------------------------------
// Account data deletion
// ---------------------------------------------------------------------------
describe('Account data deletion endpoint', () => {
  it('DELETE /account-data clears all data for account', async () => {
    const res = await request('/account-data', { method: 'DELETE' });
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('deleted');
    expect(body.data.deleted).toBe(true);
  }, TEST_TIMEOUT);

  it('GET /account-data returns 405 (method not allowed)', async () => {
    const res = await request('/account-data', { method: 'GET' });
    expect(res.status).toBe(405);
  }, TEST_TIMEOUT);
});
