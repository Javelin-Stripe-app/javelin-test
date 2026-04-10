import { createHttpClient } from '@stripe/ui-extension-sdk/http_client';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '@stripe/ui-extension-sdk/utils';

const stripe = new Stripe(STRIPE_API_KEY, {
  httpClient: createHttpClient(),
  apiVersion: '2026-01-28.clover',
});

export default stripe;
