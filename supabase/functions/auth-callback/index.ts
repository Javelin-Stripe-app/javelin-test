import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);
    const { code, state, verifier } = await req.json();

    if (!code || !state) {
      return errorResponse('invalid_request', 'Missing code or state parameter', requestId, 400);
    }

    // Exchange authorization code for tokens via Stripe OAuth
    const STRIPE_CLIENT_ID = Deno.env.get('STRIPE_CLIENT_ID')!;
    const tokenResponse = await fetch('https://connect.stripe.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: STRIPE_CLIENT_ID,
      }),
    });

    if (!tokenResponse.ok) {
      const err = await tokenResponse.json();
      return errorResponse('oauth_exchange_failed', err.error_description || 'Token exchange failed', requestId, 400);
    }

    const tokens = await tokenResponse.json();

    // Store tokens in Secret Store is handled by the UI via Stripe SDK
    // The Edge Function returns the account info for the UI to complete setup

    // Create or update the business_context record for this account
    await auth.supabase
      .from('business_context')
      .upsert({
        stripe_account_id: auth.stripeAccountId,
        profile: {},
      }, { onConflict: 'stripe_account_id' });

    // Log the auth event
    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'oauth_callback',
        request_id: requestId,
        metadata: { user_id: auth.userId },
      });

    return jsonResponse(
      { accountId: auth.stripeAccountId },
      undefined,
      200,
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Auth callback error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
