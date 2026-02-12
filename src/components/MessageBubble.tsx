import { Box, Inline, Badge } from '@stripe/ui-extension-sdk/ui';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  freshness?: { type: 'cached' | 'live'; syncedAt?: string };
}

const MessageBubble = ({ role, content, freshness }: MessageBubbleProps) => {
  const isUser = role === 'user';

  return (
    <Box
      css={{
        padding: 'medium',
        backgroundColor: isUser ? 'container' : undefined,
        stack: 'y',
        gap: 'small',
      }}
    >
      <Inline css={{ fontWeight: 'semibold', color: 'secondary' }}>
        {isUser ? 'You' : 'Javelin'}
      </Inline>
      <Inline>{content}</Inline>
      {freshness && !isUser && (
        <Box css={{ marginTop: 'xsmall' }}>
          <Badge type={freshness.type === 'live' ? 'positive' : 'info'}>
            {freshness.type === 'live'
              ? 'Live data'
              : `Data as of ${freshness.syncedAt ? new Date(freshness.syncedAt).toLocaleString() : 'cache'}`}
          </Badge>
        </Box>
      )}
    </Box>
  );
};

export default MessageBubble;
