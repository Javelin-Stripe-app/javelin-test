---
name: performance-patterns
description: Performance budgets and optimization patterns for Supabase Edge Functions + Stripe App UI — API response times, caching strategies, Stripe data cache, and database query performance.
---

# Performance Patterns

Performance budgets, optimization patterns, and monitoring for Supabase Edge Functions + Stripe App UI applications.

## Scope

**Use for:**
- Setting API response time targets for Edge Functions
- Stripe data cache optimization (freshness, retention, sync)
- Supabase query optimization and connection pooling
- Bundle considerations for Stripe App extensions
- Adding performance criteria to specs and design docs

**Not for:**
- Load testing or stress testing execution
- CDN/infrastructure configuration
- Third-party service performance (Stripe API latency, etc.)
- Stripe App UI rendering (controlled by Stripe Dashboard)

---

# Response Time Targets

| Endpoint Type | Target (p95) | Action if exceeded |
|---------------|-------------|-------------------|
| Edge Function (simple read) | < 200ms | Optimize query, add index |
| Edge Function (complex query) | < 500ms | Cache result, paginate |
| Edge Function (Stripe API call) | < 2s | Cache, batch, queue |
| Edge Function (write operation) | < 300ms | Async processing |
| Stripe data cache refresh | < 5s | Background sync |

**Project target:** All Edge Function endpoints MUST respond in < 500ms (p95) for cached data operations.

---

# Stripe Data Cache Performance

The query-optimized cache (see product-vision-strategy.md §10) has specific performance considerations.

## Cache Strategy

| Data Type | Strategy | TTL | Freshness |
|-----------|----------|-----|-----------|
| Recent Stripe data (< 60 days) | Auto-synced rolling cache | Continuous | Near-real-time |
| Historical Stripe data (60d–24mo) | On-demand backfill | Until 60d inactive | Stale-acceptable |
| Single object lookup | Always fetch live from Stripe API | None | Real-time |
| Aggregate/analytical queries | Cache with freshness indicator | 1 hour | Timestamp-marked |
| Auth state / tokens | Never cache in application | None | Always fresh |

## AI-Driven Freshness Routing

The AI layer decides per-query whether to use cached data or fetch fresh:

```typescript
// supabase/functions/_shared/freshness.ts
type FreshnessDecision = 'cache' | 'refresh' | 'live' | 'ask_user'

function decideFreshness(query: ParsedQuery): FreshnessDecision {
  // Single-object lookups: always live
  if (query.isSingleObject) return 'live'

  // Recency-sensitive queries (today, this week, latest): refresh first
  if (query.isRecencySensitive) return 'refresh'

  // Historical/aggregate queries: use cache
  if (query.isHistorical || query.isAggregate) return 'cache'

  // Ambiguous: ask user
  return 'ask_user'
}
```

## Cache Sync Performance

```typescript
// Background sync should not block user requests
// Use Supabase Edge Function scheduled invocations (pg_cron)

// supabase/functions/sync-stripe-data/index.ts
Deno.serve(async (req) => {
  const supabaseAdmin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  // Sync only recent data (last 60 days rolling window)
  // Process in batches to stay within Stripe rate limits (25 req/sec)
  const batchSize = 100
  // ... batch processing logic
})
```

---

# Stripe App Bundle Considerations

Stripe App UI extensions are bundled and uploaded to Stripe. While Stripe handles rendering, keep extensions lean:

## Bundle Best Practices

- Import only what you need from `@stripe/ui-extension-sdk`
- Avoid large utility libraries (use specific imports)
- Keep view components focused — split complex views into separate registered views

```typescript
// GOOD: Named import (tree-shakeable)
import { format } from 'date-fns'

// BAD: Full library import
import _ from 'lodash'

// GOOD: Cherry-pick lodash
import debounce from 'lodash/debounce'
```

---

# Supabase Query Optimization

## Select Only What You Need

```typescript
// BAD: Select all columns
const { data } = await supabase.from('items').select('*')

// GOOD: Select specific columns
const { data } = await supabase.from('items').select('id, name, created_at')
```

## Use Indexes

Ensure columns used in `.eq()`, `.order()`, and cursor pagination have database indexes:

```sql
CREATE INDEX idx_items_user_id ON items(user_id);
CREATE INDEX idx_items_created_at ON items(created_at DESC);
CREATE INDEX idx_items_user_created ON items(user_id, created_at DESC);

-- Cache table indexes (for Stripe data cache)
CREATE INDEX idx_stripe_cache_object_type ON stripe_cache(object_type);
CREATE INDEX idx_stripe_cache_synced_at ON stripe_cache(synced_at DESC);
CREATE INDEX idx_stripe_cache_account_id ON stripe_cache(stripe_account_id);
```

## Connection Pooling

Use Supabase connection pooling for Edge Functions:

```bash
# Supabase Dashboard Environment Variables
# Direct connection (migrations only)
DATABASE_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres

# Pooled connection (application queries via Edge Functions)
DATABASE_URL_POOLED=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
```

In Edge Functions, use the pooled connection string. Direct connections are only for migrations.

## Avoid N+1 Queries

```typescript
// BAD: N+1 query pattern
const { data: items } = await supabase.from('items').select('*')
for (const item of items) {
  const { data: author } = await supabase.from('users').select('name').eq('id', item.user_id)
}

// GOOD: Join in single query
const { data } = await supabase
  .from('items')
  .select('*, user:users(name)')
```

---

# Edge Function Cold Start Mitigation

Supabase Edge Functions run on Deno Deploy. Cold starts can affect response times:

- Keep function dependencies minimal
- Use shared modules (`_shared/`) for common utilities
- Avoid heavy initialization in the global scope
- Monitor cold start frequency in production logs

---

# Performance Acceptance Criteria Format

When adding performance criteria to specs:

```markdown
## Performance Criteria
- **PC-1**: Edge Function response < 200ms (p95) for cached data reads
- **PC-2**: Edge Function response < 500ms (p95) for Stripe API-backed reads
- **PC-3**: Cache sync completes within Stripe rate limits (25 req/sec)
- **PC-4**: Database query time < 50ms (p95) for indexed queries
- **PC-5**: Stripe data cache freshness within 1 hour for auto-synced data
```

---

# SDD Phase Integration

## Specs Phase
- Add performance acceptance criteria (PC-N) to `openspec/changes/<change-name>/specs/<capability>/spec.md`
- Tag endpoints that involve Stripe API calls (higher latency budget)

## Design Phase
- Include "Performance" section in `openspec/changes/<change-name>/design.md`:
  - Caching strategy for each data type (cache vs. live fetch)
  - Stripe API call frequency and rate limit impact
  - Database indexes required
  - Cold start considerations for Edge Functions

## Tasks Phase
- Add performance verification tasks in `openspec/changes/<change-name>/tasks.md`
- Include: query plan review, cache hit rate monitoring, Edge Function response time profiling

## Apply Phase
- Verify database indexes are created for new queries
- Verify Edge Function response times meet targets
- Confirm Stripe data cache sync operates within rate limits

---
