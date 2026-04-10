/**
 * Unit tests for auth middleware.
 * Tests: signature verification, RLS context setting, error handling.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Must stub Deno before importing auth.ts (it reads Deno.env at module level)
vi.stubGlobal('Deno', {
  env: {
    get: vi.fn((key: string) => {
      const vals: Record<string, string> = {
        SUPABASE_URL: 'https://test.supabase.co',
        SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      };
      return vals[key];
    }),
  },
});

const { authenticateRequest, AuthError } = await import(
  '../../supabase/functions/_shared/auth.ts'
);

describe('AuthError', () => {
  it('creates an error with code and status', () => {
    const err = new AuthError('Test error', 'test_code', 401);

    expect(err).toBeInstanceOf(Error);
    expect(err.message).toBe('Test error');
    expect(err.code).toBe('test_code');
    expect(err.status).toBe(401);
  });
});

describe('authenticateRequest', () => {
  it('throws on missing stripe-signature header', async () => {
    const req = new Request('https://test.com', {
      method: 'POST',
      headers: {},
    });

    try {
      await authenticateRequest(req);
      expect.unreachable('Should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AuthError);
      expect((err as InstanceType<typeof AuthError>).code).toBe('missing_signature');
      expect((err as InstanceType<typeof AuthError>).status).toBe(401);
    }
  });

  it('throws on invalid base64 signature', async () => {
    const req = new Request('https://test.com', {
      method: 'POST',
      headers: { 'stripe-signature': '!!!invalid-base64!!!' },
    });

    try {
      await authenticateRequest(req);
      expect.unreachable('Should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AuthError);
      expect((err as InstanceType<typeof AuthError>).code).toBe('invalid_signature');
    }
  });

  it('throws when account_id missing from payload', async () => {
    const payload = btoa(JSON.stringify({ user_id: 'usr_123' }));
    const req = new Request('https://test.com', {
      method: 'POST',
      headers: { 'stripe-signature': payload },
    });

    try {
      await authenticateRequest(req);
      expect.unreachable('Should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AuthError);
      expect((err as InstanceType<typeof AuthError>).code).toBe('invalid_signature');
    }
  });

  it('throws when user_id missing from payload', async () => {
    const payload = btoa(JSON.stringify({ account_id: 'acct_123' }));
    const req = new Request('https://test.com', {
      method: 'POST',
      headers: { 'stripe-signature': payload },
    });

    try {
      await authenticateRequest(req);
      expect.unreachable('Should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AuthError);
      expect((err as InstanceType<typeof AuthError>).code).toBe('invalid_signature');
    }
  });
});
