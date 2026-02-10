# Stripe Apps: UI Components Reference

> **DISAMBIGUATION:** These are **Stripe UI Toolkit** components for Dashboard extensions.
> NOT `@stripe/react-stripe-js` (PaymentElement, etc.) — that's Stripe Payments.
> Import from: `@stripe/ui-extension-sdk/ui` | React: 17 only
> See also: `core-concepts.md`, `sdk-api.md`

---

## Import Pattern

All UI Toolkit components are imported from `@stripe/ui-extension-sdk/ui`:

```tsx
import {
  ContextView,
  Box,
  Button,
  TextField,
  Banner,
} from '@stripe/ui-extension-sdk/ui';
```

**Never** import UI components from `@stripe/stripe-js`, `@stripe/react-stripe-js`, or any other package. **Never** use raw HTML elements (`<div>`, `<input>`, etc.) in extension views.

---

## Views (4 components)

Views are top-level containers paired with viewports in the manifest.

| Component | Description | Usage |
|-----------|-------------|-------|
| **ContextView** | Renders in the Dashboard drawer next to Stripe content | Primary view for most viewports |
| **FocusView** | Opens a dedicated full-width space for a specific task | Complex forms, multi-step flows |
| **SettingsView** | App configuration/settings page | `settings` viewport only |
| **SignInView** | Authentication screen | Login/OAuth flows |

### ContextView example

```tsx
import { ContextView } from '@stripe/ui-extension-sdk/ui';

const CustomerDetailView = ({ userContext, environment }: ExtensionContextValue) => {
  const customerId = environment.objectContext?.id;

  return (
    <ContextView title="My App">
      <Box css={{ padding: 'medium' }}>
        <Banner type="default" title="Customer ID" description={customerId} />
      </Box>
    </ContextView>
  );
};

export default CustomerDetailView;
```

### FocusView example

```tsx
import { ContextView, FocusView, Button } from '@stripe/ui-extension-sdk/ui';
import { useState } from 'react';

const MyView = () => {
  const [showFocus, setShowFocus] = useState(false);

  if (showFocus) {
    return (
      <FocusView title="Edit Details" onClose={() => setShowFocus(false)}>
        {/* Complex form content */}
      </FocusView>
    );
  }

  return (
    <ContextView title="My App">
      <Button onPress={() => setShowFocus(true)}>Open Editor</Button>
    </ContextView>
  );
};
```

---

## Layout (2 components)

| Component | Description | Key props |
|-----------|-------------|-----------|
| **Box** | Wraps components with custom styles/layout | `css` (spacing, layout, colors) |
| **Divider** | Horizontal separator line | — |

### Box CSS properties

Box uses a constrained CSS object (not arbitrary CSS strings):

```tsx
<Box css={{
  padding: 'medium',          // 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  marginBottom: 'small',
  stack: 'y',                 // vertical stack
  gap: 'small',               // gap between children
  distribute: 'space-between',
  alignX: 'center',
  alignY: 'center',
  width: 'fill',
  background: 'container',
}}>
```

---

## Navigation (5 components)

| Component | Description | Key props |
|-----------|-------------|-----------|
| **Button** | Primary action trigger | `type`, `onPress`, `disabled`, `css` |
| **ButtonGroup** | Groups multiple buttons with overflow | `menuTrigger` |
| **Link** | Subtler navigation element | `href`, `onPress`, `external` |
| **Menu** | Context-specific action choices | `trigger`, children as `MenuItem` |
| **Tabs** | Switchable content sections | `fitted`, `size`, sub-components: `Tab`, `TabList`, `TabPanel`, `TabPanels` |

### Button types

```tsx
<Button type="primary" onPress={handleSave}>Save</Button>
<Button type="secondary" onPress={handleCancel}>Cancel</Button>
<Button type="destructive" onPress={handleDelete}>Delete</Button>
```

### Tabs example

```tsx
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@stripe/ui-extension-sdk/ui';

<Tabs fitted size="medium">
  <TabList>
    <Tab>Overview</Tab>
    <Tab>Details</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Overview content</TabPanel>
    <TabPanel>Details content</TabPanel>
  </TabPanels>
</Tabs>
```

---

## Content (12 components)

