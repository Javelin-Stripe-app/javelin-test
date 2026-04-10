import { Box, Inline, Divider } from '@stripe/ui-extension-sdk/ui';
import { JvFreshnessIndicator } from '../components/brand';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  freshness?: { type: 'cached' | 'live'; syncedAt?: string };
}

const MessageBubble = ({ role, content, freshness }: MessageBubbleProps) => {
  const isUser = role === 'user';

  if (isUser) {
    return (
      <Box css={{ padding: 'small', backgroundColor: 'container', stack: 'y', gap: 'xsmall' }}>
        <Inline css={{ font: 'caption', color: 'secondary' }}>you</Inline>
        <Inline>{content}</Inline>
      </Box>
    );
  }

  return (
    <Box css={{ stack: 'y', gap: 'xsmall' }}>
      <Divider />
      <Box css={{ padding: 'medium', stack: 'y', gap: 'small' }}>
        <Inline css={{ font: 'caption', color: 'secondary' }}>Javelin</Inline>
        <Box css={{ marginLeft: 'small' }}>
          <Inline>{content}</Inline>
        </Box>
        {freshness && (
          <Box css={{ marginLeft: 'small', marginTop: 'xsmall' }}>
            <JvFreshnessIndicator type={freshness.type} syncedAt={freshness.syncedAt} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessageBubble;
