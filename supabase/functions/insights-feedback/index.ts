import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';
import { z } from 'https://esm.sh/zod@3';

const insightFeedbackRequestSchema = z.object({
  insightId: z.string().min(1),
  messageId: z.string().uuid(),
  rating: z.enum(['positive', 'negative']),
});

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Validate request body (already parsed by authenticateRequest)
    const parsed = insightFeedbackRequestSchema.safeParse(auth.body);
    if (!parsed.success) {
      return errorResponse(
        'validation_error',
        parsed.error.issues.map((i) => i.message).join(', '),
        requestId,
        400,
      );
    }

    const { insightId, messageId, rating } = parsed.data;

    // Verify the message exists and belongs to this account (RLS handles scoping)
    const { data: message, error: msgError } = await auth.supabase
      .from('messages')
      .select('id, metadata')
      .eq('id', messageId)
      .eq('stripe_account_id', auth.stripeAccountId)
      .single();

    if (msgError || !message) {
      return errorResponse('not_found', 'Message not found', requestId, 404);
    }

    // Update the message metadata with feedback
    const existingMetadata = (message.metadata || {}) as Record<string, unknown>;
    const feedbackArray = (existingMetadata.feedback || []) as Array<{
      insightId: string;
      rating: string;
      createdAt: string;
    }>;

    // Check if feedback for this insight already exists
    const existingFeedbackIndex = feedbackArray.findIndex(
      (f) => f.insightId === insightId,
    );

    const feedbackEntry = {
      insightId,
      rating,
      createdAt: new Date().toISOString(),
    };

    if (existingFeedbackIndex >= 0) {
      // Update existing feedback
      feedbackArray[existingFeedbackIndex] = feedbackEntry;
    } else {
      // Add new feedback
      feedbackArray.push(feedbackEntry);
    }

    const updatedMetadata = {
      ...existingMetadata,
      feedback: feedbackArray,
    };

    const { error: updateError } = await auth.supabase
      .from('messages')
      .update({ metadata: updatedMetadata })
      .eq('id', messageId);

    if (updateError) {
      console.error('Feedback update error:', requestId, updateError.code);
      return errorResponse('db_error', 'Failed to store feedback', requestId, 500);
    }

    // Audit log
    await auth.supabase
      .from('audit_logs')
      .insert({
        stripe_account_id: auth.stripeAccountId,
        action: 'insight_feedback',
        request_id: requestId,
        metadata: { insight_id: insightId, message_id: messageId, rating },
      });

    return jsonResponse({ stored: true, insightId, rating });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Insights feedback error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
