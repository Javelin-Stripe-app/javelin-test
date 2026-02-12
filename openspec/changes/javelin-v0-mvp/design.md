## Context

Javelin v0 is a greenfield Stripe App that provides AI-powered business intelligence inside the Stripe Dashboard. There is no existing codebase — this design establishes the foundation.

**Current state:** Empty project with Stripe Apps scaffolding, PRD, and product vision documents.

**Constraints:**
- Stripe App UI: React 17 + Stripe UI Toolkit (34 components only, no custom HTML/CSS/DOM)
- Backend: Supabase Edge Functions (Deno runtime) + Postgres with RLS
- Auth: Stripe OAuth 2.0 with Secret Store API for token persistence
- All Stripe data access via Edge Functions — UI never calls Supabase directly
- Stripe API rate limit: 25 req/sec, no server-side filtering (must fetch-then-filter)
- LLM calls must be declared in `stripe-app.json` CSP
- Sandboxed iframe: no localStorage, no refs, no DOM access, no Web Workers

**Stakeholders:** Solo founder, ~10 beta testers (invite-only, sandbox mode).

---

## Goals / Non-Goals

**Goals:**
- Establish a clean, layered architecture: Stripe App UI → Edge Functions → Stripe API / Postgres
- Enable accurate SaaS metric calculations (MRR, churn, ARPU, LTV) from cached Stripe data
- Build a chat interface within Stripe UI Toolkit constraints that feels natural for Q&A
- Create a swappable LLM provider layer that minimizes token costs
- Design a data cache that handles Stripe's lack of server-side filtering
- Ensure all data access is account-scoped via RLS from day one

**Non-Goals:**
- No write operations to Stripe (v0 is read-only)
- No real-time streaming of LLM responses (v0 uses request/response)
- No multi-account support
- No scheduled reports or notifications
- No custom routing — view-switching only (ContextView ↔ FocusView)
- No data warehouse patterns — cache is bounded and ephemeral

---

## Decisions

### D1: Full-Stack Stripe App Architecture

**Choice:** Full-stack app — React 17 UI extension + Supabase Edge Functions backend.

**Why:** The AI chat, metrics engine, data cache, and LLM integration all require server-side processing. A frontend-only app can't do any of this. The Stripe App UI is a thin rendering layer; all logic runs on Edge Functions.

**Alternatives considered:**
- Frontend-only with direct Stripe API calls: Can't do metrics calculations, caching, or LLM calls without a backend.
- External backend (non-Supabase): Adds deployment complexity. Supabase gives us Postgres + RLS + Edge Functions + auth in one platform.

**Data flow:**
```
User types question in ContextView
  → UI sends HTTP POST to Edge Function (chat/message)
    → Edge Function determines data needs (freshness routing)
      → Fetches from cache (Postgres) or live Stripe API
    → Edge Function computes metrics if needed
    → Edge Function sends prompt + data context to LLM
    → LLM returns answer
    → Edge Function appends proactive insights (if any)
    → Edge Function persists message + updates business context
  → UI renders response with freshness indicator
```

### D2: Authentication — Stripe OAuth → Supabase Session

**Choice:** Stripe OAuth 2.0 for user identity, with tokens stored in Stripe Secret Store. Edge Functions authenticate requests using a signed token from the Stripe App UI.

**Flow:**
1. User installs Javelin → Stripe OAuth flow triggers
2. UI receives `oauthContext` with authorization code
3. UI exchanges code for access/refresh tokens via Edge Function
4. Edge Function stores tokens in Stripe Secret Store (user scope)
5. For subsequent requests, UI calls `fetchStripeSignature()` to get a signed payload proving the request comes from an authenticated Stripe App session
6. Edge Function verifies the signature and retrieves OAuth tokens from Secret Store to make Stripe API calls

**Why Secret Store over Supabase for tokens:** Stripe Secret Store is the prescribed mechanism for Stripe Apps. It's encrypted, scoped to the app, and tied to the user's Stripe identity. Supabase would require its own auth layer on top.

**Why `fetchStripeSignature()` for request auth:** This is the Stripe Apps SDK's built-in mechanism for backend verification. It proves the request originates from an authenticated Stripe Dashboard session without exposing tokens to the client.

