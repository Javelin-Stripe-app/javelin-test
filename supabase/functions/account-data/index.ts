import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

const TABLES_TO_PURGE = [
  'messages',
  'conversations',
  'cached_subscriptions',
  'cached_invoices',
  'cached_charges',
  'cached_customers',
  'cached_products',
  'cached_prices',
  'sync_jobs',
  'business_context',
  'benchmarking_cache',
  'audit_logs',
];

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'DELETE') {
    return errorResponse('method_not_allowed', 'Use DELETE method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Delete all data for this account from all tables
    for (const table of TABLES_TO_PURGE) {
      await auth.supabase
        .from(table)
        .delete()
        .eq('stripe_account_id', auth.stripeAccountId);
    }

    return jsonResponse({ deleted: true });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Account data deletion error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
