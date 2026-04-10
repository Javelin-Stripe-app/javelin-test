# Project Rules (Auto-loaded Every Session)

## Stack
TypeScript, React 17 (Stripe App UI — Stripe UI Toolkit), Supabase (Postgres + RLS + Edge Functions), Stripe Apps, Stripe OAuth, Zod
Testing: Vitest + Playwright | Package manager: npm | Workflow: SDD (OpenSpec + Clavix)
No standalone web app. No Next.js, React 19, Tailwind, shadcn/ui, or Headless UI.

## Security (Non-negotiable)

- NEVER publish passwords, API keys, tokens, or credentials in code, docs, commits, PRs, diffs, or logs
- NEVER commit `.env`, `.env.*`, credential files, or config files containing secrets — verify `.gitignore` covers them
- NEVER hardcode credentials — use environment variables or secret stores
- NEVER output secrets even if they exist locally — warn: "Proposal contains sensitive data — remove before proceeding."
- NEVER log PHI/PII payloads — log only request IDs, timestamps, non-sensitive error codes
- NEVER weaken auth checks, permission gates, or move privileged logic to the client
- Supabase RLS is non-negotiable — never bypass it
- Before ANY commit, verify no secrets in staged changes
- If security conflicts with spec: create `spec-change-requests.yaml` entry and stop
- For detailed implementation guidance (auth patterns, STRIDE, OWASP, RLS, Stripe Apps security), see the `security-patterns` skill

## Autonomy & Execution

### Always Proceed Without Asking
- Create, edit, delete files within the project directory
- Install dependencies (`npm install`, `npm add`) required by tasks
- Run build, test, lint, and type-check commands (any command in Testing Commands section)
- Create and switch git branches (`git checkout -b`, `git switch`)
- Run database migrations in development (via `supabase` CLI)
- Create directories and scaffolding
- Stage changes and commit locally (`git add`, `git commit`)
- Run any safe read-only command (`git status`, `git log`, `git diff`, `ls`, `cat`, etc.)

### Always Ask Before
- Pushing to remote repositories (`git push`, especially `--force`)
- Modifying `.env` files or environment variables
- Deleting git branches (`git branch -D` / `-d`)
- Running destructive database operations in production
- Changing CI/CD configuration (GitHub Actions, deployment scripts)
- Any action affecting shared/external systems (webhooks, third-party APIs, production environments)
- Force operations (`--force`, `--hard`, `-f` on destructive commands like `git reset --hard`, `git clean -f`, `rm -rf`)

### When Blocked on a Decision
- Flag the blocker clearly with a brief explanation
- Continue working on all independent/unblocked tasks in parallel
- Return to the blocked item when user provides input
- Never let a single blocker halt all progress
- Use the Task tool to parallelize independent work

### Operating Principles
- Assume permission to act within the stated scope
- If scope is unclear, infer the smallest reasonable scope and proceed
- Do not pause for clarification unless ambiguity affects correctness or security
- Prefer action over asking — fix forward, don't wait
- Use parallel task execution (`Task` tool) for independent work items
- When implementing from `tasks.md`, execute tasks in dependency order but parallelize independent tasks

## Stripe App UI
- All user-facing UI is the Stripe App extension — there is no standalone web app
- React 17 only — no React 18/19 features
- Stripe UI Toolkit components only (`ContextView`, `FocusView`, `Box`, `Button`, etc.) — 34 components total
- No custom HTML/CSS, no Tailwind, no shadcn/ui, no Headless UI
- No CSS Modules, no styled-components, no CSS-in-JS, no `.css` file imports
- Keep components modular and colocated with views or features

### Styling Constraints (Stripe Apps Serialization Model)
- UI extensions run in a sandboxed iframe — the React tree is serialized and passed to the Stripe Dashboard for rendering
- The actual DOM is inaccessible from app code — no `ref` props, no `document.querySelector`, no DOM manipulation
- **Only `Box` and `Inline` accept the `css` prop** — all other components have preset styles that cannot be overridden
- The `css` prop accepts a **constrained object with design tokens** — not arbitrary CSS strings or class names
- Available tokens: spacing (`xxsmall`–`xxlarge`), semantic colors (`primary`, `success`, `container`), font tokens (`heading`), layout (`stack: 'x'|'y'|'z'`)
- No custom fonts, hex colors, RGB values, arbitrary spacing values, or CSS animations
- No responsive breakpoints or media queries — viewport is fixed by view type
- No localStorage, indexedDB, or BroadcastChannel (sandboxed iframe has `null` origin)
- Full design boundaries analysis: `.ops/analysis/stripe-app-design-boundaries.md`

