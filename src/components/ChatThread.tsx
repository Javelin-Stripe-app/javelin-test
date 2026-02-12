import { Box } from '@stripe/ui-extension-sdk/ui';
import MessageBubble from './MessageBubble';
import InsightCard from './InsightCard';
import ThinkingIndicator from './ThinkingIndicator';
import ClarificationPrompt from './ClarificationPrompt';

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

interface ChatThreadProps {
  messages: Message[];
  isThinking: boolean;
  thinkingStartedAt?: number;
  onClarificationSelect?: (value: string) => void;
}

const ChatThread = ({
  messages,
  isThinking,
  thinkingStartedAt,
  onClarificationSelect,
}: ChatThreadProps) => {
  return (
    <Box css={{ stack: 'y', gap: 'xsmall', overflow: 'auto' }}>
      {messages.map((message) => (
        <Box key={message.id} css={{ stack: 'y' }}>
          <MessageBubble
            role={message.role}
            content={message.content}
            freshness={message.freshness}
          />
          {message.insights?.map((insight) => (
            <InsightCard
              key={insight.id}
              insightId={insight.id}
              messageId={message.id}
              content={insight.content}
            />
          ))}
          {message.clarification && onClarificationSelect && (
            <ClarificationPrompt
              question={message.clarification.question}
              options={message.clarification.options}
              onSelect={onClarificationSelect}
            />
          )}
        </Box>
      ))}
      {isThinking && thinkingStartedAt && (
        <ThinkingIndicator startedAt={thinkingStartedAt} />
      )}
    </Box>
  );
};

export default ChatThread;
