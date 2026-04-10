## Why

The Javelin brand component library (`Jv*` prefix, `src/components/brand/`) was built to enforce visual consistency across the app but is not used in any production view. All 4 views — `ChatView`, `OnboardingView`, `SettingsView`, `SignInView` — use raw Stripe UI Toolkit components with ad-hoc styling, bypassing the brand system entirely. This makes the UI visually inconsistent, duplicates state-handling logic across views, and means any future brand update must touch every view individually.

## What Changes

- **ChatView**: Replace ad-hoc loading/error/empty states with `JvLoadingState`, `JvEmptyState`; use `JvStatusIndicator` for sync/freshness feedback; wrap content sections in `JvCard`/`JvSectionHeader`; use `JvPromptSuggestions` for welcome prompts; use `JvActionBar` for the primary send action surface; use `JvFreshnessIndicator` on cached responses.
- **OnboardingView**: Replace inline 4-state rendering (`auth`/`syncing`/`success`/`error`) with `JvLoadingState`, `JvStatusIndicator`, `JvCard`.
- **SettingsView**: Replace inline status label + `Banner` with `JvStatusIndicator`; wrap connection section in `JvCard` with `JvSectionHeader`; use `JvActionBar` for the reconnect action.
- **SignInView**: Replace ad-hoc `Banner` + `Box` layout with `JvCard` + `JvStatusIndicator` + `JvActionBar`.
- **Child components** (`ChatThread`, `WelcomePrompt`, `ConversationList`, `ChatInput`): Audit and apply brand components where patterns diverge from brand spec.

## Capabilities

### New Capabilities

- `brand-ui-layer`: Application of the Javelin brand component system across all 4 production views and their immediate child components. Covers visual consistency, 4-state UI coverage (loading/empty/error/populated), and brand token enforcement.

### Modified Capabilities

None — this change applies the existing brand component library to existing views. No spec-level behavior changes; API contracts, data models, and auth flows are unchanged.

## Impact

- **Files modified**: `src/views/ChatView.tsx`, `src/views/OnboardingView.tsx`, `src/views/SettingsView.tsx`, `src/views/SignInView.tsx`
- **Possibly modified**: `src/components/ChatThread.tsx`, `src/components/WelcomePrompt.tsx`, `src/components/ConversationList.tsx`, `src/components/ChatInput.tsx`
- **No changes to**: APIs, Edge Functions, Supabase schema, auth logic, or `stripe-app.json`
- **Dependencies**: No new packages — `src/components/brand/` is already in the project
- **Performance**: Neutral — brand components are thin wrappers over Stripe UI Toolkit with no additional network calls or renders
- **Testing**: Existing view tests must remain passing; new tests added for brand component usage in each view
