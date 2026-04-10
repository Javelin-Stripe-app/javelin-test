# PRD: Javelin v0 — AI-Powered Stripe Business Intelligence

**Version:** v0 (MVP)
**Product Vision Reference:** See `openspec/product-vision-strategy.md` for strategic context

---

## What We're Building

Javelin v0 is an AI-powered chat interface that lives inside the Stripe Dashboard and answers plain-language business questions using the user's own Stripe data. It solves the #1 problem in Stripe's ecosystem: **visibility gaps** — the data exists but there's no way to see it the way operators need to.

Users ask questions like "What's my MRR?" or "Which products are growing fastest?" and get accurate, instant answers. The AI also proactively surfaces insights the user didn't ask about — anomalies, trends, and risks — creating a "magic" experience where Javelin knows the business and gets smarter over time.

v0 is invite-only (test/sandbox mode), free, targeting ~10 beta users.

---

## Who It's For

- **Primary users:** All Stripe Dashboard users at small companies — founders, ops leads, finance leads who use Stripe as core business infrastructure
- **Context:** They're inside the Stripe Dashboard managing their business, want to understand what's happening without exporting CSVs or paying $100+/mo for third-party analytics tools

---

## The Problem We're Solving

Stripe gives you transactions, not answers. The data exists in the platform, but users can't answer basic business questions without building custom scripts, exporting to spreadsheets, or paying for expensive analytics tools.

**What's broken today:**
- **Core SaaS metrics are missing** — MRR, churn, ARPU, LTV aren't available natively in Stripe. Users calculate them manually or pay for Baremetrics ($108/mo) / ChartMogul.
- **No revenue breakdowns** — Can't slice revenue by product, plan, country, or customer segment. Dashboard only shows totals.
- **Business questions are unanswerable** — Subscription movements (upgrades vs downgrades), growth drivers, churn reasons — none visible without custom work.
- **Export-to-spreadsheet is the workaround** — "Most indie hackers I know either build janky spreadsheets every month or just don't track metrics properly."
- **API pagination nightmare** — Getting aggregate data requires paging through thousands of records, hitting Stripe's rate limits. No aggregate endpoints exist.

**Why this matters now:** Stripe has no plans to solve this. Sigma (their SQL product) can technically surface some of this data, but it requires SQL fluency and significant manual effort — it's impractical for non-technical users and time-consuming even for technical ones. Every founder ends up rebuilding the same analytics. Javelin can make this a zero-effort outcome.

**Research basis:** 45+ verbatim user quotes from Hacker News, Stack Overflow, GitHub Issues, Indie Hackers, and Stripe Community forums. See `.ops/research/research examples.csv` for full dataset.

---

## Goals & Outcomes (This Version)

**Primary goal:**
- A user can ask a plain-language question about their Stripe business and get an accurate answer instantly — no exports, no scripts, no third-party tools.

**Secondary goal:**
- The AI proactively surfaces insights the user didn't ask about, creating a "magic" experience — "here's something I noticed about your business."

**The aha moment:** User installs Javelin, asks "What's my MRR?", gets an accurate answer in seconds. Then, appended to that answer, sees an unsolicited insight like "By the way — your Pro plan grew 23% this month, but Basic plan churn doubled. And your MRR growth is in the top quartile of similar businesses." That's when they're hooked.

---

## Must-Have Features (v0)

These are the **non-negotiables** for this version:

1. **Stripe data cache** — Query-optimized local cache of Stripe data in Supabase. Auto-syncs recent data (60-day rolling window), on-demand backfill for historical queries (up to 24 months), AI-driven freshness routing (decides per-query whether to use cache or fetch live).

