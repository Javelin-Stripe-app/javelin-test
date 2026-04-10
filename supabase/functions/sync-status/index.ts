import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

const ALL_OBJECT_TYPES = [
  'subscriptions',
  'invoices',
  'charges',
  'customers',
  'products',
  'prices',
] as const;

interface SyncJobStatus {
  objectType: string;
  status: string;
  lastSyncedAt: string | null;
  recordsSynced: number;
  error: string | null;
  jobId: string | null;
  jobGroupId: string | null;
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

    // Get the most recent sync job for each object type
    // We query all sync jobs for this account ordered by created_at desc
    const { data: syncJobs, error: queryError } = await auth.supabase
      .from('sync_jobs')
      .select('id, job_group_id, object_type, status, records_synced, error_message, created_at, completed_at')
      .eq('stripe_account_id', auth.stripeAccountId)
      .order('created_at', { ascending: false });

    if (queryError) {
      console.error('Sync status query error:', requestId, queryError.code);
      return errorResponse('db_error', 'Failed to fetch sync status', requestId, 500);
    }

    // Build a map of the latest job per object type
    const latestByType = new Map<string, typeof syncJobs[number]>();
    for (const job of syncJobs || []) {
      if (!latestByType.has(job.object_type)) {
        latestByType.set(job.object_type, job);
      }
    }

    // Build status for all object types (including those never synced)
    const statuses: SyncJobStatus[] = ALL_OBJECT_TYPES.map((objectType) => {
      const job = latestByType.get(objectType);
      if (!job) {
        return {
          objectType,
          status: 'never_synced',
          lastSyncedAt: null,
          recordsSynced: 0,
          error: null,
          jobId: null,
          jobGroupId: null,
        };
      }
      return {
        objectType,
        status: job.status,
        lastSyncedAt: job.completed_at || null,
        recordsSynced: job.records_synced || 0,
        error: job.error_message || null,
        jobId: job.id,
        jobGroupId: job.job_group_id,
      };
    });

    // Compute overall sync health
    const hasErrors = statuses.some((s) => s.status === 'failed');
    const hasPending = statuses.some((s) => s.status === 'pending' || s.status === 'in_progress');
    const allSynced = statuses.every((s) => s.status === 'completed');
    const neverSynced = statuses.every((s) => s.status === 'never_synced');

    let overallStatus: string;
    if (neverSynced) {
      overallStatus = 'never_synced';
    } else if (hasErrors) {
      overallStatus = 'has_errors';
    } else if (hasPending) {
      overallStatus = 'syncing';
    } else if (allSynced) {
      overallStatus = 'synced';
    } else {
      overallStatus = 'partial';
    }

    // Find the oldest completed sync timestamp for freshness
    const completedSyncs = statuses.filter((s) => s.lastSyncedAt);
    const oldestSync = completedSyncs.length > 0
      ? completedSyncs.reduce((oldest, s) =>
          s.lastSyncedAt && (!oldest || s.lastSyncedAt < oldest) ? s.lastSyncedAt : oldest,
          '' as string,
        )
      : null;

    return jsonResponse(
      {
        overallStatus,
        objectTypes: statuses,
      },
      {
        freshness: 'live',
        syncedAt: oldestSync || undefined,
      },
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync status error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
