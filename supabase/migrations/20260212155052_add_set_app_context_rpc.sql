-- RPC function to set the RLS context for the current session.
-- Called by Edge Function auth middleware before any DB queries.
-- Sets app.stripe_account_id which RLS policies reference via current_setting().

CREATE OR REPLACE FUNCTION set_app_context(account_id TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM set_config('app.stripe_account_id', account_id, true);
END;
$$;

-- Grant execute to authenticated and service_role (Edge Functions use service_role)
GRANT EXECUTE ON FUNCTION set_app_context(TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION set_app_context(TEXT) TO authenticated;
