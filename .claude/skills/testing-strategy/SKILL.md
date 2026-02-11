---
name: testing-strategy
description: Test architecture and coverage strategy for Supabase Edge Functions + Stripe App UI — mapping spec acceptance criteria to automated tests, coverage gates, and CI integration.
---

# Testing Strategy

Map spec acceptance criteria to automated tests across the test pyramid, with coverage gates and CI integration.

## Scope

**Use for:**
- Defining test architecture for new features
- Mapping acceptance criteria to test types (unit, integration, e2e)
- Configuring Vitest and Playwright
- Creating Supabase and Stripe mock/fixture patterns
- Setting coverage thresholds and CI gates

**Not for:**
- Manual QA procedures
- Performance/load testing (see `performance-patterns` skill)
- Security testing (see `security-patterns` skill)

---

# Test Pyramid

```
         /  E2E  \          Playwright — critical user flows only
        /----------\
       / Integration \      Vitest — Edge Function handlers, component interactions
      /----------------\
     /      Unit        \   Vitest — pure functions, utils, schemas
    /--------------------\
```

**Target ratios:** ~60% unit, ~30% integration, ~10% e2e.

---

# Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      thresholds: { statements: 80, branches: 75, functions: 80, lines: 80 },
      exclude: ['node_modules/', 'tests/', '**/*.d.ts', '**/*.config.{ts,js}', '**/types/'],
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, './') } },
})
```

```typescript
// tests/setup.ts
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => { cleanup() })
```

---

# Mocking Patterns

## Supabase Client Mock

```typescript
// tests/mocks/supabase.ts
import { vi } from 'vitest'

export const mockSupabaseClient = {
  auth: {
    getUser: vi.fn().mockResolvedValue({
      data: { user: { id: 'user-123', email: 'test@test.com' } },
      error: null,
    }),
    onAuthStateChange: vi.fn(() => ({
      data: { subscription: { unsubscribe: vi.fn() } },
    })),
  },
  from: vi.fn(() => ({
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: null, error: null }),
    order: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    range: vi.fn().mockResolvedValue({ data: [], error: null, count: 0 }),
  })),
}

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => mockSupabaseClient,
}))
```

## Stripe Mock

```typescript
// tests/mocks/stripe.ts
import { vi } from 'vitest'

export const mockStripe = {
  customers: {
    list: vi.fn().mockResolvedValue({ data: [], has_more: false }),
    retrieve: vi.fn().mockResolvedValue({ id: 'cus_test_123', email: 'test@test.com' }),
    create: vi.fn().mockResolvedValue({ id: 'cus_test_123' }),
    update: vi.fn().mockResolvedValue({ id: 'cus_test_123' }),
  },
  subscriptions: {
    list: vi.fn().mockResolvedValue({ data: [], has_more: false }),
    retrieve: vi.fn().mockResolvedValue({ id: 'sub_test_123', status: 'active' }),
  },
  webhooks: {
    constructEvent: vi.fn().mockReturnValue({
      type: 'customer.updated',
      data: { object: { id: 'cus_test_123' } },
    }),
  },
  apps: {
    secrets: {
      create: vi.fn().mockResolvedValue({ id: 'appsecret_123' }),
      find: vi.fn().mockResolvedValue({ payload: 'secret_value' }),
      deleteWhere: vi.fn().mockResolvedValue({}),
      list: vi.fn().mockResolvedValue({ data: [] }),
    },
  },
}

vi.mock('stripe', () => ({
  default: vi.fn(() => mockStripe),
}))
```

## Deno.serve Mock (for Edge Function tests)

```typescript
// tests/mocks/deno.ts
import { vi } from 'vitest'

// Mock Deno.env for Edge Function testing
export const mockDenoEnv = {
  get: vi.fn((key: string) => {
    const vars: Record<string, string> = {
      SUPABASE_URL: 'https://test.supabase.co',
      SUPABASE_ANON_KEY: 'test-anon-key',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-key',
      STRIPE_SECRET_KEY: 'sk_test_123',
      STRIPE_WEBHOOK_SECRET: 'whsec_test_123',
    }
    return vars[key]
  }),
}

