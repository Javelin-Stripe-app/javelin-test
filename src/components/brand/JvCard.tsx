import { ReactNode } from 'react';
import { Box } from '@stripe/ui-extension-sdk/ui';

interface JvCardProps {
  children: ReactNode;
  /** Override default padding for dense contexts */
  padding?: 'small' | 'medium';
  /** Remove background for transparent card (content grouping only) */
  transparent?: boolean;
}

const JvCard = ({ children, padding = 'medium', transparent = false }: JvCardProps): JSX.Element => {
  return (
    <Box
      css={{
        padding,
        backgroundColor: transparent ? undefined : 'container',
        stack: 'y',
        gap: 'small',
      }}
    >
      {children}
    </Box>
  );
};

export default JvCard;