**Alternatives considered:**
- Custom JWT layer: Unnecessary complexity. Stripe already provides identity via the extension context and signature verification.
- Supabase Auth: Doesn't integrate with Stripe identity. Would require a separate login flow.

### D3: Stripe Data Cache — Normalized Tables with Sync Metadata

**Choice:** Normalized Postgres tables mirroring key Stripe objects (subscriptions, invoices, charges, customers, products, prices), each with sync metadata columns (`synced_at`, `stripe_account_id`). A separate `sync_jobs` table tracks sync state.

**Schema approach:**
- One table per Stripe object type: `cached_subscriptions`, `cached_invoices`, `cached_charges`, `cached_customers`, `cached_products`, `cached_prices`
- Each row stores the full Stripe object as JSONB (`stripe_data`) plus extracted indexed columns for query performance (e.g., `status`, `created`, `amount`, `currency`, `customer_id`)
- `synced_at` timestamp on every row — never presented as "live"
- `stripe_account_id` on every row — RLS policy scopes all access
- `sync_jobs` table tracks: account, object type, last sync cursor, status, error

**Sync strategy:**
- **Auto-sync (60-day rolling):** Triggered on first use and periodically. Uses Stripe's `created` parameter to paginate through recent data. Stores pagination cursor in `sync_jobs` for resumability.
- **On-demand backfill:** When the AI determines a query needs older data (e.g., "Q4 last year"), triggers a targeted backfill for that time range up to 24-month max.
- **Purge policy:** Data not queried for 60 days gets purged. Full purge on uninstall.

**Why JSONB + indexed columns (not pure JSONB or pure normalized):**
- Pure JSONB: Slow for aggregate queries (full scan for SUM of amounts)
- Pure normalized: Too many columns, schema changes with every Stripe API update
- Hybrid: JSONB preserves full object for the AI to reference, indexed columns enable fast aggregation

**Alternatives considered:**
- Materialized views for metrics: Deferred to v1. For ~10 beta users, computing metrics on-the-fly from indexed columns is fast enough and avoids cache invalidation complexity.
- Stripe Sigma: Requires SQL knowledge, no real-time, can't power an AI chat interface.

### D4: SaaS Metrics Engine — Edge Function Computation

**Choice:** Metrics (MRR, churn, ARPU, LTV, revenue breakdowns) are computed by Edge Functions querying the cache. No materialized views or pre-computation for v0.

**Metric definitions aligned with Stripe's official billing metric definitions:**
- **MRR:** Sum of all active subscription amounts normalized to monthly. Accounts for annual/quarterly plans by dividing by billing period.
- **Churn rate:** Subscriptions canceled or expired in period / total active subscriptions at period start.
- **ARPU:** MRR / active customer count.
- **LTV:** ARPU / monthly churn rate.
- **Revenue by segment:** Aggregated from cached invoices/charges, grouped by product, price, or customer metadata.

**Why compute on-the-fly:**
- ~10 beta users — no performance pressure for pre-computation
- Avoids cache invalidation complexity (metrics always reflect latest synced data)
- Simpler codebase — one code path for all metric queries
- Can add materialized views later if query latency exceeds 500ms target

**Alternatives considered:**
- Pre-computed metrics on a cron: Adds complexity and staleness for no benefit at v0 scale.
- Client-side calculation: Violates thin-client architecture. Metrics engine must run server-side.

### D5: LLM Provider — Abstracted Interface with Cost-Efficient Default

**Choice:** An `LLMProvider` interface in the Edge Functions layer that defines `generateResponse(prompt, context)` and `generateInsights(data)`. Initial implementation uses a single cost-efficient model (selection: Kimi K2, DeepSeek, or ChatGPT — finalized during implementation based on current pricing/availability).

**Interface:**
```typescript
interface LLMProvider {
  chat(messages: ChatMessage[], options?: LLMOptions): Promise<LLMResponse>;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface LLMResponse {
  content: string;
  usage: { promptTokens: number; completionTokens: number };
}
```

**Prompt architecture:**
- **System prompt:** Pre-loaded with Stripe billing metric definitions, clarification bias instructions, business context profile, and response formatting rules (freshness indicators, insight delivery timing).
- **User message:** The user's question plus relevant data context (cached metrics, recent sync timestamps).
- **Token optimization:** Metric calculations happen in Edge Functions and are passed as structured data — the LLM interprets and explains, not computes.

