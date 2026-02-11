---
name: ux-states
description: Ensure complete UI state coverage (loading, empty, error, populated) and state-to-component mapping for Stripe App UI extensions
---

# UX States

Ensure every interactive element and screen has complete state coverage and meets accessibility standards.

---

## State Enumeration Framework

Every interactive element and screen MUST define these states:

### Core States
- **Loading** — Data is being fetched. Show Spinner or skeleton placeholder.
- **Empty** — No data exists. Show empty state message with action.
- **Populated** — Data exists and is displayed normally.
- **Error** — Operation failed. Show Banner with error message and retry option.

### Edge States
- **Disabled** — Element is visible but not interactive.
- **Offline** — Network unavailable. Show offline indicator.
- **Permission Denied** — User lacks access. Show permission message.
- **Rate Limited** — Too many requests. Show throttle message with time.

### Interactive States
- **Default** — Element's resting state.
- **Hover** — Pointer over element (desktop only).
- **Active** — Element is being pressed/clicked.
- **Focus** — Element has keyboard focus.

### Missing states = broken experience. Define all before implementation.

---

## Accessibility (State-Specific)

For the full accessibility checklist (ARIA roles, keyboard navigation, contrast, forms), see the **web-design-guidelines** skill. This section covers only state-specific accessibility concerns.

### State Change Announcements
- Use `aria-live="polite"` regions to announce state transitions (loading to populated, error appearance)
- Loading states: announce "Loading..." to screen readers via `aria-busy="true"` on the container
- Error states: use `role="alert"` to immediately announce errors
- Empty states: ensure the empty message is in the document flow (not only visual)

### Focus Management During State Transitions
- When transitioning from loading to error, move focus to the error message or retry button
- When transitioning from loading to populated, do NOT steal focus (let user continue from current position)
- When a retry action triggers loading, return focus to retry button after resolution

### Disabled State Accessibility
- Use `aria-disabled="true"` instead of removing elements from tab order
- Provide tooltip or `aria-describedby` explaining why the element is disabled
- Maintain visual indication of disabled state with sufficient contrast (3:1 minimum)

---

## Screen State Documentation Format

Use this template to document flows and screens:

```markdown
## Flow: {Flow Name}

### Entry Point
{How the user reaches this flow}

### Screens
#### {Screen Name}
- **States**: loading | empty | populated | error
- **Key elements**: {interactive elements and their behavior}
- **Accessibility**: {ARIA roles, keyboard nav, focus management}

### Transitions
{Screen A} → {action} → {Screen B}

### Error Handling
{What happens on failure at each step}
```

### Example

```markdown
## Flow: Customer Metadata Editor

### Entry Point
Stripe Dashboard → Customer detail page → Javelin drawer

### Screens
#### Metadata List
- **States**: loading (Spinner) | empty ("No metadata found" + "Add Metadata" button) | populated (list of key-value pairs) | error (Banner with retry)
- **Key elements**: Add button, edit inline fields, delete with confirmation
- **Accessibility**: List uses appropriate ARIA labels, edit fields have descriptive labels

### Transitions
Metadata List → click "Add" → Add Metadata Form
Metadata List → click row → Edit Metadata Inline

### Error Handling
- Network error: Show Banner with retry action
- Permission error: Show "Insufficient permissions" Banner
- Rate limit: Show throttle message with countdown
```

---

## Component State Patterns

Map screen states to component props:

### State Prop Pattern

```markdown
## Component: {ComponentName}

### States
- **Loading**: {what renders}
- **Empty**: {what renders}
- **Populated**: {what renders}
- **Error**: {what renders}

### Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| isLoading | boolean | no | Shows loading state |
| error | Error | null | no | Shows error state |
| data | T[] | no | Data to render |
| isEmpty | boolean | no | Explicitly shows empty state |
```

### Example

```markdown
## Component: CustomerMetadataView

### States
- **Loading**: ContextView + Spinner
- **Empty**: ContextView + Box("No metadata found") + Button("Add Metadata")
- **Populated**: ContextView + List of metadata key-value pairs
- **Error**: ContextView + Banner(type="critical") with retry

### Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| — | — | — | View component, receives ExtensionContextValue |

### Children
- MetadataList — displays key-value pairs
- AddMetadataForm — FocusView for adding new metadata
- EditMetadataInline — inline editing of existing values

### Data Requirements
- `GET /functions/v1/customer-metadata?customer_id={id}` via Edge Function
```

---

## State Implementation Guidelines

### State Priority
1. **Error** takes priority over all other states
2. **Loading** takes priority over empty/populated
3. **Empty** only shows when no loading and no error
4. **Populated** is the default happy path

