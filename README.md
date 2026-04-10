# Javelin

AI-powered Stripe business intelligence — Stripe App extension that lets you query your Stripe data in natural language from the Dashboard.

## Prerequisites

### 1. Node.js 18+

Download from [nodejs.org](https://nodejs.org) and verify:

```bash
node -v   # should print v18.x or later
```

### 2. Stripe CLI

The Stripe CLI is a **standalone binary** — it is not an npm package. Install it separately:

- **macOS (Homebrew):**
  ```bash
  brew install stripe/stripe-cli/stripe
  ```
- **macOS (direct download):** download the latest release from [github.com/stripe/stripe-cli/releases](https://github.com/stripe/stripe-cli/releases/latest), extract it, and move the `stripe` binary to a directory in your `PATH` (e.g. `/usr/local/bin`).
- **Other operating systems:** see the [Stripe CLI install docs](https://docs.stripe.com/stripe-cli#install).

Verify the CLI is available (must be **1.8.11+**):

```bash
stripe version
```

### 3. Stripe Apps plugin

After the CLI is installed, add the Apps plugin:

```bash
stripe plugin install apps
```

Verify:

```bash
stripe apps -v   # should print 1.5.12+
```

### 4. Authenticate the Stripe CLI

Log in so the CLI can talk to your Stripe account:

```bash
stripe login
```

Follow the browser prompt to complete authentication.

## Installation

Install project dependencies:

```bash
npm install
```

---

## Running Locally

Choose one of two paths depending on whether you want to use the hosted Supabase backend or run the full stack locally.

### Option A: Remote backend (simplest)

Uses the deployed Supabase Edge Functions. No backend setup required.

```bash
npm start
# Press Enter when prompted — a browser tab opens
# Click "Continue" to activate the app preview in your Stripe Dashboard
```

> **Browser note:** Safari is not supported. Use Chrome, Firefox, or Edge.

The app will be visible in the Stripe Dashboard drawer. Hot-reload is active — changes to `src/` apply immediately.

Stop the server with `Ctrl+C`.

---

### Option B: Full local stack

Runs Supabase Edge Functions locally via Docker. Use this when you need to iterate on backend code.

**Additional prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) running.

**1. Start local Supabase:**

```bash
npx supabase start
```

This starts Postgres, Auth, and the Edge Function runtime at `http://localhost:54321`.

**2. Create the edge function env file:**

```bash
# supabase/.env.local  (gitignored — never commit this file)
STRIPE_SECRET_KEY=sk_test_...       # Platform secret key — used for OAuth token refresh
STRIPE_APP_SECRET=whsec_...         # App signing secret — from your Stripe App settings
DEV_MODE=true                       # Skips request signature verification locally
```

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically by the Supabase CLI.

**3. Serve edge functions:**

```bash
npx supabase functions serve --env-file supabase/.env.local
```

**4. Update the app manifest CSP** to allow `http://localhost:54321/` in `connect-src`, then start the Stripe preview:

```bash
npm start
```

---

## Environment Variables Reference

### Edge Functions (`supabase/.env.local`)

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | Yes | Platform secret key (`sk_test_...`) — used for OAuth token refresh |
| `STRIPE_APP_SECRET` | No (dev) | App signing secret — verifies requests come from Stripe |
| `DEV_MODE` | No | Set to `true` to skip signature verification locally |
| `SUPABASE_URL` | Auto | Injected by Supabase CLI |
| `SUPABASE_SERVICE_ROLE_KEY` | Auto | Injected by Supabase CLI |

### Root `.env.local` (seed scripts only)

```bash
# .env.local  (gitignored)
STRIPE_SECRET_KEY=sk_test_...
```

---

## Seeding Test Data

Populate your Stripe test account with sample customers, subscriptions, and invoices:

```bash
npm run seed

# To remove seeded data:
npm run seed:clean
```

Requires `STRIPE_SECRET_KEY` in the root `.env.local`.

---

## Other Commands

```bash
npm test          # run unit tests (Vitest)
npm run test:e2e  # run end-to-end tests (Playwright)
npm run lint      # lint TypeScript source
npm run build     # type-check (tsc --noEmit)
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "App not found" in Dashboard | Ensure `npm start` is running and you clicked "Continue" |
| Safari — app not loading | Switch to Chrome, Firefox, or Edge |
| Plugin outdated | `stripe plugin upgrade apps` |
| CSP error in console | Add the blocked URL to `connect-src` in `stripe-app.json` |
| Edge Function 401 in local mode | Ensure `DEV_MODE=true` is set in `supabase/.env.local` |
| Docker not running | Start Docker Desktop, then re-run `npx supabase start` |
| Homebrew fails with "Xcode Command Line Tools are too outdated" | Run `xcode-select --install` (or `softwareupdate --all --install --force`) and retry, or use the direct download option above |
