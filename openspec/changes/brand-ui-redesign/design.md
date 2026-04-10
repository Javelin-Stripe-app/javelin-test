## Context

The Javelin Stripe App consists of 4 views (`ChatView`, `OnboardingView`, `SettingsView`, `SignInView`) and ~4 child components (`ChatThread`, `WelcomePrompt`, `ConversationList`, `ChatInput`). All currently use raw Stripe UI Toolkit components directly with ad-hoc styling. The brand component library (10 `Jv*` components in `src/components/brand/`) was built to standardize these patterns but is unused in production.

This is a **pure UI/rendering change** — no API contracts, auth flows, Supabase schema, or Edge Functions are modified.

## Goals / Non-Goals

**Goals:**
- Apply `Jv*` brand components to all 4 views and their immediate child components
- Enforce 4-state UI coverage (loading / empty / error / populated) in every view
- Eliminate ad-hoc `Box`/`Inline`/`Spinner`/`Banner` patterns in favor of brand components
- Maintain full test suite pass rate post-migration

**Non-Goals:**
- Adding new features or behaviors to any view
- Changing API contracts, auth flows, data access, or `stripe-app.json`
- Modifying the brand component library itself (gaps become follow-up tickets)
- Responsive design or theming (Stripe App viewport is fixed per view type)
- Dark mode (Stripe design token system handles this automatically)

## Decisions

### Decision 1: View-first migration order (simplest → most complex)

Migrate views in this order:
1. `SignInView` — no state machine, 1 render path
2. `SettingsView` — simple auth status display, 3 states
3. `OnboardingView` — 4-state machine, but linear flow
4. Child components audit (`ChatThread`, `WelcomePrompt`, `ConversationList`, `ChatInput`)
5. `ChatView` — most complex (5 states, side effects, welcome prompt, freshness)

**Rationale**: Each view is independently testable. A failure in one view doesn't block the next. Saving `ChatView` for last reduces regression risk during the most complex migration.

*Alternatives considered:* Component-first (replace all `Spinner` usages across the codebase at once) — rejected because it touches many files simultaneously and is harder to review safely.

### Decision 2: No net-new brand components in this change

The 10 existing `Jv*` components cover all identified patterns. If a view requires something not in the library, the gap is documented as a follow-up ticket — not addressed inline here.

*Alternatives considered:* Create gap-filling components inline in views — rejected, as this undoes the brand enforcement goal.

### Decision 3: Preserve all functional logic unchanged

Props, state machine logic, hooks, and API calls are NOT modified. Only the `return` / render output changes. This makes diffs small and reviewable, and prevents breaking functional behavior while refactoring visual structure.

### Decision 4: Component mapping table

| Current pattern | Replaces with |
|---|---|
| `<Spinner size="small" />` during async | `<JvLoadingState />` |
| `<Banner type="caution\|default" />` with status | `<JvStatusIndicator />` |
| Section heading `<Inline css={{ font: 'heading' }}>` | `<JvSectionHeader />` |
| Content wrapper `<Box css={{ stack: 'y', gap: '...' }}>` | `<JvCard />` |
| Action button row | `<JvActionBar />` |
| Empty state `<Banner>` or placeholder text | `<JvEmptyState />` |
| Inline freshness message on cached responses | `<JvFreshnessIndicator />` |
| Welcome prompt suggestion list (`WelcomePrompt`) | `<JvPromptSuggestions />` |
| Confirmation/destructive-action flows | `<JvConfirmationPrompt />` |

## UI State → Component Mapping

All views SHALL handle all 4 states using these components:

| State | Component | Trigger |
|---|---|---|
| `loading` | `JvLoadingState` | Async operation in-flight |
| `empty` | `JvEmptyState` | No data / first-time user |
| `error` | `JvStatusIndicator` (error type) | Exception caught |
| `populated` | Primary content in `JvCard` | Data available |

## STRIDE Threat Model

This change introduces no new attack surface:
- No new inputs, no new API endpoints, no new auth paths
- No changes to RLS policies or Edge Function logic
- Brand components are pure render functions — no side effects, no data access
- **No security concerns introduced** by this change

## Test Architecture

- **Unit tests** (Vitest + `@stripe/ui-extension-sdk/testing`): Each view gets a test suite covering all 4 states, verifying the correct `Jv*` component is rendered via `wrapper.find(JvLoadingState)`, etc.
- **Existing tests**: Must all continue passing — test selectors may need updating if they relied on `Spinner` or `Banner` directly
- **No new integration or E2E tests** required (this change doesn't affect API contracts or user flows, only render output)
- **Lint + typecheck** validate structural constraints (no raw HTML, no hex colors)

## Performance

- **No additional API calls**: Brand components are pure render — no `useEffect`, no fetching
- **No bundle size impact**: Brand components are local files, tree-shaken normally
- **No render count increase**: Replacing `<Spinner>` with `<JvLoadingState>` is 1:1

## Deployment Strategy

- **No environment variables, feature flags, or migrations required**
- **No backend changes** to coordinate
- Deploy order: land PR → `stripe apps upload` → visual verify in Stripe Dashboard sandbox
- **Rollback**: `git revert` — views are self-contained with no state external to the component

## Open Questions

None. The scope is fully bounded by the existing brand component library and the 4 views.
