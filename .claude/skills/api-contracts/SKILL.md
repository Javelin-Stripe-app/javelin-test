---
name: api-contracts
description: API endpoint design conventions for Supabase Edge Functions — request/response schemas, error format, pagination, and contract testing.
---

# API Contracts

Standardized API endpoint design for Supabase Edge Functions with Zod validation, consistent error envelopes, and cursor-based pagination over Supabase.

## Scope

**Use for:**
- Designing new API endpoints (Supabase Edge Functions in `supabase/functions/`)
- Defining request/response schemas with Zod
- Standardizing error responses
- Implementing cursor-based pagination for Supabase queries
- Contract testing between Stripe App UI and backend

**Not for:**
- External third-party API integrations (Stripe webhooks, OAuth callbacks)
- GraphQL or tRPC (this project uses REST Edge Functions)
- Database schema design (see `db-migration` skill)

---

# Response Envelope

```typescript
// supabase/functions/_shared/types.ts
type ApiResponse<T> = {
  data: T
  meta?: { cursor?: string | null; hasMore?: boolean; total?: number }
}

type ApiError = {
  error: { code: string; message: string; details?: unknown }
}
```

## Standard Error Codes

| HTTP | Code | When |
|------|------|------|
| 400 | `VALIDATION_ERROR` | Request body/params invalid |
| 401 | `UNAUTHORIZED` | No valid session |
| 403 | `FORBIDDEN` | Valid session, insufficient perms |
| 404 | `NOT_FOUND` | Resource does not exist |
| 409 | `CONFLICT` | Duplicate or state conflict |
| 429 | `RATE_LIMITED` | Too many requests |
| 500 | `INTERNAL_ERROR` | Unexpected server error |

---

# Response Helpers

```typescript
// supabase/functions/_shared/response.ts
import { ZodError } from 'zod'

const JSON_HEADERS = { 'Content-Type': 'application/json' }

export function ok<T>(data: T, meta?: Record<string, unknown>) {
  return new Response(JSON.stringify({ data, ...(meta && { meta }) }), { headers: JSON_HEADERS })
}
export function created<T>(data: T) {
  return new Response(JSON.stringify({ data }), { status: 201, headers: JSON_HEADERS })
}
export function badRequest(details?: unknown) {
  return new Response(
    JSON.stringify({ error: { code: 'VALIDATION_ERROR', message: 'Invalid request', details } }),
    { status: 400, headers: JSON_HEADERS }
  )
}
export function unauthorized() {
  return new Response(
    JSON.stringify({ error: { code: 'UNAUTHORIZED', message: 'Authentication required' } }),
    { status: 401, headers: JSON_HEADERS }
  )
}
export function forbidden() {
  return new Response(
    JSON.stringify({ error: { code: 'FORBIDDEN', message: 'Insufficient permissions' } }),
    { status: 403, headers: JSON_HEADERS }
  )
}
export function notFound(resource = 'Resource') {
  return new Response(
    JSON.stringify({ error: { code: 'NOT_FOUND', message: `${resource} not found` } }),
    { status: 404, headers: JSON_HEADERS }
  )
}
export function zodError(err: ZodError) {
  return badRequest(err.issues.map(i => ({ path: i.path, message: i.message })))
}
```

---

# Zod Schema Pattern

Define schemas once, share between Stripe App UI and backend.

```typescript
// supabase/functions/_shared/schemas/items.ts
import { z } from 'zod'

export const CreateItemSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  category: z.enum(['A', 'B', 'C']),
})
export const UpdateItemSchema = CreateItemSchema.partial()
export const ItemParamsSchema = z.object({ id: z.string().uuid() })

export type CreateItemInput = z.infer<typeof CreateItemSchema>
```

## Validation Helper

```typescript
// supabase/functions/_shared/validate.ts
import { ZodSchema, ZodError } from 'zod'

export function validate<T>(schema: ZodSchema<T>, data: unknown):
  { success: true; data: T } | { success: false; error: ZodError } {
  const result = schema.safeParse(data)
  if (result.success) return { success: true, data: result.data }
  return { success: false, error: result.error }
}
```

---

# Edge Function Pattern

