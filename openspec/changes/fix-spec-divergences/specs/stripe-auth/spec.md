## CHANGED Requirements

> **Delta type:** spec-correction
> **Affects:** `openspec/changes/javelin-v0-mvp/specs/stripe-auth/spec.md`
> **Reason:** Token storage section described Stripe Secret Store as exclusive storage. Actual implementation uses Postgres as primary storage with a DEV_MODE env fallback.

---

### REPLACED: Requirement — Token Storage via Secret Store API

**Previous text (incorrect):**
> The system SHALL persist OAuth tokens exclusively in the Stripe Secret Store API. Tokens SHALL NOT be stored in `.env` files, Supabase, localStorage, or any other storage mechanism.

**Corrected requirement:**

#### Requirement: Token Storage via Postgres (Primary) with DEV_MODE Fallback

The system SHALL persist OAuth tokens in the Postgres `oauth_tokens` table as the primary storage mechanism. The Stripe Secret Store API is **not** used for token storage in the current implementation.

##### Scenario: Token storage after successful OAuth
- **WHEN** the Edge Function receives valid access and refresh tokens from Stripe
- **THEN** it SHALL upsert a row in `oauth_tokens` keyed by `stripe_account_id`
- **AND** the row SHALL include: `access_token`, `refresh_token`, `token_expires_at` (1hr from now), `refresh_token_expires_at` (1yr rolling), `scope`, `livemode`
- **AND** RLS on `oauth_tokens` SHALL scope reads and writes to the authenticated account

##### Scenario: Token lookup before API call
- **WHEN** an Edge Function needs a valid access token for a given `stripe_account_id`
- **THEN** it SHALL call `getStripeAccessToken(supabase, stripeAccountId)` from `_shared/stripe-token.ts`
- **AND** the function SHALL return the stored `access_token` if fresh (>5 min until expiry)
- **OR** SHALL refresh the token using the stored `refresh_token` and return the new access token

##### Scenario: DEV_MODE fallback (private/sandbox apps)
- **WHEN** `DEV_MODE=true` is set in the Edge Function environment
- **AND** no `oauth_tokens` row exists for the given account (OAuth redirect does not occur for private apps)
- **THEN** the system SHALL fall back to `STRIPE_SECRET_KEY` env var as the access token
- **AND** a warning SHALL be logged: `DEV_MODE fallback: Using STRIPE_SECRET_KEY for account <id>`
- **AND** this fallback SHALL NOT be used in production deployments

##### Scenario: Token not found in production
- **WHEN** `DEV_MODE` is not set and no OAuth token exists for the account
- **THEN** `getStripeAccessToken()` SHALL throw a `TokenError` with code `token_not_found` and status 401
- **AND** the calling Edge Function SHALL return a 401 response prompting the user to re-authorize

---

### REPLACED: Security Acceptance Criteria

**Previous (incorrect):**
> SEC-1: OAuth tokens SHALL never appear in logs, error messages, or client-side code

**Corrected:**
- **SEC-1:** OAuth tokens SHALL never appear in logs, error messages, or client-side code — this remains unchanged
- **SEC-2:** All Edge Function endpoints SHALL reject requests without valid Stripe signatures — unchanged
- **SEC-3:** RLS context SHALL be set before any database query in every Edge Function — unchanged
- **SEC-4:** CSRF protection SHALL be enforced via OAuth state parameter verification — unchanged
- **SEC-5 (new):** `oauth_tokens` table SHALL have RLS enabled, scoping all reads/writes to the authenticated `stripe_account_id`
- **SEC-6 (new):** `STRIPE_SECRET_KEY` env var SHALL only be used as a DEV_MODE fallback; it SHALL NOT be used as a token source in production

---

### REPLACED: Endpoint Inventory

**Previous (incorrect paths):**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| POST | `/auth/callback` | Stripe signature | `{ code, state, verifier }` | `{ data: { accountId } }` |
| POST | `/auth/refresh` | Stripe signature | `{}` | `{ data: { expiresAt } }` |
| DELETE | `/account/data` | Stripe signature | `{}` | `{ data: { deleted: true } }` |

**Corrected (hyphenated Edge Function directory names):**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| POST | `/auth-callback` | Stripe signature | `{ code: string, state: string, verifier: string }` | `{ data: { accountId: string } }` |
| POST | `/auth-refresh` | Stripe signature | `{}` | `{ data: { expiresAt: string } }` |
| DELETE | `/account-data` | Stripe signature | `{}` | `{ data: { deleted: true } }` |
