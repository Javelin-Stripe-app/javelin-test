---
id: std-20260213-debug-customer-cache
depthUsed: standard
timestamp: 2026-02-13T00:00:00Z
executed: false
originalPrompt: "okay its somewhat working. the account acct_1T04hmJUI6dJYhqn has 8 customers, but when I ask the app to list my customers it just tell I have one (says data as of cache). We need to investigate what is the issue here. Also, we need to verify our data retention policy so we are querying Stripe for recent data and not just defaulting to cache all the time."
---

# Improved Prompt

## Debug: Stripe App Returns 1 Customer Instead of 8

### Problem
Account `acct_1T04hmJUI6dJYhqn` has 8 customers in Stripe, but the app's
chat/insights responses report only 1 customer. The response mentions
"data as of cache," suggesting it reads from Supabase cached data rather
than live Stripe data.

### Investigation Tasks

#### 1. Trace the data path for customer counts
- Identify which Edge Function(s) serve customer data to chat/insights
  (likely `chat-message`, `insights-welcome`, or `metrics`)
- Check the SQL query: does it query the local Supabase cache table?
  What WHERE clause filters by account? Is there a LIMIT 1 or
  pagination bug?
- Check the sync functions (`sync-trigger`, `sync-worker`,
  `sync-backfill`): when was the last successful sync for this account?
  How many customer records were written?

#### 2. Verify cached data in Supabase
- Query the customers table (or equivalent) in Supabase for
  `acct_1T04hmJUI6dJYhqn` — how many rows exist?
- If only 1 row: the sync didn't pull all customers. Investigate
  sync pagination/cursor logic.
- If 8 rows: the query or LLM prompt is filtering incorrectly.

#### 3. Review cache/freshness strategy
- Document the current caching policy: when does the app sync Stripe
  data to Supabase? On first install? On a schedule? On each request?
- Identify if there's a staleness check — does the app ever bypass
  cache and query Stripe directly for recent data?
- Determine the correct policy: should chat/insights always use cached
  data, or should they fall back to live Stripe API when cache is stale
  or empty?

### Expected Outcome
- Root cause identified (sync bug, query bug, or cache policy gap)
- All 8 customers visible in app responses
- Clear cache freshness policy: when data syncs, how staleness is
  detected, and whether live fallback is needed

### Relevant Code Paths
- `supabase/functions/_shared/sync-engine.ts` — sync logic
- `supabase/functions/sync-worker/` — worker that pulls Stripe data
- `supabase/functions/sync-backfill/` — backfill logic
- `supabase/functions/chat-message/` — chat responses
- `supabase/functions/_shared/insight-engine.ts` — insight generation
- `supabase/functions/_shared/system-prompt.ts` — LLM system prompt
  (may reference data context)

## Quality Scores
- **Clarity**: 65%
- **Efficiency**: 70%
- **Structure**: 45%
- **Completeness**: 40%
- **Actionability**: 50%
- **Specificity**: 55%
- **Overall**: 53% (needs-improvement)

## Original Prompt
```
okay its somewhat working. the account acct_1T04hmJUI6dJYhqn has 8 customers, but when I ask the app to list my customers it just tell I have one (says data as of cache). We need to investigate what is the issue here. Also, we need to verify our data retention policy so we are querying Stripe for recent data and not just defaulting to cache all the time.
```