**Why the LLM explains but doesn't compute:**
- Accuracy: SQL/code-based metric computation is deterministic. LLMs hallucinate numbers.
- Cost: Passing pre-computed numbers is far fewer tokens than passing raw data for LLM computation.
- Trust: "MRR is $42,000" computed from actual data is verifiable. LLM-computed numbers aren't.

**CSP declaration:** The LLM provider URL must be added to `stripe-app.json` `content_security_policy.connect-src`. This means the provider choice is baked into the manifest at build time (can be changed per environment via manifest overrides).

### D6: Chat UI — ContextView with Message List Pattern

**Choice:** The primary chat interface renders in a `ContextView` (Stripe Dashboard drawer). Messages are rendered as a vertical stack of `Box` components with role-based styling. User input uses `TextArea` + `Button`.

**Component architecture (using composition patterns):**
```
ContextView ("Javelin")
├── ConversationList (Box + List) — sidebar for past conversations
├── ChatThread (Box, stack: 'y')
│   ├── WelcomePrompt (Box + Inline + guided prompt chips)
│   ├── MessageBubble[] (Box with role-based background tokens)
│   │   ├── UserMessage (Box + Inline, background: 'container')
│   │   ├── AssistantMessage (Box + Inline, includes freshness Badge)
│   │   └── InsightCard (Box + Banner type="info")
│   ├── ThinkingIndicator (Box + Spinner + Inline "Analyzing...")
│   └── ClarificationPrompt (Box + Banner type="default" + Button options)
├── ChatInput (Box, stack: 'x')
│   ├── TextArea (user input)
│   └── Button type="primary" (send)
└── InsightFeedback (Box + Button thumbs up/down)
```

**View routing:**
- `stripe.dashboard.drawer.default` → Main chat ContextView (appears on every Dashboard page)
- `settings` → SettingsView (future: preferences)
- FocusView for expanded conversation history (optional, accessed via "View full history" link)

**UI state mapping:**
| State | Component | Behavior |
|-------|-----------|----------|
| Loading (initial) | Spinner | Shown while fetching conversation history |
| Empty (no conversations) | WelcomePrompt | Guided prompts: "What's my MRR?", "How's churn trending?" |
| Populated (active chat) | ChatThread | Message list with scroll |
| Thinking (AI processing) | ThinkingIndicator | Spinner + elapsed time counter |
| Error (API/LLM failure) | Banner type="critical" | Error message with retry Button |
| Clarification needed | ClarificationPrompt | AI asks user to disambiguate |

**Why ContextView (not FocusView) as primary:**
- Chat is a quick-access tool — users want to ask a question and get an answer while looking at their Stripe data
- ContextView renders alongside Dashboard content, enabling side-by-side reference
- FocusView blocks the Dashboard — wrong UX for a conversational assistant

### D7: Proactive Insights — Post-Response Append Strategy

**Choice:** Insights are generated as part of the chat response flow, appended after the direct answer. A separate Edge Function analyzes recent cached data for anomalies/trends on each interaction.

**Insight generation approach:**
1. User asks a question → Edge Function computes answer
2. While computing, a parallel query checks for relevant insights based on the data context
3. The LLM receives both the answer data and insight candidates in a single prompt
4. Response format: direct answer first, then "By the way..." insight section
5. For idle sessions (user opens Javelin without asking), the welcome prompt includes 1-2 recent insights

**Insight types for v0:**
- Metric anomalies (churn spike, revenue drop/surge)
- Trend observations (growth acceleration, segment shifts)
- Peer benchmarking comparisons (when eligible)

**Why not a separate insights endpoint:**
- Insights are contextual — they're most valuable when related to what the user just asked about
- A single LLM call with both answer + insights is more token-efficient than two separate calls
- Keeps the UX simple — no separate "insights tab" to check

### D8: Chat Persistence — Supabase Tables with Account Scoping

**Choice:** Conversations and messages stored in Supabase Postgres with RLS scoped to `stripe_account_id`. Business context profile stored as a JSONB document per account.

