import { z } from 'zod';

export const chatMessageRequestSchema = z.object({
  conversationId: z.string().uuid().optional(),
  content: z.string().min(1).max(4000),
});

export const insightFeedbackRequestSchema = z.object({
  insightId: z.string(),
  messageId: z.string().uuid(),
  rating: z.enum(['positive', 'negative']),
});

export type ChatMessageRequest = z.infer<typeof chatMessageRequestSchema>;
export type InsightFeedbackRequest = z.infer<typeof insightFeedbackRequestSchema>;
