# Stripe Apps: Extension SDK API Reference

> **DISAMBIGUATION:** This covers `@stripe/ui-extension-sdk` — the Stripe Apps SDK.
> NOT `@stripe/stripe-js` (loadStripe, Elements) — that's Stripe Payments.
> Import from: `@stripe/ui-extension-sdk/*` | React: 17 only
> See also: `ui-components.md`, `core-concepts.md`

---

## ExtensionContextValue

Every view component receives these context props:

```typescript
interface ExtensionContextValue {
  userContext: UserContext;
  environment: Environment;
  oauthContext?: OAuthContext;
  appContext: AppContext;
}
```

### UserContext

```typescript
interface UserContext {
  id: string;              // User ID
  name: string;            // User display name
  country: string;         // User country code
  account: {
    id: string;            // Stripe account ID
    name: string;          // Account display name
  };
  organization?: {
    id: string;            // Organization ID
  };
  isSandbox: boolean;      // Whether in sandbox mode
  roles: RoleDefinition[]; // User's roles
  locale: string;          // User locale
}

interface RoleDefinition {
  type: 'builtIn' | 'custom';
  name: string;
}
```

### Environment

```typescript
interface Environment {
  viewportID: string;           // Current viewport identifier
  mode: 'live' | 'test';       // API mode
  objectContext?: {             // Stripe object on current page (if page-specific viewport)
    id: string;
    object: string;
  };
  constants: Record<string, string>;  // From stripe-app.json constants
  queryParams?: Record<string, string>;
}
```

### OAuthContext

Available during OAuth callback flows:

```typescript
interface OAuthContext {
  error?: string;
  code?: string;
  state?: string;
  verifier?: string;
}
```

### AppContext

```typescript
interface AppContext {
  authorizedPermissions: string[];         // Permissions granted to app
  cspConnectSources: string[];            // CSP connect-src URLs
  cspImageSources: string[];             // CSP image-src URLs
}
```

---

## Utility Functions

### Clipboard

```typescript
import { clipboardWriteText } from '@stripe/ui-extension-sdk/utils';

// Write text to user's clipboard
await clipboardWriteText('text to copy');
```

### HTTP Client (for Stripe API calls)

```typescript
import { createHttpClient } from '@stripe/ui-extension-sdk/http_client';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '@stripe/ui-extension-sdk/utils';

// Create an authenticated Stripe client for use in extension UI
const stripe = new Stripe(STRIPE_API_KEY, {
  httpClient: createHttpClient(),
  apiVersion: '2024-06-20',
});

// Now use stripe-node SDK as usual
const customer = await stripe.customers.retrieve('cus_123');
```

**Important:** `STRIPE_API_KEY` is a special constant — it does NOT expose actual API keys. It signals the SDK to route requests through the authenticated extension context.

### OAuth

```typescript
import { createOAuthState } from '@stripe/ui-extension-sdk/oauth';

// Generate state + challenge for OAuth authorization link
const { state, challenge } = await createOAuthState();
// Use state and challenge when building the authorization URL
```

```typescript
import { fetchStripeSignature } from '@stripe/ui-extension-sdk/signature';

// Get a signature from Stripe's servers (for backend verification)
const signature = await fetchStripeSignature();
```

### Permissions

```typescript
import {
  isPermissionAuthorized,
  getUserAuthorizedPermissions,
  isSourceInAuthorizedCSP,
} from '@stripe/ui-extension-sdk/utils';

// Check if a specific permission is authorized
const canRead = isPermissionAuthorized('customer_read');

// Get all permissions the app+user intersection allows
const permissions = getUserAuthorizedPermissions();

// Validate a URL against the CSP policy
const allowed = isSourceInAuthorizedCSP('https://api.example.com');
```

### User Data

```typescript
import { getDashboardUserEmail } from '@stripe/ui-extension-sdk/utils';

// Requires `user_email_read` permission in manifest
const email = await getDashboardUserEmail();
```

### Toast Notifications

```typescript
import { showToast } from '@stripe/ui-extension-sdk/utils';

// Simple success toast
showToast('Customer updated successfully', { type: 'success' });

// Toast with action button
showToast('Changes saved', {
  type: 'success',
  action: 'Undo',
  onAction: () => handleUndo(),
});
```

