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

    // Parse pagination from query params
    const url = new URL(req.url);
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20', 10), 100);
    const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

    // Fetch conversations sorted by updated_at desc (RLS scopes to account)
    const { data: conversations, error: convError, count } = await auth.supabase
      .from('conversations')
      .select('id, title, created_at, updated_at', { count: 'exact' })
      .eq('stripe_account_id', auth.stripeAccountId)
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (convError) {
      console.error('Conversations fetch error:', requestId, convError.code);
      return errorResponse('db_error', 'Failed to fetch conversations', requestId, 500);
    }

    // For each conversation, fetch the last message as a preview
    const conversationsWithPreview = await Promise.all(
      (conversations || []).map(async (conv) => {
        const { data: lastMessage } = await auth.supabase
          .from('messages')
          .select('content, role, created_at')
          .eq('conversation_id', conv.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        return {
          id: conv.id,
          title: conv.title,
          lastMessage: lastMessage
            ? {
                preview: lastMessage.content.length > 120
                  ? lastMessage.content.substring(0, 120) + '...'
                  : lastMessage.content,
                role: lastMessage.role,
                createdAt: lastMessage.created_at,
              }
            : null,
          createdAt: conv.created_at,
          updatedAt: conv.updated_at,
        };
      }),
    );

    return jsonResponse({
      conversations: conversationsWithPreview,
      pagination: {
        total: count || 0,
        limit,
        offset,
        hasMore: (count || 0) > offset + limit,
      },
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return errorResponse(error.code, error.message, requestId, error.status);
    }
    console.error('Chat conversations error:', requestId, error);
    return errorResponse('internal_error', 'An unexpected error occurred', requestId, 500);
  }
});
