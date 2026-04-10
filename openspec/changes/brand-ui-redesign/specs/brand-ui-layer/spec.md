## ADDED Requirements

### Requirement: SignInView uses brand components
The SignInView SHALL render using `JvCard`, `JvStatusIndicator`, and `JvActionBar` in place of raw `Box`/`Banner`/`Button` arrangements. All content, copy, and behavior SHALL remain unchanged.

#### Scenario: SignInView renders brand-compliant layout
- **WHEN** the SignInView is rendered
- **THEN** a `JvCard` wraps the view content
- **AND** a `JvStatusIndicator` displays the session-expired state
- **AND** a `JvActionBar` contains the re-authorization button
- **AND** no raw HTML elements appear in the component tree

#### Scenario: SignInView tests pass after migration
- **WHEN** `npm run test` is executed
- **THEN** all SignInView tests pass with no new failures [AC-1, Unit]

---

### Requirement: SettingsView uses brand components
The SettingsView SHALL use `JvCard`, `JvSectionHeader`, `JvStatusIndicator`, and `JvActionBar` for the connection status section. Status label computation logic SHALL remain in the view and feed into `JvStatusIndicator` props.

#### Scenario: SettingsView healthy auth state
- **WHEN** `authStatus.state` is `'healthy'`
- **THEN** `JvStatusIndicator` renders with a connected/success presentation
- **AND** `JvSectionHeader` renders the "Stripe access" section title
- **AND** `JvCard` wraps the status section [AC-2, Unit]

#### Scenario: SettingsView disconnected auth state
- **WHEN** `authStatus.state` is `'missing'` or `'expired'`
- **THEN** `JvStatusIndicator` renders with a caution/warning presentation
- **AND** a reconnect CTA is available via `JvActionBar` [AC-3, Unit]

#### Scenario: SettingsView loading auth state
- **WHEN** `authStatus.state` is `'checking'`
- **THEN** `JvLoadingState` is rendered in place of the raw `Spinner` [AC-4, Unit]

---

### Requirement: OnboardingView uses brand components
The OnboardingView SHALL use `JvCard`, `JvLoadingState`, `JvStatusIndicator`, and `JvSectionHeader` for each of its 4 states (`auth`, `syncing`, `success`, `error`). The state machine logic and API calls SHALL remain unchanged.

#### Scenario: OnboardingView syncing state
- **WHEN** `state` is `'syncing'`
- **THEN** `JvLoadingState` is rendered [AC-5, Unit]

#### Scenario: OnboardingView error state
- **WHEN** `state` is `'error'`
- **THEN** `JvStatusIndicator` renders with error presentation
- **AND** `errorMessage` is surfaced via the `JvStatusIndicator` description prop [AC-6, Unit]

#### Scenario: OnboardingView success state
- **WHEN** `state` is `'success'`
- **THEN** `JvCard` wraps the success confirmation
- **AND** `JvStatusIndicator` shows a completed/success state [AC-7, Unit]

---

### Requirement: ChatView uses brand components
The ChatView SHALL use `JvLoadingState` for loading state, `JvEmptyState` for empty conversations, `JvStatusIndicator` for sync/error feedback, `JvFreshnessIndicator` on cached responses, `JvPromptSuggestions` for welcome prompt suggestions, and `JvActionBar` for the send action surface. All state machine logic, API calls, and message rendering behavior SHALL remain unchanged.

#### Scenario: ChatView loading state
- **WHEN** `viewState` is `'loading'`
- **THEN** `JvLoadingState` is rendered [AC-8, Unit]

#### Scenario: ChatView empty state
- **WHEN** `viewState` is `'empty'` and no conversations exist
- **THEN** `WelcomePrompt` is rendered as the branded empty state, composed of `JvSectionHeader`, `JvCard` (for each insight), and `JvPromptSuggestions` [AC-9, Unit]
- **NOTE** `JvEmptyState` is intentionally NOT used here — the ChatView empty state is a rich welcome experience, not a bare empty state indicator. `JvEmptyState` is used in `ConversationList` for the empty history panel.

#### Scenario: ChatView error state
- **WHEN** `viewState` is `'error'`
- **THEN** `JvStatusIndicator` renders with error type and the error message string [AC-10, Unit]

#### Scenario: ChatView welcome prompt suggestions
- **WHEN** `viewState` is `'empty'` and `welcomeInsights` are loaded
- **THEN** `JvPromptSuggestions` renders the insight prompts [AC-11, Unit]

#### Scenario: ChatView cached response freshness indicator
- **WHEN** a message has `freshness.type === 'cached'`
- **THEN** `JvFreshnessIndicator` is rendered alongside that message [AC-12, Unit]

---

### Requirement: No raw HTML elements in view files
All files under `src/views/` SHALL contain no raw HTML elements (`div`, `span`, `input`, `form`, `button`, etc.). Only Stripe UI Toolkit components and `Jv*` brand components are permissible in JSX.

#### Scenario: Lint passes with no raw-HTML violations
- **WHEN** `npm run lint` is executed
- **THEN** no errors related to raw HTML elements appear for files in `src/views/` [AC-13, Lint]

---

### Requirement: Design token compliance
All `Box` and `Inline` `css` props in `src/views/` SHALL use only approved design token values. No hex colors, pixel values, RGB values, or arbitrary spacing strings are permitted.

#### Scenario: TypeScript validates token usage
- **WHEN** `npm run typecheck` is executed
- **THEN** no type errors related to `css` prop values appear in `src/views/` [AC-14, TypeCheck]

---

### Requirement: Full 4-state UI coverage per view
Each view (ChatView, OnboardingView, SettingsView, SignInView) SHALL explicitly handle all applicable states among loading, empty, error, and populated, delegating rendering to the appropriate `Jv*` brand component for each state.

#### Scenario: Each state renders the correct brand component
- **WHEN** each view state is triggered in unit tests
- **THEN** the correct `Jv*` component renders for that state in each view [AC-15, Unit]

---

### Requirement: Test suite integrity after migration
All tests that passed before this change SHALL continue to pass after migration. New test cases SHALL be added for any brand component usage not previously covered.

#### Scenario: Full test suite passes post-migration
- **WHEN** `npm run test` is executed after all view migrations are complete
- **THEN** all tests pass [AC-16, Unit]

---

## Performance Acceptance Criteria

- **PC-1**: No additional API calls are introduced by brand component adoption (verified by inspecting test mocks — no new fetch calls)
- **PC-2**: No measurable increase in component render count versus pre-migration baseline (verified by unit test render assertions)
