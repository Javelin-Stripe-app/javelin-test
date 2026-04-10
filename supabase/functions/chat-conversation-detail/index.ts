import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders, handleCors } from '../_shared/cors.ts';
import { authenticateRequest, AuthError } from '../_shared/auth.ts';
import { jsonResponse, errorResponse } from '../_shared/response.ts';

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  if (req.method !== 'GET' && req.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use GET or POST method', crypto.randomUUID(), 405);
  }

  const requestId = crypto.randomUUID();

  try {
    const auth = await authenticateRequest(req);

    // Extract conversation ID from URL path
    // Expected path: /chat-conversation-detail?id=<uuid>
    const url = new URL(req.url);
    const conversationId = url.searchParams.get('conversationId') || url.searchParams.get('id');

    if (!conversationId) {
      return errorResponse('validation_error', 'Missing required parameter: id', requestId, 400);
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(conversationId)) {
      return errorResponse('validation_error', 'Invalid conversation ID format', requestId, 400);
    }

    // Fetch conversation (RLS ensures account scoping)
    const { data: conversation, error: convError } = await auth.supabase
      .from('conversations')
      .select('id, title, created_at, updated_at')
      .eq('id', conversationId)
      .eq('stripe_account_id', auth.stripeAccountId)
      .single();

    if (convError || !conversation) {
      return errorResponse('not_found', 'Conversation not found', requestId, 404);
    }

    // Fetch all messages sorted by created_at ascending
    const { data: messages, error: msgError } = await auth.supabase
      .from('messages')
      .select('id, role, content, metadata, created_at')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (msgError) {
      console.error('Messages fetch error:', requestId, msgError.code);
      return errorResponse('db_error', 'Failed to fetch messages', requestId, 500);
    }

    return jsonResponse({
      conversation: {
        id: conversation.id,
        title: conversation.title,
        createdAt: conversation.created_at,
        updatedAt: conversation.updated_at,
      },
      messages: (messages || []).map((msg) => ({
        id: msg.id,
        role: msg.role,
        content: msg.content,
        metadata: msg.metadata,
        createdAt: msg.created_at,
      })),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Chat conversation detail error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
