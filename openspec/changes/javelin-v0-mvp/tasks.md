## 1. Project Setup & Infrastructure

- [ ] 1.1 Initialize Stripe App project with `stripe apps create` — configure `stripe-app.json` manifest with `distribution_type: "public"`, `stripe_api_access_type: "oauth"`, sandbox install compatible
- [ ] 1.2 Configure `stripe-app.json` permissions: declare all read permissions (customer_read, invoice_read, charge_read, subscription_read, product_read, price_read, secret_write) with `purpose` fields
- [ ] 1.3 Configure `stripe-app.json` CSP: add LLM provider URL and Supabase Edge Function URL to `content_security_policy.connect-src`
- [ ] 1.4 Register views in `stripe-app.json`: `stripe.dashboard.drawer.default` → ChatView, `settings` → SettingsView, `onboarding` → OnboardingView
- [ ] 1.5 Set up Supabase project: create project, configure environment, obtain project URL and anon key
- [ ] 1.6 Install dependencies: `stripe`, `@stripe/ui-extension-sdk`, `zod`, and dev dependencies (`vitest`, `@stripe/ui-extension-sdk/testing`)
- [ ] 1.7 Configure TypeScript, ESLint, Prettier for the project (React 17 JSX transform)
- [ ] 1.8 Set up Vitest configuration for unit and integration tests
- [ ] 1.9 Create project directory structure: `src/views/`, `src/components/`, `src/lib/`, `src/utils/`, `supabase/functions/`, `supabase/migrations/`

## 2. Database Schema & Migrations

- [ ] 2.1 Create migration: `cached_subscriptions` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `status`, `created`, `current_period_start`, `current_period_end`, `customer_id`, `price_id`, `synced_at`, `created_at`, `updated_at`; composite index on `(stripe_account_id, created)`; index on `(stripe_account_id, status)`
- [ ] 2.2 Create migration: `cached_invoices` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `status`, `created`, `amount_due`, `amount_paid`, `currency`, `customer_id`, `subscription_id`, `synced_at`, `created_at`, `updated_at`; composite index on `(stripe_account_id, created)`
- [ ] 2.3 Create migration: `cached_charges` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `status`, `created`, `amount`, `currency`, `customer_id`, `synced_at`, `created_at`, `updated_at`; composite index on `(stripe_account_id, created)`
- [ ] 2.4 Create migration: `cached_customers` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `created`, `email`, `name`, `synced_at`, `created_at`, `updated_at`; index on `(stripe_account_id)`
- [ ] 2.5 Create migration: `cached_products` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `name`, `active`, `synced_at`, `created_at`, `updated_at`; index on `(stripe_account_id)`
- [ ] 2.6 Create migration: `cached_prices` table — `id`, `stripe_account_id`, `stripe_data` (JSONB), `product_id`, `unit_amount`, `currency`, `recurring_interval`, `recurring_interval_count`, `active`, `synced_at`, `created_at`, `updated_at`; index on `(stripe_account_id, product_id)`
- [ ] 2.7 Create migration: `sync_jobs` table — `id` (uuid), `stripe_account_id`, `object_type`, `status` (pending/running/completed/failed), `last_cursor`, `error`, `started_at`, `completed_at`, `created_at`, `updated_at`; index on `(stripe_account_id, object_type)`
- [ ] 2.8 Create migration: `conversations` table — `id` (uuid), `stripe_account_id`, `title`, `created_at`, `updated_at`; index on `(stripe_account_id, updated_at)`
- [ ] 2.9 Create migration: `messages` table — `id` (uuid), `conversation_id` (FK), `stripe_account_id`, `role` (user/assistant/system), `content` (text), `metadata` (JSONB), `created_at`; index on `(conversation_id, created_at)`
- [ ] 2.10 Create migration: `business_context` table — `stripe_account_id` (PK), `profile` (JSONB), `created_at`, `updated_at`
- [ ] 2.11 Create migration: `benchmarking_cache` table — `stripe_account_id` (PK), `data` (JSONB), `fetched_at`, `created_at`, `updated_at`
- [ ] 2.12 Create migration: `audit_logs` table — `id` (uuid), `stripe_account_id`, `action`, `request_id`, `metadata` (JSONB — no PII), `created_at`; index on `(stripe_account_id, created_at)`; partition/retention policy for 90-day auto-purge
- [ ] 2.13 Create RLS policies for ALL tables: `stripe_account_id = current_setting('app.stripe_account_id')` — verify no table is accessible without RLS
- [ ] 2.14 Run migrations against Supabase development instance and verify schema

