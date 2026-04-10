<!-- Source: openspec/product-vision-strategy.md -->
<!-- Included: §10 (partial: Compliance & Auditability Guarantees, Data Flow Rules), §11, §12, §15, §16 -->
<!-- Skipped: none -->
<!-- Regenerate: /vision:distill -->

## 10. Data Principles (partial)

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