// For testing Edge Function handlers directly
export function createMockRequest(
  method: string,
  url: string,
  options?: { body?: unknown; headers?: Record<string, string> }
): Request {
  return new Request(`https://test.supabase.co/functions/v1${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer test-token',
      ...options?.headers,
    },
    ...(options?.body && { body: JSON.stringify(options.body) }),
  })
}
```

---

# Test Examples

## Edge Function Test

```typescript
// supabase/functions/items/__tests__/handler.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockSupabaseClient } from '@/tests/mocks/supabase'
import { createMockRequest, mockDenoEnv } from '@/tests/mocks/deno'

// Mock Deno globals
vi.stubGlobal('Deno', { env: mockDenoEnv })

describe('items handler', () => {
  it('returns 401 when no authorization header', async () => {
    const req = createMockRequest('GET', '/items', { headers: { Authorization: '' } })
    const response = await handler(req)
    expect(response.status).toBe(401)
  })

  it('returns items for authenticated user', async () => {
    mockSupabaseClient.from.mockReturnValueOnce({
      select: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      eq: vi.fn().mockResolvedValue({
        data: [{ id: '1', name: 'Test Item' }],
        error: null,
        count: 1,
      }),
    })

    const req = createMockRequest('GET', '/items')
    const response = await handler(req)
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.data).toHaveLength(1)
  })

  it('validates request body on POST', async () => {
    const req = createMockRequest('POST', '/items', {
      body: { name: '' }, // Invalid: empty name
    })
    const response = await handler(req)
    expect(response.status).toBe(400)
  })
})
```

## Stripe App UI Component Test

```typescript
// src/views/__tests__/CustomerView.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import { CustomerView } from '../CustomerView'

// Mock the Stripe extension context
const mockContext = {
  userContext: { id: 'usr_123', account: { id: 'acct_123' } },
  environment: {
    objectContext: { id: 'cus_123', object: 'customer' },
    mode: 'test',
  },
}

it('renders customer data when loaded', async () => {
  render(<CustomerView {...mockContext} />)
  await waitFor(() => {
    expect(screen.getByText('Customer Details')).toBeInTheDocument()
  })
})
```

---

# Playwright E2E

Note: E2E testing for Stripe Apps is limited since the UI runs inside the Stripe Dashboard. E2E tests primarily target Edge Function integrations and end-to-end data flows.

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',
  use: { trace: 'on-first-retry' },
  projects: [{ name: 'api-tests', testMatch: '**/*.api.test.ts' }],
})
```

## API E2E Test

```typescript
// e2e/items.api.test.ts
import { test, expect } from '@playwright/test'

const EDGE_FUNCTION_URL = process.env.SUPABASE_URL + '/functions/v1'

test('items endpoint returns data for authenticated user', async ({ request }) => {
  const response = await request.get(`${EDGE_FUNCTION_URL}/items`, {
    headers: { Authorization: `Bearer ${process.env.E2E_TEST_TOKEN}` },
  })
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body).toHaveProperty('data')
})
```

---

# Acceptance Criteria Format

Format ACs as testable statements in specs:

```markdown
- **AC-1**: Given authenticated user, when calling GET /functions/v1/items, then items are returned
  - Test type: Integration (Vitest)
- **AC-2**: Given unauthenticated request, when calling any endpoint, then 401 returned
  - Test type: Unit (Vitest)
- **AC-3**: Given invalid input, when POST /functions/v1/items, then 400 with validation errors
  - Test type: Unit (Vitest)
```

---

# CI Scripts

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:ci": "vitest run --coverage && playwright test"
  }
}
```

---

# Artifact: test-plan.md

Produce `openspec/changes/<change-name>/test-plan.md` using this template:

```markdown
# Test Plan: <Change Name>

## Coverage Summary
| Type | Count | Framework |
|------|-------|-----------|
| Unit | N | Vitest |
| Integration | N | Vitest |
| E2E | N | Playwright |

## AC -> Test Mapping
| AC | Description | Test Type | File |
|----|-------------|-----------|------|
| AC-1 | ... | Unit | `__tests__/foo.test.ts` |

## Mocks Required
- [ ] Supabase client (auth + data)
- [ ] Stripe SDK (customers, subscriptions, Secret Store)
- [ ] Deno environment (env vars)

## Coverage Gates
- Statements: 80% | Branches: 75% | Functions: 80% | Lines: 80%
```

---

# SDD Phase Integration

## Specs Phase
- Format acceptance criteria as testable AC-N statements in `openspec/changes/<change-name>/specs/<capability>/spec.md`
- Tag each AC with test type (unit, integration, e2e)

## Design Phase
- Include "Test Architecture" section in `openspec/changes/<change-name>/design.md`
- Document which mocks are needed and any test infrastructure changes

## Tasks Phase
- Add test implementation tasks in `openspec/changes/<change-name>/tasks.md`
- Each feature task should have a corresponding test task
- Include `test-plan.md` artifact creation as a task

## Apply Phase
- Run `vitest run --coverage` and verify thresholds pass
- Run `playwright test` for any new e2e tests
- Verify all ACs have corresponding passing tests

---
