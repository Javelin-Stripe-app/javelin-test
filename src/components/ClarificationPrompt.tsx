import { Inline } from '@stripe/ui-extension-sdk/ui';
import { JvCard, JvSectionHeader, JvPromptSuggestions } from './brand';

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
    <JvCard>
      <JvSectionHeader title="Clarification needed" />
      <Inline css={{ color: 'secondary' }}>{question}</Inline>
      <JvPromptSuggestions suggestions={options} onSelect={onSelect} />
    </JvCard>
  );
};

export default ClarificationPrompt;