**Toast types:** `'success'` | `'caution'` | `'pending'` | `undefined` (default/info)

---

## React Hooks

### useRefreshDashboardData

```typescript
import { useRefreshDashboardData } from '@stripe/ui-extension-sdk/utils';

const MyView = () => {
  const refreshData = useRefreshDashboardData();

  const handleUpdate = async () => {
    await stripe.customers.update('cus_123', { name: 'New Name' });
    // Refresh the Dashboard to reflect changes
    refreshData();
  };
};
```

### useStorage (SDK 9.x+)

Cross-viewport state synchronization:

```typescript
import { useStorage } from '@stripe/ui-extension-sdk/storage';

const MyView = () => {
  const [value, setValue] = useStorage('my-key', 'default-value');

  // value persists across viewports and page navigations
  // setValue triggers re-render in all views using the same key
};
```

---

## Common Patterns

### View component with API access

```tsx
import { ContextView, Box, List, Spinner } from '@stripe/ui-extension-sdk/ui';
import { createHttpClient } from '@stripe/ui-extension-sdk/http_client';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '@stripe/ui-extension-sdk/utils';
import { useEffect, useState } from 'react';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const stripe = new Stripe(STRIPE_API_KEY, {
  httpClient: createHttpClient(),
  apiVersion: '2024-06-20',
});

const InvoiceListView = ({ environment }: ExtensionContextValue) => {
  const [invoices, setInvoices] = useState<Stripe.Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const customerId = environment.objectContext?.id;

  useEffect(() => {
    if (!customerId) return;
    stripe.invoices.list({ customer: customerId, limit: 10 })
      .then(res => setInvoices(res.data))
      .finally(() => setLoading(false));
  }, [customerId]);

  if (loading) return <Spinner />;

  return (
    <ContextView title="Recent Invoices">
      <Box css={{ padding: 'medium' }}>
        <List
          items={invoices.map(inv => ({
            id: inv.id,
            title: inv.number || inv.id,
            secondaryTitle: `$${(inv.amount_due / 100).toFixed(2)}`,
          }))}
        />
      </Box>
    </ContextView>
  );
};

export default InvoiceListView;
```

### Secret Store integration

```tsx
import { createHttpClient } from '@stripe/ui-extension-sdk/http_client';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '@stripe/ui-extension-sdk/utils';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const stripe = new Stripe(STRIPE_API_KEY, {
  httpClient: createHttpClient(),
  apiVersion: '2024-06-20',
});

// Store a third-party API token
const storeToken = async (userContext: ExtensionContextValue['userContext'], token: string) => {
  await stripe.apps.secrets.create({
    scope: { type: 'user', user: userContext.id },
    name: 'external_api_token',
    payload: token,
  });
};

// Retrieve the stored token
const getToken = async (userContext: ExtensionContextValue['userContext']) => {
  const secret = await stripe.apps.secrets.find({
    scope: { type: 'user', user: userContext.id },
    name: 'external_api_token',
    expand: ['payload'],
  });
  return secret.payload;
};
```

---

## Import Map

| Import path | Exports |
|-------------|---------|
| `@stripe/ui-extension-sdk/ui` | All UI Toolkit components |
| `@stripe/ui-extension-sdk/utils` | `clipboardWriteText`, `STRIPE_API_KEY`, `showToast`, `useRefreshDashboardData`, `isPermissionAuthorized`, `getUserAuthorizedPermissions`, `isSourceInAuthorizedCSP`, `getDashboardUserEmail` |
| `@stripe/ui-extension-sdk/http_client` | `createHttpClient` |
| `@stripe/ui-extension-sdk/oauth` | `createOAuthState` |
| `@stripe/ui-extension-sdk/signature` | `fetchStripeSignature` |
| `@stripe/ui-extension-sdk/context` | `ExtensionContextValue` type |
| `@stripe/ui-extension-sdk/testing` | `render` and test utilities |
| `@stripe/ui-extension-sdk/storage` | `useStorage` (SDK 9.x+) |
