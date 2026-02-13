import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { runSyncJob } from '../_shared/sync-engine.ts';
import { getStripeAccessToken, TokenError } from '../_shared/stripe-token.ts';
import { z } from 'https://esm.sh/zod@3';

const VALID_OBJECT_TYPES = [
  'subscriptions',
  'invoices',
  'charges',
  'customers',
  'products',
  'prices',
] as const;

const syncTriggerRequestSchema = z.object({
  objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)).optional(),
});

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Parse and validate request body
    let body: Record<string, unknown> = {};
    try {
      const text = await req.text();
      if (text) {
        body = JSON.parse(text);
      }
    } catch {
      return errorResponse('invalid_json', 'Request body must be valid JSON', requestId, 400);
    }

    const parsed = syncTriggerRequestSchema.safeParse(body);
    if (!parsed.success) {
      return errorResponse(
        'validation_error',
        parsed.error.issues.map((i) => i.message).join(', '),
        requestId,
        400,
      );
    }

    const objectTypes = parsed.data.objectTypes || [...VALID_OBJECT_TYPES];
    const jobId = crypto.randomUUID();

    // Create sync_jobs records for each object type
    const jobs = objectTypes.map((objectType) => ({
      id: crypto.randomUUID(),
      job_group_id: jobId,
      stripe_account_id: auth.stripeAccountId,
      object_type: objectType,
      status: 'pending',
      started_by: auth.userId,
      created_at: new Date().toISOString(),
    }));

    const { error: insertError } = await auth.supabase.from('sync_jobs').insert(jobs);

    if (insertError) {
      console.error('Sync job creation error:', requestId, insertError.code);
      return errorResponse('db_error', 'Failed to create sync jobs', requestId, 500);
    }

    // Resolve per-account Stripe access token
    const stripeAccessToken = await getStripeAccessToken(auth.supabase, auth.stripeAccountId);

    const results: { objectType: string; status: string; synced: number; error?: string }[] = [];

    for (const job of jobs) {
      try {
        await runSyncJob(
          auth.supabase,
          stripeAccessToken,
          auth.stripeAccountId,
          job.id,
          job.object_type,
        );
        results.push({ objectType: job.object_type, status: 'completed', synced: 0 });
      } catch (error) {
        const errMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Sync job ${job.id} failed for ${job.object_type}:`, errMsg);
        results.push({ objectType: job.object_type, status: 'failed', synced: 0, error: errMsg });
      }
    }

    const succeeded = results.filter((r) => r.status === 'completed').length;
    const failed = results.filter((r) => r.status === 'failed').length;

    return jsonResponse({
      jobId,
      objectTypes,
      status: failed === 0 ? 'completed' : 'partial',
      jobCount: jobs.length,
      succeeded,
      failed,
      results,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    if (error instanceof TokenError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync trigger error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
