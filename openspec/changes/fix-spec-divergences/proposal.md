## Proposal: Fix Spec Divergences

**Change ID:** fix-spec-divergences
**Type:** spec-correction
**Status:** proposed
**Author:** Claude Code
**Date:** 2026-03-10

---

### Problem

Four spec documents in `openspec/changes/javelin-v0-mvp/specs/` drifted from the actual implementation during the MVP build. These are documentation-only issues — the implementation is working correctly. Divergent specs mislead future agents, reviewers, and AI tooling that operate from these artifacts as ground truth.

---

### Issues Identified

#### Issue 1: Token storage strategy (stripe-auth)
- **Spec claims:** Tokens stored exclusively in Stripe Secret Store API (`oauth_access_token`, `oauth_refresh_token`, `user` scope). Tokens SHALL NOT be stored in Supabase.
- **Reality:** Tokens stored in Postgres `oauth_tokens` table as **primary** storage (`supabase/functions/_shared/stripe-token.ts`). DEV_MODE falls back to `STRIPE_SECRET_KEY` env var. Stripe Secret Store is not used in the current implementation.
- **Impact:** Any agent reading the spec would implement the wrong storage layer, and SEC-1/SEC-3 criteria contradict the working implementation.

#### Issue 2: Stripe Benchmarking API assumed publicly available (peer-benchmarking)
- **Spec claims:** Fetches live benchmarking data from Stripe's Benchmarking API for 7 supported metrics.
- **Reality:** Explicit TODO in `supabase/functions/benchmarking-compare/index.ts` (lines 12–14): "The Stripe Benchmarking API may not be publicly accessible yet." `generateMockBenchmarkingData()` generates mock data; responses include `source: 'mock'` marker.
- **Impact:** Acceptance criteria written as if real API is integrated cannot pass. Cache-miss scenario describes fetching from an unavailable API.

#### Issue 3: Insight feedback embedded in InsightCard, not a standalone component (proactive-insights)
- **Reality:** Feedback buttons (thumbs up/down) are rendered inside `InsightCard` component (`src/components/InsightCard.tsx`). No standalone `InsightFeedback` component exists. State management (`useState` for `feedback` and `submitting`) is co-located with the card.
- **Impact:** Scaffolding a standalone component or writing tests for a non-existent export would create dead code.

#### Issue 4: Endpoint paths use slash sub-paths; Supabase uses hyphenated names (multiple specs)
- **Spec format:** `/insights/feedback`, `/insights/welcome`, `/auth/callback`, `/auth/refresh`, `/account/data`, `/benchmarking/compare`
- **Actual Edge Function directory names (= URL paths):** `/insights-feedback`, `/insights-welcome`, `/auth-callback`, `/auth-refresh`, `/account-data`, `/benchmarking-compare`
- **Also:** Feedback response schema mismatch — spec: `{ data: { recorded: true } }`, implementation (`insights-feedback/index.ts` line 103): `{ stored: true, insightId, rating }`

---

### Scope

**Documentation only.** No code changes. The implementation is correct; the specs need to catch up.

**Delta spec files to create (this change):**
- `openspec/changes/fix-spec-divergences/specs/stripe-auth/spec.md`
- `openspec/changes/fix-spec-divergences/specs/peer-benchmarking/spec.md`
- `openspec/changes/fix-spec-divergences/specs/proactive-insights/spec.md`

**Canonical spec files to patch:**
- `openspec/changes/javelin-v0-mvp/specs/stripe-auth/spec.md`
- `openspec/changes/javelin-v0-mvp/specs/peer-benchmarking/spec.md`
- `openspec/changes/javelin-v0-mvp/specs/proactive-insights/spec.md`

---

### Non-Goals
- No implementation changes
- No new features
- No new tests (no behavioral changes to verify)
- No changes to `stripe-app.json`, migrations, or Edge Function code
