# Stripe Apps: Core Concepts

> **DISAMBIGUATION:** This covers **Stripe Apps** (Dashboard extensions) — NOT Stripe Payments.
> SDK: `@stripe/ui-extension-sdk` | React: 17 only | UI: Stripe UI Toolkit only
> See also: `ui-components.md`, `sdk-api.md`, `cli-reference.md`

---

## Architecture Overview

Stripe Apps extend the Stripe Dashboard. They are NOT payment integrations. There are three app models:

| Model | Description | Use case |
|-------|-------------|----------|
| **Full-stack** | UI extension + backend service | Most apps — UI in Dashboard, backend for state/processing |
| **Frontend-only** | UI extension, no backend | Apps that only call Stripe APIs or use OAuth |
| **Backend-only** | No UI, server-side only | Data sync, fulfillment, background processing |

**Key architectural facts:**
- UI extensions run inside the Stripe Dashboard as iframes
- Extensions use React 17 — no React 18/19 features
- All UI must use Stripe UI Toolkit components (no custom HTML/CSS)
- External API calls require CSP declaration in the manifest
- Extensions communicate with backends via HTTP (authenticated)

---

## App Manifest (`stripe-app.json`)

Every Stripe App requires a `stripe-app.json` manifest at the project root.

### Complete field reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | slug | Yes | Globally unique app identifier (e.g., `com.company.appname`) |
| `version` | string | Yes | Developer-defined version (any format) |
| `name` | string | Yes | Display name in Dashboard (no "Stripe", "app", "free", "paid") |
| `icon` | string | Yes | Relative path to 300x300 PNG icon |
| `distribution_type` | `"public"` \| `"private"` | No | Defaults to `"private"` |
| `sandbox_install_compatible` | boolean | No | Enable sandbox installation |
| `stripe_api_access_type` | `"platform"` \| `"oauth"` \| `"restricted_api_key"` | No | Auth method (defaults to `"platform"`) |
| `allowed_redirect_uris` | string[] | No | Post-install redirect URLs |
| `permissions` | PermissionRequest[] | No | Required API permissions with purposes |
| `ui_extension` | UIExtensionManifest | No | UI extension config (views + CSP) |
| `post_install_action` | PostInstallAction | No | Post-install user direction |
| `constants` | object | No | Arbitrary constants accessible in views |

### Nested types

**PermissionRequest:**
```json
{
  "permission": "customer_write",
  "purpose": "Update customer records with external CRM data",
  "name": "Necessary for syncing customer data"
}
```

**UIExtensionManifest:**
```json
{
  "views": [
    { "viewport": "stripe.dashboard.customer.detail", "component": "CustomerView" }
  ],
  "content_security_policy": {
    "connect-src": ["https://api.example.com/"],
    "image-src": ["https://images.example.com/"],
    "purpose": "Connects to external CRM for data sync"
  }
}
```

**PostInstallAction:**
```json
{ "type": "external", "url": "https://example.com/setup" }
```

### Dev manifest override

Create `stripe-app.<name>.json` to override values locally:
```bash
stripe apps start --manifest stripe-app.dev.json
```

---

## Viewports

Viewports define where in the Dashboard a view appears. Register views in `stripe-app.json` under `ui_extension.views`.

### Page-specific viewports

These receive object context (`environment.objectContext`) with the current Stripe object:

| Viewport | Object returned |
|----------|----------------|
| `stripe.dashboard.payment.list` | — |
| `stripe.dashboard.payment.detail` | `charge` or `payment_intent` |
| `stripe.dashboard.customer.list` | — |
| `stripe.dashboard.customer.detail` | `customer` |
| `stripe.dashboard.invoice.list` | — |
| `stripe.dashboard.invoice.detail` | `invoice` |
| `stripe.dashboard.product.list` | — |
| `stripe.dashboard.product.detail` | `product` |
| `stripe.dashboard.subscription.list` | — |
| `stripe.dashboard.subscription.detail` | `subscription` |
| `stripe.dashboard.payment-link.list` | — |
| `stripe.dashboard.payment-link.detail` | `payment_link` |
| `stripe.dashboard.shipping-rates.list` | — |
| `stripe.dashboard.shipping-rates.detail` | `shipping_rate` |

