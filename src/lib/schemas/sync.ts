import { z } from 'zod';

const VALID_OBJECT_TYPES = [
  'subscriptions',
  'invoices',
  'charges',
  'customers',
  'products',
  'prices',
] as const;

export type ObjectType = (typeof VALID_OBJECT_TYPES)[number];

export const syncTriggerRequestSchema = z.object({
  objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)).optional(),
});

export const syncBackfillRequestSchema = z.object({
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'startDate must be YYYY-MM-DD format'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'endDate must be YYYY-MM-DD format'),
  objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)).optional(),
});

export const syncStatusResponseSchema = z.object({
  data: z.object({
    overallStatus: z.enum(['never_synced', 'syncing', 'synced', 'has_errors', 'partial']),
    objectTypes: z.array(
      z.object({
        objectType: z.enum(VALID_OBJECT_TYPES),
        status: z.enum(['never_synced', 'pending', 'in_progress', 'completed', 'failed']),
        lastSyncedAt: z.string().nullable(),
        recordsSynced: z.number(),
        error: z.string().nullable(),
        jobId: z.string().nullable(),
        jobGroupId: z.string().nullable(),
      }),
    ),
  }),
  meta: z.object({
    freshness: z.enum(['cached', 'live']).optional(),
    syncedAt: z.string().optional(),
  }),
});

export const syncTriggerResponseSchema = z.object({
  data: z.object({
    jobId: z.string(),
    objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)),
    status: z.literal('pending'),
    jobCount: z.number(),
  }),
});

export const syncBackfillResponseSchema = z.object({
  data: z.object({
    jobId: z.string(),
    objectTypes: z.array(z.enum(VALID_OBJECT_TYPES)),
    status: z.literal('pending'),
    jobCount: z.number(),
    dateRange: z.object({
      startDate: z.string(),
      endDate: z.string(),
    }),
  }),
});

export type SyncTriggerRequest = z.infer<typeof syncTriggerRequestSchema>;
export type SyncBackfillRequest = z.infer<typeof syncBackfillRequestSchema>;
export type SyncStatusResponse = z.infer<typeof syncStatusResponseSchema>;
export type SyncTriggerResponse = z.infer<typeof syncTriggerResponseSchema>;
export type SyncBackfillResponse = z.infer<typeof syncBackfillResponseSchema>;