## 3. Authentication (stripe-auth)

- [ ] 3.1 Implement Edge Function: `POST /auth/callback` — accept OAuth code + state + verifier, exchange for access/refresh tokens via Stripe OAuth token endpoint, store both in Secret Store (user scope), return account ID
- [ ] 3.2 Implement Edge Function: `POST /auth/refresh` — retrieve refresh token from Secret Store, exchange for new access token, update Secret Store, return new expiry
- [ ] 3.3 Implement shared auth middleware: `verifyStripeSignature()` — verify `fetchStripeSignature()` header on all incoming Edge Function requests, extract `stripe_account_id` and `user_id`, reject invalid/missing signatures with 401
- [ ] 3.4 Implement shared auth middleware: `setRLSContext()` — set `app.stripe_account_id` Postgres setting before any DB query; chain with signature verification
- [ ] 3.5 Implement shared auth middleware: `getStripeClient()` — retrieve OAuth access token from Secret Store, auto-refresh if expired, return authenticated Stripe SDK client
- [ ] 3.6 Implement Edge Function: `DELETE /account/data` — delete all rows across all tables for the given `stripe_account_id`, delete Secret Store secrets
- [ ] 3.7 Implement UI: OnboardingView — use `createOAuthState()` for CSRF protection, handle `oauthContext` code/error, call `/auth/callback`, display success/error Banner, redirect to ChatView on success
- [ ] 3.8 Implement UI: SignInView — displayed when auth session expires (401 `auth_refresh_failed`), prompts re-authorization
- [ ] 3.9 Create Zod schemas for auth endpoint request/response validation

## 4. Stripe Data Cache & Sync Engine (stripe-data-cache)

- [ ] 4.1 Implement sync core: `syncObjectType(accountId, objectType, cursor?)` — paginate through Stripe API (100/page, 10 req/sec self-limit), upsert into cache table, update `sync_jobs` cursor, handle 429 with exponential backoff
- [ ] 4.2 Implement Edge Function: `POST /sync/trigger` — create/resume sync jobs for specified object types (default: all 6), run as background processing, return job ID
- [ ] 4.3 Implement Edge Function: `POST /sync/backfill` — validate date range (max 24 months), create targeted sync jobs for the specified time range, return job ID
- [ ] 4.4 Implement Edge Function: `GET /sync/status` — return sync job statuses and last sync timestamps for all object types for the account
- [ ] 4.5 Implement freshness routing logic: `determineFreshness(query)` — classify queries as historical/aggregate (use cache), recency-sensitive (fetch live), single-object (fetch live), or ambiguous (ask user)
- [ ] 4.6 Implement response envelope helper: attach `meta.freshness` ("cached"/"live") and `meta.syncedAt` to all data responses
- [ ] 4.7 Implement data lifecycle: inactivity purge function — delete cached rows not accessed in 60 days (track via `last_accessed_at` or query logs)
- [ ] 4.8 Integrate uninstall hook: wire `DELETE /account/data` to purge all cache tables for the account
- [ ] 4.9 Create Zod schemas for sync endpoint request/response validation

## 5. SaaS Metrics Engine (saas-metrics)

