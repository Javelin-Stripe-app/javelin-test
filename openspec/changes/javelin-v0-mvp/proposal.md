## Why

Stripe gives users transactions, not answers. Core SaaS metrics (MRR, churn, ARPU, LTV) aren't available natively, revenue can't be sliced by product/plan/segment, and business questions require custom scripts, CSV exports, or $100+/mo third-party tools. Javelin v0 solves this by putting an AI-powered chat interface directly inside the Stripe Dashboard that answers plain-language business questions using the user's own Stripe data — and proactively surfaces insights they didn't think to ask about. This is the MVP: invite-only, ~10 beta users, read-only, free.

## What Changes

- **New: Stripe OAuth authentication** — Users authenticate via Stripe OAuth 2.0, with access/refresh tokens managed through the Stripe Secret Store API. This is the foundation for all Stripe data access.
- **New: Query-optimized Stripe data cache** — A Supabase-backed cache of Stripe objects (subscriptions, invoices, charges, customers) with 60-day rolling auto-sync, on-demand historical backfill (up to 24 months), AI-driven freshness routing, and full purge on uninstall.
- **New: SaaS metrics engine** — Computed metrics (MRR, churn rate, ARPU, LTV, revenue by product/plan) derived from cached data, aligned with Stripe's official billing metric definitions. 100% accuracy target for data metrics.
- **New: AI chat interface** — Plain-language Q&A in the Stripe Dashboard drawer (ContextView). Users type business questions, get accurate answers with freshness indicators. Includes thinking state, guided prompts, and strong clarification bias for ambiguous queries. Built entirely with Stripe UI Toolkit components (34-component constraint, Box/Inline design token styling, no DOM access).
- **New: Proactive insights engine** — AI-generated observations (anomalies, trends, risks, opportunities) surfaced *after* answering the user's question. Welcome prompt with insights for idle sessions. 80-90% directional accuracy target.
- **New: Persistent chat and business context** — Chat history persists across sessions per Stripe account. AI accumulates a lightweight business profile (industry, products, pricing model) so it doesn't re-learn the business each session.
- **New: Peer benchmarking integration** — Leverages Stripe's Benchmarking API to contextualize user metrics against ~100 peer businesses (matched by industry, ARR, ARPU). Surfaces comparisons as proactive insights (e.g., "Your churn rate is 2x the median for businesses your size").
- **New: LLM provider abstraction** — Backend integration with a cost-efficient LLM (Kimi K2 / DeepSeek / ChatGPT) via an abstracted provider layer, enabling model swaps without rewriting business logic. Declared in `stripe-app.json` CSP.

## Capabilities

### New Capabilities

- `stripe-auth`: Stripe OAuth 2.0 flow, token lifecycle (1hr access / 1yr rolling refresh), Secret Store API integration, and account-scoped session management
- `stripe-data-cache`: Query-optimized Stripe data cache in Supabase — auto-sync (60-day rolling), on-demand backfill (24-month max), AI-driven freshness routing, sync timestamps, data lifecycle (60-day inactivity purge, full delete on uninstall)
- `saas-metrics`: SaaS metric calculations (MRR, churn rate, ARPU, LTV, revenue by product/plan/segment) derived from cached Stripe data, aligned with Stripe's official billing metric definitions as canonical source of truth
- `ai-chat`: AI-powered plain-language Q&A in the Stripe Dashboard drawer — chat-style UX with Stripe UI Toolkit components, thinking indicator, guided prompts, clarification bias (temporal scope, metric definitions, entity scope), freshness indicators on all data responses
- `proactive-insights`: AI-surfaced observations delivered contextually — anomalies, trends, risks, opportunities shown after answering the user's question; welcome prompt insights for idle sessions; 80-90% directional accuracy
- `chat-persistence`: Persistent chat history and accumulated business context profile per Stripe account — conversations accessible across sessions, lightweight business profile (industry, products, pricing model) that grows over time
- `peer-benchmarking`: Stripe Benchmarking API integration for peer comparison insights — contextualizes metrics against ~100 matched businesses across 7 metrics (gross/net MRR churn, subscriber churn, retention, MRR growth, LTV, ARPU, trial conversion); requires 5+ active subscriptions eligibility

### Modified Capabilities

_None — greenfield build, no existing specs._

## Impact

### New API Surface (Supabase Edge Functions)
- Auth endpoints: OAuth callback, token refresh, session validation
- Data sync endpoints: trigger sync, backfill request, cache status
- Metrics endpoints: calculated SaaS metrics with temporal parameters
- Chat endpoints: send message, get history, get conversation list
- Insights endpoints: get insights for context, feedback (thumbs up/down)
- Benchmarking endpoints: peer comparison data retrieval

### New Database Schema (Supabase Postgres + RLS)
- Stripe data cache tables (subscriptions, invoices, charges, customers, sync metadata)
- Chat/conversation tables (messages, conversations, per-account)
- Business context profile table (per-account accumulated context)
- Metrics cache/materialized views
- Execution/audit log tables (90-day retention)
- **All tables require RLS** — scoped to Stripe account

### Dependencies
- **Stripe API** (read-only via OAuth) — primary data source
- **Stripe Benchmarking API** — peer comparison data
- **Stripe Secret Store API** — token persistence
- **LLM provider API** (Kimi K2 / DeepSeek / ChatGPT) — must be declared in `stripe-app.json` CSP
- **Supabase** — Postgres, RLS, Edge Functions

### Security Considerations
- OAuth token handling: access tokens (1hr) and refresh tokens (1yr rolling) via Secret Store — never in `.env` or client code
- All Supabase tables require RLS — no bypass
- No PII/PHI in logs — request IDs, timestamps, non-sensitive metadata only
- Cached Stripe data contains customer PII (names, emails) — privacy policy required
- AI disclaimer required — insights are informational, not financial advice
- External LLM API calls must not send raw customer PII — sanitize/anonymize before sending

### Performance Considerations
- Stripe API rate limit: 25 req/sec — cache and batch to stay within limits
- Cached data queries target < 500ms response time
- Live Stripe API queries show "thinking..." indicator during processing
- LLM token usage must be minimized — efficient prompting, metric calculation caching

### Compliance
- SOC 2 readiness (structured audit logs, documented access controls, data lifecycle enforcement) — no formal certification for v0
- Full data deletion on uninstall (cache, chat history, business context, execution logs)
- USA-only data residency for v0

### UI Constraints (Stripe Apps)
- All UI via Stripe UI Toolkit's 34 components — no custom HTML/CSS/DOM access
- Styling limited to `Box`/`Inline` `css` prop with design tokens (semantic colors, spacing tokens, font tokens)
- Sandboxed iframe: no refs, no localStorage, no Web Workers, no custom animations
- ContextView (fixed-width drawer) is the primary viewport; FocusView for expanded views
- Serialization model: only serializable data types as component props
