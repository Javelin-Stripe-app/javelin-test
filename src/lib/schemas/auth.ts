import { z } from 'zod';

export const authCallbackRequestSchema = z.object({
  code: z.string().min(1, 'Authorization code is required'),
  state: z.string().min(1, 'OAuth state is required'),
  verifier: z.string().optional(),
});

export const authCallbackResponseSchema = z.object({
  data: z.object({
    accountId: z.string(),
  }),
});

export const authRefreshResponseSchema = z.object({
  data: z.object({
    expiresAt: z.string(),
  }),
});

export type AuthCallbackRequest = z.infer<typeof authCallbackRequestSchema>;
