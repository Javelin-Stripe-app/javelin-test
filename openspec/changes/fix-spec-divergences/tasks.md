# Tasks: fix-spec-divergences

**Change ID:** fix-spec-divergences
**Phase:** tasks
**Date:** 2026-03-10

---

## Overview

All tasks are spec file edits. No code changes. Execute tasks 1–3 in parallel (no dependencies between them).

---

## Task 1: Patch stripe-auth canonical spec

**File:** `openspec/changes/javelin-v0-mvp/specs/stripe-auth/spec.md`
**Status:** todo

### Steps

1. Replace `### Requirement: Token Storage via Secret Store API` section (lines 23–35) with the corrected requirement from the delta spec:
   - Rename to `### Requirement: Token Storage via Postgres (Primary) with DEV_MODE Fallback`
   - Replace all Secret Store storage scenarios with Postgres upsert scenarios
   - Add DEV_MODE fallback scenario
   - Remove "Tokens SHALL NOT be stored in Supabase" constraint

2. Replace Security Acceptance Criteria:
   - Keep SEC-1 through SEC-4 unchanged
   - Add SEC-5: RLS on `oauth_tokens` table
   - Add SEC-6: `STRIPE_SECRET_KEY` restricted to DEV_MODE only

3. Replace Endpoint Inventory table paths:
   - `/auth/callback` → `/auth-callback`
   - `/auth/refresh` → `/auth-refresh`
   - `/account/data` → `/account-data`

**Acceptance check:** No occurrence of "Secret Store" as storage mechanism; no slash-format paths in endpoint table.

---

## Task 2: Patch peer-benchmarking canonical spec

**File:** `openspec/changes/javelin-v0-mvp/specs/peer-benchmarking/spec.md`
**Status:** todo

### Steps

1. Insert API availability caveat block after the `## ADDED Requirements` header (before first requirement).

2. Replace `#### Scenario: Successful benchmarking data fetch` with two scenarios:
   - Current (mock strategy): `generateMockBenchmarkingData()`, `source: 'mock'`, `yourValue: null`
   - Target (live API, future): real Stripe Benchmarking API with 7 metrics

3. Replace `#### Scenario: Benchmarking API unavailable` to describe mock-data graceful degradation.

4. Add AC-MOCK-1 through AC-MOCK-4 acceptance criteria block.

5. Replace Endpoint Inventory table:
   - `/benchmarking/compare` → `/benchmarking-compare`
   - Update response schema to match implementation (flat object with `eligible`, `activeSubscriptions`, `benchmarking` fields; `source` field inside benchmarking)

**Acceptance check:** API caveat block present; `source: 'mock'` criteria present; no slash-format path in endpoint table.

---

## Task 3: Patch proactive-insights canonical spec

**File:** `openspec/changes/javelin-v0-mvp/specs/proactive-insights/spec.md`
**Status:** todo

### Steps

1. Update `#### Scenario: Thumbs up/down on insight`:
   - Change "thumbs up and thumbs down `Button` components below the insight" → "inside the `InsightCard` component"
   - Change `POST /insights/feedback` reference → `POST /insights-feedback`
   - Add silent-fail note: feedback errors SHALL NOT interrupt the user

2. Replace Endpoint Inventory table:
   - `GET /insights/welcome` → `GET /insights-welcome`
   - `POST /insights/feedback` → `POST /insights-feedback`
   - Feedback response: `{ data: { recorded: true } }` → `{ stored: true, insightId: string, rating: string }`

3. Update UI State Summary table:
   - "InsightCard(s) with feedback buttons" → "`InsightCard` (with embedded feedback buttons)"
   - Add row: `Feedback error | No visible change (silent fail) | apiClient call fails`

4. Add clarification note at the top of `### Requirement: Insight Feedback`:
   > Note: Feedback UI is embedded in `InsightCard`. There is no standalone `InsightFeedback` component.

**Acceptance check:** No `/insights/feedback` or `/insights/welcome` in endpoint table; no `recorded: true` in response schema; `InsightCard` with embedded feedback in UI State table.

---

## Task 4: Verify patches (after tasks 1–3)

**Status:** todo
**Depends on:** Tasks 1, 2, 3

### Verification commands

```bash
# No slash-format paths remain in any patched spec
grep -r "\/auth\/callback\|\/auth\/refresh\|\/account\/data\|\/insights\/feedback\|\/insights\/welcome\|\/benchmarking\/compare" openspec/changes/javelin-v0-mvp/specs/

# No "recorded: true" in feedback response
grep -r "recorded: true" openspec/changes/javelin-v0-mvp/specs/

# No Secret Store as token storage
grep -r "exclusively in the Stripe Secret Store" openspec/changes/javelin-v0-mvp/specs/

# Mock caveat present in peer-benchmarking
grep -r "source.*mock\|mock.*source" openspec/changes/javelin-v0-mvp/specs/peer-benchmarking/

# InsightCard with embedded feedback in proactive-insights
grep -r "embedded feedback" openspec/changes/javelin-v0-mvp/specs/proactive-insights/
```

All commands SHALL return no output (no matches for the first three) or non-empty output (last two).
