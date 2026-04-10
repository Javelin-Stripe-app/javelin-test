import { Box, Inline, Button } from '@stripe/ui-extension-sdk/ui';

interface JvEmptyStateProps {
  /**
   * Primary message. Brand voice: direct, forward-looking.
   * GOOD: "No conversations yet"
   * BAD: "It looks like you haven't started any conversations"
   */
  title: string;
  /**
   * Supporting text. Brand voice: suggest action, be specific.
   * GOOD: "Ask a question to get started. Try: 'What's my MRR?'"
   * BAD: "You can use the input below to begin a conversation with our AI assistant"
   */
  description?: string;
  /** Optional CTA button */
  action?: {
    label: string;
    onPress: () => void;
  };
  /** Optional prompt suggestions (renders as secondary button row) */
  suggestions?: Array<{
    label: string;
    value: string;
  }>;
  /** Callback when a suggestion is selected */
  onSelectSuggestion?: (value: string) => void;
}

const JvEmptyState = ({
  title,
  description,
  action,
  suggestions,
  onSelectSuggestion,
}: JvEmptyStateProps): JSX.Element => {
  return (
    <Box css={{ padding: 'large', stack: 'y', gap: 'medium', alignX: 'center' }}>
      <Inline css={{ fontWeight: 'semibold' }}>{title}</Inline>
      {description && (
        <Inline css={{ color: 'secondary' }}>{description}</Inline>
      )}
      {action && (
        <Button type="primary" onPress={action.onPress}>
          {action.label}
        </Button>
      )}
      {suggestions && suggestions.length > 0 && onSelectSuggestion && (
        <Box css={{ stack: 'x', gap: 'small', wrap: 'wrap' }}>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.value}
              type="secondary"
              size="small"
              onPress={() => onSelectSuggestion(suggestion.value)}
            >
              {suggestion.label}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JvEmptyState;
