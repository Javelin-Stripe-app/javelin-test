import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';

// Supabase Edge Functions base URL
const SUPABASE_FUNCTIONS_URL =
  typeof process !== 'undefined' && process.env?.SUPABASE_FUNCTIONS_URL
    ? process.env.SUPABASE_FUNCTIONS_URL
    : 'https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1';

interface ApiResponse<T> {
  data?: T;
  error?: { code: string; message: string; requestId: string };
  meta?: { freshness: 'cached' | 'live'; syncedAt?: string };
}

interface SignatureContext {
  userId: string;
  accountId: string;
}

let _signatureContext: SignatureContext | null = null;

/**
 * Initialize the API client with the user's Stripe context.
 * Must be called once from a view that has ExtensionContextValue.
 */
export function initApiClient(userId: string, accountId: string) {
  _signatureContext = { userId, accountId };
}

export async function apiClient<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<ApiResponse<T>> {
  if (!_signatureContext) {
    throw new Error('apiClient not initialized — call initApiClient first');
  }

  // Try to get the Stripe signature; fallback gracefully for local dev
  let signature = '';
  try {
    signature = await fetchStripeSignature();
  } catch {
    // fetchStripeSignature may not work in local preview mode
    console.warn('fetchStripeSignature failed — sending unsigned request');
  }

  const method = options.method || 'POST';

  // Always include user_id and account_id in the body for auth
  const bodyPayload = {
    user_id: _signatureContext.userId,
    account_id: _signatureContext.accountId,
    ...(options.body && typeof options.body === 'object' ? options.body : {}),
  };

  const response = await fetch(`${SUPABASE_FUNCTIONS_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(signature ? { 'stripe-signature': signature } : {}),
    },
    body: JSON.stringify(bodyPayload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}
