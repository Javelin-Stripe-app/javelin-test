## ADDED Requirements

### Requirement: Query-Optimized Stripe Data Cache
The system SHALL maintain a local cache of Stripe objects in Supabase Postgres to enable filtering, aggregation, and search that the Stripe API does not natively support. Cached object types: subscriptions, invoices, charges, customers, products, prices.

#### Scenario: Cache table structure
- **WHEN** the cache tables are created
- **THEN** each cached object table SHALL include: `id` (Stripe object ID), `stripe_account_id`, `stripe_data` (JSONB, full Stripe object), extracted indexed columns (varies by type), `synced_at` (timestamp), `created_at`, `updated_at`
- **AND** all tables SHALL have RLS policies scoped to `stripe_account_id`
- **AND** composite indexes SHALL exist on `(stripe_account_id, created)` for time-range queries

#### Scenario: Data freshness transparency
- **WHEN** any cached data is returned in an API response
- **THEN** the response SHALL include a `meta.freshness` field set to `"cached"` and a `meta.syncedAt` timestamp
- **AND** live Stripe API data SHALL include `meta.freshness` set to `"live"`

### Requirement: Auto-Sync (60-Day Rolling Window)
The system SHALL automatically sync Stripe data for the most recent 60 days on a rolling basis. Sync SHALL be triggered on first use and periodically thereafter.

#### Scenario: Initial sync on first use
- **WHEN** a user completes OAuth authorization for the first time
- **THEN** the system SHALL trigger an auto-sync job for all 6 object types covering the last 60 days
- **AND** the sync SHALL run as a background job (not blocking the UI)
- **AND** the UI SHALL display sync progress via a Spinner and progress text

#### Scenario: Incremental sync
- **WHEN** a sync job runs for an account that has been synced before
- **THEN** the system SHALL fetch only objects created or updated since the last sync cursor
- **AND** the system SHALL update existing cached objects if their Stripe `updated` timestamp is newer
- **AND** the sync cursor SHALL be persisted in the `sync_jobs` table for resumability

#### Scenario: Sync respects Stripe rate limits
- **WHEN** a sync job is running
- **THEN** the system SHALL self-limit to 10 requests/sec to Stripe (leaving headroom below the 25 req/sec limit)
- **AND** on receiving a 429 (rate limit) response, the system SHALL apply exponential backoff starting at 1s
- **AND** sync jobs SHALL use cursor-based pagination with 100-item pages

#### Scenario: Sync failure and resumability
- **WHEN** a sync job fails mid-execution (network error, timeout, rate limit exhaustion)
- **THEN** the `sync_jobs` record SHALL be updated with status `"failed"` and the error details
- **AND** the next sync attempt SHALL resume from the last successful cursor position
- **AND** the UI SHALL display a Banner (type="warning") if the last sync failed

### Requirement: On-Demand Historical Backfill
The system SHALL support on-demand backfill of historical Stripe data up to 24 months when the AI determines a query requires older data.

#### Scenario: AI triggers backfill for historical query
- **WHEN** a user asks a question requiring data outside the cached time range (e.g., "What was my MRR in Q4 last year?")
- **AND** the required data is not in the cache
- **THEN** the system SHALL trigger a targeted backfill job for the required time range
- **AND** the system SHALL return a response indicating data is being fetched with an estimated wait
- **AND** the backfill SHALL respect the 24-month maximum retention limit

#### Scenario: Backfill time range limits
- **WHEN** a backfill is requested for data older than 24 months
- **THEN** the system SHALL backfill up to the 24-month boundary only
- **AND** the AI response SHALL explain that data beyond 24 months is not available

### Requirement: AI-Driven Freshness Routing
The system SHALL use AI-driven logic to determine per-query whether to serve data from the cache or fetch fresh from the Stripe API.

#### Scenario: Historical/aggregate query uses cache
- **WHEN** a user asks an aggregate or historical question (e.g., "What was my total revenue last month?")
- **THEN** the system SHALL serve the answer from cached data
- **AND** the response SHALL include the `synced_at` timestamp for transparency

#### Scenario: Recency-sensitive query triggers refresh
- **WHEN** a user asks about recent or current data (e.g., "How many new customers today?")
- **THEN** the system SHALL fetch fresh data from the Stripe API before answering
- **AND** the cache SHALL be updated with the fresh data
- **AND** a ThinkingIndicator SHALL be shown during the live fetch

#### Scenario: Single-object lookup fetches live
- **WHEN** the AI determines a query is about a specific Stripe object (e.g., "What's the status of subscription sub_123?")
- **THEN** the system SHALL fetch the object live from the Stripe API
- **AND** the cached copy SHALL be updated with the fresh data

#### Scenario: Ambiguous freshness — clarification
- **WHEN** the AI cannot determine whether cached data is sufficient for a query
- **THEN** the system SHALL ask the user whether approximate (cached) data is acceptable or if they need fresh data
- **AND** the clarification SHALL be presented as a ClarificationPrompt with Button options

### Requirement: Data Lifecycle Management
The system SHALL enforce data retention limits and provide full data deletion on uninstall.

#### Scenario: Inactivity purge (60-day)
- **WHEN** cached data for a specific object has not been accessed (queried) for 60 days
- **THEN** the system SHALL purge that data from the cache
- **AND** the `sync_jobs` table SHALL be updated to reflect the purged range

#### Scenario: Full deletion on uninstall
- **WHEN** the Javelin app is uninstalled
- **THEN** all cached Stripe data for that account SHALL be permanently deleted
- **AND** all `sync_jobs` records for that account SHALL be permanently deleted

---

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| POST | `/sync/trigger` | Stripe signature | `{ objectTypes?: string[] }` | `{ data: { jobId: string, status: "started" } }` |
| POST | `/sync/backfill` | Stripe signature | `{ startDate: string, endDate: string, objectTypes?: string[] }` | `{ data: { jobId: string, status: "started" } }` |
| GET | `/sync/status` | Stripe signature | — | `{ data: { jobs: SyncJob[], lastSyncAt: string } }` |

**Performance Acceptance Criteria:**
- **PC-1:** Cached aggregate queries (SUM, COUNT, AVG over indexed columns) SHALL return in < 500ms for accounts with up to 50,000 cached objects
- **PC-2:** Sync job processing SHALL sustain 10 req/sec to Stripe without 429 errors under normal conditions
- **PC-3:** Incremental sync for an account with < 1,000 new objects SHALL complete in < 60s

**Security Acceptance Criteria:**
- **SEC-1:** All cache tables SHALL have RLS policies enforced — no query SHALL return data from another account
- **SEC-2:** Sync jobs SHALL use the account's own OAuth tokens — never a shared service key
- **SEC-3:** Cached `stripe_data` JSONB SHALL be treated as Confidential (contains customer PII)

**Data Classification:**
- `cached_*` tables: **Confidential** — contains customer PII (names, emails) from Stripe objects
- `sync_jobs` table: **Internal** — contains sync metadata only, no PII
