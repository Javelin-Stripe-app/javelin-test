// Per-account Stripe OAuth token resolution with automatic refresh
// All sync functions call getStripeAccessToken() instead of using STRIPE_SECRET_KEY directly

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY') || '';
const TOKEN_REFRESH_BUFFER_MS = 5 * 60 * 1000; // Refresh 5 minutes before expiry

export class TokenError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

interface OAuthTokenRow {
  stripe_account_id: string;
  access_token: string;
  refresh_token: string;
  token_expires_at: string | null;
  refresh_token_expires_at: string | null;
  scope: string | null;
  livemode: boolean | null;
}

interface StripeOAuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  scope: string;
  livemode: boolean;
  stripe_user_id?: string;
}

/**
 * Get a valid Stripe access token for the given account.
 * 1. Looks up stored OAuth token
 * 2. Refreshes if expiring within 5 minutes
 * 3. Falls back to STRIPE_SECRET_KEY env var (dev mode)
 * 4. Throws TokenError if refresh token is expired
 */
export async function getStripeAccessToken(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
): Promise<string> {
  const { data: tokenRow, error } = await supabase
    .from('oauth_tokens')
    .select('*')
    .eq('stripe_account_id', stripeAccountId)
    .single();

  if (error || !tokenRow) {
    // No token stored — fall back to env var for dev
    if (STRIPE_SECRET_KEY) {
      console.warn(
        `No OAuth token for ${stripeAccountId}, falling back to STRIPE_SECRET_KEY env var`,
      );
      return STRIPE_SECRET_KEY;
    }
    throw new TokenError(
      `No OAuth token found for account ${stripeAccountId}. User must re-authorize the app.`,
      'token_not_found',
      401,
    );
  }

  const row = tokenRow as OAuthTokenRow;
  const now = Date.now();

  // Check if access token is still fresh (>5min until expiry)
  if (row.token_expires_at) {
    const expiresAt = new Date(row.token_expires_at).getTime();
    if (expiresAt - now > TOKEN_REFRESH_BUFFER_MS) {
      return row.access_token;
    }

    // Token expiring soon — refresh it
    return await refreshAccessToken(supabase, row);
  }

  // No expiry recorded — assume valid
  return row.access_token;
}

/**
 * Refresh an expiring access token using the stored refresh token.
 */
async function refreshAccessToken(
  supabase: ReturnType<typeof createClient>,
  row: OAuthTokenRow,
): Promise<string> {
  // Check if refresh token itself has expired
  if (row.refresh_token_expires_at) {
    const refreshExpiresAt = new Date(row.refresh_token_expires_at).getTime();
    if (refreshExpiresAt <= Date.now()) {
      throw new TokenError(
        'Refresh token has expired. User must re-authorize the app.',
        'refresh_token_expired',
        401,
      );
    }
  }

  if (!STRIPE_SECRET_KEY) {
    throw new TokenError(
      'Cannot refresh token: STRIPE_SECRET_KEY not configured',
      'missing_config',
      500,
    );
  }

  // Stripe Apps OAuth token refresh uses Basic auth with the platform secret key
  const response = await fetch('https://api.stripe.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(STRIPE_SECRET_KEY + ':')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: row.refresh_token,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new TokenError(
      `Token refresh failed: ${err.error_description || err.error || 'Unknown error'}`,
      'refresh_failed',
      response.status,
    );
  }

  const tokens: StripeOAuthResponse = await response.json();

  // Persist refreshed tokens
  await storeOAuthTokens(supabase, row.stripe_account_id, tokens);

  return tokens.access_token;
}

/**
 * Store OAuth tokens after initial exchange or refresh.
 * Called by auth-callback after code exchange and internally after refresh.
 */
export async function storeOAuthTokens(
  supabase: ReturnType<typeof createClient>,
  stripeAccountId: string,
  tokens: StripeOAuthResponse,
): Promise<void> {
  const now = new Date();

  const { error } = await supabase
    .from('oauth_tokens')
    .upsert(
      {
        stripe_account_id: stripeAccountId,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        // Stripe access tokens expire in 1 hour
        token_expires_at: new Date(now.getTime() + 60 * 60 * 1000).toISOString(),
        // Stripe refresh tokens expire in ~1 year (rolling)
        refresh_token_expires_at: new Date(
          now.getTime() + 365 * 24 * 60 * 60 * 1000,
        ).toISOString(),
        scope: tokens.scope || null,
        livemode: tokens.livemode ?? null,
      },
      { onConflict: 'stripe_account_id' },
    );

  if (error) {
    console.error('Failed to store OAuth tokens:', error.code);
    throw new TokenError(
      'Failed to persist OAuth tokens',
      'db_error',
      500,
    );
  }
}
