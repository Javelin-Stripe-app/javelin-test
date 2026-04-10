import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { runSyncJob } from '../_shared/sync-engine.ts';
import { getStripeAccessToken, TokenError } from '../_shared/stripe-token.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const body = await req.json();
    const { job_group_id: jobGroupId, stripe_account_id: stripeAccountId } = body;

    if (!jobGroupId || !stripeAccountId) {
      return errorResponse('invalid_request', 'Missing job_group_id or stripe_account_id', requestId, 400);
    }

    // Verify caller authorization via service role key in Authorization header
    const authHeader = req.headers.get('authorization');
    const expectedToken = `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`;
    if (authHeader !== expectedToken) {
      return errorResponse('unauthorized', 'Invalid authorization', requestId, 401);
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Set RLS context
    await supabase.rpc('set_app_context', { account_id: stripeAccountId });

    // Fetch pending jobs for this group
    const { data: pendingJobs, error: queryError } = await supabase
      .from('sync_jobs')
      .select('id, object_type, metadata')
      .eq('job_group_id', jobGroupId)
      .eq('stripe_account_id', stripeAccountId)
      .eq('status', 'pending');

    if (queryError) {
      console.error('Sync worker query error:', requestId, queryError.code);
      return errorResponse('db_error', 'Failed to fetch pending jobs', requestId, 500);
    }

    if (!pendingJobs || pendingJobs.length === 0) {
      return jsonResponse({ jobGroupId, processed: 0, message: 'No pending jobs found' });
    }

    // Resolve per-account Stripe access token
    const stripeAccessToken = await getStripeAccessToken(supabase, stripeAccountId);

    // Execute each sync job
    const results: { objectType: string; status: string; synced: number; error?: string }[] = [];

    for (const job of pendingJobs) {
      try {
        // Extract date range options from job metadata (for backfill jobs)
        const options = job.metadata?.startDate
          ? { startDate: job.metadata.startDate, endDate: job.metadata.endDate }
          : undefined;

        await runSyncJob(
          supabase,
          stripeAccessToken,
          stripeAccountId,
          job.id,
          job.object_type,
          options,
        );

        results.push({ objectType: job.object_type, status: 'completed', synced: 0 });
      } catch (error) {
        const errMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Sync worker job ${job.id} failed:`, errMsg);
        results.push({ objectType: job.object_type, status: 'failed', synced: 0, error: errMsg });
      }
    }

    const succeeded = results.filter((r) => r.status === 'completed').length;
    const failed = results.filter((r) => r.status === 'failed').length;

    return jsonResponse({
      jobGroupId,
      processed: results.length,
      succeeded,
      failed,
      results,
    });
  } catch (error) {
    if (error instanceof TokenError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync worker error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
