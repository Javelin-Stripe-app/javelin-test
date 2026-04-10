# Product Vision & Strategy

## 1. Vision

Javelin enables anyone to customize the software platforms they already use — without writing code or hiring a developer. Starting with Stripe, Javelin is an AI-powered builder that lives inside the platform, understands the user's data and workflows, and instantly builds working solutions from plain-language descriptions. It transforms the long tail of unsolved platform customization problems into near-zero-effort outcomes.

---

## 2. Problem Space

SaaS platforms scale by generalizing — they can't build for every edge case, workflow, or niche business need. The result is a long tail of unsolved problems that users work around with spreadsheets, manual processes, and duct-tape solutions.

**Core problems (ranked by priority):**

1. **Visibility gaps** — No custom dashboards, no object relationship views, no business-level activity logs. The data exists but there's no way to see it the way the user needs to. Stripe has no plans to solve this.
2. **Operational friction** — Bulk metadata editing is manual. Metadata doesn't sync across objects. There's no change history or undo. Dispute management is API-only. These are daily pain points for operators running their business on Stripe.
3. **Workflow gaps** — Stripe doesn't support the specific automation, alerting, or workflow logic that operators need. Stripe is actively investing in its own Workflows product, which will close some of these gaps over time. Javelin focuses on workflows that Stripe's native tooling can't handle — complex multi-step logic, cross-object orchestration, and workflows requiring external context.

**Priority rationale:** Stripe's investment in native Workflows makes problem 3 the least differentiated. Visibility and operational friction remain unsolved by Stripe and represent the strongest wedge for Javelin.

**Who feels this most:** Founders, ops leads, and finance teams at small and growing companies. They know exactly what they want Stripe to do but lack the engineering resources to build it. They're high-friction users with high agency — frustrated enough to want a solution and empowered enough to try one immediately.

---

## 3. Target Customers

**Primary:** Founders, owners, and operations leads at small and growing companies who use Stripe as core infrastructure. They are:
- Close to the problem — they feel the friction daily
- Empowered to act — no approval chains, short sales cycles
- Resource-constrained — engineering is focused on product, not internal ops
- Already hacking workarounds — spreadsheets, Notion, manual processes
- Increasingly comfortable with AI — already using ChatGPT/Claude in daily work

**Secondary:** Finance leads, support managers, and RevOps/PaymentOps consultants who manage Stripe on behalf of teams or clients.

---

## 4. Value Proposition

**Javelin is an AI builder, not an AI analyst.**

> Competitors ask: "What happened in your Stripe data?"
> Javelin asks: "What do you want Stripe to do?" — and then builds it.

Every existing tool in the Stripe ecosystem is a read-only analyst. Javelin occupies an empty quadrant: in-dashboard AND read-write. It differentiates by:

- **Builder, not analyst** — creates workflows, dashboards, and automations, not just charts and queries
- **Stripe-native** — lives inside the Stripe Dashboard, not a separate SaaS
- **Zero-setup** — Stripe App install and start building. No data export, no schema mapping, no warehouse
- **Stripe-deep** — tuned to Stripe object semantics, edge cases, and billing realities. Not a generic multi-source BI tool
- **Operator-first** — designed for non-technical users, not developers or data analysts

---

## 5. Strategic Pillars

Ranked by priority. When pillars conflict, higher-ranked pillar wins.

1. **Speed over polish** — Ship fast, iterate based on real usage. 80% that works now beats 100% that ships later. Optimize when it breaks, not before.

2. **Operator-first** — Every decision filters through "can a non-technical founder use this?" Plain language over technical jargon. Simplicity over power-user features. If it requires documentation to use, it's too complex.

3. **Depth over breadth** — Go deep on Stripe before going wide to other platforms. Master one ecosystem's edge cases, object model, and user patterns before expanding. One platform done right beats three done halfway.

