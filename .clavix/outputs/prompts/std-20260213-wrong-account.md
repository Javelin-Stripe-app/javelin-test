---
id: std-20260213-wrong-account
depthUsed: standard
timestamp: 2026-02-13T00:00:00Z
executed: false
originalPrompt: "I have the app installed (v 0.0.4) in the stripe account acct_1T04hmJUI6dJYhqn which is a sandbox and has 8 customers. But the app is getting customers from acct_1FV0ExJhx3afCGjc account which is a test account (app not even installed, but created as v 0.0.1). I need to troubleshoot this."
---

# Improved Prompt

## Debug: App Returns Data from Wrong Stripe Account

### Problem
The Stripe App v0.0.4 is installed on sandbox account `acct_1T04hmJUI6dJYhqn`
(8 customers). However, the app returns data belonging to a different account
`acct_1FV0ExJhx3afCGjc` — an old test account from v0.0.1 where the app is
no longer installed.

### Expected Behavior
All Edge Function queries should scope to the account from the current Stripe
extension context (`acct_1T04hmJUI6dJYhqn`).

### Investigation Tasks

#### 1. Check the `oauth_tokens` table
- Query: which `stripe_account_id` values exist in `oauth_tokens`?
- If `acct_1FV0ExJhx3afCGjc` has a row but `acct_1T04hmJUI6dJYhqn` does not,
  the OAuth callback stored the token under the wrong account.
- Check: does the `auth-callback` Edge Function use the account ID from the
  OAuth response (`stripe_user_id`) or from the request body (`account_id`)?

#### 2. Trace account ID through the request flow
- Frontend: does `initApiClient(userId, accountId)` receive the correct
  account from `ExtensionContextValue.userContext.account.id`?
- Edge Function `authenticateRequest()`: does it extract `account_id` from
  the request body? Is it the correct value?
- `getStripeAccessToken()`: does it look up the token by the correct
  `stripe_account_id`? If the token row has the wrong account ID, it would
  return the wrong Stripe API key.

#### 3. Check cached data ownership
- Query `cached_customers` for both account IDs — which one has rows?
- If only `acct_1FV0ExJhx3afCGjc` has rows, the sync ran with the wrong
  account context.

#### 4. Check `stripe-app.json` and OAuth config
- Verify the OAuth redirect URI and app ID match the v0.0.4 installation.
- Check if there are stale environment variables (e.g., `STRIPE_SECRET_KEY`)
  pointing to the old test account's platform key.

### Root Cause Hypotheses (in order of likelihood)
1. **OAuth token stored under wrong account** — `auth-callback` stored the
   token with `acct_1FV0ExJhx3afCGjc` as the key, so all API calls use
   that account's Stripe credentials.
2. **Stale `STRIPE_SECRET_KEY` env var** — `getStripeAccessToken()` falls
   back to `STRIPE_SECRET_KEY` when no OAuth token is found, and that key
   belongs to the old test account.
3. **Frontend sending wrong account ID** — unlikely if the Stripe extension
   context is working correctly, but worth verifying.

### Expected Outcome
- Identify which component introduces the wrong account ID
- Fix it so all data operations scope to `acct_1T04hmJUI6dJYhqn`
- Verify all 8 customers appear in app responses

### Key Files
- `supabase/functions/_shared/auth.ts` — account ID extraction
- `supabase/functions/_shared/stripe-token.ts` — token lookup + fallback
- `supabase/functions/auth-callback/index.ts` — OAuth token storage
- `src/lib/api-client.ts` — frontend account context
- `supabase/functions/_shared/sync-engine.ts` — sync scoping

## Quality Scores
- **Clarity**: 75%
- **Efficiency**: 70%
- **Structure**: 50%
- **Completeness**: 45%
- **Actionability**: 55%
- **Specificity**: 75%
- **Overall**: 59% (needs-improvement)

## Original Prompt
```
I have the app installed (v 0.0.4) in the stripe account acct_1T04hmJUI6dJYhqn which is a sandbox and has 8 customers. But the app is getting customers from acct_1FV0ExJhx3afCGjc account which is a test account (app not even installed, but created as v 0.0.1). I need to troubleshoot this.
```