| Component | Description | Key props |
|-----------|-------------|-----------|
| **Accordion** | Collapsible content sections | `title`, children |
| **Badge** | Status indicators | `type` (`positive`, `negative`, `warning`, `info`) |
| **Banner** | Alert/message display | `type`, `title`, `description`, `onDismiss` |
| **Chip** | Value display/manipulation tags | `label`, `onClose` |
| **Icon** | Icon graphics | `name`, `size` |
| **Img** | Image display | `src`, `alt`, `width`, `height` |
| **Inline** | Inline text styling | `css` (font weight, color, size) |
| **List** | Preconfigured list formats | `items`, `onAction` |
| **Spinner** | Loading state indicator | `size` |
| **Table** | Tabular data display | `columns`, `data` |
| **Toast** | Temporary status notifications | Via `showToast()` from SDK (not a JSX component) |
| **Tooltip** | Hover contextual info | `trigger`, children |

### Banner example

```tsx
<Banner
  type="critical"
  title="Error"
  description="Failed to sync customer data"
  onDismiss={() => setShowError(false)}
/>
```

### List example

```tsx
<List
  items={[
    { id: '1', title: 'Item One', secondaryTitle: '$10.00' },
    { id: '2', title: 'Item Two', secondaryTitle: '$20.00' },
  ]}
  onAction={(id) => handleItemClick(id)}
/>
```

---

## Forms (8 components)

| Component | Description | Key props |
|-----------|-------------|-----------|
| **Checkbox** | Boolean toggle (checked/unchecked) | `label`, `checked`, `onChange` |
| **DateField** | Date input | `label`, `value`, `onChange` |
| **FormFieldGroup** | Groups related form fields | `legend`, `description` |
| **Radio** | Mutually exclusive selection | `label`, `value`, `checked`, `onChange` |
| **Select** | Dropdown selection | `label`, `value`, `onChange`, children as `option` |
| **Switch** | Boolean toggle (on/off) | `label`, `checked`, `onChange` |
| **TextArea** | Multi-line text input | `label`, `value`, `onChange`, `rows` |
| **TextField** | Single-line text input | `label`, `value`, `onChange`, `type`, `placeholder` |

### Form example

```tsx
import {
  Box,
  TextField,
  Select,
  Button,
  FormFieldGroup,
} from '@stripe/ui-extension-sdk/ui';

const MyForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  return (
    <Box css={{ stack: 'y', gap: 'medium' }}>
      <FormFieldGroup legend="Customer Details">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter customer name"
        />
        <Select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="enterprise">Enterprise</option>
          <option value="startup">Startup</option>
        </Select>
      </FormFieldGroup>
      <Button type="primary" onPress={handleSubmit}>Save</Button>
    </Box>
  );
};
```

---

## Charts (3 components)

| Component | Description | Key props |
|-----------|-------------|-----------|
| **BarChart** | Bar data visualization | `data`, `layout` |
| **LineChart** | Line data visualization | `data`, `layout` |
| **Sparkline** | Compact inline line chart | `data` |

---

## View Registration

Views are registered in `stripe-app.json`, not in code:

```json
{
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.customer.detail",
        "component": "CustomerView"
      },
      {
        "viewport": "stripe.dashboard.drawer.default",
        "component": "DefaultView"
      },
      {
        "viewport": "settings",
        "component": "SettingsView"
      }
    ]
  }
}
```

The `component` value must match the default export name of the file in `src/views/`.

### Adding a view via CLI

```bash
stripe apps add view
```

This updates the manifest and creates the component + test file in `src/views/`.

---

## Testing Views

Tests use Jest + `@stripe/ui-extension-sdk/testing`:

```tsx
import { render } from '@stripe/ui-extension-sdk/testing';
import CustomerView from './CustomerView';

describe('CustomerView', () => {
  it('renders customer info', () => {
    const { getByText } = render(
      <CustomerView
        userContext={{ id: 'usr_123' }}
        environment={{ objectContext: { id: 'cus_123' } }}
      />
    );
    expect(getByText('cus_123')).toBeTruthy();
  });
});
```

---

## Component count summary

| Category | Count | Components |
|----------|-------|------------|
| Views | 4 | ContextView, FocusView, SettingsView, SignInView |
| Layout | 2 | Box, Divider |
| Navigation | 5 | Button, ButtonGroup, Link, Menu, Tabs |
| Content | 12 | Accordion, Badge, Banner, Chip, Icon, Img, Inline, List, Spinner, Table, Toast, Tooltip |
| Forms | 8 | Checkbox, DateField, FormFieldGroup, Radio, Select, Switch, TextArea, TextField |
| Charts | 3 | BarChart, LineChart, Sparkline |
| **Total** | **34** | |
