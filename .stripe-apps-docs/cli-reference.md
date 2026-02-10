# Stripe Apps: CLI Reference

> **DISAMBIGUATION:** These are `stripe apps` commands for **Stripe Apps** (Dashboard extensions).
> NOT `stripe listen` (webhook forwarding) — that's Stripe Payments development.
> For manifest details, see `core-concepts.md`. For UI, see `ui-components.md`.

---

## Prerequisites

1. **Stripe Dashboard** — sign in at dashboard.stripe.com
2. **Stripe CLI** — install and authenticate (`stripe login`)
3. **CLI version** — must be 1.8.11+ (`stripe version`)
4. **Node.js** — install and keep current (`node -v`)
5. **Stripe Apps plugin** — install separately (see below)
6. **Account status** — for marketplace publishing, account must be activated and NOT a Platform account

---

## Plugin Installation

```bash
# Install the Stripe Apps CLI plugin
stripe plugin install apps

# Check plugin version (must be 1.5.12+)
stripe apps -v

# Upgrade to latest
stripe plugin upgrade apps
```

---

## Command Reference

### `stripe apps create`

Create a new Stripe App project.

```bash
stripe apps create <app-name>
```

**Prompts for:**
- App ID (globally unique, auto-generated option available)
- Display name (human-readable, shown in Dashboard)

**Creates:** Full project scaffold with `stripe-app.json`, `src/views/`, test config, and linting setup.

---

### `stripe apps start`

Start the local development server.

```bash
stripe apps start
```

**Flags:**
| Flag | Description |
|------|-------------|
| `--manifest <path>` | Use an extended manifest file (e.g., `stripe-app.dev.json`) |

**Behavior:**
- Press Enter to open browser (Chrome, Firefox, Edge — Safari unsupported)
- Click "Continue" to enable preview mode in your Stripe account
- Hot-reloads on file changes
- Errors visible in Dashboard and browser DevTools
- Stop with `Ctrl+C`

---

### `stripe apps add`

Add a building block to your app (e.g., a new view).

```bash
stripe apps add view
```

**What it does:**
- Updates `stripe-app.json` with the new view registration
- Creates React component file in `src/views/`
- Creates corresponding test file

---

### `stripe apps remove`

Remove a building block from `stripe-app.json`.

```bash
stripe apps remove <block-type>
```

---

### `stripe apps grant`

Grant configuration access (permissions) to your app.

```bash
stripe apps grant permission "<permission_name>" "<purpose_description>"
```

**Example:**
```bash
stripe apps grant permission "customer_read" "Read customer data for CRM synchronization"
stripe apps grant permission "secret_write" "Store OAuth tokens in Secret Store"
```

---

### `stripe apps revoke`

Revoke previously granted configuration access.

```bash
stripe apps revoke permission "<permission_name>"
```

---

### `stripe apps set`

Set a configuration value in the app manifest.

```bash
stripe apps set distribution public
```

**Common uses:**
- `stripe apps set distribution public` — Set app for marketplace distribution
- `stripe apps set distribution private` — Set app for private distribution

---

### `stripe apps upload`

Upload your app to Stripe for review/publishing.

```bash
stripe apps upload
```

**What it does:**
- Bundles your app code
- Uploads to Stripe's servers
- Prepares for review submission

---

### `stripe apps version`

Print the Stripe Apps CLI plugin version.

```bash
stripe apps -v
# or
stripe apps version
```

---

## Development Workflow

```bash
# 1. Create a new app
stripe apps create my-app
cd my-app

# 2. Install dependencies
npm install

# 3. Start dev server (hot-reload)
stripe apps start

# 4. Add new views as needed
stripe apps add view

# 5. Grant required permissions
stripe apps grant permission "customer_read" "Display customer info"
stripe apps grant permission "secret_write" "Store API credentials"

# 6. Run tests
npm test

# 7. Set distribution type
stripe apps set distribution public

# 8. Upload for review
stripe apps upload
```

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Safari not supported | Use Chrome, Firefox, or Edge |
| Plugin outdated | `stripe plugin upgrade apps` |
| "App not found" in Dashboard | Ensure `stripe apps start` is running and you clicked "Continue" |
| CSP blocks external API call | Add URL to `content_security_policy.connect-src` in manifest |
| Permission denied | Add permission via `stripe apps grant permission` |
| React version mismatch | Ensure `react@17` in `package.json` — no React 18/19 |
