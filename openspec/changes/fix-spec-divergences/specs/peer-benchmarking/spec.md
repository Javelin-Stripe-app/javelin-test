## CHANGED Requirements

> **Delta type:** spec-correction
> **Affects:** `openspec/changes/javelin-v0-mvp/specs/peer-benchmarking/spec.md`
> **Reason:** Spec treated Stripe Benchmarking API as available and integrated. Actual implementation uses mock data while the API is unavailable; acceptance criteria must reflect this.

---

### ADDED: API Availability Caveat

> **Note (2026-03-10):** The Stripe Benchmarking API is not publicly accessible as of this writing. The current implementation generates mock data via `generateMockBenchmarkingData()` in `supabase/functions/benchmarking-compare/index.ts`. Responses include `source: 'mock'` to distinguish mock from live data. When the Stripe Benchmarking API becomes publicly available, the TODO comments in `benchmarking-compare/index.ts` shall be resolved and this caveat removed.

---

### REPLACED: Scenario — Successful benchmarking data fetch

**Previous (implies real API):**
> WHEN benchmarking data is requested for an eligible account
> THEN the Edge Function SHALL fetch peer comparison data for: gross MRR churn, net MRR churn, subscriber churn, subscriber retention, revenue retention, MRR growth, LTV, ARPU, and trial conversion

**Corrected:**

#### Scenario: Benchmarking data fetch (current: mock strategy)
- **WHEN** benchmarking data is requested for an eligible account and the cache is empty or expired
- **THEN** the Edge Function SHALL generate mock benchmarking data via `generateMockBenchmarkingData(activeSubCount)`
- **AND** the response SHALL include `source: 'mock'` to signal that data is not from a live Stripe API
- **AND** comparisons SHALL cover: `mrr_growth`, `gross_churn_rate`, `arpu` (mock metrics for v0)
- **AND** `yourValue` fields SHALL be `null` until real metric computation is integrated

#### Scenario: Benchmarking data fetch (target: live Stripe Benchmarking API)
- **WHEN** the Stripe Benchmarking API becomes publicly available
- **THEN** the Edge Function SHALL fetch real peer comparison data for the 7 supported metrics: gross MRR churn, net MRR churn, subscriber churn, subscriber retention, revenue retention, MRR growth, LTV, ARPU, and trial conversion
- **AND** each metric SHALL include: the account's value, peer median, and percentile ranking
- **AND** peers SHALL be matched by industry, ARR, and ARPU (Stripe's k-nearest-neighbors matching)
- **AND** `source` in the response SHALL be changed from `'mock'` to `'stripe'`

---

### REPLACED: Scenario — Benchmarking API unavailable

**Previous:**
> WHEN the Stripe Benchmarking API returns an error or is unavailable
> THEN the system SHALL fall back to providing the account's own metrics without peer comparison

**Corrected:**

#### Scenario: Benchmarking API unavailable (v0 current state)
- **WHEN** the Stripe Benchmarking API is not yet publicly accessible
- **THEN** the system SHALL serve mock data (marked `source: 'mock'`) rather than failing or omitting benchmarking
- **AND** the system SHALL degrade gracefully: if mock generation fails, return the account's own eligibility status without comparison data
- **AND** users SHALL NOT see an error; benchmarking comparisons are supplementary

---

### ADDED: Acceptance Criteria — Mock Data

- **AC-MOCK-1:** All benchmarking responses SHALL include a `source` field (`'mock'` | `'stripe'`)
- **AC-MOCK-2:** When `source: 'mock'`, `yourValue` fields MAY be `null` — this is expected
- **AC-MOCK-3:** Cache TTL (24hr) applies equally to mock and live data
- **AC-MOCK-4:** When the real Stripe Benchmarking API is integrated, `source` SHALL change to `'stripe'` and `yourValue` SHALL be populated from live metric computation

---

### REPLACED: Endpoint Inventory

**Previous (incorrect path format):**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/benchmarking/compare` | Stripe signature | `?metrics=mrr_churn,subscriber_churn` | `{ data: { eligible: boolean, comparisons: Comparison[] }, meta: { freshness, fetchedAt } }` |

**Corrected:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET or POST | `/benchmarking-compare` | Stripe signature | `?metrics=...` (optional) | `{ eligible: boolean, activeSubscriptions: number, benchmarking: { comparisons: Comparison[], source: 'mock' \| 'stripe', cohort: object, generatedAt: string } }` or `{ eligible: false, reason: string, activeSubscriptions: number, requiredSubscriptions: number }` |

> Note: The endpoint accepts both GET and POST (see implementation). Meta wrapper is on cache-hit responses only: `meta: { freshness: 'cached', syncedAt: string }`.