## Architecture Boundaries

### Feature Isolation
- No cross-feature imports — shared code goes in `lib/`, `components/`, `utils/`

### Data Access (Supabase)
- Stripe App UI communicates with the backend via HTTP to Supabase Edge Functions
- Edge Functions handle all Supabase data access — the extension UI never calls Supabase directly
- For detailed auth patterns and security guidance, see the `security-patterns` skill

### Stripe Apps (NOT Stripe Payments)

This project builds a **Stripe App** (Dashboard extension) for the Stripe App Marketplace.
Stripe Apps are NOT payment integrations — do NOT use Stripe Payments patterns.

**Architecture:**
- React 17 only for extension UI (NOT React 18/19)
- Stripe UI Toolkit components only (`ContextView`, `FocusView`, `Box`, `Button`, etc.)
- SDK: `@stripe/ui-extension-sdk` — NOT `@stripe/stripe-js` or `@stripe/react-stripe-js`
- Config: `stripe-app.json` manifest — NOT env vars for Stripe keys
- CLI: `stripe apps start` for local dev — NOT `stripe listen`
- Auth: Stripe OAuth 2.0 (`stripe_api_access_type: "oauth"`, `distribution_type: "public"`)
- Secrets: Stripe Secret Store API — NOT `.env` for third-party credentials

**Import guards (extension UI code):**
- NEVER import from `@stripe/stripe-js` or `@stripe/react-stripe-js`
- NEVER use `loadStripe()` or `Elements` provider
- NEVER use React 18/19 APIs (`useTransition`, `useDeferredValue`, `use()`, etc.)
- NEVER use custom HTML/CSS — only Stripe UI Toolkit components
- NEVER import `.css`, `.module.css`, or any CSS files
- NEVER import styling libraries (`styled-components`, `emotion`, `tailwindcss`, etc.)
- NEVER use raw HTML elements (`<div>`, `<span>`, `<input>`, `<form>`, etc.) in extension views
- ALWAYS import from `@stripe/ui-extension-sdk`
- ALWAYS use `Box` and `Inline` with design token `css` prop for layout and styling
- ALWAYS check `stripe-app.json` permissions before calling external APIs
- ALWAYS use Secret Store API for persisting third-party credentials

**Keyword routing — if you see these terms, use the correct context:**

| Stripe Apps (this project) | Stripe Payments (NOT this project) |
|---|---|
| app manifest, `stripe-app.json` | checkout session, payment intent |
| ui extension, viewport | PaymentElement, Elements |
| `ContextView`, `FocusView` | `@stripe/stripe-js` |
| `stripe apps start` | `stripe listen` |
| Secret Store | publishable key |
| `@stripe/ui-extension-sdk` | `@stripe/react-stripe-js` |

**Reference docs:** Read `.stripe-apps-docs/` BEFORE writing any Stripe App code.

<!-- STRIPE-APPS-DOCS:START -->
### Stripe Apps Reference Files (`.stripe-apps-docs/`)

Load the relevant file before any Stripe App work. Do NOT rely on training data for Stripe Apps patterns.

| File | Contents | ~Tokens |
|------|----------|---------|
| `README.md` | Directory purpose, file index, when to read each file | ~380 |
| `core-concepts.md` | Architecture, manifest reference, viewports, permissions, auth, Secret Store, project structure, dev workflow | ~1,470 |
| `ui-components.md` | All 34 UI Toolkit components (Views, Layout, Navigation, Content, Forms, Charts), import patterns, view registration, testing | ~1,460 |
| `sdk-api.md` | `ExtensionContextValue` type, utility functions with signatures, hooks, common patterns, import map | ~1,200 |
| `cli-reference.md` | Prerequisites, all `stripe apps` commands, flags, dev workflow, common issues | ~860 |
| `publishing-guide.md` | Naming rules, manifest prep, listing fields, image specs, test credentials, review process, rejection checklist | ~1,290 |
<!-- STRIPE-APPS-DOCS:END -->

### Stripe OAuth
- Auth uses Stripe OAuth 2.0 — access tokens (1hr) + refresh tokens (1yr rolling) stored via Stripe Secret Store API
- Do not relax OAuth scopes, redirect URIs, or token handling without spec reference
- Permissions: request broadly by category with clear `purpose` fields, scope narrowly by default (see product-vision-strategy.md §11)

