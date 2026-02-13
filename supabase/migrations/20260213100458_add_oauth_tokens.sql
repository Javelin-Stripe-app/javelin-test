-- OAuth tokens table for per-account Stripe API access
-- Stores access + refresh tokens from Stripe Apps OAuth 2.0 flow

CREATE TABLE oauth_tokens (
  stripe_account_id TEXT PRIMARY KEY,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  token_expires_at TIMESTAMPTZ,
  refresh_token_expires_at TIMESTAMPTZ,
  scope TEXT,
  livemode BOOLEAN,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS
ALTER TABLE oauth_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY account_isolation ON oauth_tokens
  FOR ALL USING (stripe_account_id = current_setting('app.stripe_account_id', true));

-- Updated_at trigger (same pattern as all other tables)
CREATE TRIGGER set_updated_at BEFORE UPDATE ON oauth_tokens
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