```typescript
// supabase/functions/items/index.ts
import { createClient } from '@supabase/supabase-js'
import { CreateItemSchema } from '../_shared/schemas/items.ts'
import { ok, created, unauthorized, zodError } from '../_shared/response.ts'
import { validate } from '../_shared/validate.ts'
import { paginatedQuery } from '../_shared/pagination.ts'

Deno.serve(async (req) => {
  const authHeader = req.headers.get('Authorization')

  if (!authHeader) return unauthorized()

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  )

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (!user || authError) return unauthorized()

  const method = req.method.toUpperCase()
  const url = new URL(req.url)

  if (method === 'GET') {
    return paginatedQuery(supabase, 'items', {
      cursor: url.searchParams.get('cursor'),
      limit: Number(url.searchParams.get('limit') || 20),
      orderBy: 'created_at',
      filter: (q) => q.eq('user_id', user.id),
    })
  }

  if (method === 'POST') {
    const body = await req.json()
    const result = validate(CreateItemSchema, body)
    if (!result.success) return zodError(result.error)

    const { data, error } = await supabase
      .from('items')
      .insert({ ...result.data, user_id: user.id })
      .select()
      .single()

    if (error) throw error
    return created(data)
  }

  return new Response('Method Not Allowed', { status: 405 })
})
```

---

# Cursor-Based Pagination

```typescript
// supabase/functions/_shared/pagination.ts
import { SupabaseClient } from '@supabase/supabase-js'
import { ok } from './response.ts'

type PaginationOptions = {
  cursor?: string | null; limit?: number; orderBy?: string
  ascending?: boolean; filter?: (query: any) => any
}

export async function paginatedQuery(
  supabase: SupabaseClient, table: string, options: PaginationOptions
) {
  const { cursor, limit = 20, orderBy = 'created_at', ascending = false, filter } = options
  const safeLimit = Math.min(Math.max(limit, 1), 100)

  let query = supabase.from(table).select('*', { count: 'exact' })
    .order(orderBy, { ascending }).limit(safeLimit + 1)

  if (filter) query = filter(query)
  if (cursor) query = ascending ? query.gt(orderBy, cursor) : query.lt(orderBy, cursor)

  const { data, error, count } = await query
  if (error) throw error

  const hasMore = (data?.length ?? 0) > safeLimit
  const items = hasMore ? data!.slice(0, safeLimit) : (data ?? [])
  const nextCursor = hasMore ? items[items.length - 1]?.[orderBy] : null

  return ok(items, { cursor: nextCursor, hasMore, total: count })
}
```

---

# Rate Limiting Tiers

Cross-reference `security-patterns` skill for implementation details.

| Tier | Limit | Apply to |
|------|-------|----------|
| Standard | 60 req/min | Most authenticated endpoints |
| Strict | 10 req/min | Auth, password reset, invites |
| Generous | 200 req/min | Read-only list/search endpoints |
| Webhook | No limit | Verified webhook endpoints |

---

# Contract Testing

```typescript
// supabase/functions/items/__tests__/contract.test.ts
import { z } from 'zod'

const ItemResponseSchema = z.object({
  data: z.object({ id: z.string().uuid(), name: z.string(), category: z.enum(['A', 'B', 'C']) }),
})
const ErrorResponseSchema = z.object({
  error: z.object({ code: z.string(), message: z.string(), details: z.unknown().optional() }),
})

it('success response matches schema', async () => {
  const body = await (await handleRequest(validRequest())).json()
  expect(() => ItemResponseSchema.parse(body)).not.toThrow()
})

it('error response matches schema', async () => {
  const res = await handleRequest(invalidRequest())
  expect(() => ErrorResponseSchema.parse(await res.json())).not.toThrow()
  expect(res.status).toBe(400)
})
```

---

# Artifact: api-contracts.md

Produce `openspec/changes/<change-name>/api-contracts.md` using this template:

```markdown
# API Contracts: <Change Name>

## Endpoints

### `POST /functions/v1/<function-name>`
- **Auth**: Required (Bearer token) | **Rate limit**: Standard
- **Request**: `z.object({ ... })`
- **Success (201)**: `{ "data": { ... } }`
- **Errors**: 400, 401, 409

### `GET /functions/v1/<function-name>`
- **Auth**: Required (Bearer token) | **Rate limit**: Generous
- **Query**: `cursor`, `limit` (max 100)
- **Success (200)**: `{ "data": [...], "meta": { "cursor": "...", "hasMore": true } }`

## Shared Schemas
- `supabase/functions/_shared/schemas/<resource>.ts`
```

---

# SDD Phase Integration

## Specs Phase
- Include endpoint inventory in `openspec/changes/<change-name>/specs/<capability>/spec.md`
- Each endpoint: method, function name, auth requirement, request/response shapes

## Design Phase
- Produce `api-contracts.md` artifact in `openspec/changes/<change-name>/api-contracts.md`
- Document Zod schemas, pagination strategy, and error handling in `design.md`

## Tasks Phase
- Add endpoint implementation tasks in `openspec/changes/<change-name>/tasks.md`
- Include contract test tasks; cross-reference `testing-strategy` skill

## Apply Phase
- Run contract tests to verify response shapes
- Verify all endpoints return standard error envelope
- Confirm rate limiting tier is applied per endpoint

---
