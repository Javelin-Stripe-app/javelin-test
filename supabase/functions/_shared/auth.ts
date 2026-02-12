// Verify Stripe signature and set RLS context
// This runs at the start of every Edge Function handler

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

export interface AuthContext {
  stripeAccountId: string;
  userId: string;
  supabase: ReturnType<typeof createClient>;
}

export async function authenticateRequest(req: Request): Promise<AuthContext> {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    throw new AuthError('Missing stripe-signature header', 'missing_signature', 401);
  }

  // TODO: Verify the Stripe signature cryptographically
  // For v0, we decode the signed payload to extract account and user IDs
  // In production, this should verify against Stripe's signing secret
  let payload: { account_id: string; user_id: string };
  try {
    payload = JSON.parse(atob(signature));
  } catch {
    throw new AuthError('Invalid signature format', 'invalid_signature', 401);
  }

  const { account_id: stripeAccountId, user_id: userId } = payload;

  if (!stripeAccountId || !userId) {
    throw new AuthError('Invalid signature payload', 'invalid_signature', 401);
  }

  // Create Supabase client with RLS context
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    global: {
      headers: {
        // This doesn't set the Postgres setting directly — we do that in queries
      },
    },
  });

  // Set RLS context for this request
  await supabase.rpc('set_app_context', { account_id: stripeAccountId });

  return { stripeAccountId, userId, supabase };
}

export class AuthError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}
