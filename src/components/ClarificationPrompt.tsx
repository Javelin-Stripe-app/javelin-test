import { Box, Banner, Button } from '@stripe/ui-extension-sdk/ui';

interface ClarificationOption {
  label: string;
  value: string;
}

interface ClarificationPromptProps {
  question: string;
  options: ClarificationOption[];
  onSelect: (value: string) => void;
}

const ClarificationPrompt = ({ question, options, onSelect }: ClarificationPromptProps) => {
  return (
    <Box css={{ padding: 'medium', stack: 'y', gap: 'small' }}>
      <Banner type="default" title="Clarification needed" description={question} />
      <Box css={{ stack: 'x', gap: 'small', wrap: 'wrap' }}>
        {options.map((option) => (
          <Button
            key={option.value}
            type="secondary"
            size="small"
            onPress={() => onSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ClarificationPrompt;
