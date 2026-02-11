<!-- Source: openspec/product-vision-strategy.md -->
<!-- Included: §1, §2, §3, §4, §5, §6, §7, §12 -->
<!-- Skipped: none -->
<!-- Regenerate: /vision:distill -->

## 1. Vision

Javelin enables anyone to customize the software platforms they already use — without writing code or hiring a developer. Starting with Stripe, Javelin is an AI-powered builder that lives inside the platform, understands the user's data and workflows, and instantly builds working solutions from plain-language descriptions. It transforms the long tail of unsolved platform customization problems into near-zero-effort outcomes.

---

## 2. Problem Space

SaaS platforms scale by generalizing — they can't build for every edge case, workflow, or niche business need. The result is a long tail of unsolved problems that users work around with spreadsheets, manual processes, and duct-tape solutions.

**Core problems (ranked by priority):**

1. **Visibility gaps** — No custom dashboards, no object relationship views, no business-level activity logs. The data exists but there's no way to see it the way the user needs to. Stripe has no plans to solve this.
2. **Operational friction** — Bulk metadata editing is manual. Metadata doesn't sync across objects. There's no change history or undo. Dispute management is API-only. These are daily pain points for operators running their business on Stripe.
3. **Workflow gaps** — Stripe doesn't support the specific automation, alerting, or workflow logic that operators need. Stripe is actively investing in its own Workflows product, which will close some of these gaps over time. Javelin focuses on workflows that Stripe's native tooling can't handle — complex multi-step logic, cross-object orchestration, and workflows requiring external context.

**Priority rationale:** Stripe's investment in native Workflows makes problem 3 the least differentiated. Visibility and operational friction remain unsolved by Stripe and represent the strongest wedge for Javelin.

**Who feels this most:** Founders, ops leads, and finance teams at small and growing companies. They know exactly what they want Stripe to do but lack the engineering resources to build it. They're high-friction users with high agency — frustrated enough to want a solution and empowered enough to try one immediately.

---

## 3. Target Customers

**Primary:** Founders, owners, and operations leads at small and growing companies who use Stripe as core infrastructure. They are:
- Close to the problem — they feel the friction daily
- Empowered to act — no approval chains, short sales cycles
- Resource-constrained — engineering is focused on product, not internal ops
- Already hacking workarounds — spreadsheets, Notion, manual processes
- Increasingly comfortable with AI — already using ChatGPT/Claude in daily work

**Secondary:** Finance leads, support managers, and RevOps/PaymentOps consultants who manage Stripe on behalf of teams or clients.

---

## 4. Value Proposition

**Javelin is an AI builder, not an AI analyst.**

> Competitors ask: "What happened in your Stripe data?"
> Javelin asks: "What do you want Stripe to do?" — and then builds it.

Every existing tool in the Stripe ecosystem is a read-only analyst. Javelin occupies an empty quadrant: in-dashboard AND read-write. It differentiates by:

- **Builder, not analyst** — creates workflows, dashboards, and automations, not just charts and queries
- **Stripe-native** — lives inside the Stripe Dashboard, not a separate SaaS
- **Zero-setup** — Stripe App install and start building. No data export, no schema mapping, no warehouse
- **Stripe-deep** — tuned to Stripe object semantics, edge cases, and billing realities. Not a generic multi-source BI tool
- **Operator-first** — designed for non-technical users, not developers or data analysts

---

## 5. Strategic Pillars

Ranked by priority. When pillars conflict, higher-ranked pillar wins.

1. **Speed over polish** — Ship fast, iterate based on real usage. 80% that works now beats 100% that ships later. Optimize when it breaks, not before.

2. **Operator-first** — Every decision filters through "can a non-technical founder use this?" Plain language over technical jargon. Simplicity over power-user features. If it requires documentation to use, it's too complex.

3. **Depth over breadth** — Go deep on Stripe before going wide to other platforms. Master one ecosystem's edge cases, object model, and user patterns before expanding. One platform done right beats three done halfway.

4. **Ecosystem-native** — Build deeply into the platform's design system, data model, and UI components. Javelin should feel like a seamless extension of Stripe, not a third-party bolt-on. Distribution through the platform, not around it.

---

## 6. Success Metrics

**Dual North Star:**

1. **Prompt resolution rate** — The percentage of actionable prompts (workflows, edits, automations) that result in an activated solution without abandonment. Measures whether Javelin actually solves the user's problem, regardless of output type.
2. **Insight satisfaction rate** — For non-actionable prompts (data questions, analysis, lookups), measured via explicit feedback (thumbs up/down) and refinement rate (how many follow-up prompts were needed). Low refinement + positive feedback = the insight landed.

Together, these cover every interaction type. Resolution rate proves the builder thesis. Insight satisfaction proves the visibility thesis (§2, problem 1).

**Supporting Signals:**
- **Time-to-first-resolution** — How fast do users go from install to a successfully resolved prompt? Measures the zero-setup promise.
- **Prompts per user/week** — Are users treating Javelin as a go-to tool or a one-time experiment?
- **Refinement rate** — How many follow-up prompts per initial request? One-shot = nailed it. Multiple = needed clarification. Abandoned = failed.
- **Install completion rate** — Are users successfully getting through the Stripe App install? Drop-off here = trust or friction problem.

---

## 7. Non-Goals

These are deliberately out of scope. Javelin does not do these things, even if users ask.

1. **Not for end-customer-facing changes** (MVP) — No checkout customization, invoice email changes, or customer portal modifications. Internal ops only. Higher trust/safety bar for later milestones.
2. **Not multi-platform** (yet) — Stripe only until the model is proven. No HubSpot, Shopify, or other ecosystems until depth over breadth is satisfied.
3. **Not for enterprise compliance workflows** — Small teams first. SOC2 audit trails, multi-level approval chains, and role-based access control are later concerns.
4. **Not a Stripe Payments integration** — Javelin is a Stripe App (Dashboard extension), not a checkout or payment flow product. No `@stripe/stripe-js`, no PaymentElements, no payment intents.
5. **Not a replacement for developers** — Javelin handles the long tail of ops customization. Complex, mission-critical engineering still needs engineers.

---

## 12. AI Strategy

**Autonomy Model: Semi-autonomous**
- AI builds the complete solution and presents it to the user. User reviews and activates.
- AI does not execute actions without user confirmation.
- Future path: autonomous mode where users can opt-in to reduced confirmation for trusted workflow types.

**Clarification Bias:**
- **Ask for the "what," default on the "how."** When the AI doesn't understand the user's intent, it asks rather than guessing. When it understands the intent but could implement it multiple ways, it picks a reasonable default and explains the choice.
- Wrong guesses waste time and erode trust. A quick question is always better than a wrong build.
- This applies to data freshness too: when it's unclear whether cached data is sufficient for a query, the AI asks the user rather than silently serving stale results (see §10).

**Guardrails:**
- All write operations require confirmation (see §11).
- Destructive and bulk operations require express authorization.
- AI never executes irreversible Stripe actions without explicit warning and confirmation.
- Hard limits exist regardless of user preference — Javelin will always warn on irreversible actions.

**Explainability:**
- When AI builds a workflow, it explains its reasoning in plain language — what it built, why it made the choices it did, and what the workflow will do.
- Explanations target operators, not developers. No jargon, no code unless requested.
- Data-backed responses always include a freshness indicator ("Data as of [timestamp]" for cached, "Live data" for fresh fetches).

**Recovery:**
- Undo (single actions) and rollback (bulk operations) provide safety nets when AI gets it wrong.
- Changelog layer tracks all AI-initiated changes for auditability.
