## ADDED Requirements

### Requirement: Post-Response Insight Delivery
The system SHALL surface proactive insights after answering the user's direct question, not before. Insights SHALL feel like a knowledgeable colleague adding context.

#### Scenario: Insight appended to chat response
- **WHEN** the AI answers a user's question and has detected a relevant insight
- **THEN** the insight SHALL be appended after the direct answer, visually separated
- **AND** the insight SHALL be prefixed with contextual language (e.g., "By the way —")
- **AND** the insight SHALL be rendered as an InsightCard (`Box` with `Banner` type="info") distinct from the answer text

#### Scenario: No insight available
- **WHEN** the AI answers a question but no relevant insight is detected
- **THEN** the response SHALL contain only the direct answer with no insight section
- **AND** the system SHALL NOT force an insight on every response

#### Scenario: Insight relevance to user's question
- **WHEN** generating insights alongside an answer
- **THEN** the system SHALL prioritize insights related to the topic the user asked about
- **AND** unrelated insights SHALL be deferred to future interactions

### Requirement: Welcome Prompt Insights for Idle Sessions
The system SHALL surface proactive insights as a welcome prompt when a user opens Javelin without asking a question.

#### Scenario: User opens Javelin with no initial question
- **WHEN** a user opens the Javelin ContextView and does not type a question
- **THEN** the UI SHALL display 1-2 recent insights as a welcome prompt after the guided prompt chips
- **AND** each insight SHALL include a brief headline and supporting data

#### Scenario: Welcome insights endpoint
- **WHEN** the UI loads and requests welcome insights via `GET /insights/welcome`
- **THEN** the Edge Function SHALL return up to 2 recent insights based on the latest cached data
- **AND** the response SHALL include the `synced_at` timestamp for the underlying data

#### Scenario: No insights available (new account or insufficient data)
- **WHEN** the account has insufficient cached data to generate insights
- **THEN** the welcome prompt SHALL display only the guided prompt chips without insights
- **AND** the system SHALL NOT display a placeholder or "no insights" message

### Requirement: Insight Types
The system SHALL support three categories of proactive insights for v0.

#### Scenario: Metric anomaly detection
- **WHEN** the system detects a significant deviation in a key metric (e.g., churn spike, revenue drop, subscriber surge)
- **THEN** the insight SHALL describe the anomaly with specific numbers and the time period
- **AND** the insight SHALL include the magnitude of the deviation (e.g., "Churn spiked 3x this week compared to last week")

#### Scenario: Trend observation
- **WHEN** the system identifies a notable trend in the data (e.g., growing segment, accelerating growth, declining plan)
- **THEN** the insight SHALL describe the trend with comparative data
- **AND** the insight SHALL include the time range observed (e.g., "Your Enterprise plan revenue overtook Pro for the first time this month")

#### Scenario: Peer benchmarking insight (when eligible)
- **WHEN** the account meets Stripe benchmarking eligibility and peer data is available
- **THEN** the insight MAY include a peer comparison (e.g., "Your subscriber churn rate is 2x the median for businesses your size")
- **AND** the benchmarking insight SHALL cite the data source as Stripe Benchmarking

### Requirement: Insight Accuracy Target
Proactive insights SHALL target 80-90% directional accuracy. Insights are informational analysis, not exact computations.

#### Scenario: Insight accuracy guardrails
- **WHEN** the AI generates an insight
- **THEN** the insight SHALL be based on actual cached data (not fabricated)
- **AND** the specific numbers cited in the insight SHALL come from server-side metric calculations (not LLM generation)
- **AND** the AI disclaimer ("Insights are informational, not financial advice") SHALL be accessible from the UI

### Requirement: Insight Feedback
The system SHALL allow users to provide feedback on proactive insights to measure satisfaction.

#### Scenario: Thumbs up/down on insight
- **WHEN** an insight is displayed
- **THEN** the UI SHALL show thumbs up and thumbs down `Button` components below the insight
- **AND** tapping a button SHALL send a `POST /insights/feedback` request
- **AND** the button state SHALL update to show the selected feedback

#### Scenario: Feedback persistence
- **WHEN** a user submits insight feedback
- **THEN** the feedback SHALL be stored in the `messages` table metadata (JSONB) linked to that insight
- **AND** the feedback SHALL be used to track insight satisfaction rate (target: 60%+ positive)

#### Scenario: Feedback accessibility
- **WHEN** feedback buttons are rendered
- **THEN** each button SHALL have descriptive ARIA labels (e.g., "Rate this insight as helpful", "Rate this insight as not helpful")
- **AND** the buttons SHALL be keyboard accessible

---

**UI State Summary:**

| State | Component | Trigger |
|-------|-----------|---------|
| Loading (welcome insights) | `Spinner` | Fetching welcome insights on idle load |
| Empty (no insights) | Guided prompts only | Insufficient data for insights |
| Populated (insights shown) | InsightCard(s) with feedback buttons | Insights generated |
| Feedback submitted | Updated button state | User tapped thumbs up/down |

**Endpoint Inventory:**

| Method | Path | Auth | Request | Response |
|--------|------|------|---------|----------|
| GET | `/insights/welcome` | Stripe signature | — | `{ data: { insights: Insight[] }, meta: { freshness, syncedAt } }` |
| POST | `/insights/feedback` | Stripe signature | `{ insightId: string, messageId: string, rating: "positive" \| "negative" }` | `{ data: { recorded: true } }` |

**Performance Acceptance Criteria:**
- **PC-1:** Welcome insights endpoint SHALL return in < 1s
- **PC-2:** Insight generation (as part of chat response) SHALL add no more than 500ms to overall response time

**Security Acceptance Criteria:**
- **SEC-1:** Insight data SHALL be derived only from the authenticated account's cached data
- **SEC-2:** Feedback requests SHALL be validated with Zod schemas
