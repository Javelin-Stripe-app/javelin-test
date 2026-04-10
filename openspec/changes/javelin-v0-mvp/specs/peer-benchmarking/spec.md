## ADDED Requirements

> **API Availability Note (2026-03-10):** The Stripe Benchmarking API is not publicly accessible as of this writing. The current implementation generates mock data via `generateMockBenchmarkingData()` in `supabase/functions/benchmarking-compare/index.ts`. Responses include `source: 'mock'` to distinguish mock from live data. When the Stripe Benchmarking API becomes publicly available, the TODO comments in `benchmarking-compare/index.ts` shall be resolved and this note removed.

### Requirement: Stripe Benchmarking Eligibility Check
The system SHALL verify that a Stripe account meets the eligibility requirements for benchmarking data before attempting to fetch it.

#### Scenario: Account meets eligibility
- **WHEN** the system checks benchmarking eligibility
- **AND** the account has 5+ active subscriptions and 1+ paid subscription in the past year
- **THEN** the system SHALL mark the account as benchmarking-eligible
- **AND** benchmarking data SHALL be included in insight generation

#### Scenario: Account does not meet eligibility
- **WHEN** the system checks benchmarking eligibility
- **AND** the account has fewer than 5 active subscriptions
- **THEN** the system SHALL NOT attempt to fetch benchmarking data
- **AND** no benchmarking insights SHALL be generated
- **AND** if a user asks about peer comparison, the AI SHALL explain the eligibility requirements

### Requirement: Peer Comparison Data Retrieval
The system SHALL fetch benchmarking data from Stripe's Benchmarking API for the 7 supported metrics.

#### Scenario: Benchmarking data fetch (current: mock strategy)
- **WHEN** benchmarking data is requested for an eligible account and the cache is empty or expired
- **THEN** the Edge Function SHALL generate mock benchmarking data via `generateMockBenchmarkingData(activeSubCount)`
- **AND** the response SHALL include `source: 'mock'` to signal that data is not from a live Stripe API
- **AND** `yourValue` fields SHALL be `null` until real metric computation is integrated

#### Scenario: Benchmarking data fetch (target: live Stripe Benchmarking API)
- **WHEN** the Stripe Benchmarking API becomes publicly available
- **THEN** the Edge Function SHALL fetch real peer comparison data for the 7 supported metrics: gross MRR churn, net MRR churn, subscriber churn, subscriber retention, revenue retention, MRR growth, LTV, ARPU, and trial conversion
- **AND** each metric SHALL include: the account's value, peer median, and percentile ranking
- **AND** peers SHALL be matched by industry, ARR, and ARPU (Stripe's k-nearest-neighbors matching)
- **AND** `source` in the response SHALL change from `'mock'` to `'stripe'`

#### Scenario: Benchmarking API unavailable / not yet publicly accessible
- **WHEN** the Stripe Benchmarking API is not yet publicly accessible (current state)
- **THEN** the system SHALL serve mock data (marked `source: 'mock'`) rather than failing or omitting benchmarking
- **AND** if mock generation fails, the system SHALL return the account's eligibility status without comparison data
- **AND** the system SHALL NOT display an error to the user — benchmarking is supplementary

### Requirement: Benchmarking Data Caching
The system SHALL cache benchmarking results for 24 hours to minimize redundant API calls.

#### Scenario: Cache hit within TTL
- **WHEN** benchmarking data is requested and a cached result exists that is less than 24 hours old
- **THEN** the system SHALL return the cached data without making a Stripe API call

#### Scenario: Cache miss or expired
- **WHEN** benchmarking data is requested and no cache exists or the cache is older than 24 hours
- **THEN** the system SHALL fetch fresh data from the Stripe Benchmarking API
- **AND** the system SHALL store the result in the `benchmarking_cache` table with a `fetched_at` timestamp

### Requirement: Benchmarking Insights Integration
Benchmarking comparisons SHALL be surfaced as proactive insights within the existing insight delivery system.

#### Scenario: Peer comparison in proactive insight
- **WHEN** the system generates proactive insights and benchmarking data is available
- **THEN** the system MAY include peer comparison insights (e.g., "Your subscriber churn rate is 2x the median for businesses your size")
- **AND** the insight SHALL cite the data source as "Stripe Benchmarking" for transparency

#### Scenario: User explicitly asks for peer comparison
- **WHEN** a user asks a question like "How does my churn compare to others?"
- **AND** the account is benchmarking-eligible
- **THEN** the AI SHALL provide a detailed peer comparison across available metrics
- **AND** the response SHALL explain how peers are matched (industry, ARR, ARPU)
- **AND** the response SHALL include the account's percentile ranking

#### Scenario: User asks for peer comparison but ineligible
- **WHEN** a user asks about peer comparison but the account does not meet eligibility
- **THEN** the AI SHALL explain the eligibility requirements (5+ active subscriptions, 1+ paid in past year)
- **AND** the AI SHALL NOT fabricate or estimate peer comparison data

### Requirement: Data Deletion on Uninstall
Benchmarking cache data SHALL be deleted when Javelin is uninstalled.

#### Scenario: Uninstall purges benchmarking cache
- **WHEN** the Javelin app is uninstalled
- **THEN** all `benchmarking_cache` records for that account SHALL be deleted

---

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response (eligible) | Response (ineligible) |
|--------|------|------|---------|--------------------|-----------------------|
| GET or POST | `/benchmarking-compare` | Stripe signature | `?metrics=...` (optional) | `{ eligible: true, activeSubscriptions: number, benchmarking: { comparisons: Comparison[], source: 'mock' \| 'stripe', cohort: object, generatedAt: string }, meta?: { freshness: 'cached', syncedAt: string } }` | `{ eligible: false, reason: string, activeSubscriptions: number, requiredSubscriptions: number }` |

**Mock Data Acceptance Criteria:**
- **AC-MOCK-1:** All benchmarking responses SHALL include a `source` field (`'mock'` or `'stripe'`)
- **AC-MOCK-2:** When `source: 'mock'`, `yourValue` fields MAY be `null` — this is expected
- **AC-MOCK-3:** Cache TTL (24hr) applies equally to mock and live data
- **AC-MOCK-4:** When the real Stripe Benchmarking API is integrated, `source` SHALL change to `'stripe'` and `yourValue` SHALL be populated from live metric computation

**Performance Acceptance Criteria:**
- **PC-1:** Benchmarking endpoint with cache hit SHALL return in < 200ms
- **PC-2:** Benchmarking endpoint with cache miss SHALL return in < 3s (mock generation or future Stripe API call)

**Security Acceptance Criteria:**
- **SEC-1:** Benchmarking data SHALL be scoped to the authenticated account via RLS
- **SEC-2:** Benchmarking cache SHALL be treated as Internal data (aggregate peer data, no PII)
