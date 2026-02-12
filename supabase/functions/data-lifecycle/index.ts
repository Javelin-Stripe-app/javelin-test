import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

/**
 * Cache tables to purge rows not synced in 60 days.
 * Maps table name to the object_type used in sync_jobs.
 */
const CACHE_TABLES: Record<string, string> = {
  cached_subscriptions: 'subscriptions',
  cached_invoices: 'invoices',
  cached_charges: 'charges',
  cached_customers: 'customers',
  cached_products: 'products',
  cached_prices: 'prices',
};

const CACHE_INACTIVITY_DAYS = 60;
const SYNC_JOB_RETENTION_DAYS = 30;
const AUDIT_LOG_RETENTION_DAYS = 90;

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    // Authenticate: this is a system-level cron job, not a user request.
    // Verify the request carries the service role key as a Bearer token.
    const authHeader = req.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`) {
      return errorResponse('unauthorized', 'Invalid or missing authorization', requestId, 401);
    }

    // Service role client bypasses RLS for cross-account operations
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - CACHE_INACTIVITY_DAYS);
    const cutoffIso = cutoffDate.toISOString();

    const syncJobCutoff = new Date();
    syncJobCutoff.setDate(syncJobCutoff.getDate() - SYNC_JOB_RETENTION_DAYS);
    const syncJobCutoffIso = syncJobCutoff.toISOString();

    const deletedCounts: Record<string, number> = {};
    const errors: string[] = [];

    // --- Purge stale cached data ---
    for (const [table, objectType] of Object.entries(CACHE_TABLES)) {
      try {
        // Find accounts that have active (pending/in_progress) sync jobs for this object type.
        // We skip purging rows belonging to those accounts to avoid deleting data
        // that is actively being refreshed.
        const { data: activeJobs } = await supabase
          .from('sync_jobs')
          .select('stripe_account_id')
          .eq('object_type', objectType)
          .in('status', ['pending', 'in_progress']);

        const activeAccountIds = [
          ...new Set((activeJobs || []).map((j: { stripe_account_id: string }) => j.stripe_account_id)),
        ];

        // Delete rows where synced_at is older than 60 days,
        // excluding accounts with active sync jobs for this object type.
        let query = supabase
          .from(table)
          .delete({ count: 'exact' })
          .lt('synced_at', cutoffIso);

        if (activeAccountIds.length > 0) {
          // Supabase JS .not().in() filters out accounts with active sync jobs
          for (const accountId of activeAccountIds) {
            query = query.neq('stripe_account_id', accountId);
          }
        }

        const { count, error } = await query;

        if (error) {
          console.error(`Purge error for ${table}:`, requestId, error.code);
          errors.push(`${table}: ${error.message}`);
          deletedCounts[table] = 0;
        } else {
          deletedCounts[table] = count ?? 0;
        }
      } catch (err) {
        console.error(`Unexpected error purging ${table}:`, requestId);
        errors.push(`${table}: unexpected error`);
        deletedCounts[table] = 0;
      }
    }

    // --- Clean up old completed/failed sync jobs ---
    let syncJobsDeleted = 0;
    try {
      const { count, error } = await supabase
        .from('sync_jobs')
        .delete({ count: 'exact' })
        .in('status', ['completed', 'failed'])
        .lt('created_at', syncJobCutoffIso);

      if (error) {
        console.error('Sync job cleanup error:', requestId, error.code);
        errors.push(`sync_jobs: ${error.message}`);
      } else {
        syncJobsDeleted = count ?? 0;
      }
    } catch {
      console.error('Unexpected error cleaning sync_jobs:', requestId);
      errors.push('sync_jobs: unexpected error');
    }

    // --- Purge old audit logs (90-day retention) ---
    let auditLogsDeleted = 0;
    try {
      const auditCutoff = new Date();
      auditCutoff.setDate(auditCutoff.getDate() - AUDIT_LOG_RETENTION_DAYS);

      const { count, error } = await supabase
        .from('audit_logs')
        .delete({ count: 'exact' })
        .lt('created_at', auditCutoff.toISOString());

      if (error) {
        console.error('Audit log cleanup error:', requestId, error.code);
        errors.push(`audit_logs: ${error.message}`);
      } else {
        auditLogsDeleted = count ?? 0;
      }
    } catch {
      console.error('Unexpected error cleaning audit_logs:', requestId);
      errors.push('audit_logs: unexpected error');
    }

    // --- Write audit log summary ---
    // Audit log is written per-operation (system-level), not per-account.
    // Use a sentinel account ID to indicate system operations.
    const totalCacheDeleted = Object.values(deletedCounts).reduce((sum, n) => sum + n, 0);
    const auditMetadata = {
      cache_deleted: deletedCounts,
      sync_jobs_deleted: syncJobsDeleted,
      audit_logs_deleted: auditLogsDeleted,
      total_cache_deleted: totalCacheDeleted,
      cutoff_date: cutoffIso,
      sync_job_cutoff_date: syncJobCutoffIso,
      errors: errors.length > 0 ? errors : undefined,
    };

    await supabase.from('audit_logs').insert({
      stripe_account_id: '_system',
      action: 'data_lifecycle_purge',
      request_id: requestId,
      metadata: auditMetadata,
    });

    return jsonResponse({
      requestId,
      cacheDeleted: deletedCounts,
      syncJobsDeleted,
      auditLogsDeleted,
      totalCacheDeleted,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Data lifecycle error:', requestId);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
