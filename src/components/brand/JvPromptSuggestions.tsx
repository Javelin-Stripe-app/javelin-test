import { Box, Button, Inline } from '@stripe/ui-extension-sdk/ui';

interface PromptSuggestion {
  /** Short label displayed on the button */
  label: string;
  /** Full prompt value sent when selected (may differ from label) */
  value: string;
}

interface JvPromptSuggestionsProps {
  /** Optional section label above the suggestions */
  label?: string;
  suggestions: PromptSuggestion[];
  onSelect: (value: string) => void;
}

const JvPromptSuggestions = ({
  label,
  suggestions,
  onSelect,
}: JvPromptSuggestionsProps): JSX.Element => {
  return (
    <Box css={{ stack: 'y', gap: 'small' }}>
      {label && (
        <Inline css={{ fontWeight: 'semibold' }}>{label}</Inline>
      )}
      <Box css={{ stack: 'y', gap: 'xsmall' }}>
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.value}
            type="secondary"
            onPress={() => onSelect(suggestion.value)}
          >
            {suggestion.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default JvPromptSuggestions;