- [ ] 5.1 Implement `calculateMRR(accountId, currency?, period?)` — sum active subscription amounts normalized to monthly; exclude trialing/incomplete/canceled; group by currency if multiple
- [ ] 5.2 Implement `calculateChurnRate(accountId, period, type?)` — canceled/expired subscriptions in period divided by active at period start; default to gross churn; express as percentage
- [ ] 5.3 Implement `calculateARPU(accountId, currency?)` — MRR divided by unique active customers with subscriptions
- [ ] 5.4 Implement `calculateLTV(accountId, currency?)` — ARPU divided by monthly churn rate; handle zero-churn edge case
- [ ] 5.5 Implement `calculateRevenueBreakdown(accountId, groupBy, startDate, endDate)` — aggregate from cached invoices/charges grouped by product, price, or metadata; include totals and percentages
- [ ] 5.6 Implement Edge Function: `GET /metrics/mrr` — parse query params with Zod, call calculateMRR, return with freshness envelope
- [ ] 5.7 Implement Edge Function: `GET /metrics/churn` — parse query params with Zod, call calculateChurnRate, return with freshness envelope
- [ ] 5.8 Implement Edge Function: `GET /metrics/arpu` — parse query params with Zod, call calculateARPU, return with freshness envelope
- [ ] 5.9 Implement Edge Function: `GET /metrics/ltv` — parse query params with Zod, call calculateLTV, return with freshness envelope
- [ ] 5.10 Implement Edge Function: `GET /metrics/revenue` — parse query params with Zod, call calculateRevenueBreakdown, return with freshness envelope
- [ ] 5.11 Pre-load Stripe billing metric definitions as constants — align all calculation logic with Stripe's documented definitions

## 6. LLM Provider Integration

- [ ] 6.1 Define `LLMProvider` interface: `chat(messages: ChatMessage[], options?: LLMOptions): Promise<LLMResponse>` with typed `ChatMessage` (role, content) and `LLMResponse` (content, usage tokens)
- [ ] 6.2 Implement concrete LLM provider adapter for selected model (Kimi K2 / DeepSeek / ChatGPT) — HTTP calls to provider API, parse response, track token usage
- [ ] 6.3 Implement PII sanitization layer: `sanitizeForLLM(data)` — replace customer names, emails, and identifiable data with anonymized tokens; maintain mapping only in request memory
- [ ] 6.4 Build system prompt template: pre-load with Stripe billing metric definitions, clarification bias instructions, response formatting rules (freshness indicators, insight timing), business context injection slot
- [ ] 6.5 Implement prompt construction: `buildPrompt(userMessage, metricsContext, businessContext, insightCandidates)` — assemble system + user + context messages; target < 2,000 input tokens
- [ ] 6.6 Implement response parsing: extract answer section, insight section (if any), and any clarification requests from LLM output
- [ ] 6.7 Create Zod schemas for LLM request/response validation

## 7. Chat Persistence (chat-persistence)

- [ ] 7.1 Implement Edge Function: `GET /chat/conversations` — list conversations for account, sorted by `updated_at` desc, paginated (limit/offset), return title + last message preview + timestamp
- [ ] 7.2 Implement Edge Function: `GET /chat/conversations/:id` — return conversation details and all messages sorted by `created_at` asc
- [ ] 7.3 Implement conversation creation logic within `POST /chat/message` — auto-create conversation if no `conversationId` provided, auto-generate title from first message content
- [ ] 7.4 Implement business context extraction: after each AI response, prompt LLM to extract new business context; merge additively into `business_context` table
- [ ] 7.5 Implement business context injection: load `business_context.profile` for account and inject into system prompt for every chat request
- [ ] 7.6 Create Zod schemas for conversation endpoint request/response validation

## 8. AI Chat UI (ai-chat)

- [ ] 8.1 Implement ChatView (ContextView) — registered at `stripe.dashboard.drawer.default`; receives `ExtensionContextValue` props; manages conversation state
- [ ] 8.2 Implement ConversationList component — `Box` + `List` rendering recent conversations; tap to load; "New conversation" Button
- [ ] 8.3 Implement ChatThread component — `Box` (stack: 'y') rendering messages as vertical list; auto-scroll to latest message
- [ ] 8.4 Implement MessageBubble component — `Box` with role-based styling (user: `background: 'container'`; assistant: default); `Inline` for text; `Badge` for freshness indicator
- [ ] 8.5 Implement InsightCard component — `Box` with `Banner` (type="info") for proactive insights; includes feedback buttons
- [ ] 8.6 Implement ThinkingIndicator component — `Box` with `Spinner` + `Inline` status text ("Analyzing...", "Fetching fresh data..."); updates after 5s
- [ ] 8.7 Implement ClarificationPrompt component — `Box` with `Banner` (type="default") + `Button` options for disambiguation choices
- [ ] 8.8 Implement ChatInput component — `Box` (stack: 'x') with `TextArea` for input + `Button` (type="primary") for send; disable send when empty or thinking
- [ ] 8.9 Implement WelcomePrompt component — greeting text + 3-5 guided prompt chips as `Button` components; tap to auto-send; shown when no active conversation
- [ ] 8.10 Implement chat flow orchestration: send message → show thinking → call `POST /chat/message` → render response + insights → update conversation list
- [ ] 8.11 Implement error state: `Banner` (type="critical") with error message + Retry `Button`; handle network errors, 500s, timeouts, LLM unavailability
- [ ] 8.12 Implement auth expiry handling: detect 401 `auth_refresh_failed` → switch to `SignInView`; preserve unsent message for retry

