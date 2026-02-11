<!-- Source: openspec/product-vision-strategy.md -->
<!-- Included: §8, §9, §10, §12, §13, §14, §15, §16 -->
<!-- Skipped: none -->
<!-- Regenerate: /vision:distill -->

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
