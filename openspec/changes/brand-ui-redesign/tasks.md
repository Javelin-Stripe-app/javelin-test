## 1. SignInView Migration

- [x] 1.1 Read `src/views/SignInView.tsx` and `src/components/brand/index.ts` to confirm available imports
- [x] 1.2 Replace `Box` + `Banner` + `Button` layout with `JvCard`, `JvStatusIndicator`, and `JvActionBar` in `SignInView`
- [x] 1.3 Verify no raw HTML elements remain in `SignInView.tsx`
- [x] 1.4 Run `npm run test` and confirm SignInView tests pass [AC-1]
- [x] 1.5 Run `npm run lint` and `npm run typecheck` — fix any errors

## 2. SettingsView Migration

- [x] 2.1 Read `src/views/SettingsView.tsx` to map current patterns to brand components
- [x] 2.2 Wrap connection status section in `JvCard` with `JvSectionHeader` title "Stripe access"
- [x] 2.3 Replace `Spinner` (checking state) with `JvLoadingState` [AC-4]
- [x] 2.4 Replace `Banner` (healthy/missing/expired states) with `JvStatusIndicator` [AC-2, AC-3]
- [x] 2.5 Replace disconnect/reconnect button row with `JvActionBar`
- [x] 2.6 Verify no raw HTML elements remain in `SettingsView.tsx`
- [x] 2.7 Run `npm run test` — confirm SettingsView tests pass [AC-2, AC-3, AC-4]
- [x] 2.8 Run `npm run lint` and `npm run typecheck` — fix any errors

## 3. OnboardingView Migration

- [x] 3.1 Read `src/views/OnboardingView.tsx` and map 4 states (`auth`, `syncing`, `success`, `error`) to brand components
- [x] 3.2 Replace `Spinner` in `syncing` state with `JvLoadingState` [AC-5]
- [x] 3.3 Replace inline error `Banner` with `JvStatusIndicator` (error type), surfacing `errorMessage` via description prop [AC-6]
- [x] 3.4 Wrap `success` state content in `JvCard`, use `JvStatusIndicator` for success state [AC-7]
- [x] 3.5 Wrap `auth` state content in `JvCard` with `JvSectionHeader`
- [x] 3.6 Verify no raw HTML elements remain in `OnboardingView.tsx`
- [x] 3.7 Run `npm run test` — confirm OnboardingView tests pass [AC-5, AC-6, AC-7]
- [x] 3.8 Run `npm run lint` and `npm run typecheck` — fix any errors

## 4. Child Components Audit

- [x] 4.1 Read `src/components/WelcomePrompt.tsx` — replace prompt suggestion list with `JvPromptSuggestions`
- [x] 4.2 Read `src/components/ChatThread.tsx` — apply `JvFreshnessIndicator` on messages where `freshness.type === 'cached'`
- [x] 4.3 Read `src/components/ConversationList.tsx` — replace any ad-hoc section headers or loading states with `JvSectionHeader` / `JvLoadingState`
- [x] 4.4 Read `src/components/ChatInput.tsx` — replace any action button row with `JvActionBar` if applicable
- [x] 4.5 Verify no raw HTML elements remain in any audited child component
- [x] 4.6 Run `npm run test` — confirm all child component tests pass
- [x] 4.7 Run `npm run lint` and `npm run typecheck` — fix any errors

## 5. ChatView Migration

- [x] 5.1 Read `src/views/ChatView.tsx` in full before making changes
- [x] 5.2 Replace `Spinner` in `loading` viewState with `JvLoadingState` [AC-8]
- [x] 5.3 Replace empty state placeholder with `JvEmptyState` [AC-9]
- [x] 5.4 Replace error state `Banner` with `JvStatusIndicator` (error type) surfacing the error message [AC-10]
- [x] 5.5 Ensure `JvPromptSuggestions` is used for welcome insight prompts when `welcomeInsights` are loaded (via updated `WelcomePrompt`) [AC-11]
- [x] 5.6 Ensure `JvFreshnessIndicator` appears on cached messages (via updated `ChatThread`) [AC-12]
- [x] 5.7 Wrap main content sections in `JvCard` with `JvSectionHeader` where appropriate
- [x] 5.8 Verify no raw HTML elements remain in `ChatView.tsx`
- [x] 5.9 Run `npm run test` — confirm ChatView tests pass [AC-8 through AC-12]
- [x] 5.10 Run `npm run lint` and `npm run typecheck` — fix any errors

## 6. State Coverage Verification

- [x] 6.1 Confirm unit tests exercise all 4 states (loading/empty/error/populated) for `SignInView` [AC-15]
- [x] 6.2 Confirm unit tests exercise all 4 states for `SettingsView` [AC-15]
- [x] 6.3 Confirm unit tests exercise all 4 states for `OnboardingView` [AC-15]
- [x] 6.4 Confirm unit tests exercise all 4 states for `ChatView` [AC-15]
- [x] 6.5 Add missing test cases for any uncovered states

## 7. Full Test Suite & Lint Gate

- [x] 7.1 Run `npm run test` — all tests pass, no regressions [AC-16]
- [x] 7.2 Run `npm run lint` — no violations in `src/views/` or `src/components/` [AC-13]
- [x] 7.3 Run `npm run typecheck` — no type errors in `src/views/` or `src/components/` [AC-14]
- [x] 7.4 Run `npm run build` — build succeeds with no errors

## 8. Performance Verification

- [x] 8.1 Confirm no new API calls were introduced by checking test mock call counts match pre-migration baseline [PC-1]
- [x] 8.2 Confirm render count is unchanged — no additional `wrapper.find()` results beyond expected [PC-2]

## 9. Deploy & Verify

- [ ] 9.1 Commit all view and component changes with message: `feat: apply brand component system to all views`
- [ ] 9.2 Run `stripe apps upload` to deploy to Stripe Dashboard sandbox
- [ ] 9.3 Visual review of all 4 views in sandbox against `docs/brand-components.html` reference
- [ ] 9.4 Verify each view renders correctly for all applicable states in the sandbox
- [ ] 9.5 Confirm no errors in Stripe App developer console during smoke test
