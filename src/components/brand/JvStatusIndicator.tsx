import { Badge, Box, Inline } from '@stripe/ui-extension-sdk/ui';

export type StatusVariant = 'positive' | 'negative' | 'warning' | 'info';

interface JvStatusIndicatorProps {
  /** Status variant determining color and icon treatment */
  variant: StatusVariant;
  /** Display label. Brand voice: concise, specific. "MRR up 12%" not "Positive trend detected" */
  label: string;
  /** Optional secondary text for context (e.g., "vs. last month") */
  context?: string;
}

const JvStatusIndicator = ({ variant, label, context }: JvStatusIndicatorProps): JSX.Element => {
  return (
    <Box css={{ stack: 'x', gap: 'xsmall', alignY: 'center' }}>
      <Badge type={variant}>{label}</Badge>
      {context && (
        <Inline css={{ font: 'caption', color: 'secondary' }}>{context}</Inline>
      )}
    </Box>
  );
};

export default JvStatusIndicator;