**Tables:**
- `conversations`: `id`, `stripe_account_id`, `title` (auto-generated), `created_at`, `updated_at`
- `messages`: `id`, `conversation_id`, `role` (user/assistant/system), `content`, `metadata` (JSONB — freshness info, insight flags, feedback), `created_at`
- `business_context`: `stripe_account_id` (PK), `profile` (JSONB — industry, products, pricing model, key metrics preferences), `updated_at`

**Business context accumulation:**
- After each conversation, the LLM is prompted to extract any new business context from the interaction
- Context is merged into the existing profile (additive, not replacing)
- The profile is injected into the system prompt for subsequent conversations
- v0 keeps this simple — a flat JSONB document, not a knowledge graph

### D9: Peer Benchmarking — Stripe Benchmarking API via Edge Functions

**Choice:** Edge Functions call the Stripe Benchmarking API using stored OAuth tokens. Results are cached short-term (24h) since benchmarking data updates weekly at most.

**Flow:**
1. Edge Function checks if the account meets eligibility (5+ active subscriptions)
2. If eligible, fetches benchmarking data for the 7 supported metrics
3. Caches results in a `benchmarking_cache` table (24h TTL)
4. LLM incorporates benchmarking context when generating insights or answering comparative questions

**Why 24h cache:** Benchmarking data is derived from aggregate peer data that Stripe updates infrequently. Caching for 24h eliminates redundant API calls without staleness risk.

---

## Security Design (STRIDE)

| Threat | Category | Mitigation |
|--------|----------|------------|
| Attacker impersonates user to access data | **Spoofing** | Stripe OAuth identity verification; `fetchStripeSignature()` for backend auth; RLS scopes all queries to authenticated account |
| Attacker modifies chat messages or metric data in transit | **Tampering** | HTTPS for all communication; Edge Functions are the only write path to Postgres; UI has no direct DB access |
| User denies actions taken by AI | **Repudiation** | 90-day audit log with request IDs, timestamps, actions taken; all messages persisted |
| Stripe customer PII exposed via LLM or logs | **Information Disclosure** | PII sanitization before LLM calls (replace names/emails with tokens); no PII in execution logs; RLS prevents cross-account access |
| Excessive API calls exhaust Stripe rate limit or LLM budget | **Denial of Service** | Cache-first strategy reduces Stripe API calls; LLM token budget per request; rate limiting on Edge Functions |
| Edge Function escalates beyond user's Stripe permissions | **Elevation of Privilege** | Dual permission gate: app permissions ∩ user permissions; OAuth tokens inherit user's access level; RLS enforced at database level |

**PII handling for LLM calls:**
- Customer names, emails, and identifiable data are replaced with anonymized tokens before sending to the LLM
- The LLM receives structured metric data (numbers, percentages, counts) — not raw customer records
- Mapping between tokens and real data exists only in the Edge Function memory during request processing

---

## Test Architecture

**Framework:** Vitest (unit/integration) + Playwright (E2E)

| Layer | Test Type | What's Tested | Mocks |
|-------|-----------|---------------|-------|
| UI Components | Unit | Component rendering, state transitions, props | Edge Function responses mocked |
| Edge Functions | Unit | Metric calculations, data transformations, auth logic | Supabase client mocked, Stripe API mocked |
| Edge Functions | Integration | Full request → DB → response flow | Supabase test instance, Stripe API mocked |
| LLM Integration | Unit | Prompt construction, response parsing, PII sanitization | LLM provider mocked |
| E2E | End-to-end | Install → ask question → get answer → view history | Test Stripe account, Supabase test instance |

**Required mocks:**
- `@stripe/ui-extension-sdk/testing` — `render()` for UI component tests
- Stripe API responses — fixture-based (real Stripe object shapes)
- LLM responses — fixture-based (realistic chat completions)
- Supabase client — in-memory for unit tests, test instance for integration

**Coverage targets for v0:**
- Metric calculation functions: 100% (correctness is critical)
- Auth flow: 100% (security-critical)
- UI components: 80%+ (all states covered)
- Edge Function handlers: 80%+
- E2E: Happy path + key error paths

---

## API Surface

All endpoints are Supabase Edge Functions, called via HTTP from the Stripe App UI.

