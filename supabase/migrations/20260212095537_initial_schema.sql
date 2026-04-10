-- Javelin v0 Initial Schema
-- All tables include stripe_account_id for RLS scoping
-- All tables have RLS enabled with account-scoped policies

-- ============================================================
-- 1. Cached Stripe Objects
-- ============================================================

-- cached_subscriptions
CREATE TABLE cached_subscriptions (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  status TEXT,
  created TIMESTAMPTZ,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  customer_id TEXT,
  price_id TEXT,
  canceled_at TIMESTAMPTZ,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_subscriptions_account_created
  ON cached_subscriptions (stripe_account_id, created);
CREATE INDEX idx_cached_subscriptions_account_status
  ON cached_subscriptions (stripe_account_id, status);
CREATE INDEX idx_cached_subscriptions_account_canceled
  ON cached_subscriptions (stripe_account_id, canceled_at)
  WHERE canceled_at IS NOT NULL;

-- cached_invoices
CREATE TABLE cached_invoices (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  status TEXT,
  created TIMESTAMPTZ,
  amount_due BIGINT,
  amount_paid BIGINT,
  currency TEXT,
  customer_id TEXT,
  subscription_id TEXT,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_invoices_account_created
  ON cached_invoices (stripe_account_id, created);

-- cached_charges
CREATE TABLE cached_charges (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  status TEXT,
  created TIMESTAMPTZ,
  amount BIGINT,
  currency TEXT,
  customer_id TEXT,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_charges_account_created
  ON cached_charges (stripe_account_id, created);

-- cached_customers
CREATE TABLE cached_customers (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  created TIMESTAMPTZ,
  email TEXT,
  name TEXT,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_customers_account
  ON cached_customers (stripe_account_id);

-- cached_products
CREATE TABLE cached_products (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  name TEXT,
  active BOOLEAN,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_products_account
  ON cached_products (stripe_account_id);

-- cached_prices
CREATE TABLE cached_prices (
  id TEXT NOT NULL,
  stripe_account_id TEXT NOT NULL,
  stripe_data JSONB NOT NULL,
  product_id TEXT,
  unit_amount BIGINT,
  currency TEXT,
  recurring_interval TEXT,
  recurring_interval_count INTEGER,
  active BOOLEAN,
  synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, stripe_account_id)
);

CREATE INDEX idx_cached_prices_account_product
  ON cached_prices (stripe_account_id, product_id);

-- ============================================================
-- 2. Sync Jobs
-- ============================================================

CREATE TABLE sync_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_account_id TEXT NOT NULL,
  object_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),
  job_group_id TEXT,
  job_type TEXT DEFAULT 'sync',
  last_cursor TEXT,
  records_synced INTEGER DEFAULT 0,
  error_message TEXT,
  started_by TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_sync_jobs_account_type
  ON sync_jobs (stripe_account_id, object_type);

-- ============================================================
-- 3. Chat & Conversations
-- ============================================================

CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_account_id TEXT NOT NULL,
  title TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_conversations_account_updated
  ON conversations (stripe_account_id, updated_at DESC);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  stripe_account_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_messages_conversation_created
  ON messages (conversation_id, created_at);

-- ============================================================
-- 4. Business Context
-- ============================================================

CREATE TABLE business_context (
  stripe_account_id TEXT PRIMARY KEY,
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 5. Benchmarking Cache
-- ============================================================

CREATE TABLE benchmarking_cache (
  stripe_account_id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 6. Audit Logs
-- ============================================================

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_account_id TEXT NOT NULL,
  action TEXT NOT NULL,
  request_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_account_created
  ON audit_logs (stripe_account_id, created_at);

-- ============================================================
-- 7. Row Level Security (RLS) — ALL TABLES
-- ============================================================

-- Enable RLS on every table
ALTER TABLE cached_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cached_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE cached_charges ENABLE ROW LEVEL SECURITY;
ALTER TABLE cached_customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE cached_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE cached_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_context ENABLE ROW LEVEL SECURITY;
ALTER TABLE benchmarking_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies: account-scoped access via app.stripe_account_id setting
-- Edge Functions set this via: SET LOCAL app.stripe_account_id = '<account_id>';

CREATE POLICY account_isolation ON cached_subscriptions
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON cached_invoices
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON cached_charges
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON cached_customers
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON cached_products
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON cached_prices
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON sync_jobs
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON conversations
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON messages
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON business_context
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON benchmarking_cache
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

CREATE POLICY account_isolation ON audit_logs
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

-- ============================================================
-- 8. Updated_at trigger function
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers to tables with updated_at column
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_invoices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_charges
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON cached_prices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON sync_jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON conversations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON business_context
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON benchmarking_cache
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
