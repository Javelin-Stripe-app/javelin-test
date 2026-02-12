import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import {
  calculateMRR,
  calculateChurnRate,
  calculateARPU,
  calculateLTV,
  calculateRevenueBreakdown,
} from '../_shared/metrics-engine.ts';
import { z } from 'https://esm.sh/zod@3';

// Zod schemas for query parameter validation
const mrrQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
  period: z
    .string()
    .regex(/^\d{4}-\d{2}$/)
    .optional(),
});

const churnQuerySchema = z.object({
  period: z
    .string()
    .regex(/^\d{4}-\d{2}$/)
    .optional(),
  type: z.enum(['gross', 'net']).optional().default('gross'),
});

const arpuQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
});

const ltvQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
});

const revenueQuerySchema = z.object({
  groupBy: z.enum(['product', 'price', 'customer']),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});

/**
 * Extract the metric type from the URL path.
 * Expects URLs like: /metrics/mrr, /metrics/churn, etc.
 */
function extractMetricType(req: Request): string | null {
  const url = new URL(req.url);
  const segments = url.pathname.split('/').filter(Boolean);
  // The metric type is the last segment after "metrics"
  // Handle both /metrics/mrr and /metrics/mrr/ patterns
  const metricsIndex = segments.indexOf('metrics');
  if (metricsIndex !== -1 && segments.length > metricsIndex + 1) {
    return segments[metricsIndex + 1];
  }
  // Fallback: last path segment
  return segments.length > 0 ? segments[segments.length - 1] : null;
}

/**
 * Parse URL query parameters into a plain object.
 */
function parseQueryParams(req: Request): Record<string, string> {
  const url = new URL(req.url);
  const params: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'GET' && req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use GET or POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);
    const metricType = extractMetricType(req);
    const queryParams = parseQueryParams(req);

    if (!metricType) {
      return errorResponse(
        'missing_metric_type',
        'Metric type is required. Supported: mrr, churn, arpu, ltv, revenue',
        requestId,
        400,
      );
    }

    switch (metricType) {
      case 'mrr': {
        const parsed = mrrQuerySchema.safeParse(queryParams);
        if (!parsed.success) {
          return errorResponse(
            'validation_error',
            parsed.error.issues.map((i) => i.message).join(', '),
            requestId,
            400,
          );
        }
        const result = await calculateMRR(auth.supabase, auth.stripeAccountId, parsed.data);
        return jsonResponse(result, {
          freshness: 'cached',
          syncedAt: result.syncedAt,
        });
      }

      case 'churn': {
        const parsed = churnQuerySchema.safeParse(queryParams);
        if (!parsed.success) {
          return errorResponse(
            'validation_error',
            parsed.error.issues.map((i) => i.message).join(', '),
            requestId,
            400,
          );
        }
        const result = await calculateChurnRate(auth.supabase, auth.stripeAccountId, parsed.data);
        return jsonResponse(result, {
          freshness: 'cached',
          syncedAt: result.syncedAt,
        });
      }

      case 'arpu': {
        const parsed = arpuQuerySchema.safeParse(queryParams);
        if (!parsed.success) {
          return errorResponse(
            'validation_error',
            parsed.error.issues.map((i) => i.message).join(', '),
            requestId,
            400,
          );
        }
        const result = await calculateARPU(auth.supabase, auth.stripeAccountId, parsed.data);
        return jsonResponse(result, {
          freshness: 'cached',
          syncedAt: result.syncedAt,
        });
      }

      case 'ltv': {
        const parsed = ltvQuerySchema.safeParse(queryParams);
        if (!parsed.success) {
          return errorResponse(
            'validation_error',
            parsed.error.issues.map((i) => i.message).join(', '),
            requestId,
            400,
          );
        }
        const result = await calculateLTV(auth.supabase, auth.stripeAccountId, parsed.data);
        return jsonResponse(result, {
          freshness: 'cached',
          syncedAt: result.syncedAt,
        });
      }

      case 'revenue': {
        const parsed = revenueQuerySchema.safeParse(queryParams);
        if (!parsed.success) {
          return errorResponse(
            'validation_error',
            parsed.error.issues.map((i) => i.message).join(', '),
            requestId,
            400,
          );
        }
        const result = await calculateRevenueBreakdown(
          auth.supabase,
          auth.stripeAccountId,
          parsed.data,
        );
        return jsonResponse(result, {
          freshness: 'cached',
          syncedAt: result.syncedAt,
        });
      }

      default:
        return errorResponse(
          'unknown_metric',
          `Unknown metric type: ${metricType}. Supported: mrr, churn, arpu, ltv, revenue`,
          requestId,
          404,
        );
    }
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Metrics error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
