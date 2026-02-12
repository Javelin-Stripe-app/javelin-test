import { Box, Inline, Button } from '@stripe/ui-extension-sdk/ui';

interface Conversation {
  id: string;
  title: string;
  updatedAt: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onClose: () => void;
}

const ConversationList = ({
  conversations,
  activeConversationId,
  onSelectConversation,
  onClose,
}: ConversationListProps) => {
  if (conversations.length === 0) {
    return (
      <Box css={{ padding: 'medium', stack: 'y', gap: 'small', alignX: 'center' }}>
        <Inline css={{ color: 'secondary' }}>No conversations yet.</Inline>
        <Inline css={{ color: 'secondary' }}>Start by asking a question below.</Inline>
      </Box>
    );
  }

  return (
    <Box css={{ stack: 'y', gap: 'xsmall', padding: 'small' }}>
      <Box css={{ stack: 'x', distribute: 'space-between', alignY: 'center', padding: 'xsmall' }}>
        <Inline css={{ fontWeight: 'semibold' }}>Conversations</Inline>
        <Button type="secondary" size="small" onPress={onClose}>
          Close
        </Button>
      </Box>
      {conversations.map((conv) => (
        <Box
          key={conv.id}
          css={{
            padding: 'small',
            backgroundColor: conv.id === activeConversationId ? 'container' : undefined,
            stack: 'y',
            gap: 'xsmall',
          }}
        >
          <Button
            type="secondary"
            size="small"
            onPress={() => onSelectConversation(conv.id)}
          >
            <Box css={{ stack: 'y', gap: 'xsmall', width: 'fill' }}>
              <Inline css={{ fontWeight: conv.id === activeConversationId ? 'semibold' : 'regular' }}>
                {conv.title || 'Untitled conversation'}
              </Inline>
              <Inline css={{ font: 'caption', color: 'secondary' }}>
                {new Date(conv.updatedAt).toLocaleDateString()}
              </Inline>
            </Box>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ConversationList;