## 9. Proactive Insights (proactive-insights)

- [ ] 9.1 Implement insight generation logic in chat flow: parallel query for anomalies/trends during answer computation; pass candidates to LLM prompt alongside answer data
- [ ] 9.2 Implement anomaly detection: compare recent metrics against historical baselines; flag significant deviations (e.g., churn spike > 2x, revenue drop > 20%)
- [ ] 9.3 Implement trend detection: identify growth acceleration, segment shifts, milestone crossings from cached time-series data
- [ ] 9.4 Implement Edge Function: `GET /insights/welcome` — generate 1-2 recent insights from latest cached data for idle session welcome prompt; return empty array if insufficient data
- [ ] 9.5 Implement Edge Function: `POST /insights/feedback` — accept `insightId`, `messageId`, `rating` (positive/negative); store in message metadata JSONB
- [ ] 9.6 Implement InsightFeedback component — thumbs up/down `Button` components below insight cards; ARIA labels for accessibility; update state on tap
- [ ] 9.7 Create Zod schemas for insight endpoint request/response validation

## 10. Peer Benchmarking (peer-benchmarking)

- [ ] 10.1 Implement eligibility check: `checkBenchmarkingEligibility(accountId)` — query cached subscriptions to verify 5+ active subs and 1+ paid in past year
- [ ] 10.2 Implement Edge Function: `GET /benchmarking/compare` — check eligibility, check cache (24h TTL), fetch from Stripe Benchmarking API if miss/expired, return comparisons with percentile rankings
- [ ] 10.3 Implement benchmarking cache: upsert results in `benchmarking_cache` table with `fetched_at`; serve from cache if < 24h old
- [ ] 10.4 Integrate benchmarking into insight generation: include peer comparisons as insight candidates when account is eligible
- [ ] 10.5 Handle API unavailability gracefully: fall back to account-only metrics without error display
- [ ] 10.6 Create Zod schemas for benchmarking endpoint request/response validation

## 11. Testing

- [ ] 11.1 Unit tests: metric calculation functions (MRR, churn, ARPU, LTV, revenue breakdown) — 100% coverage; test edge cases (zero churn, multiple currencies, empty data, partial sync)
- [ ] 11.2 Unit tests: auth middleware (signature verification, RLS context setting, token refresh logic) — 100% coverage; test valid/invalid/missing signatures
- [ ] 11.3 Unit tests: PII sanitization layer — verify customer names, emails, identifiers are anonymized before LLM; verify no PII leaks
- [ ] 11.4 Unit tests: LLM prompt construction and response parsing — verify token budget targets, verify structured output parsing
- [ ] 11.5 Unit tests: freshness routing logic — verify cache/live/ambiguous classification for various query types
- [ ] 11.6 Unit tests: UI components (ChatView, MessageBubble, InsightCard, ThinkingIndicator, ClarificationPrompt, WelcomePrompt, ChatInput) — use `@stripe/ui-extension-sdk/testing` `render()`; test all states (loading, empty, populated, error, thinking)
- [ ] 11.7 Integration tests: Edge Function handlers (auth, sync, metrics, chat, insights, benchmarking) — test full request → auth → DB → response flow with Supabase test instance and mocked Stripe API
- [ ] 11.8 Integration tests: sync engine — test pagination, cursor resumability, rate limit backoff, upsert behavior with fixture Stripe data
- [ ] 11.9 Integration tests: chat flow end-to-end — send message → compute metrics → build prompt → mock LLM response → persist → return with insights
- [ ] 11.10 E2E tests (Playwright): install flow → OAuth → first sync → ask question → get answer → view history → insight feedback

