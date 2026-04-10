import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { extractIndexedColumns, OBJECT_TYPE_CONFIG } from '../_shared/sync-engine.ts';
import { z } from 'https://esm.sh/zod@3';

const VALID_OBJECT_TYPES = [
  'subscriptions',
  'invoices',
  'charges',
  'customers',
  'products',
  'prices',
] as const;

const syncDataRequestSchema = z.object({
  objectType: z.enum(VALID_OBJECT_TYPES),
  records: z.array(z.record(z.unknown())).min(1),
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

    const parsed = syncDataRequestSchema.safeParse(auth.body);
    if (!parsed.success) {
      return errorResponse(
        'validation_error',
        parsed.error.issues.map((i) => i.message).join(', '),
        requestId,
        400,
      );
    }

    const { objectType, records } = parsed.data;
    const config = OBJECT_TYPE_CONFIG[objectType];

    if (!config) {
      return errorResponse('invalid_object_type', `Unknown object type: ${objectType}`, requestId, 400);
    }

    // Transform records using the same extraction logic as the backend sync engine
    const rows = records.map((record) =>
      extractIndexedColumns(record, objectType, auth.stripeAccountId),
    );

    // Upsert into the cache table
    const { error: upsertError } = await auth.supabase
      .from(config.tableName)
      .upsert(rows, { onConflict: 'id, stripe_account_id' });

    if (upsertError) {
      console.error('Sync data upsert error:', requestId, upsertError.code, upsertError.message);
      return errorResponse('db_error', 'Failed to store synced data', requestId, 500);
    }

    return jsonResponse({ synced: rows.length });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Sync data error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
