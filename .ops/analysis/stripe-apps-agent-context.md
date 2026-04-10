# Stripe Apps: Agent Context Strategy

> **Date:** 2026-02-10
> **Problem:** AI agents conflate Stripe Apps (Dashboard extensions) with Stripe Payments (checkout/billing). This leads to wrong SDK references, wrong React version, and wrong architectural patterns.

---

## 1. The Two Stripe Domains

| | Stripe Apps | Stripe Payments |
|---|---|---|
| **Purpose** | Extend the Stripe Dashboard | Accept payments on your site |
| **Users** | Merchants/operators in Dashboard | End customers |
| **React** | React 17 only | Any version |
| **SDK** | `@stripe/ui-extension-sdk`, UI Toolkit | `@stripe/stripe-js`, `@stripe/react-stripe-js` |
| **CLI** | `stripe apps start/create/upload` | `stripe listen` (webhooks) |
| **Config** | `stripe-app.json` manifest | Environment variables |
| **UI** | Stripe UI Toolkit components only (ContextView, FocusView, etc.) | Your own HTML/CSS/components |
| **Auth** | Platform key / OAuth / Restricted API key (via manifest) | Secret + publishable API keys |
| **Secrets** | Secret Store API (10 per scope) | Your own secret management |
| **Distribution** | Stripe App Marketplace or private install | Your own deployment |
| **Testing** | Jest (scaffolded default) | Any framework |

**Why agents get confused:** Both use "Stripe" + "React" + "TypeScript". Without explicit disambiguation, LLMs default to the far more common Stripe Payments docs in their training data.

---

## 2. Strategy Comparison

| Strategy | Accuracy | Token Cost | Maintenance | Setup Effort | Portability |
|---|---|---|---|---|---|
| **A. CLAUDE.md rules** | Medium | Very low (~200 tokens) | Low | Minutes | High (any tool) |
| **B. Local docs mirror** | High | High (loaded on demand) | High (manual sync) | Hours | Medium |
| **C. MCP server** | High | Low (on-demand) | Medium | Hours-days | Low (tool-specific) |
| **D. Agents-md index** | High | Low (~500 tokens always-on) | Medium | Hours | High |
| **E. Curated reference files** | Very high | Medium (loaded on demand) | Medium | Hours | High |

### Strategy Details

**A. CLAUDE.md Disambiguation Rules**
- Add a `## Stripe Apps (NOT Stripe Payments)` section to CLAUDE.md
- Define keyword triggers and explicit "do not confuse" rules
- Pros: Zero-cost, always loaded, works immediately
- Cons: No actual docs content — agents still rely on training data which is mostly Payments

**B. Local Docs Mirror (`.stripe-apps-docs/`)**
- Fetch key Stripe Apps doc pages as markdown and store in-repo
- Agents read them when doing Stripe Apps work
- Pros: Full verified content available locally
- Cons: Goes stale, large token cost when loaded, manual refresh needed

**C. MCP Server**
- Build or use an MCP server that fetches Stripe Apps docs on demand
- Pros: Always fresh, low token cost (fetched only when needed)
- Cons: Requires MCP setup per tool, network dependency, not all tools support MCP

**D. Agents-md Index (like Next.js pattern)**
- Create a pipe-delimited index of Stripe Apps doc files in CLAUDE.md
- Point to a local `.stripe-apps-docs/` directory with fetched docs
- Agents see the index always, load specific files on demand
- Pros: Proven pattern (already used for Next.js in this project), low always-on cost
- Cons: Requires fetching and maintaining local doc copies

**E. Curated Reference Files**
- Hand-craft 2-3 focused reference files covering Stripe Apps concepts, SDK API, component library, and gotchas
- Store in `.stripe-apps-docs/` or similar
- Pros: Highest accuracy (verified, curated for agent consumption), includes disambiguation built-in
- Cons: Manual effort to create, needs updates when SDK changes

---

## 3. Recommendation

**Primary: E + A (Curated references + CLAUDE.md rules)**

This combines always-on disambiguation (A) with high-accuracy reference content (E):

### Step 1: Add disambiguation rules to CLAUDE.md

```markdown
## Stripe Apps (NOT Stripe Payments)

This project builds a **Stripe App** for the Stripe App Marketplace.
Stripe Apps are Dashboard extensions — NOT payment integrations.

### Critical Differences
- React 17 only (NOT React 19)
- UI: Stripe UI Toolkit components only (ContextView, FocusView, Box, Button, etc.)
- SDK: `@stripe/ui-extension-sdk` (NOT `@stripe/stripe-js` or `@stripe/react-stripe-js`)
- Config: `stripe-app.json` manifest (NOT environment variables for Stripe keys)
- CLI: `stripe apps start` (NOT `stripe listen`)
- Auth: OAuth/Platform key/Restricted key via manifest `stripe_api_access_type`
- Testing: Jest (NOT Vitest for Stripe App UI code)
- Secrets: Stripe Secret Store API (NOT .env files for third-party credentials)

### When working on Stripe App code:
- Read `.stripe-apps-docs/` reference files BEFORE writing any Stripe App code
- NEVER import from `@stripe/stripe-js` or `@stripe/react-stripe-js` in app UI code
- NEVER use React 19 features (hooks, APIs) in Stripe App UI extensions
- ALWAYS use Stripe UI Toolkit components — no custom HTML/CSS in extensions
- ALWAYS check `stripe-app.json` manifest for permissions and CSP before calling external APIs

### Keyword routing:
- "app manifest", "ui extension", "viewport", "ContextView", "FocusView",
  "stripe apps start", "Secret Store", "stripe-app.json" → Stripe Apps context
- "checkout session", "payment intent", "PaymentElement", "webhook endpoint",
  "@stripe/stripe-js", "publishable key" → Stripe Payments context
```