## 12. Security Verification

- [ ] 12.1 Verify RLS policies on ALL 12 tables — attempt cross-account access and confirm it is blocked
- [ ] 12.2 Verify all 14 Edge Function endpoints reject requests without valid Stripe signatures (401)
- [ ] 12.3 Verify OAuth tokens never appear in logs, error responses, or client-side code
- [ ] 12.4 Verify PII sanitization: inspect LLM prompts in test to confirm no customer names/emails pass through
- [ ] 12.5 Verify Zod validation on all request bodies — test malformed/injection payloads
- [ ] 12.6 Verify audit logs contain only request IDs, timestamps, and action types — no PII
- [ ] 12.7 Verify CSRF protection: OAuth state parameter mismatch is rejected
- [ ] 12.8 Verify dual permission gate: requests for data the user lacks Stripe permissions for return 403

## 13. UI State Coverage Verification

- [ ] 13.1 Verify ChatView states: loading (Spinner), empty (WelcomePrompt), populated (ChatThread), thinking (ThinkingIndicator), error (Banner critical), clarification (ClarificationPrompt), auth expired (SignInView)
- [ ] 13.2 Verify ConversationList states: loading (Spinner), empty (first-time prompt), populated (conversation List)
- [ ] 13.3 Verify InsightCard states: populated (insight + feedback buttons), empty (no insights — hidden), feedback submitted (updated button state)
- [ ] 13.4 Verify OnboardingView states: loading (OAuth in progress), success (redirect to chat), error (Banner critical + retry)
- [ ] 13.5 Verify all interactive elements are keyboard accessible (send Button, prompt chips, retry Button, feedback buttons, conversation list items)
- [ ] 13.6 Verify ARIA live regions on ThinkingIndicator and error Banners for screen reader support

## 14. Performance Verification

- [ ] 14.1 Verify cached metric queries return in < 500ms with up to 50,000 cached objects — test MRR, churn, ARPU, LTV, revenue breakdown
- [ ] 14.2 Verify chat responses with cached data return in < 3s (Edge Function + LLM mock)
- [ ] 14.3 Verify conversation list and message history endpoints return in < 300ms and < 500ms respectively
- [ ] 14.4 Verify sync engine sustains 10 req/sec without Stripe 429 errors
- [ ] 14.5 Verify database indexes are used for common query patterns (EXPLAIN ANALYZE on metric aggregation queries)
- [ ] 14.6 Verify LLM token usage per request stays < 2,000 input tokens and < 1,000 output tokens

## 15. Compliance Verification

- [ ] 15.1 Verify full data deletion on uninstall: call `DELETE /account/data`, confirm zero rows remain across all 12 tables for that account
- [ ] 15.2 Verify audit logs have 90-day retention policy configured (auto-purge older records)
- [ ] 15.3 Verify AI disclaimer is accessible from the chat UI ("Insights are informational, not financial advice")
- [ ] 15.4 Verify data freshness indicators appear on all data-backed responses
- [ ] 15.5 Draft privacy policy covering cached Stripe data (customer PII), data retention, deletion policy

## 16. Deploy & Verify

- [ ] 16.1 Deploy Supabase migrations to staging environment
- [ ] 16.2 Deploy all Edge Functions to Supabase staging
- [ ] 16.3 Configure staging environment variables: LLM provider API key (via Supabase secrets), Stripe OAuth client ID/secret
- [ ] 16.4 Upload Stripe App to test mode: `stripe apps upload` — verify manifest, permissions, CSP
- [ ] 16.5 Smoke test in staging: install app → complete OAuth → trigger sync → ask question → get answer → view insights → test feedback
- [ ] 16.6 Verify rollback capability: redeploy previous Edge Function version, confirm app still functions
- [ ] 16.7 Deploy to production (live mode) for beta invites
- [ ] 16.8 Invite ~10 beta testers with sandbox/test install links
- [ ] 16.9 Monitor: verify audit logs are being written, check LLM token usage, confirm sync jobs complete successfully
