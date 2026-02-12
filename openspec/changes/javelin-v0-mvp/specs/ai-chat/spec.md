## ADDED Requirements

### Requirement: Chat Interface in ContextView
The system SHALL provide an AI chat interface rendered inside a Stripe Dashboard `ContextView` (drawer). The interface SHALL be built entirely with Stripe UI Toolkit components.

#### Scenario: Chat view registration
- **WHEN** Javelin is installed
- **THEN** a `ContextView` SHALL be registered at the `stripe.dashboard.drawer.default` viewport
- **AND** the view SHALL appear on every Stripe Dashboard page (unless overridden by a page-specific view)

#### Scenario: Chat layout rendering
- **WHEN** the chat view loads
- **THEN** it SHALL render a vertical message list (`Box` with `stack: 'y'`), a text input area (`TextArea`), and a send button (`Button` type="primary")
- **AND** all layout SHALL use `Box` with design token `css` prop — no custom HTML or CSS

### Requirement: Send Message and Receive AI Response
The system SHALL allow users to type plain-language business questions and receive AI-generated answers.

#### Scenario: User sends a question
- **WHEN** the user types a question in the `TextArea` and presses the send `Button` (or submits)
- **THEN** the UI SHALL display the user's message in the chat thread
- **AND** the UI SHALL show a ThinkingIndicator (`Spinner` + "Analyzing..." text)
- **AND** the UI SHALL send a `POST /chat/message` request to the Edge Function
- **AND** upon receiving the response, the UI SHALL render the AI's answer in the chat thread
- **AND** the ThinkingIndicator SHALL be removed

#### Scenario: AI response includes freshness indicator
- **WHEN** the AI returns a data-backed answer
- **THEN** the response SHALL include a freshness indicator: `Badge` showing "Data as of [timestamp]" for cached data or "Live data" for fresh fetches
- **AND** the freshness indicator SHALL be visually distinct from the answer text

#### Scenario: Empty input submission
- **WHEN** the user presses send with an empty `TextArea`
- **THEN** the system SHALL NOT send a request
- **AND** the send `Button` SHALL be disabled when the input is empty

### Requirement: Thinking State During Processing
The system SHALL display a clear visual indicator while the AI is processing a request.

#### Scenario: Thinking indicator display
- **WHEN** a chat message has been sent and the response has not yet arrived
- **THEN** the UI SHALL display a `Spinner` component with accompanying text (e.g., "Analyzing your data...")
- **AND** the send `Button` SHALL be disabled to prevent duplicate submissions
- **AND** the `TextArea` SHALL remain editable for the next question

#### Scenario: Long-running request feedback
- **WHEN** a response takes longer than 5 seconds (e.g., live Stripe fetch + LLM processing)
- **THEN** the thinking indicator text SHALL update to provide context (e.g., "Fetching fresh data from Stripe...")

### Requirement: Strong Clarification Bias
The system SHALL ask clarifying questions when a user's intent is ambiguous, rather than assuming and potentially giving a wrong answer.

#### Scenario: Temporal scope ambiguity
- **WHEN** a user asks "What's my revenue last month?" and "last month" could mean last 30 days or last calendar month
- **THEN** the AI SHALL ask the user to clarify their intended time range
- **AND** the clarification SHALL be presented as a prompt with selectable options (e.g., `Button` choices: "Last 30 days" / "Last calendar month")

#### Scenario: Metric definition ambiguity
- **WHEN** a user asks about "churn" without specifying gross or net
- **THEN** the AI SHALL default to gross churn but explain which definition was used
- **AND** the AI SHALL offer to recalculate with a different definition if needed

#### Scenario: Entity scope ambiguity
- **WHEN** a user asks "How's my Pro plan doing?" and multiple products or prices contain "Pro"
- **THEN** the AI SHALL present the matching options and ask the user to select the intended one

### Requirement: Guided Prompts for New Users
The system SHALL provide guided prompt suggestions to help users understand what questions Javelin can answer.

#### Scenario: Welcome state with guided prompts
- **WHEN** a user opens Javelin for the first time or starts a new conversation with no messages
- **THEN** the UI SHALL display a welcome message explaining what Javelin can do
- **AND** the UI SHALL show 3-5 guided prompt chips (e.g., "What's my MRR?", "How's churn trending?", "Revenue by product")
- **AND** tapping a chip SHALL populate the `TextArea` with that question and auto-send it

#### Scenario: Guided prompts accessibility
- **WHEN** guided prompt chips are rendered
- **THEN** each chip SHALL be a focusable `Button` component with descriptive text
- **AND** the chips SHALL be navigable via keyboard (tab order)

### Requirement: Error Handling
The system SHALL gracefully handle errors from Edge Functions, LLM providers, and the Stripe API.

#### Scenario: Edge Function error
- **WHEN** the `POST /chat/message` request fails (network error, 500, timeout)
- **THEN** the UI SHALL display a `Banner` (type="critical") with an error message
- **AND** the UI SHALL provide a "Retry" `Button`
- **AND** the ThinkingIndicator SHALL be removed

#### Scenario: LLM provider unavailable
- **WHEN** the LLM provider returns an error or times out
- **THEN** the Edge Function SHALL return a structured error with code `llm_unavailable`
- **AND** the UI SHALL display a `Banner` explaining that the AI service is temporarily unavailable
- **AND** the UI SHALL suggest trying again in a moment

#### Scenario: Auth session expired during chat
- **WHEN** a chat request fails with a 401 `auth_refresh_failed` error
- **THEN** the UI SHALL display a `SignInView` prompting re-authorization
- **AND** the user's unsent message SHALL be preserved for retry after re-auth

---

**UI State Summary:**

| State | Component | Trigger |
|-------|-----------|---------|
| Loading (initial) | `Spinner` | Fetching conversation history on view mount |
| Empty (no conversations) | WelcomePrompt + guided chips | First use or new conversation |
| Populated (active chat) | ChatThread with MessageBubbles | Messages loaded |
| Thinking (AI processing) | `Spinner` + status text | Message sent, awaiting response |
| Error (failure) | `Banner` type="critical" + Retry `Button` | API/LLM/network error |
| Clarification | Prompt with `Button` options | AI needs disambiguation |
| Auth expired | `SignInView` | 401 from Edge Function |

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| POST | `/chat/message` | Stripe signature | `{ conversationId?: string, content: string }` | `{ data: { message: AssistantMessage, insights?: Insight[] }, meta: { freshness, syncedAt } }` |

**Performance Acceptance Criteria:**
- **PC-1:** Chat view initial load (conversation history) SHALL complete in < 300ms
- **PC-2:** Chat responses using cached data SHALL return in < 3s (Edge Function processing + LLM)
- **PC-3:** Chat responses requiring live Stripe fetch SHALL return in < 8s with thinking indicator shown

**Security Acceptance Criteria:**
- **SEC-1:** User message content SHALL be validated with Zod (max length, no injection patterns)
- **SEC-2:** The LLM SHALL NOT receive raw customer PII — names/emails SHALL be anonymized before prompt construction
- **SEC-3:** Chat messages SHALL be scoped to the authenticated account via RLS

**Accessibility Acceptance Criteria:**
- **AC-1:** All interactive elements (send Button, prompt chips, retry Button) SHALL be keyboard accessible
- **AC-2:** The ThinkingIndicator SHALL include an ARIA live region announcement for screen readers
- **AC-3:** Error Banners SHALL be announced to screen readers via ARIA
- **AC-4:** The chat message list SHALL be navigable with screen readers (each message as a distinct region)
