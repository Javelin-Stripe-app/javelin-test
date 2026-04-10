import { ReactNode } from 'react';
import { Box, Inline } from '@stripe/ui-extension-sdk/ui';

interface JvSectionHeaderProps {
  /** Section title. Keep to 3-5 words. Brand voice: direct, specific. */
  title: string;
  /** Optional trailing action (Button, Link, or any Stripe component) */
  action?: ReactNode;
  /** Optional subtitle/description below the title */
  subtitle?: string;
}

const JvSectionHeader = ({ title, action, subtitle }: JvSectionHeaderProps): JSX.Element => {
  return (
    <Box
      css={{
        stack: action ? 'x' : 'y',
        distribute: 'space-between',
        alignY: 'center',
        marginBottom: 'medium',
      }}
    >
      <Box css={{ stack: 'y', gap: 'xsmall' }}>
        <Inline css={{ font: 'heading' }}>{title}</Inline>
        {subtitle && (
          <Inline css={{ font: 'caption', color: 'secondary' }}>{subtitle}</Inline>
        )}
      </Box>
      {action}
    </Box>
  );
};

export default JvSectionHeader;
