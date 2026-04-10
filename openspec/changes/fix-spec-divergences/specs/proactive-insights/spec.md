## CHANGED Requirements

> **Delta type:** spec-correction
> **Affects:** `openspec/changes/javelin-v0-mvp/specs/proactive-insights/spec.md`
> **Reason:** (1) Feedback UI is embedded in `InsightCard`, not a standalone component. (2) Endpoint paths use slash sub-paths; Supabase Edge Functions use hyphenated names. (3) Feedback response schema differs from implementation.

---

### CHANGED: Insight Feedback — Component Architecture

**Clarification:** There is no standalone `InsightFeedback` component. Feedback buttons (thumbs up / thumbs down) are rendered **inside** the `InsightCard` component (`src/components/InsightCard.tsx`). State management for feedback (`useState` for `feedback` and `submitting`) is co-located with the card, not extracted.

**Corrected component description:**

#### Scenario: Thumbs up/down on insight (corrected)
- **WHEN** an insight is displayed via the `InsightCard` component
- **THEN** the `InsightCard` SHALL render thumbs up and thumbs down `Button` components inline below the `Banner`
- **AND** tapping a button SHALL call `apiClient('/insights-feedback', { method: 'POST', body: { insightId, messageId, rating } })` from within `InsightCard`
- **AND** button state SHALL update to show selected feedback (disabled after selection, label changes to 'Helpful' / 'Not helpful')
- **AND** feedback errors SHALL be swallowed silently — feedback is non-critical and SHALL NOT interrupt the user

**Note:** The `InsightCard` component manages its own feedback state. Do NOT extract feedback into a separate component unless `InsightCard` is refactored in a future change.

---

### REPLACED: Endpoint Inventory

**Previous (incorrect slash sub-paths):**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/insights/welcome` | Stripe signature | — | `{ data: { insights: Insight[] }, meta: { freshness, syncedAt } }` |
| POST | `/insights/feedback` | Stripe signature | `{ insightId: string, messageId: string, rating: "positive" \| "negative" }` | `{ data: { recorded: true } }` |

**Corrected (hyphenated Edge Function names, accurate response schema):**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/insights-welcome` | Stripe signature | — | `{ data: { insights: Insight[] }, meta: { freshness, syncedAt } }` |
| POST | `/insights-feedback` | Stripe signature | `{ insightId: string, messageId: string, rating: "positive" \| "negative" }` | `{ stored: true, insightId: string, rating: "positive" \| "negative" }` |

**Key changes:**
- `/insights/welcome` → `/insights-welcome`
- `/insights/feedback` → `/insights-feedback`
- Feedback response: `{ data: { recorded: true } }` → `{ stored: true, insightId, rating }` (flat, not wrapped in `data`)

---

### REPLACED: UI State Summary

**Previous (may imply standalone feedback component):**

| State | Component | Trigger |
|-------|-----------|---------|
| Populated (insights shown) | InsightCard(s) with feedback buttons | Insights generated |

**Corrected:**

| State | Component | Trigger |
|-------|-----------|---------|
| Loading (welcome insights) | `Spinner` | Fetching welcome insights on idle load |
| Empty (no insights) | Guided prompts only | Insufficient data for insights |
| Populated (insights shown) | `InsightCard` (with embedded feedback buttons) | Insights generated |
| Feedback submitted | Updated button state inside `InsightCard` | User tapped thumbs up/down |
| Feedback error | No visible change (silent fail) | `apiClient` call fails |
