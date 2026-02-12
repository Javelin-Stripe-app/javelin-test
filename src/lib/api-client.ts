import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';

// Supabase Edge Functions base URL — set during app configuration
// In production, this is set via the Stripe Secret Store or build-time env
const SUPABASE_FUNCTIONS_URL =
  typeof process !== 'undefined' && process.env?.SUPABASE_FUNCTIONS_URL
    ? process.env.SUPABASE_FUNCTIONS_URL
    : 'https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1';

interface ApiResponse<T> {
  data?: T;
  error?: { code: string; message: string; requestId: string };
  meta?: { freshness: 'cached' | 'live'; syncedAt?: string };
}

export async function apiClient<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<ApiResponse<T>> {
  const signature = await fetchStripeSignature();

  const response = await fetch(`${SUPABASE_FUNCTIONS_URL}${path}`, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'stripe-signature': signature,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}