4. **Ecosystem-native** — Build deeply into the platform's design system, data model, and UI components. Javelin should feel like a seamless extension of Stripe, not a third-party bolt-on. Distribution through the platform, not around it.

---

## 6. Success Metrics

**Dual North Star:**

1. **Prompt resolution rate** — The percentage of actionable prompts (workflows, edits, automations) that result in an activated solution without abandonment. Measures whether Javelin actually solves the user's problem, regardless of output type.
2. **Insight satisfaction rate** — For non-actionable prompts (data questions, analysis, lookups), measured via explicit feedback (thumbs up/down) and refinement rate (how many follow-up prompts were needed). Low refinement + positive feedback = the insight landed.

Together, these cover every interaction type. Resolution rate proves the builder thesis. Insight satisfaction proves the visibility thesis (§2, problem 1).

**Supporting Signals:**
- **Time-to-first-resolution** — How fast do users go from install to a successfully resolved prompt? Measures the zero-setup promise.
- **Prompts per user/week** — Are users treating Javelin as a go-to tool or a one-time experiment?
- **Refinement rate** — How many follow-up prompts per initial request? One-shot = nailed it. Multiple = needed clarification. Abandoned = failed.
- **Install completion rate** — Are users successfully getting through the Stripe App install? Drop-off here = trust or friction problem.

---

## 7. Non-Goals

These are deliberately out of scope. Javelin does not do these things, even if users ask.

1. **Not for end-customer-facing changes** (MVP) — No checkout customization, invoice email changes, or customer portal modifications. Internal ops only. Higher trust/safety bar for later milestones.
2. **Not multi-platform** (yet) — Stripe only until the model is proven. No HubSpot, Shopify, or other ecosystems until depth over breadth is satisfied.
3. **Not for enterprise compliance workflows** — Small teams first. SOC2 audit trails, multi-level approval chains, and role-based access control are later concerns.
4. **Not a Stripe Payments integration** — Javelin is a Stripe App (Dashboard extension), not a checkout or payment flow product. No `@stripe/stripe-js`, no PaymentElements, no payment intents.
5. **Not a replacement for developers** — Javelin handles the long tail of ops customization. Complex, mission-critical engineering still needs engineers.

---

# Technical Strategy (High Level)

## 8. Core Platform & Tooling

| Layer | Technology |
|-------|-----------|
| **Stripe App UI** | React 17, Stripe UI Toolkit (`@stripe/ui-extension-sdk`) |
| **Backend** | Supabase (Postgres + RLS + Edge Functions) |
| **Auth** | Stripe OAuth 2.0 (`stripe_api_access_type: "oauth"`, `distribution_type: "public"`) |
| **Token Management** | Stripe Secret Store API (access tokens: 1hr expiry, refresh tokens: 1yr rolling) |
| **Validation** | Zod |
| **Testing** | Vitest + Playwright |
| **Package Manager** | npm |

**No standalone web app.** The only user-facing UI is the Stripe App extension. The backend (Supabase Edge Functions) handles workflow execution, scheduling, data caching, and webhook processing. There is no Next.js frontend, no React 19, no Tailwind/shadcn/Headless UI.

---

## 9. Architectural Approach

**"The backend is the brain, the Stripe App is the face."**

- **Thin client + backend architecture** — The Stripe App is the UI surface only. All logic, workflow execution, data processing, webhook handling, and scheduling runs on Supabase Edge Functions.
- **One execution model** — Every workflow, view, and automation follows the same pattern: backend stores, backend executes, UI renders. No split between client-side and server-side logic paths.
- **API-first** — The backend exposes well-defined interfaces that the Stripe App UI consumes via HTTP. External API calls are declared in the `stripe-app.json` CSP.
- **Stripe API as the integration layer** — Javelin reads from and writes to Stripe via the Stripe API on behalf of users, authenticated via OAuth tokens. Javelin never becomes an alternate data store for Stripe objects.

---

## 10. Data Principles

### Data Flow Rules

