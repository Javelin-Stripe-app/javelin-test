// Sync engine that paginates through Stripe API objects
// Self-limits to 10 req/sec, handles 429 with exponential backoff
// Uses cursor-based pagination with 100-item pages
// Upserts into cache tables

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const STRIPE_API_BASE = 'https://api.stripe.com';
const PAGE_SIZE = 100;
const MAX_REQUESTS_PER_SECOND = 10;
const REQUEST_INTERVAL_MS = 1000 / MAX_REQUESTS_PER_SECOND; // 100ms between requests
const MAX_RETRIES = 5;
const INITIAL_BACKOFF_MS = 1000;

export const OBJECT_TYPE_CONFIG: Record<string, { stripeEndpoint: string; tableName: string }> = {
  subscriptions: { stripeEndpoint: '/v1/subscriptions', tableName: 'cached_subscriptions' },
  invoices: { stripeEndpoint: '/v1/invoices', tableName: 'cached_invoices' },
  charges: { stripeEndpoint: '/v1/charges', tableName: 'cached_charges' },
  customers: { stripeEndpoint: '/v1/customers', tableName: 'cached_customers' },
  products: { stripeEndpoint: '/v1/products', tableName: 'cached_products' },
  prices: { stripeEndpoint: '/v1/prices', tableName: 'cached_prices' },
};

interface SyncOptions {
  startDate?: string;
  endDate?: string;
  cursor?: string;
}

interface SyncResult {
  synced: number;
  cursor?: string;
}

/**
 * Extract indexed columns from a Stripe object for the cache table.
 * Each object type has specific columns that are indexed for query performance.
 */
export function extractIndexedColumns(
  stripeObject: Record<string, unknown>,
  objectType: string,
  stripeAccountId: string,
): Record<string, unknown> {
  const base = {
    id: stripeObject.id as string,
    stripe_account_id: stripeAccountId,
    stripe_data: stripeObject,
    synced_at: new Date().toISOString(),
  };

  switch (objectType) {
    case 'subscriptions':
      return {
        ...base,
        status: stripeObject.status,
        customer_id: stripeObject.customer,
        current_period_start: stripeObject.current_period_start
          ? new Date((stripeObject.current_period_start as number) * 1000).toISOString()
          : null,
        current_period_end: stripeObject.current_period_end
          ? new Date((stripeObject.current_period_end as number) * 1000).toISOString()
          : null,
        canceled_at: stripeObject.canceled_at
          ? new Date((stripeObject.canceled_at as number) * 1000).toISOString()
          : null,
        created: stripeObject.created
          ? new Date((stripeObject.created as number) * 1000).toISOString()
          : null,
      };

    case 'invoices':
      return {
        ...base,
        status: stripeObject.status,
        customer_id: stripeObject.customer,
        subscription_id: stripeObject.subscription,
        amount_due: stripeObject.amount_due,
        amount_paid: stripeObject.amount_paid,
        currency: stripeObject.currency,
        created: stripeObject.created
          ? new Date((stripeObject.created as number) * 1000).toISOString()
          : null,
      };

    case 'charges':
      return {
        ...base,
        status: stripeObject.status,
        customer_id: stripeObject.customer,
        amount: stripeObject.amount,
        currency: stripeObject.currency,
        created: stripeObject.created
          ? new Date((stripeObject.created as number) * 1000).toISOString()
          : null,
      };

    case 'customers':
      return {
        ...base,
        email: stripeObject.email,
        name: stripeObject.name,
        created: stripeObject.created
          ? new Date((stripeObject.created as number) * 1000).toISOString()
          : null,
      };

    case 'products':
      return {
        ...base,
        name: stripeObject.name,
        active: stripeObject.active,
        created: stripeObject.created
          ? new Date((stripeObject.created as number) * 1000).toISOString()
          : null,
      };

    case 'prices':
      return {
        ...base,
        product_id: stripeObject.product,
        active: stripeObject.active,
        currency: stripeObject.currency,
        unit_amount: stripeObject.unit_amount,
        recurring_interval: (stripeObject.recurring as Record<string, unknown> | null)?.interval || null,
        recurring_interval_count:
          (stripeObject.recurring as Record<string, unknown> | null)?.interval_count || null,
      };

    default:
      return base;
  }
}

/**
 * Rate-limited delay to stay within 10 req/sec
 */
async function rateLimitDelay(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, REQUEST_INTERVAL_MS));
}

/**
 * Fetch a single page from the Stripe API with retry and backoff for 429s.
 */