| Method | Path | Purpose | Auth |
|--------|------|---------|------|
| POST | `/auth/callback` | Exchange OAuth code for tokens, store in Secret Store | Stripe signature |
| POST | `/auth/refresh` | Refresh expired access token | Stripe signature |
| POST | `/sync/trigger` | Trigger data sync for account (60-day rolling) | Stripe signature |
| POST | `/sync/backfill` | Request historical data backfill for a time range | Stripe signature |
| GET | `/sync/status` | Get sync job status and last sync timestamps | Stripe signature |
| POST | `/chat/message` | Send a message, get AI response + insights | Stripe signature |
| GET | `/chat/conversations` | List conversations for account | Stripe signature |
| GET | `/chat/conversations/:id` | Get messages for a conversation | Stripe signature |
| GET | `/metrics/:type` | Get computed metric (MRR, churn, ARPU, LTV) | Stripe signature |
| GET | `/metrics/revenue` | Get revenue breakdown by segment | Stripe signature |
| GET | `/insights/welcome` | Get proactive insights for idle session | Stripe signature |
| POST | `/insights/feedback` | Submit thumbs up/down on an insight | Stripe signature |
| GET | `/benchmarking/compare` | Get peer benchmarking data | Stripe signature |
| DELETE | `/account/data` | Full data deletion (uninstall hook) | Stripe signature |

**Request/response format:** JSON. All requests include Stripe signature header for verification. All responses follow a consistent envelope:
```typescript
// Success
{ data: T, meta: { freshness: 'cached' | 'live', syncedAt?: string } }

// Error
{ error: { code: string, message: string, requestId: string } }
```

**Validation:** Zod schemas for all request bodies (server-side required).

---

## Performance

**Response time targets:**
| Operation | Target | Strategy |
|-----------|--------|----------|
| Cached metric query | < 500ms | Indexed columns + SQL aggregation |
| Chat message (cached data) | < 3s | Pre-computed metrics + single LLM call |
| Chat message (live fetch needed) | < 8s | Stripe API fetch + compute + LLM; "thinking" indicator shown |
| Conversation history load | < 300ms | Indexed by account + conversation |
| Initial sync (60 days) | Background | Async job, UI shows progress |

**Stripe API rate limiting:**
- Cache-first strategy: most queries served from Postgres, not live API
- Sync jobs use cursor-based pagination with 100-item pages
- Backfill jobs are queued and rate-limited to 10 req/sec (leaving headroom)
- Single-object lookups (live) are rare and individually cheap

**LLM token optimization:**
- Metric calculations done server-side, passed as numbers — not raw data for LLM to compute
- System prompt is cached/reused across messages in a conversation
- Business context profile is compact JSONB, not full conversation replay
- Target: < 2,000 tokens per request (system + user + context), < 1,000 tokens per response

**Database indexes:**
- `cached_*` tables: composite index on `(stripe_account_id, created)` for time-range queries
- `cached_*` tables: index on `(stripe_account_id, status)` for active/canceled filtering
- `messages`: index on `(conversation_id, created_at)` for chronological retrieval
- `conversations`: index on `(stripe_account_id, updated_at)` for recent-first listing

---

## Deployment Strategy

**Environments:**
| Environment | Purpose | Stripe Mode |
|-------------|---------|-------------|
| Development | Local dev with `stripe apps start` | Test mode |
| Staging | Pre-release validation | Test mode (sandbox) |
| Production | Beta users (~10) | Live mode (invite-only) |

**Deployment order for v0 (no existing infrastructure):**
1. Supabase project setup: create project, configure RLS policies, deploy schema
2. Edge Functions deployment: deploy all functions to Supabase
3. Stripe App manifest: configure `stripe-app.json` with permissions, CSP, views
4. Stripe App upload: `stripe apps upload` for review/testing
5. Beta invites: share install link with ~10 testers

**Rollback strategy:**
- Supabase Edge Functions: redeploy previous version (Supabase supports function versioning)
- Database schema: expand/contract pattern — never drop columns in the same deploy that stops using them
- Stripe App: upload new version to replace broken one

**Feature flags:** Not needed for v0 (all features ship together to a small beta group). Consider for v1 when incrementally shipping to a larger audience.

---

## Database Migration Plan

Since this is a greenfield build, the initial migration creates all tables. Future schema changes follow expand/contract pattern.

**Initial migration (v0):**

