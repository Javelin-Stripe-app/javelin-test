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

const MAX_BACKFILL_MONTHS = 24;

const syncBackfillRequestSchema = z.object({
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'startDate must be YYYY-MM-DD format'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'endDate must be YYYY-MM-DD format'),
  objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)).optional(),
});

function monthsBetween(start: Date, end: Date): number {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
}

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Validate request body (already parsed by authenticateRequest)
    const parsed = syncBackfillRequestSchema.safeParse(auth.body);
    if (!parsed.success) {
      return errorResponse(
        'validation_error',
        parsed.error.issues.map((i) => i.message).join(', '),
        requestId,
        400,
      );
    }

    const { startDate, endDate } = parsed.data;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();

    // Validate date logic
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return errorResponse('invalid_dates', 'startDate and endDate must be valid dates', requestId, 400);
    }

    if (start >= end) {
      return errorResponse('invalid_date_range', 'startDate must be before endDate', requestId, 400);
    }

    if (end > now) {
      return errorResponse('invalid_date_range', 'endDate cannot be in the future', requestId, 400);
    }

    const monthsFromNow = monthsBetween(start, now);
    if (monthsFromNow > MAX_BACKFILL_MONTHS) {
      return errorResponse(
        'date_range_exceeded',
        `Backfill range cannot exceed ${MAX_BACKFILL_MONTHS} months from now. Requested: ${monthsFromNow} months.`,
        requestId,
        400,
      );
    }

    const objectTypes = parsed.data.objectTypes || [...VALID_OBJECT_TYPES];
    const jobId = crypto.randomUUID();

    // Create sync_jobs records for each object type with backfill metadata
    const jobs = objectTypes.map((objectType) => ({
      id: crypto.randomUUID(),
      job_group_id: jobId,
      stripe_account_id: auth.stripeAccountId,
      object_type: objectType,
      status: 'pending',
      job_type: 'backfill',
      started_by: auth.userId,
      metadata: {
        startDate,
        endDate,
        startTimestamp: Math.floor(start.getTime() / 1000),
        endTimestamp: Math.floor(end.getTime() / 1000),
      },
      created_at: new Date().toISOString(),
    }));

    const { error: insertError } = await auth.supabase.from('sync_jobs').insert(jobs);

    if (insertError) {
      console.error('Backfill job creation error:', requestId, insertError.code);
      return errorResponse('db_error', 'Failed to create backfill jobs', requestId, 500);
    }

    return jsonResponse({
      jobId,
      objectTypes,
      status: 'pending',
      jobCount: jobs.length,
      dateRange: { startDate, endDate },
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync backfill error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
