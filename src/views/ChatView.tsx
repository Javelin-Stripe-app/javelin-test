import { ContextView, Box, Spinner, Inline, Banner, Button } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useState, useEffect, useCallback } from 'react';
import ChatThread from '../components/ChatThread';
import ChatInput from '../components/ChatInput';
import WelcomePrompt from '../components/WelcomePrompt';
import ConversationList from '../components/ConversationList';
import { apiClient } from '../lib/api-client';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  freshness?: { type: 'cached' | 'live'; syncedAt?: string };
  insights?: Array<{ id: string; content: string }>;
  clarification?: {
    question: string;
    options: Array<{ label: string; value: string }>;
  };
}

interface Conversation {
  id: string;
  title: string;
  updatedAt: string;
}

type ViewState = 'loading' | 'empty' | 'chat' | 'error';

const ChatView = ({ userContext: _userContext, environment: _environment }: ExtensionContextValue) => {
  const [viewState, setViewState] = useState<ViewState>('loading');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStartedAt, setThinkingStartedAt] = useState<number | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [welcomeInsights, setWelcomeInsights] = useState<Array<{ id: string; content: string }>>([]);
  const [showConversationList, setShowConversationList] = useState(false);

  const loadConversations = useCallback(async () => {
    try {
      const response = await apiClient<{ conversations: Conversation[] }>('/chat-conversations');
      const convos = response.data?.conversations || [];
      setConversations(convos);

      if (convos.length === 0) {
        // First time user — load welcome insights
        loadWelcomeInsights();
        setViewState('empty');
      } else {
        // Load the most recent conversation
        await loadConversation(convos[0].id);
        setViewState('chat');
      }
    } catch {
      // If conversations fail to load, show empty state (could be first time)
      setViewState('empty');
      loadWelcomeInsights();
    }
  }, []);

  // Load conversations on mount
  useEffect(() => {
    loadConversations();
  }, [loadConversations]);

  const loadWelcomeInsights = async () => {
    try {
      const response = await apiClient<{ insights: Array<{ id: string; content: string }> }>(
        '/insights-welcome',
      );
      setWelcomeInsights(response.data?.insights || []);
    } catch {
      // Non-critical — just show empty welcome
    }
  };

  const loadConversation = async (conversationId: string) => {
    try {
      const response = await apiClient<{
        conversation: Conversation;
        messages: Array<{
          id: string;
          role: 'user' | 'assistant';
          content: string;
          metadata?: Record<string, unknown>;
        }>;
      }>(`/chat-conversation-detail?conversationId=${conversationId}`);

      const msgs: Message[] = (response.data?.messages || []).map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        freshness: m.metadata?.freshness as Message['freshness'],
        insights: m.metadata?.insights as Message['insights'],
      }));

      setMessages(msgs);
      setActiveConversationId(conversationId);
    } catch {
      setError('Failed to load conversation');
    }
  };

  const sendMessage = useCallback(
    async (content: string) => {
      setError(null);

      // Add user message to UI immediately
      const tempUserMsgId = `temp-${Date.now()}`;
      const userMessage: Message = {
        id: tempUserMsgId,
        role: 'user',
        content,
      };
      setMessages((prev) => [...prev, userMessage]);
      setViewState('chat');
      setIsThinking(true);
      setThinkingStartedAt(Date.now());

      try {
        const response = await apiClient<{
          message: {
            id: string;
            content: string;
            metadata?: Record<string, unknown>;
          };
          insights?: Array<{ id: string; content: string }>;
          conversationId: string;
        }>('/chat-message', {
          method: 'POST',
          body: {
            conversationId: activeConversationId,
            content,
          },
        });

        const assistantMessage: Message = {
          id: response.data?.message.id || `msg-${Date.now()}`,
          role: 'assistant',
          content: response.data?.message.content || 'Sorry, I could not generate a response.',
          freshness: response.meta as Message['freshness'],
          insights: response.data?.insights,
        };

        // Update conversation ID if new conversation was created
        if (response.data?.conversationId && !activeConversationId) {
          setActiveConversationId(response.data.conversationId);
        }

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err: unknown) {
        const errorObj = err as { error?: { code?: string; message?: string } };
        const code = errorObj?.error?.code;

        if (code === 'auth_refresh_failed') {
          setError('Your session has expired. Please re-authorize Javelin.');
          // In a full implementation, this would switch to SignInView
        } else if (code === 'llm_unavailable') {
          setError('AI service is temporarily unavailable. Please try again in a moment.');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } finally {
        setIsThinking(false);
        setThinkingStartedAt(undefined);
      }
    },
    [activeConversationId],
  );

  const handleClarificationSelect = useCallback(
    (value: string) => {
      sendMessage(value);
    },
    [sendMessage],
  );

  const handleNewConversation = useCallback(() => {
    setActiveConversationId(null);
    setMessages([]);
    setViewState('empty');
    setShowConversationList(false);
    loadWelcomeInsights();
  }, []);

  const handleSelectConversation = useCallback(async (id: string) => {
    setShowConversationList(false);
    await loadConversation(id);
    setViewState('chat');
  }, []);

  // Loading state
  if (viewState === 'loading') {
    return (
      <ContextView title="Javelin">
        <Box css={{ padding: 'medium', stack: 'y', gap: 'medium', alignX: 'center' }}>
          <Spinner />
          <Inline css={{ color: 'secondary' }}>Loading Javelin...</Inline>
        </Box>
      </ContextView>
    );
  }

  return (
    <ContextView
      title="Javelin"
      actions={
        <Box css={{ stack: 'x', gap: 'small' }}>
          {conversations.length > 0 && (
            <Button type="secondary" onPress={() => setShowConversationList((v) => !v)}>
              History
            </Button>
          )}
          <Button type="secondary" onPress={handleNewConversation}>
            New chat
          </Button>
        </Box>
      }
    >
      <Box css={{ stack: 'y', height: 'fill' }}>
        {/* Error banner */}
        {error && (
          <Banner
            type="critical"
            title="Error"
            description={error}
            onDismiss={() => setError(null)}
          />
        )}

        {/* Conversation list panel */}
        {showConversationList && (
          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelectConversation={handleSelectConversation}
            onClose={() => setShowConversationList(false)}
          />
        )}

        {/* Main content area */}
        {!showConversationList && <Box css={{ stack: 'y', overflow: 'auto' }}>
          {viewState === 'empty' && messages.length === 0 ? (
            <WelcomePrompt onSelectPrompt={sendMessage} insights={welcomeInsights} />
          ) : (
            <ChatThread
              messages={messages}
              isThinking={isThinking}
              thinkingStartedAt={thinkingStartedAt}
              onClarificationSelect={handleClarificationSelect}
            />
          )}
        </Box>}

        {/* Chat input */}
        {!showConversationList && <ChatInput onSend={sendMessage} disabled={isThinking} />}
      </Box>
    </ContextView>
  );
};

export default ChatView;
