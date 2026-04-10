# Design: fix-spec-divergences

**Change ID:** fix-spec-divergences
**Phase:** design
**Date:** 2026-03-10

---

## Approach

This is a spec-correction change. No code is modified. The design describes how each delta spec maps to patches in the canonical spec files.

---

## Patch Strategy

### 1. stripe-auth — Token Storage

**Target file:** `openspec/changes/javelin-v0-mvp/specs/stripe-auth/spec.md`

**Sections to replace:**
- `### Requirement: Token Storage via Secret Store API` → Replace with `### Requirement: Token Storage via Postgres (Primary) with DEV_MODE Fallback`
- Endpoint Inventory table → Update all paths from slash format to hyphenated format

**Key content changes:**
- Remove "Tokens SHALL NOT be stored in Supabase" (contradicts implementation)
- Add `oauth_tokens` table as primary storage with upsert-on-conflict pattern
- Add DEV_MODE fallback scenario (`STRIPE_SECRET_KEY` env var for private/sandbox apps)
- Add SEC-5 (RLS on `oauth_tokens`) and SEC-6 (DEV_MODE restriction) to security criteria
- Correct endpoint paths: `/auth/callback` → `/auth-callback`, `/auth/refresh` → `/auth-refresh`, `/account/data` → `/account-data`

**Why Postgres over Secret Store:**
The Secret Store API is designed for storing third-party API credentials (per-account, small number of named secrets). OAuth tokens managed by `storeOAuthTokens()` need upsert semantics, `token_expires_at` timestamps, and RLS scoping — all naturally supported by Postgres. The original spec was written before implementation confirmed which storage was appropriate.

---

### 2. peer-benchmarking — API Availability

**Target file:** `openspec/changes/javelin-v0-mvp/specs/peer-benchmarking/spec.md`

**Sections to update:**
- Add an API availability caveat block at the top of the requirements section
- Replace "Successful benchmarking data fetch" scenario with two scenarios: current (mock) and target (live API)
- Replace "Benchmarking API unavailable" scenario to describe the current mock strategy
- Add AC-MOCK-1 through AC-MOCK-4 acceptance criteria
- Correct endpoint path: `/benchmarking/compare` → `/benchmarking-compare`
- Update response schema to match actual implementation (flat object, `source` field, `cohort` object)

**Why mock, not real API:**
`benchmarking-compare/index.ts` contains two explicit TODOs noting the API "may not be publicly accessible yet." The `source: 'mock'` marker in responses is the implementation's own contract for future replacement.

---

### 3. proactive-insights — Component and Endpoints

**Target file:** `openspec/changes/javelin-v0-mvp/specs/proactive-insights/spec.md`

**Sections to update:**

**Component architecture:**
- Clarify that feedback buttons are rendered inside `InsightCard` (no standalone component)
- Update the "Thumbs up/down" scenario to reference `InsightCard` directly
- Add silent-fail note for feedback errors

**Endpoint paths:**
- `GET /insights/welcome` → `GET /insights-welcome`
- `POST /insights/feedback` → `POST /insights-feedback`

**Response schema:**
- Feedback response: `{ data: { recorded: true } }` → `{ stored: true, insightId: string, rating: string }` (flat, not wrapped)

**UI State table:**
- Update "Populated" row to say "`InsightCard` (with embedded feedback buttons)"
- Add "Feedback error" row (silent fail state)

---

## Verification

After patching the three canonical spec files:
1. Grep for `Secret Store` in `stripe-auth/spec.md` — SHALL NOT appear as a storage mechanism
2. Grep for `/auth/callback`, `/auth/refresh`, `/account/data`, `/insights/feedback`, `/insights/welcome`, `/benchmarking/compare` — NONE shall appear in endpoint tables
3. Grep for `InsightFeedback` as a component name — SHALL NOT appear
4. Grep for `recorded: true` in feedback response — SHALL NOT appear
5. Confirm `source: 'mock'` acceptance criteria present in peer-benchmarking spec

---

## Risk Assessment

**Risk:** Minimal. These are documentation-only changes. No production behavior is affected.

**Rollback:** Git revert the three canonical spec file edits.