async function fetchStripePage(
  endpoint: string,
  stripeAccessToken: string,
  params: URLSearchParams,
): Promise<{ data: Record<string, unknown>[]; has_more: boolean }> {
  let retries = 0;
  let backoffMs = INITIAL_BACKOFF_MS;

  while (retries <= MAX_RETRIES) {
    await rateLimitDelay();

    const url = `${STRIPE_API_BASE}${endpoint}?${params.toString()}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${stripeAccessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      const body = await response.json();
      return { data: body.data || [], has_more: body.has_more || false };
    }

    if (response.status === 429) {
      // Rate limited — exponential backoff
      const retryAfter = response.headers.get('Retry-After');
      const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : backoffMs;

      console.warn(
        `Stripe API rate limited on ${endpoint}. Retry ${retries + 1}/${MAX_RETRIES}. Waiting ${waitMs}ms.`,
      );

      await new Promise((resolve) => setTimeout(resolve, waitMs));
      backoffMs *= 2; // Exponential backoff
      retries++;
      continue;
    }

    // Non-retryable error
    const errorBody = await response.text();
    throw new Error(
      `Stripe API error on ${endpoint}: ${response.status} - ${errorBody}`,
    );
  }

  throw new Error(`Stripe API rate limit exceeded after ${MAX_RETRIES} retries on ${endpoint}`);
}

/**
 * Sync a single object type from Stripe into the cache table.
 * Paginates through all objects, upserting each page into Supabase.
 */
export async function syncObjectType(
  supabase: ReturnType<typeof createClient>,
  stripeAccessToken: string,
  stripeAccountId: string,
  objectType: string,
  options?: SyncOptions,
): Promise<SyncResult> {
  const config = OBJECT_TYPE_CONFIG[objectType];
  if (!config) {
    throw new Error(`Unknown object type: ${objectType}`);
  }

  let totalSynced = 0;
  let cursor = options?.cursor || undefined;
  let hasMore = true;

  while (hasMore) {
    // Build query params
    const params = new URLSearchParams();
    params.set('limit', PAGE_SIZE.toString());

    if (cursor) {
      params.set('starting_after', cursor);
    }

    // Apply date filters using Stripe's created[gte] / created[lte] parameters
    if (options?.startDate) {
      const startTimestamp = Math.floor(new Date(options.startDate).getTime() / 1000);
      params.set('created[gte]', startTimestamp.toString());
    }
    if (options?.endDate) {
      const endTimestamp = Math.floor(new Date(options.endDate).getTime() / 1000);
      params.set('created[lte]', endTimestamp.toString());
    }

    // Fetch a page from Stripe
    const page = await fetchStripePage(config.stripeEndpoint, stripeAccessToken, params);

    if (page.data.length === 0) {
      break;
    }

    // Transform objects into cache table rows
    const rows = page.data.map((obj) => extractIndexedColumns(obj, objectType, stripeAccountId));

    // Upsert into the cache table
    const { error: upsertError } = await supabase
      .from(config.tableName)
      .upsert(rows, { onConflict: 'id, stripe_account_id' });

    if (upsertError) {
      throw new Error(`Failed to upsert into ${config.tableName}: ${upsertError.message}`);
    }

    totalSynced += page.data.length;

    // Update cursor for next page
    const lastObject = page.data[page.data.length - 1];
    cursor = lastObject.id as string;
    hasMore = page.has_more;
  }

  return {
    synced: totalSynced,
    cursor,
  };
}

/**
 * Run a full sync job: update job status, sync objects, and finalize.
 */
export async function runSyncJob(
  supabase: ReturnType<typeof createClient>,
  stripeAccessToken: string,
  stripeAccountId: string,
  jobId: string,
  objectType: string,
  options?: SyncOptions,
): Promise<void> {
  // Mark job as in_progress
  await supabase
    .from('sync_jobs')
    .update({ status: 'in_progress', started_at: new Date().toISOString() })
    .eq('id', jobId);

  try {
    const result = await syncObjectType(supabase, stripeAccessToken, stripeAccountId, objectType, options);

    // Mark job as completed
    await supabase
      .from('sync_jobs')
      .update({
        status: 'completed',
        records_synced: result.synced,
        last_cursor: result.cursor || null,
        completed_at: new Date().toISOString(),
      })
      .eq('id', jobId);
  } catch (error) {
    // Mark job as failed
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Sync job ${jobId} failed for ${objectType}:`, errMsg);

    await supabase
      .from('sync_jobs')
      .update({
        status: 'failed',
        error_message: errMsg,
        completed_at: new Date().toISOString(),
      })
      .eq('id', jobId);
  }
}
