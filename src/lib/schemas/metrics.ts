import { z } from 'zod';

export const mrrQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
  period: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'period must be YYYY-MM format')
    .optional(),
});

export const churnQuerySchema = z.object({
  period: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'period must be YYYY-MM format')
    .optional(),
  type: z.enum(['gross', 'net']).optional().default('gross'),
});

export const arpuQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
});

export const ltvQuerySchema = z.object({
  currency: z.string().optional().default('usd'),
});

export const revenueQuerySchema = z.object({
  groupBy: z.enum(['product', 'price', 'customer']),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'startDate must be YYYY-MM-DD format')
    .optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'endDate must be YYYY-MM-DD format')
    .optional(),
});

// Response schemas for type safety on the client
export const mrrResponseSchema = z.object({
  data: z.object({
    value: z.number(),
    currency: z.string(),
    period: z.string(),
    syncedAt: z.string(),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export const churnResponseSchema = z.object({
  data: z.object({
    rate: z.number(),
    canceled: z.number(),
    total: z.number(),
    period: z.string(),
    syncedAt: z.string(),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export const arpuResponseSchema = z.object({
  data: z.object({
    value: z.number(),
    activeCustomers: z.number(),
    mrr: z.number(),
    syncedAt: z.string(),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export const ltvResponseSchema = z.object({
  data: z.object({
    value: z.number().nullable(),
    arpu: z.number(),
    churnRate: z.number(),
    syncedAt: z.string(),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export const revenueResponseSchema = z.object({
  data: z.object({
    segments: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        revenue: z.number(),
        percentage: z.number(),
      }),
    ),
    totalRevenue: z.number(),
    syncedAt: z.string(),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export type MRRQuery = z.infer<typeof mrrQuerySchema>;
export type ChurnQuery = z.infer<typeof churnQuerySchema>;
export type ARPUQuery = z.infer<typeof arpuQuerySchema>;
export type LTVQuery = z.infer<typeof ltvQuerySchema>;
export type RevenueQuery = z.infer<typeof revenueQuerySchema>;
export type MRRResponse = z.infer<typeof mrrResponseSchema>;
export type ChurnResponse = z.infer<typeof churnResponseSchema>;
export type ARPUResponse = z.infer<typeof arpuResponseSchema>;
export type LTVResponse = z.infer<typeof ltvResponseSchema>;
export type RevenueResponse = z.infer<typeof revenueResponseSchema>;