## Coding Standards
- React components: **PascalCase**
- Files/folders: **kebab-case**
- APIs/routes: Supabase Edge Functions with REST conventions
- Zod for all input validation (server-side required, client-side optional)
- ESLint + Prettier required
- All UI layout uses `Box` with design tokens — no raw HTML, no external CSS
- Custom React components must only render Stripe UI Toolkit components in JSX
- Minimal diff: smallest change that satisfies the ticket
- No unrelated refactors, renames, or formatting-only churn
- If a shared module is touched, add/adjust tests proportional to risk

## Testing Commands
```
npm run lint
npm run test
npm run test:e2e
npm run build
```

## Token/Context Rules
- Default to feature-scoped reads only
- `openspec/product-vision-strategy.md` — Full vision document (~4,400 tokens). Do NOT load unless doing cross-domain analysis or quarterly review.
  - Domain splits (preferred for agents — generated by `/vision:distill`):
    - `openspec/quick-product-vision-strategy.md` — Product vision, pillars, non-goals, AI strategy (§1–§7, §12)
    - `openspec/security-compliance-baseline.md` — Security posture, compliance, AI boundaries, tech non-goals (§10 partial, §11, §12, §15, §16)
    - `openspec/tech-architecture-baseline.md` — Architecture, data, integration, scalability, tech non-goals (§8–§10, §12–§16)
  - Agents should load only their relevant domain split, not the full document
  - To regenerate distilled files: run `/vision:distill`
- Do NOT read `openspec/ui-design-system.md` unless doing UI work
- `design.md` is the architecture reference — load only for architecture decisions
- `openspec/config.yaml` — OpenSpec configuration. Read during artifact creation, not general coding.
- `openspec/changes/` — Active changes. Read only the change you're working on.
- `openspec/specs/` — Canonical specs. Read only specs relevant to the current feature.

## OpenSpec (Spec-Driven Development)

This project uses OpenSpec for structured, spec-driven changes. All feature work follows the artifact pipeline:

```
proposal → specs → design → tasks → apply → archive
```

### Directory Structure
```
openspec/
├── config.yaml          # Schema, context, and per-artifact rules
├── specs/               # Canonical specs (main branch of truth)
└── changes/
    ├── <change-name>/   # Active change work container
    │   ├── proposal.md
    │   ├── specs/<capability>/spec.md
    │   ├── design.md
    │   └── tasks.md
    └── archive/         # Completed changes with decision history
```

### Key Commands

| Command | Purpose |
|---------|---------|
| `/opsx:new` | Start a new change (step-by-step artifacts) |
| `/opsx:ff` | Fast-forward — create all artifacts at once |
| `/opsx:continue` | Create the next artifact for a change |
| `/opsx:apply` | Implement tasks from a change |
| `/opsx:verify` | Verify implementation matches artifacts |
| `/opsx:sync` | Sync delta specs to canonical specs |
| `/opsx:archive` | Archive a completed change |
| `/opsx:explore` | Think through problems without implementing |

### Unified Workflow (Clavix + OpenSpec)

```
/clavix:product (vision) → /clavix:prd (requirements) → /clavix:plan (tasks)
                                      ↓
/opsx:new (change) → /opsx:ff or /opsx:continue (artifacts) → /opsx:apply (implement) → /opsx:verify → /opsx:archive
```

- **Clavix** handles ideation, prompts, PRDs, and high-level planning
- **OpenSpec** handles spec-driven changes with traceable artifacts

### Domain Skill Activation Guide

Activate these skills based on the work context:

| Context | Skill | When |
|---------|-------|------|
| Auth, data access, external APIs | `security-patterns` | Any security-adjacent code |
| Schema changes | `db-migration` | Adding/modifying database tables |
| UI components, interactive features | `ux-states` | Ensuring loading/empty/error/populated states |
| API endpoints | `api-contracts` | Adding/modifying route handlers |
| Writing tests | `testing-strategy` | Test architecture decisions |
| Performance work | `performance-patterns` | Caching, query optimization |
| Deployments | `deployment-lifecycle` | Feature flags, env vars, rollback |
| Regulated data (PHI/PII) | `compliance-patterns` | HIPAA, audit trails |

