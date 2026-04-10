// Verify Stripe App signature and set RLS context
// This runs at the start of every Edge Function handler

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@17';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const STRIPE_APP_SECRET = Deno.env.get('STRIPE_APP_SECRET') || '';
const DEV_MODE = Deno.env.get('DEV_MODE') === 'true';

let stripe: Stripe | null = null;
if (STRIPE_APP_SECRET) {
  stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') || 'unused', {
    apiVersion: '2026-01-28.clover',
  });
}

export interface AuthContext {
  stripeAccountId: string;
  userId: string;
  supabase: ReturnType<typeof createClient>;
  body: Record<string, unknown>;
}

export async function authenticateRequest(req: Request): Promise<AuthContext> {
  const signature = req.headers.get('stripe-signature');

  // Parse the request body to get user_id and account_id
  const body = await req.clone().json();
  const { user_id: userId, account_id: stripeAccountId } = body;

  if (!userId || !stripeAccountId) {
    throw new AuthError('Missing user_id or account_id in request body', 'invalid_request', 401);
  }

  // In dev mode, skip all signature verification and trust the body
  if (!DEV_MODE) {
    if (signature && stripe && STRIPE_APP_SECRET) {
      const payload = JSON.stringify({ user_id: userId, account_id: stripeAccountId });
      try {
        stripe.webhooks.signature.verifyHeader(payload, signature, STRIPE_APP_SECRET);
      } catch {
        throw new AuthError('Invalid signature', 'invalid_signature', 401);
      }
    } else if (!signature) {
      throw new AuthError('Missing stripe-signature header', 'missing_signature', 401);
    }
  }

  // Create Supabase client with service role key
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Set RLS context for this request
  await supabase.rpc('set_app_context', { account_id: stripeAccountId });

  return { stripeAccountId, userId, supabase, body };
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