- **Stripe is always the source of truth** for Stripe objects. Current-state views always fetch fresh from the Stripe API. Javelin is not a replica — it's a query layer.
- **Query-optimized cache** — Javelin maintains a local cache of Stripe data in Supabase to enable filtering and search that the Stripe API doesn't natively support (see §14). This cache is:
  - Auto-synced for recent data (last 60 days) on a rolling basis
  - Backfilled on demand for older time ranges (user queries Q4 → Javelin fetches and indexes it)
  - Bounded at 24 months maximum retention
  - Expired after 60 days of inactivity (data not queried gets purged)
  - Always marked with sync timestamps — never presented as "live"
  - Purged completely on uninstall
- **AI-driven freshness routing** — The AI layer decides per-query whether to use cached data or fetch fresh from Stripe. Historical/aggregate queries use cache. Recency-sensitive queries (today, this week, latest) trigger a refresh first. Single-object lookups always fetch live. Ambiguous cases ask the user (see §12).
- **Javelin is the source of truth** for workflow definitions, execution logs, user preferences, and changelog/versioning data — things that don't exist in Stripe.
- **Uninstall = full delete** — When a user removes Javelin, all their data (workflow definitions, execution history, preferences, cached Stripe data) is permanently deleted. No retention.

### Compliance & Auditability Guarantees

- **Execution logs retained 90 days** — Provides transparency ("here's everything Javelin did in your account") then purges. Keeps costs and data liability bounded.
- **No PII/PHI persistence** — Logs contain request IDs, timestamps, and non-sensitive metadata only. Never store customer PII from Stripe.

---

## 11. Security & Compliance Posture

**Auth & Access:**
- Stripe OAuth 2.0 handles user authentication and API authorization. Access tokens (1hr expiry) and refresh tokens (1yr, rolling) are stored via the Stripe Secret Store API — never in `.env` or application storage.
- Permissions declared in `stripe-app.json` manifest. **Request permissions broadly by category, scope narrowly by default.** Request the full set of permissions Javelin is likely to need across its feature set, with clear `purpose` explanations in the manifest. Rationale: downgrading permissions is app-controlled and frictionless, but upgrading requires explicit user re-approval — a conversion-killing flow.
- Supabase RLS is non-negotiable — never bypassed.
- Dual permission gate: Javelin can never exceed the user's own Stripe access level.

**Action Safety:**
- All write operations require explicit user confirmation before execution. No silent mutations.
- Destructive operations (deletes, irreversible state transitions) get extra warnings explaining irreversibility.
- Bulk operations require express user authorization with clear scope preview.
- Future: user-configurable "action safety policy" to adjust confirmation requirements.

**Recovery:**
- Undo for single actions — stores previous value before overwriting.
- Rollback for bulk/workflow operations — stores snapshot of affected objects before execution.
- Some Stripe actions are irreversible (payment confirmations, customer deletions) — clearly communicated to users before execution.

**Transparency:**
- 90-day execution logs visible to users — full audit trail of what Javelin did and why.

**Compliance:**
- No formal certifications targeted at launch. Good security hygiene now, formal certs (SOC2, GDPR) when market demands it.

---

## 12. AI Strategy

**Autonomy Model: Semi-autonomous**
- AI builds the complete solution and presents it to the user. User reviews and activates.
- AI does not execute actions without user confirmation.
- Future path: autonomous mode where users can opt-in to reduced confirmation for trusted workflow types.

**Clarification Bias:**
- **Ask for the "what," default on the "how."** When the AI doesn't understand the user's intent, it asks rather than guessing. When it understands the intent but could implement it multiple ways, it picks a reasonable default and explains the choice.
- Wrong guesses waste time and erode trust. A quick question is always better than a wrong build.
- This applies to data freshness too: when it's unclear whether cached data is sufficient for a query, the AI asks the user rather than silently serving stale results (see §10).