### Step 2: Create curated reference files

```
.stripe-apps-docs/
├── README.md                    # What this directory is and when to read it
├── core-concepts.md             # Architecture, manifest, viewports, permissions, auth
├── ui-components.md             # Full component reference (Views, Layout, Forms, Charts)
├── sdk-api.md                   # Extension SDK functions, context objects, hooks
├── cli-reference.md             # All `stripe apps` CLI commands
└── publishing-guide.md          # Marketplace submission requirements and checklist
```

Each file should be ~200-400 lines, curated from verified Stripe docs, with disambiguation headers.

### Step 3: Add agents-md index to CLAUDE.md

```markdown
<!-- STRIPE-APPS-DOCS-START -->
[Stripe Apps Docs]|root: ./.stripe-apps-docs|
This project is a STRIPE APP — not a Stripe Payments integration.
Read these docs before any Stripe App work.|
core-concepts.md|ui-components.md|sdk-api.md|cli-reference.md|publishing-guide.md
<!-- STRIPE-APPS-DOCS-END -->
```

### Why not MCP?

MCP would provide fresher docs but adds complexity, requires per-tool setup, and introduces network dependency. The curated approach is more reliable and portable across Claude Code, Cursor, and other tools. If the Stripe Apps SDK changes significantly, updating 5 markdown files is straightforward.

---

## 4. Disambiguation Rules (Ready for CLAUDE.md)

```
## Import Guards

### NEVER in Stripe App UI extension code:
- import from `@stripe/stripe-js`
- import from `@stripe/react-stripe-js`
- use `loadStripe()` or `Elements` provider
- use React 18/19 APIs (useTransition, useDeferredValue, use(), etc.)
- use custom CSS/HTML outside Stripe UI Toolkit

### ALWAYS in Stripe App UI extension code:
- import from `@stripe/ui-extension-sdk`
- use Stripe UI Toolkit components (ContextView, Box, Button, etc.)
- check stripe-app.json for permissions before API calls
- use Secret Store API for persisting credentials
- use React 17 compatible patterns
```

---

## 5. Verified Documentation Sources

| Resource | URL | Status |
|---|---|---|
| Stripe Apps overview | https://docs.stripe.com/stripe-apps | Verified |
| How Stripe Apps work | https://docs.stripe.com/stripe-apps/how-stripe-apps-work | Verified |
| Create an app | https://docs.stripe.com/stripe-apps/create-app | Verified |
| Build UI | https://docs.stripe.com/stripe-apps/build-ui | Verified |
| UI Components | https://docs.stripe.com/stripe-apps/components | Verified |
| API authentication | https://docs.stripe.com/stripe-apps/api-authentication | Verified |
| Store secrets | https://docs.stripe.com/stripe-apps/store-secrets | Verified |
| Publish to marketplace | https://docs.stripe.com/stripe-apps/publish-app | Verified |
| App manifest reference | https://docs.stripe.com/stripe-apps/reference/app-manifest | Verified |
| CLI reference | https://docs.stripe.com/stripe-apps/reference/cli | Verified |
| Extension SDK API | https://docs.stripe.com/stripe-apps/reference/extensions-sdk-api | Verified |
| Viewports reference | https://docs.stripe.com/stripe-apps/reference/viewports | Verified |
| Secrets REST API | https://docs.stripe.com/api/secret_management | Verified |

**404s found during research (avoid these URLs):**
- `/stripe-apps/build-ui-extensions` (use `/stripe-apps/build-ui`)
- `/stripe-apps/reference` (use specific sub-paths)
- `/stripe-apps/reference/ui-components` (use `/stripe-apps/components`)
- `/stripe-apps/store-auth-data-server-side` (use `/stripe-apps/store-secrets`)
- `/stripe-apps/store-auth-data` (use `/stripe-apps/store-secrets`)

---

## 6. Implementation Checklist

- [ ] Add Stripe Apps disambiguation section to CLAUDE.md
- [ ] Create `.stripe-apps-docs/` directory
- [ ] Fetch and curate `core-concepts.md` from verified docs
- [ ] Fetch and curate `ui-components.md` from verified docs
- [ ] Fetch and curate `sdk-api.md` from verified docs
- [ ] Fetch and curate `cli-reference.md` from verified docs
- [ ] Fetch and curate `publishing-guide.md` from verified docs
- [ ] Add Stripe Apps agents-md index to CLAUDE.md
- [ ] Add `.stripe-apps-docs/` to `.gitignore` consideration (or commit — team decision)
- [ ] Test: Start new Claude Code session, ask about Stripe App work, verify correct context is loaded
