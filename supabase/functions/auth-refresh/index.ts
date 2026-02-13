import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { getStripeAccessToken, TokenError } from '../_shared/stripe-token.ts';

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Trigger token refresh if needed (getStripeAccessToken handles refresh internally)
    await getStripeAccessToken(auth.supabase, auth.stripeAccountId);

    // Read back the actual expiry from the database
    const { data: tokenRow } = await auth.supabase
      .from('oauth_tokens')
      .select('token_expires_at')
      .eq('stripe_account_id', auth.stripeAccountId)
      .single();

    const expiresAt = tokenRow?.token_expires_at || new Date(Date.now() + 3600000).toISOString();

    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'token_refresh',
        request_id: requestId,
        metadata: { user_id: auth.userId },
      });

    return jsonResponse({ expiresAt });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    if (error instanceof TokenError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Auth refresh error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