> **Removed skills:** `interface-design` and `frontend-design` are incompatible with Stripe Apps — they assume custom CSS, HTML elements, and DOM access. All UI design must use Stripe UI Toolkit's 34 components with design token styling only. See `.ops/analysis/stripe-app-design-boundaries.md`.

### Skill-to-Phase Quick Reference

| Skill | Proposal | Specs | Design | Tasks | Apply |
|-------|----------|-------|--------|-------|-------|
| `security-patterns` | * | ** | ** | ** | ** |
| `testing-strategy` | | ** | ** | ** | ** |
| `api-contracts` | * | ** | ** | ** | ** |
| `performance-patterns` | * | ** | ** | * | ** |
| `deployment-lifecycle` | | | ** | ** | ** |
| `db-migration` | * | * | ** | ** | ** |
| `ux-states` | | * | ** | * | |
| `compliance-patterns` | * | * | ** | * | ** |

`**` = required | `*` = check if relevant

<!-- CLAVIX:START -->
## Clavix Integration

This project uses Clavix for prompt improvement and PRD generation. The following slash commands are available:

> **Command Format:** Commands shown with colon (`:`) format. Some tools use hyphen (`-`): Claude Code uses `/clavix:improve`, Cursor uses `/clavix-improve`. Your tool autocompletes the correct format.

### Prompt Optimization

#### /clavix:improve [prompt]
Optimize prompts with smart depth auto-selection. Clavix analyzes your prompt quality and automatically selects the appropriate depth (standard or comprehensive). Use for all prompt optimization needs.

### PRD & Planning

#### /clavix:prd
Launch the PRD generation workflow. Clavix will guide you through strategic questions and generate both a comprehensive PRD and a quick-reference version optimized for AI consumption.

#### /clavix:plan
Generate an optimized implementation task breakdown from your PRD. Creates a phased task plan with dependencies and priorities.

#### /clavix:implement
Execute tasks or prompts with AI assistance. Auto-detects source: tasks.md (from PRD workflow) or prompts/ (from improve workflow). Supports automatic git commits and progress tracking.

Use `--latest` to implement most recent prompt, `--tasks` to force task mode.

### Session Management

#### /clavix:start
Enter conversational mode for iterative prompt development. Discuss your requirements naturally, and later use `/clavix:summarize` to extract an optimized prompt.

#### /clavix:summarize
Analyze the current conversation and extract key requirements into a structured prompt and mini-PRD.

### Refinement

#### /clavix:refine
Refine existing PRD or prompt through continued discussion. Detects available PRDs and saved prompts, then guides you through updating them with tracked changes.

### Agentic Utilities

These utilities provide structured workflows for common tasks. Invoke them using the slash commands below:

- **Verify** (`/clavix:verify`): Check implementation against PRD requirements. Runs automated validation and generates pass/fail reports.
- **Archive** (`/clavix:archive`): Archive completed work. Moves finished PRDs and outputs to archive for future reference.

**When to use which mode:**
- **Improve mode** (`/clavix:improve`): Smart prompt optimization with auto-depth selection
- **PRD mode** (`/clavix:prd`): Strategic planning with architecture and business impact

**Recommended Workflow:**
1. Start with `/clavix:prd` or `/clavix:start` for complex features
2. Refine requirements with `/clavix:refine` as needed
3. Generate tasks with `/clavix:plan`
4. Implement with `/clavix:implement`
5. Verify with `/clavix:verify`
6. Archive when complete with `/clavix:archive`

**Pro tip**: Start complex features with `/clavix:prd` or `/clavix:start` to ensure clear requirements before implementation.
<!-- CLAVIX:END -->

## External Documentation (Context7)

Before writing code that touches any external library, query Context7 MCP for current docs. Do NOT rely on training data for API patterns.

<!-- @stripe/stripe-js is NOT used in this project — this is a Stripe App, not a Stripe Payments integration -->
<!-- No Next.js, React 19, Tailwind, shadcn, Headless UI, or Google OAuth in this project -->

| Library | Context7 ID |
|---------|-------------|
| Supabase (JS Client) | `/supabase/supabase-js` |
| Supabase (Platform/RLS) | `/supabase/supabase` |
| Stripe (Node SDK — backend only) | `/stripe/stripe-node` |
| Stripe (Docs) | `/websites/stripe` |
| Zod | `/colinhacks/zod` |

For Stripe App UI patterns, use `.stripe-apps-docs/` (local reference) instead of Context7.
For any library NOT listed above, use `resolve-library-id` to find its Context7 ID before writing integration code.