### State Transitions
- All state transitions should be smooth (no flash of content)
- Loading → Populated should feel instant when data is cached
- Error → Retry should clear error before showing loading
- Debounce rapid state changes (e.g., search input)

### State Persistence
- Error messages should persist until user action
- Loading states should have minimum duration (avoid flash)
- Empty states should suggest next action
- Populated states should indicate refresh/update availability

---

## SDD Phase Integration

UX state coverage must be addressed at every phase of the OpenSpec pipeline:

### Specs Phase
- Every user-facing scenario in `openspec/changes/<change-name>/specs/<capability>/spec.md` MUST enumerate all states: **loading**, **empty**, **populated**, **error**
- Acceptance criteria must explicitly cover edge states (offline, permission denied, rate limited) where applicable
- Missing state definitions in a spec = incomplete spec; do not proceed to design

### Design Phase
- Map each state to component props and document in `openspec/changes/<change-name>/design.md`
- Include a "UI States" section in the design showing state-to-component mapping
- Document state transition behavior (animation, focus management, minimum loading duration)

### Tasks Phase
- Include state coverage verification tasks in `openspec/changes/<change-name>/tasks.md`
- Each UI task must include: "Verify all states render correctly (loading, empty, populated, error)"
- Add specific tasks for edge state handling if the feature involves network requests or permissions

---

## Stack-Specific Patterns (Stripe App UI)

All UI in this project uses **Stripe UI Toolkit** components only. No custom HTML/CSS. No React 18/19 APIs.

### Loading States with Stripe UI Toolkit

```tsx
// src/views/CustomerMetadataView.tsx
import { ContextView, Box, Spinner } from '@stripe/ui-extension-sdk/ui'

const CustomerMetadataView = ({ userContext, environment }: ExtensionContextValue) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMetadata(environment.objectContext?.id)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [environment.objectContext?.id])

  if (isLoading) {
    return (
      <ContextView title="Customer Metadata">
        <Box css={{ stack: 'y', alignX: 'center', padding: 'large' }}>
          <Spinner size="large" />
        </Box>
      </ContextView>
    )
  }

  // ... render populated/empty/error states
}
```

### Error States with Banner

```tsx
import { ContextView, Banner, Button } from '@stripe/ui-extension-sdk/ui'

// Error state
if (error) {
  return (
    <ContextView title="Customer Metadata">
      <Banner
        type="critical"
        title="Failed to load metadata"
        description={error.message}
        actions={
          <Button onPress={() => retry()}>Try again</Button>
        }
      />
    </ContextView>
  )
}
```

### Empty States

```tsx
import { ContextView, Box, Button, Icon } from '@stripe/ui-extension-sdk/ui'

// Empty state
if (!data || data.length === 0) {
  return (
    <ContextView title="Customer Metadata">
      <Box css={{ stack: 'y', alignX: 'center', padding: 'xlarge', gap: 'medium' }}>
        <Box css={{ font: 'heading' }}>No metadata found</Box>
        <Box css={{ font: 'body', color: 'secondary' }}>
          Add metadata to organize customer information.
        </Box>
        <Button type="primary" onPress={() => setShowAddForm(true)}>
          Add Metadata
        </Button>
      </Box>
    </ContextView>
  )
}
```

### Client Component State Management

For interactive components requiring client-side state transitions (React 17 patterns only):

```tsx
import { useState } from 'react'
import { Button } from '@stripe/ui-extension-sdk/ui'

const DeleteMetadataButton = ({ metadataKey, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await onDelete(metadataKey)
    } catch (err) {
      // Error handling
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Button
      type="destructive"
      onPress={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  )
}
```

---

## Common Patterns

### Data Table States
- **Loading**: Spinner or skeleton rows
- **Empty**: "No items found" with action CTA
- **Populated**: List/table with data, sort, filter, pagination
- **Error**: Banner above table, retain previous data if available

### Form States
- **Default**: Empty or pre-filled inputs
- **Validating**: Show inline validation on blur
- **Submitting**: Disable form, show loading on submit button
- **Success**: Show success Banner, clear form or navigate back
- **Error**: Show error Banner, keep form enabled for retry

### FocusView (Modal) States
- **Opening**: FocusView renders with initial state
- **Open**: Focus first interactive element
- **Closing**: Return to previous ContextView
- **Closed**: FocusView unmounted

---

## Quick Reference

When defining any UI element, ask:

1. **What are ALL possible states?** (Not just happy path)
2. **How does keyboard navigation work?** (Tab order, shortcuts)
3. **What do screen readers announce?** (Labels, state changes)
4. **Does contrast meet standards?** (4.5:1 minimum)
5. **Where does focus go?** (After actions, on errors)

Missing any of these = incomplete spec. Address before implementation.
