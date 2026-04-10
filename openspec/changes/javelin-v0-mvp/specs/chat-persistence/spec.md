## ADDED Requirements

### Requirement: Persistent Chat History
The system SHALL persist all chat conversations and messages across sessions, scoped to the Stripe account.

#### Scenario: Messages persist after closing the drawer
- **WHEN** a user sends messages in a conversation and then closes the Stripe Dashboard or navigates away
- **THEN** upon returning to the Javelin ContextView, the conversation SHALL be restored with all previous messages
- **AND** messages SHALL be loaded from the `messages` table via the `GET /chat/conversations/:id` endpoint

#### Scenario: Conversation listing
- **WHEN** a user opens Javelin and has previous conversations
- **THEN** the UI SHALL display a conversation list showing recent conversations sorted by `updated_at` descending
- **AND** each conversation entry SHALL show: title, last message preview, and timestamp
- **AND** the user SHALL be able to tap a conversation to load its full message history

#### Scenario: New conversation creation
- **WHEN** a user sends a message and no active conversation is selected
- **THEN** the system SHALL create a new conversation record
- **AND** the conversation title SHALL be auto-generated from the first message content
- **AND** the new conversation SHALL appear at the top of the conversation list

### Requirement: Conversation Data Model
The system SHALL store conversations and messages in Supabase Postgres tables with RLS scoped to `stripe_account_id`.

#### Scenario: Message storage
- **WHEN** a message is sent or received
- **THEN** the message SHALL be stored with: `id`, `conversation_id`, `role` (user/assistant/system), `content`, `metadata` (JSONB), `created_at`
- **AND** the `metadata` field SHALL include: freshness info, insight flags, feedback ratings (if applicable)
- **AND** RLS SHALL ensure messages are only accessible to the owning account

#### Scenario: Conversation scoping
- **WHEN** any conversation or message query is executed
- **THEN** the query SHALL be scoped to `stripe_account_id` via RLS
- **AND** no conversation or message from another account SHALL ever be returned

### Requirement: Business Context Accumulation
The system SHALL accumulate a lightweight business context profile over time so the AI does not re-learn the business every session.

#### Scenario: Context extraction after conversation
- **WHEN** a conversation interaction completes
- **THEN** the Edge Function SHALL prompt the LLM to extract any new business context from the interaction
- **AND** extracted context (e.g., industry, key products, pricing model, important metrics) SHALL be merged into the `business_context` table for that account
- **AND** merging SHALL be additive — new information adds to existing context, never replaces wholesale

#### Scenario: Context injection into system prompt
- **WHEN** the AI processes a new user message
- **THEN** the system prompt SHALL include the accumulated business context for that account
- **AND** the AI SHALL use this context to provide more relevant, personalized answers
- **AND** the AI SHALL NOT re-ask questions whose answers are already in the business context

#### Scenario: Business context for new account (no prior context)
- **WHEN** a new user sends their first message and no business context exists
- **THEN** the system prompt SHALL use generic defaults
- **AND** the AI MAY ask about business type or key metrics to seed the context profile

#### Scenario: Business context reset
- **WHEN** a user explicitly asks to reset their business profile (future: via settings)
- **THEN** the `business_context` record SHALL be cleared for that account
- **AND** the AI SHALL revert to generic defaults for subsequent conversations

### Requirement: Data Deletion on Uninstall
All chat data SHALL be permanently deleted when Javelin is uninstalled.

#### Scenario: Uninstall purges chat data
- **WHEN** the Javelin app is uninstalled
- **THEN** all `conversations` records for that account SHALL be deleted
- **AND** all `messages` records for that account SHALL be deleted
- **AND** the `business_context` record for that account SHALL be deleted
- **AND** no chat or context data SHALL be retained

---

**UI State Summary:**

| State | Component | Trigger |
|-------|-----------|---------|
| Loading (conversation list) | `Spinner` | Fetching conversations on view mount |
| Empty (no conversations) | WelcomePrompt | First-time user |
| Populated (conversations) | Conversation `List` | Conversations loaded |
| Loading (messages) | `Spinner` | Fetching messages for selected conversation |
| Populated (messages) | ChatThread with MessageBubbles | Messages loaded |

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/chat/conversations` | Stripe signature | `?limit=20&offset=0` | `{ data: { conversations: Conversation[] } }` |
| GET | `/chat/conversations/:id` | Stripe signature | — | `{ data: { conversation: Conversation, messages: Message[] } }` |

**Performance Acceptance Criteria:**
- **PC-1:** Conversation list endpoint SHALL return in < 300ms
- **PC-2:** Message history for a conversation (up to 100 messages) SHALL load in < 500ms

**Security Acceptance Criteria:**
- **SEC-1:** All conversation and message queries SHALL be scoped via RLS — no cross-account access
- **SEC-2:** Business context profile SHALL be treated as Internal data — no PII stored in the context JSONB
- **SEC-3:** Message content SHALL be stored encrypted at rest (Supabase default encryption)

**Accessibility Acceptance Criteria:**
- **AC-1:** Conversation list items SHALL be keyboard navigable and selectable
- **AC-2:** New conversation creation SHALL be announced to screen readers
