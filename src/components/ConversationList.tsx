import { Box, Button, List, ListItem } from '@stripe/ui-extension-sdk/ui';
import { JvSectionHeader, JvEmptyState } from '../components/brand';

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
  activeConversationId: _activeConversationId,
  onSelectConversation,
  onClose,
}: ConversationListProps) => {
  if (conversations.length === 0) {
    return (
      <JvEmptyState
        title="No conversations yet"
        description="Start by asking a question below."
      />
    );
  }

  return (
    <Box css={{ stack: 'y', gap: 'xsmall', padding: 'small' }}>
      <JvSectionHeader
        title="Conversations"
        action={
          <Button type="secondary" size="small" onPress={onClose}>
            Close
          </Button>
        }
      />
      <List onAction={(id) => onSelectConversation(String(id))}>
        {conversations.map((conv) => (
          <ListItem
            key={conv.id}
            id={conv.id}
            title={conv.title || 'Untitled conversation'}
            secondaryTitle={new Date(conv.updatedAt).toLocaleDateString()}
          />
        ))}
      </List>
    </Box>
  );
};

export default ConversationList;