2. **SaaS metrics engine** — Calculates business metrics Stripe doesn't provide natively: MRR, churn rate, ARPU, LTV, revenue by product/plan. Derived from cached Stripe data (subscriptions, invoices, charges, customers). All metric definitions must align with [Stripe's official billing metric definitions](https://docs.stripe.com/billing/subscriptions/analytics#billing-metric-definitions) as the canonical source of truth — this prevents "my MRR doesn't match Stripe" confusion and ensures consistency with the platform users already trust. The AI must be pre-loaded with these definitions so it calculates and explains metrics the same way Stripe does.

3. **AI chat interface** — Plain-language Q&A inside the Stripe Dashboard drawer. Users type business questions, get accurate answers with supporting data. Chat-style UX with guided prompts to help users know what to ask. Clear visual indicator during AI processing ("thinking... Xs"). The AI has a **strong clarification bias** — when a question is ambiguous, it asks before assuming. Key ambiguity domains include: temporal scope ("last month" = last 30 days or last calendar month?), metric definitions (gross vs net churn?), and entity scope (all products or a specific one?). This prevents confident-but-wrong answers that erode trust.

4. **Proactive insights** — The AI surfaces notable findings the user didn't ask about: anomalies, trends, risks, opportunities. **Timing matters:** insights are delivered *after* answering the user's question, not before — users who open Javelin have a question they want answered, and unsolicited analysis before that answer creates friction. Insights should feel like a knowledgeable colleague adding context: "Your revenue last calendar month was $42,000. By the way — 35% of that came from Europe, up from 22% last quarter." For sessions where the user browses without asking a question, insights can surface as a welcome prompt. Examples: "Churn spiked 3x this week," "Your Enterprise plan revenue overtook Pro for the first time," "12 annual subscriptions expire next month."

5. **Persistent chat + business context** — Conversations are saved and accessible across sessions. The AI accumulates a lightweight business profile over time (industry, key products, pricing model, important metrics) so it doesn't re-learn the business every session. Scoped per Stripe account.

6. **Peer benchmarking insights** — Leverages [Stripe's benchmarking data](https://docs.stripe.com/billing/subscriptions/analytics/benchmarking) to contextualize a user's metrics against similar businesses. Stripe compares against 100+ peer businesses (matched by industry, ARR, ARPU via k-nearest-neighbors) across seven metrics: gross/net MRR churn, subscriber churn, subscriber/revenue retention, MRR growth, LTV, ARPU, and trial conversion. Javelin surfaces these comparisons as proactive insights — e.g., "Your subscriber churn rate is 2x the median for businesses your size" or "Your trial conversion rate is in the top quartile of your peer group." Requires the user's Stripe account to meet benchmarking eligibility (5+ active subscriptions, 1+ paid subscription in the past year).

---

## Nice-to-Have Features (v0)

Valuable enhancement that is **not required but would strengthen v0**:

- **Historical trend comparisons** — "This month vs last month" or "Q1 vs Q4" comparisons within answers and insights. Enriches the core experience without being a separate feature.

---

## Deferred Features (v1+)

- Scheduled reports / recurring digests (daily MRR email, weekly summary)
- Custom saved views / bookmarked queries
- Exportable charts or reports (CSV, PDF)
- Multi-account support
- Notifications (email, Slack)
- Stored insights knowledge graph (explicit insight tagging and retrieval)
- Write operations to Stripe
- End-customer-facing features
- Stripe App Marketplace publishing
- Pricing / billing

---

## How We'll Know It's Working

Success signals for v0, ranked by priority:

### User Behavior (Primary Signal)
- **Prompts per user per week** — Are users treating Javelin as a go-to tool or a one-time experiment? Target: 5+ questions/week per active user.
- **Return rate** — Do users come back after first session? Target: 60%+ return within 7 days.
- **Session depth** — How many questions per session? Multiple questions = value discovered. Target: 3+ per session.

### Adoption Signals
- **Install completion rate** — Do invited users successfully get through setup? Target: 80%+ of invites result in active use.
- **Time-to-first-answer** — How fast from install to first successful question answered? Target: under 2 minutes.

### Quality Signals
- **Prompt resolution rate** — Percentage of questions that result in a useful answer without abandonment. Target: 70%+ for v0.
- **Insight satisfaction** — Thumbs up/down on proactive insights. Target: 60%+ positive.
- **Refinement rate** — How many follow-up prompts needed to get the right answer? Lower = better. Target: <2 follow-ups on average.

---

## Requirements (More Detail)

### Functional Requirements

- AI must confirm before any write operation (v0 is read-only, but the pattern must be established)
- Answers must include a freshness indicator: "Data as of [timestamp]" for cached data, "Live data" for fresh Stripe API fetches
- AI has a strong clarification bias — asks before assuming when intent is ambiguous (temporal scope, metric definition, entity scope). See must-have #3 for detail.
- All interactions happen inside the Stripe Dashboard drawer/panel — no external UI
- Data accuracy for business metrics must target 100% (MRR, revenue, counts must be exact)
- Insight accuracy target is 80-90% (directionally correct analysis is acceptable)
- Chat history persists across sessions per Stripe account
- Business context profile accumulates over time — AI should not re-ask questions it's already learned the answer to
- Proactive insights surface *after* answering the user's question, not on session start. For idle/browsing sessions without a question, insights can surface as a welcome prompt.
- Uninstall triggers full data deletion (cache, chat history, business context, execution logs)

### Non-Functional Requirements

- **Response time:** Cached data queries < 500ms. Live Stripe API queries as fast as possible with clear "thinking..." visual indicator during processing.
- **Accuracy:** 100% for business data/metrics. 80-90% acceptable for AI-generated insights and analysis.
- **Availability:** 90% uptime target for v0. (v1 target: 99%)
- **Accessibility:** Built accessible from day one — ARIA roles, keyboard navigation, screen reader support, contrast standards. Non-negotiable from the start so it doesn't need retrofitting.

---

## Technical Considerations (High Level)

*This section respects the Product Technical Strategy from `openspec/product-vision-strategy.md`*

### Assumptions

- **Stripe App UI:** React 17 + Stripe UI Toolkit (`@stripe/ui-extension-sdk`)
- **Backend:** Supabase (Postgres + RLS + Edge Functions)
- **Auth:** Stripe OAuth 2.0 (access tokens via Secret Store API)
- **Validation:** Zod (server-side required)
- **Testing:** Vitest + Playwright
- **Package manager:** npm
- **LLM:** Abstracted provider layer — starting with a cost-efficient model (Kimi K2, DeepSeek, or ChatGPT). Must be swappable without rewriting business logic.
- **LLM cost awareness:** v0 must use a cheap model. Minimize token usage through efficient prompting, caching of common metric calculations, and avoiding redundant API calls.
- **No standalone web app** — Stripe Dashboard extension only
- **Stripe data is always source of truth** — cache is secondary, always marked with sync timestamps

See `openspec/product-vision-strategy.md` for full core platform decisions (§8-§10).

### Design Constraints (Stripe App UI Boundaries)

- **34 Stripe UI Toolkit components only** — all UI must be composed from Toolkit components imported from `@stripe/ui-extension-sdk/ui`. No raw HTML elements.
- **No CSS frameworks** — no Tailwind, CSS Modules, styled-components, or CSS file imports. Styling uses `Box`/`Inline` `css` prop with design tokens only.
- **No DOM access** — sandboxed iframe prevents refs, querySelector, localStorage, custom animations, drag-and-drop, file uploads, or canvas/SVG.
- **No custom fonts or colors** — limited to Stripe's semantic color tokens and font tokens. No hex values, RGB, or arbitrary spacing.
- **Fixed viewport** — ContextView renders in a fixed-width drawer; FocusView takes full width. No responsive breakpoints or media queries.
- **Serialization constraints** — functions become async when proxied; only serializable data types allowed as component props (no `Map`, `Set`, `Date` objects).
- Full analysis: `.ops/analysis/stripe-app-design-boundaries.md`

### Constraints

- **Stripe API rate limit:** 25 req/sec — cache and batch to stay within limits
- **Stripe API has no subset querying** — can't filter data server-side (e.g., "payments $30-50 from Q4 from Europe"). Must fetch and filter locally. This is the primary driver for the query-optimized cache.
- **Stripe Secret Store:** Max 10 secrets per scope type. OAuth tokens stored here, not in `.env`.
- **RLS non-negotiable** — all user data tables must have Row Level Security enabled
- **No PII in logs** — log only request IDs, timestamps, non-sensitive metadata
- **Data residency:** USA only for v0
- **SOC 2 readiness:** Build with SOC 2 in mind (structured audit logs, documented access controls, data lifecycle enforcement) without pursuing formal certification. This avoids costly retrofitting for v1.
- **Privacy policy required** — cached Stripe data contains customer PII (names, emails). Must have clear data handling disclosure.
- **AI disclaimer required** — insights are informational, not financial or business advice
- **Stripe App CSP:** All external API calls (LLM provider) must be declared in `stripe-app.json` content security policy

See `openspec/product-vision-strategy.md` for full security and compliance posture (§11).

### Dependencies

- **Stripe API** — Primary data source (read-only via OAuth)
- **LLM provider API** — Chat and insights generation (Kimi K2 / DeepSeek / ChatGPT)
- **Supabase** — Backend infrastructure (Edge Functions, Postgres, auth)
- **Stripe CLI** — Required for local development and testing (`stripe apps start`)
- **Stripe Benchmarking API** — Peer comparison data for proactive insights (requires user eligibility: 5+ active subscriptions)
- **~10 beta testers** — Invite-only via test/sandbox Stripe App install (no Marketplace approval needed for v0)

---

## What's NOT In Scope

Explicit exclusions for v0:

- **No write operations to Stripe** — v0 is read-only. No creating, updating, or deleting Stripe objects.
- **No notifications** — No email, Slack, or webhook notifications
- **No data exports** — No CSV, PDF, or chart exports
- **No scheduled reports** — No recurring digests or automated summaries
- **No multi-account support** — Single Stripe account per install
- **No custom saved views** — No bookmarking or saving specific queries
- **No stored insights knowledge graph** — Business context accumulates, but individual insights are not explicitly tagged/stored for retrieval (v1)
- **No end-customer-facing features** — Internal ops only, per product vision §7
- **No Stripe App Marketplace publishing** — Test/sandbox install with invite-only access
- **No formal SOC 2 certification** — Build ready, don't certify
- **No pricing or billing** — Free for all v0 beta users
- **No multi-platform** — Stripe only, per product vision §7

---

## Out-of-Scope Technical Detail

This PRD does **not** define:

- API contracts
- Database schemas
- Detailed system architecture
- Deployment pipelines
- LLM prompt engineering strategy

Those belong in:
- Technical design docs (`openspec/changes/<change>/design.md`)
- Architecture documents
- Implementation specs (`openspec/changes/<change>/tasks.md`)

---

*Generated with Clavix Planning Mode*
*Version: v0*
*Generated: 2026-02-11*