**Guardrails:**
- All write operations require confirmation (see §11).
- Destructive and bulk operations require express authorization.
- AI never executes irreversible Stripe actions without explicit warning and confirmation.
- Hard limits exist regardless of user preference — Javelin will always warn on irreversible actions.

**Explainability:**
- When AI builds a workflow, it explains its reasoning in plain language — what it built, why it made the choices it did, and what the workflow will do.
- Explanations target operators, not developers. No jargon, no code unless requested.
- Data-backed responses always include a freshness indicator ("Data as of [timestamp]" for cached, "Live data" for fresh fetches).

**Recovery:**
- Undo (single actions) and rollback (bulk operations) provide safety nets when AI gets it wrong.
- Changelog layer tracks all AI-initiated changes for auditability.

---

## 13. Integration Philosophy

- **Stripe-only at launch** — No external integrations in MVP. The beachhead is internal Stripe customization.
- **Phased expansion:**
  - MVP: Internal-only customizations (Stripe account only)
  - M2: Internal workflows connecting Stripe to other systems
  - M3: End-customer-facing logic (checkout, invoices)
  - M4: Third-party app creation and publishing
  - M5: Multi-ecosystem (HubSpot, Shopify, QuickBooks, etc.)
- **External API calls** must be whitelisted in `stripe-app.json` manifest — no undeclared outbound calls.
- Expansion to next milestone is driven by observed user needs, not a predetermined roadmap.

---

## 14. Scalability Intent

- **Ship simple, optimize when it breaks** — No premature optimization. Build the simplest thing that works and scale when real usage demands it.
- **Design for small accounts first** — Solo founders and small teams are the primary user. Large account support (50k+ customers, high-volume webhooks) comes when those users arrive.
- **Known constraints acknowledged:**
  - 25 req/sec Stripe API rate limit will need caching/batching eventually — build it when it's a real problem, not before.
  - Supabase connection limits and edge function cold starts may need attention at scale — not at launch.
  - **Stripe API has no subset querying** — Stripe does not support complex filters (e.g., "all payments $30-50 from Q4 2025 from Europe"). Retrieving filtered data requires fetching most or all objects and filtering locally. This is the primary driver for the query-optimized cache (§10) and will influence data retention policy, caching strategy, and performance characteristics for large accounts.
- **Pillar 1 governs** — Speed over polish. If a scaling decision slows down shipping, defer it.

---

## 15. Technical Non-Goals

1. **No React 18/19** — Stripe UI Toolkit requires React 17. There is no web app frontend.
2. **No custom HTML/CSS in Stripe App UI** — Stripe UI Toolkit components only for extension UI.
3. **No `@stripe/stripe-js` or `@stripe/react-stripe-js`** — This is a Stripe App, not a Stripe Payments integration.
4. **No standalone web app** — No Next.js, no Tailwind/shadcn/Headless UI. The only user-facing UI is the Stripe App extension.
5. **No on-premise or self-hosted deployment** — Cloud-only (Supabase).
6. **No legacy browser support** — Modern browsers only.
7. **No real-time collaboration** — Single-user workflows. Multi-user collaboration is not in scope.
8. **No data warehouse or ETL pipelines** — Javelin maintains a query-optimized cache (§10), not a replicated dataset. The cache is bounded, ephemeral, and always secondary to the Stripe API as source of truth.

---

## 16. Change Policy

- **Review cadence:** Quarterly.
- **Revision triggers:**
  - A strategic pillar is consistently overridden in practice
  - A non-goal becomes a clear user demand
  - A major market shift (e.g., Stripe launches a competing product)
  - Milestone transitions (MVP → M2, M2 → M3) that change scope
- **Decision authority:** Sole founder decision. No external approval required.
- **Expectation:** This document should be stable. If it changes frequently, the strategy isn't strategic enough. Features go in PRDs. Principles go here.

---

*Generated with Clavix Product Strategy Mode*
*Last updated: 2026-02-11*
*This document informs all PRDs and should remain stable across releases*