Tables to create:
1. `cached_subscriptions` — Stripe subscription cache
2. `cached_invoices` — Stripe invoice cache
3. `cached_charges` — Stripe charge cache
4. `cached_customers` — Stripe customer cache
5. `cached_products` — Stripe product cache
6. `cached_prices` — Stripe price cache
7. `sync_jobs` — Sync state tracking per account per object type
8. `conversations` — Chat conversations per account
9. `messages` — Chat messages per conversation
10. `business_context` — Accumulated business profile per account
11. `benchmarking_cache` — Cached benchmarking results (24h TTL)
12. `audit_logs` — Execution logs (90-day retention)

**All tables include:**
- `stripe_account_id` column for RLS scoping
- RLS policy: `stripe_account_id = current_setting('app.stripe_account_id')`
- `created_at` / `updated_at` timestamps

**Rollback:** Drop all tables (greenfield — no data to preserve in dev/staging).

---

## Compliance

**Data classification:**
| Data Type | Classification | Storage | Retention |
|-----------|---------------|---------|-----------|
| Stripe OAuth tokens | Secret | Stripe Secret Store (encrypted) | Until refresh expiry (1yr rolling) |
| Cached Stripe objects (includes customer PII) | Confidential | Supabase Postgres (RLS-enforced) | 60-day inactivity purge, full delete on uninstall |
| Chat messages | Internal | Supabase Postgres (RLS-enforced) | Until uninstall |
| Business context profile | Internal | Supabase Postgres (RLS-enforced) | Until uninstall |
| Audit logs | Internal | Supabase Postgres (RLS-enforced) | 90-day retention, auto-purge |
| Benchmarking results | Internal | Supabase Postgres (RLS-enforced) | 24h TTL |

**Controls:**
- RLS on all tables — non-negotiable, enforced at database level
- No PII in logs — audit logs contain request IDs, timestamps, action types only
- PII sanitization before LLM calls — customer names/emails anonymized
- AI disclaimer on all responses — "Insights are informational, not financial advice"
- Data freshness indicators on all data-backed responses
- Full data deletion on uninstall (all tables for that account)
- Privacy policy required before beta launch (cached Stripe data contains customer PII)

---

## Risks / Trade-offs

| Risk | Severity | Mitigation |
|------|----------|------------|
| Stripe API rate limiting causes sync failures during initial backfill | Medium | Cursor-based pagination with 10 req/sec self-imposed limit; exponential backoff on 429s; sync is resumable |
| LLM hallucinations produce incorrect metric explanations | High | Metrics computed server-side, LLM only explains; response includes raw numbers for user verification; clarification bias reduces ambiguity |
| LLM provider becomes unavailable or changes pricing | Medium | Abstracted provider interface enables swap; v0 selects cheapest viable option |
| Stripe Secret Store 10-secret limit constrains future features | Low | v0 needs only 2 secrets per user (access token, refresh token); monitor usage as features grow |
| ContextView drawer width limits complex data visualization | Medium | Use charts (BarChart, LineChart, Sparkline) for compact visualization; FocusView available for expanded views; accept that this is a conversational interface, not a dashboard |
| PII leakage to LLM despite sanitization | High | Structured metric data passed instead of raw records; sanitization layer strips identifiers; audit log tracks what was sent; review prompts during testing |
| Initial data sync takes too long for first-time experience | Medium | Sync runs in background; AI can answer basic questions from partial data; show sync progress in UI |
| Business context accumulation drifts or becomes stale | Low | Context is additive and lightweight; user can reset via settings; v0 scope is small enough that drift is unlikely with ~10 users |

---

## Open Questions

1. **LLM provider selection:** Kimi K2, DeepSeek, or ChatGPT? Decision depends on current pricing, quality for structured data interpretation, and availability of APIs that work within Stripe App CSP constraints. To be resolved during implementation.
2. **Stripe Benchmarking API access:** Need to verify API availability and exact endpoint format. Documentation suggests it may only be accessible via Stripe Dashboard, not programmatic API. Fallback: scrape benchmarking insights from Stripe's billing analytics if direct API isn't available.
3. **Sync trigger mechanism:** Should initial sync happen automatically on install (via `onboarding` viewport) or on first chat interaction? Auto-on-install provides better first experience but may waste resources if users don't engage.
4. **Conversation title generation:** Auto-generate from first message content (via LLM) or use a simple timestamp-based default? LLM-generated titles are better UX but add token cost per conversation.
