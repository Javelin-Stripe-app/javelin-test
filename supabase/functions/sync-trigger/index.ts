import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
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

    // Invoke the sync engine asynchronously for each object type
    // The sync-worker function will pick up pending jobs
    // For now, we return the job group ID so the client can poll status
    return jsonResponse({
      jobId,
      objectTypes,
      status: 'pending',
      jobCount: jobs.length,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync trigger error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
