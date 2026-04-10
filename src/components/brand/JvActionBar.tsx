import { Box, Button, Divider } from '@stripe/ui-extension-sdk/ui';

interface JvActionBarAction {
  /** Button label. Brand voice: verb-first, specific. "Update 23 subscriptions" not "Submit" */
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

interface JvActionBarProps {
  /** Primary action. Renders as type="primary" button. */
  primary: JvActionBarAction;
  /** Optional secondary action. Renders as type="secondary" button. */
  secondary?: JvActionBarAction;
  /**
   * Optional destructive action. Renders as type="destructive" button.
   * Visually separated from primary/secondary with space-between distribution.
   */
  destructive?: JvActionBarAction;
  /** Show a divider line above the action bar */
  showDivider?: boolean;
}

const JvActionBar = ({
  primary,
  secondary,
  destructive,
  showDivider = false,
}: JvActionBarProps): JSX.Element => {
  return (
    <Box css={{ stack: 'y' }}>
      {showDivider && <Divider />}
      <Box
        css={{
          stack: 'x',
          gap: 'small',
          distribute: destructive ? 'space-between' : undefined,
          alignY: 'center',
          paddingTop: 'medium',
        }}
      >
        {destructive && (
          <Button
            type="destructive"
            disabled={destructive.disabled}
            onPress={destructive.onPress}
          >
            {destructive.label}
          </Button>
        )}
        <Box css={{ stack: 'x', gap: 'small' }}>
          {secondary && (
            <Button
              type="secondary"
              disabled={secondary.disabled}
              onPress={secondary.onPress}
            >
              {secondary.label}
            </Button>
          )}
          <Button
            type="primary"
            disabled={primary.disabled}
            onPress={primary.onPress}
          >
            {primary.label}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default JvActionBar;
