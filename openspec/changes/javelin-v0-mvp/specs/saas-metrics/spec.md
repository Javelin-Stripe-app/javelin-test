## ADDED Requirements

### Requirement: MRR Calculation
The system SHALL calculate Monthly Recurring Revenue (MRR) from cached subscription data, aligned with Stripe's official billing metric definitions.

#### Scenario: MRR for active subscriptions
- **WHEN** a user queries MRR (e.g., "What's my MRR?")
- **THEN** the system SHALL sum all active subscription amounts, normalizing each to a monthly rate
- **AND** annual subscriptions SHALL be divided by 12, quarterly by 3, etc.
- **AND** the result SHALL be returned with currency and the `synced_at` timestamp of the underlying data
- **AND** the calculation SHALL match Stripe's MRR definition: sum of recurring revenue normalized to one month

#### Scenario: MRR with multiple currencies
- **WHEN** an account has subscriptions in multiple currencies
- **THEN** the system SHALL return MRR grouped by currency
- **AND** the system SHALL NOT attempt automatic currency conversion

#### Scenario: MRR excluding trials and incomplete subscriptions
- **WHEN** calculating MRR
- **THEN** the system SHALL exclude subscriptions with status `trialing`, `incomplete`, `incomplete_expired`, or `canceled`
- **AND** only subscriptions with status `active` or `past_due` SHALL be included

### Requirement: Churn Rate Calculation
The system SHALL calculate churn rate from cached subscription data, aligned with Stripe's official billing metric definitions.

#### Scenario: Monthly churn rate
- **WHEN** a user queries churn rate for a given period
- **THEN** the system SHALL calculate: (subscriptions canceled or expired in period) / (total active subscriptions at period start)
- **AND** the result SHALL be expressed as a percentage
- **AND** the period SHALL default to the last calendar month if not specified

#### Scenario: Gross vs net churn clarification
- **WHEN** a user asks for "churn rate" without specifying gross or net
- **THEN** the AI SHALL default to gross churn (cancellations only, not offset by new signups)
- **AND** the response SHALL explain which definition was used

### Requirement: ARPU Calculation
The system SHALL calculate Average Revenue Per User from cached data.

#### Scenario: ARPU calculation
- **WHEN** a user queries ARPU
- **THEN** the system SHALL calculate: MRR / count of unique active customers with at least one active subscription
- **AND** the result SHALL use the same MRR calculation defined in the MRR requirement

### Requirement: LTV Calculation
The system SHALL calculate Customer Lifetime Value from cached data.

#### Scenario: LTV calculation
- **WHEN** a user queries LTV
- **THEN** the system SHALL calculate: ARPU / monthly churn rate
- **AND** if churn rate is 0, the system SHALL return a note explaining that LTV cannot be calculated without churn data
- **AND** the response SHALL include the underlying ARPU and churn rate values for transparency

### Requirement: Revenue Breakdown by Segment
The system SHALL provide revenue breakdowns sliced by product, price/plan, and customer metadata.

#### Scenario: Revenue by product
- **WHEN** a user asks "What's my revenue by product?"
- **THEN** the system SHALL aggregate revenue from cached invoices/charges grouped by product ID
- **AND** the result SHALL include product name, total revenue, and percentage of total for each product

#### Scenario: Revenue by plan/price
- **WHEN** a user asks about revenue by plan
- **THEN** the system SHALL aggregate revenue grouped by Stripe price ID (plan)
- **AND** the result SHALL include plan name/nickname, total revenue, and subscriber count

#### Scenario: Temporal scoping
- **WHEN** a user specifies a time range (e.g., "last quarter", "January")
- **THEN** the system SHALL filter cached data to that time range before aggregation
- **AND** the response SHALL state the exact date range used

### Requirement: Metric Definition Alignment with Stripe
The system SHALL pre-load the AI with Stripe's official billing metric definitions as the canonical source of truth for all calculations.

#### Scenario: Metric calculation matches Stripe's definitions
- **WHEN** a user asks about any supported metric
- **THEN** the calculation logic SHALL follow Stripe's documented billing metric definitions
- **AND** the AI SHALL explain the metric using the same terminology Stripe uses
- **AND** this prevents "my MRR doesn't match Stripe" confusion

#### Scenario: User asks about an unsupported metric
- **WHEN** a user asks about a metric not supported in v0 (e.g., cohort retention, CAC)
- **THEN** the AI SHALL explain that the metric is not available in the current version
- **AND** the AI SHALL suggest the closest available metric if applicable

### Requirement: 100% Accuracy for Computed Metrics
All metric calculations SHALL be computed server-side in Edge Functions using deterministic SQL/code — not by the LLM. The LLM SHALL only interpret and explain pre-computed results.

#### Scenario: Metric accuracy verification
- **WHEN** a metric is calculated and returned
- **THEN** the raw numbers (MRR amount, churn percentage, ARPU, LTV) SHALL be computed by Edge Function code, not by the LLM
- **AND** the response SHALL include the raw computed values alongside the AI's explanation
- **AND** the target accuracy for computed metrics is 100%

---

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/metrics/mrr` | Stripe signature | `?currency=usd&period=2025-01` | `{ data: { value: number, currency: string, period: string }, meta: { freshness, syncedAt } }` |
| GET | `/metrics/churn` | Stripe signature | `?period=2025-01&type=gross` | `{ data: { rate: number, canceled: number, total: number, period: string }, meta: { ... } }` |
| GET | `/metrics/arpu` | Stripe signature | `?currency=usd` | `{ data: { value: number, activeCustomers: number, mrr: number }, meta: { ... } }` |
| GET | `/metrics/ltv` | Stripe signature | `?currency=usd` | `{ data: { value: number, arpu: number, churnRate: number }, meta: { ... } }` |
| GET | `/metrics/revenue` | Stripe signature | `?groupBy=product&startDate=...&endDate=...` | `{ data: { segments: Segment[] }, meta: { ... } }` |

**Performance Acceptance Criteria:**
- **PC-1:** Any single metric calculation SHALL return in < 500ms from cached data
- **PC-2:** Revenue breakdown queries SHALL return in < 1s for accounts with up to 50,000 invoices

**Security Acceptance Criteria:**
- **SEC-1:** Metric endpoints SHALL enforce RLS — no metric SHALL include data from another account
- **SEC-2:** All metric request parameters SHALL be validated with Zod schemas
