import { corsHeaders } from './cors.ts';

const responseHeaders = {
  'Content-Type': 'application/json',
  ...corsHeaders,
};

export function jsonResponse<T>(data: T, meta?: { freshness?: 'cached' | 'live'; syncedAt?: string }, status = 200) {
  return new Response(
    JSON.stringify({ data, meta: meta || {} }),
    {
      status,
      headers: responseHeaders,
    },
  );
}

export function errorResponse(code: string, message: string, requestId: string, status = 500) {
  return new Response(
    JSON.stringify({ error: { code, message, requestId } }),
    {
      status,
      headers: responseHeaders,
    },
  );
}
