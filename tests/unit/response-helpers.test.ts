/**
 * Unit tests for response helpers and CORS.
 * Tests: jsonResponse formatting, errorResponse formatting, freshness envelope, CORS handling.
 */
import { describe, it, expect } from 'vitest';

const { jsonResponse, errorResponse } = await import(
  '../../supabase/functions/_shared/response.ts'
);

const { corsHeaders, handleCors } = await import(
  '../../supabase/functions/_shared/cors.ts'
);

describe('jsonResponse', () => {
  it('wraps data in standard envelope', async () => {
    const response = jsonResponse({ mrr: 5000 });

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');

    const body = await response.json();
    expect(body.data).toEqual({ mrr: 5000 });
    expect(body.meta).toEqual({});
  });

  it('includes freshness metadata when provided', async () => {
    const response = jsonResponse(
      { mrr: 5000 },
      { freshness: 'cached', syncedAt: '2026-02-12T10:00:00Z' },
    );

    const body = await response.json();
    expect(body.meta.freshness).toBe('cached');
    expect(body.meta.syncedAt).toBe('2026-02-12T10:00:00Z');
  });

  it('includes live freshness indicator', async () => {
    const response = jsonResponse({ mrr: 5000 }, { freshness: 'live' });

    const body = await response.json();
    expect(body.meta.freshness).toBe('live');
  });

  it('respects custom status code', async () => {
    const response = jsonResponse({ created: true }, undefined, 201);

    expect(response.status).toBe(201);
  });
});

describe('errorResponse', () => {
  it('formats error with code, message, and requestId', async () => {
    const response = errorResponse('not_found', 'Resource not found', 'req_123', 404);

    expect(response.status).toBe(404);

    const body = await response.json();
    expect(body.error.code).toBe('not_found');
    expect(body.error.message).toBe('Resource not found');
    expect(body.error.requestId).toBe('req_123');
  });

  it('defaults to 500 status', async () => {
    const response = errorResponse('internal_error', 'Something went wrong', 'req_456');

    expect(response.status).toBe(500);
  });
});

describe('corsHeaders', () => {
  it('includes required CORS headers', () => {
    expect(corsHeaders['Access-Control-Allow-Origin']).toBe('*');
    expect(corsHeaders['Access-Control-Allow-Headers']).toContain('stripe-signature');
    expect(corsHeaders['Access-Control-Allow-Methods']).toContain('POST');
  });
});

describe('handleCors', () => {
  it('returns response for OPTIONS requests', () => {
    const req = new Request('https://test.com', { method: 'OPTIONS' });
    const result = handleCors(req);

    expect(result).not.toBeNull();
    expect(result!.status).toBe(200);
  });

  it('returns null for non-OPTIONS requests', () => {
    const req = new Request('https://test.com', { method: 'POST' });
    const result = handleCors(req);

    expect(result).toBeNull();
  });

  it('returns null for GET requests', () => {
    const req = new Request('https://test.com', { method: 'GET' });
    const result = handleCors(req);

    expect(result).toBeNull();
  });
});