### Overview viewports (no object context)

| Viewport |
|----------|
| `stripe.dashboard.home.overview` |
| `stripe.dashboard.balance.overview` |
| `stripe.dashboard.billing.overview` |
| `stripe.dashboard.report.overview` |
| `stripe.dashboard.revenue-recognition.overview` |
| `stripe.dashboard.tax-report.overview` |

### Special viewports

| Viewport | Description |
|----------|-------------|
| `stripe.dashboard.drawer.default` | Appears everywhere except where page-specific views override |
| `onboarding` | Post-install setup flow |
| `settings` | App configuration page |

---

## Permissions Model

Apps must declare permissions in the manifest. Dual-control enforcement:
- The **app** must have the permission declared
- The **signed-in user** must also have that permission

Third-party API access requires CSP declaration in `content_security_policy`. Unauthorized `fetch` calls are blocked.

Grant permissions via CLI:
```bash
stripe apps grant permission "customer_read" "Read customer data for CRM sync"
```

---

## Authentication Methods

Set via `stripe_api_access_type` in the manifest:

| Method | Value | How it works | Best for |
|--------|-------|-------------|----------|
| **Platform key** | `"platform"` | Your secret key makes requests on behalf of user's account | Simplified key management, default |
| **OAuth 2.0** | `"oauth"` | Standard OAuth flow generates access tokens | Apps already using OAuth |
| **Restricted API key** | `"restricted_api_key"` | Stripe generates a permissioned key on install; user copies it | On-premise software |

---

## Secret Store API

Securely persist credentials across sessions. Use instead of `.env` for third-party credentials.

### Scopes

| Scope | Limit | Access | Use case |
|-------|-------|--------|----------|
| `account` | 10 secrets per app | All Dashboard users | Shared API keys |
| `user` | 10 secrets per app per user | Specific user only | OAuth tokens |

### Operations

```typescript
// Set a secret
await stripe.apps.secrets.create({
  scope: { type: 'user', user: userContext.id },
  name: 'api_token',
  payload: 'secret_value',
  expires_at: 1956528000  // optional Unix timestamp
});

// Get a secret
const secret = await stripe.apps.secrets.find({
  scope: { type: 'user', user: userContext.id },
  name: 'api_token',
  expand: ['payload']
});

// Delete a secret
await stripe.apps.secrets.deleteWhere({
  scope: { type: 'user', user: userContext.id },
  name: 'api_token'
});

// List all secrets
const secrets = await stripe.apps.secrets.list({
  scope: { type: 'user', user: userContext.id }
});
```

### Constraints

- Max 10 secrets per scope type
- Optional expiration via `expires_at`
- Cannot store credit card numbers or PII
- Requires `secret_write` permission
- Only your app can access its stored secrets

---

## Project Structure

```
my-stripe-app/
├── stripe-app.json          # App manifest
├── package.json
├── tsconfig.json
├── jest.config.ts
├── .eslintrc.json
├── images.d.ts
├── src/
│   └── views/
│       ├── App.tsx           # View component
│       └── App.test.tsx      # View test
└── .vscode/
    └── extensions.json
```

---

## Development Workflow

```bash
# 1. Create a new app
stripe apps create my-app

# 2. Install dependencies
cd my-app && npm install

# 3. Start dev server
stripe apps start

# 4. Add a new view
stripe apps add view

# 5. Upload for review
stripe apps upload
```

**Dev server notes:**
- Press Enter to open browser (Chrome, Firefox, or Edge — Safari unsupported)
- Click "Continue" to enable preview mode
- Hot-reload on file changes
- Errors visible in Dashboard or browser DevTools
- Stop with `Ctrl+C`

---

## Key Constraints

- **React 17 only** — no React 18/19 features (`useTransition`, `useDeferredValue`, `use()`, etc.)
- **Stripe UI Toolkit only** — no custom HTML, CSS, or external UI libraries in extensions
- **CSP enforced** — all external URLs must be declared in manifest
- **Testing with Jest** — scaffolded by default, uses `@stripe/ui-extension-sdk/testing`
- Connected accounts cannot access platform data unless directly installed
