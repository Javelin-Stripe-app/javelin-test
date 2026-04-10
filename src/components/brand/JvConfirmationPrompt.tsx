import { Box, Inline, Banner, Button, Divider } from '@stripe/ui-extension-sdk/ui';

interface JvConfirmationPromptProps {
  /**
   * What will happen. Brand voice: specific and honest.
   * GOOD: "Update 23 subscriptions to the Pro plan"
   * BAD: "Are you sure you want to proceed?"
   */
  title: string;
  /**
   * Detailed explanation of what changes and what cannot be undone.
   * Brand voice: factual, complete, no hedging.
   * GOOD: "This will change the plan for 23 active subscriptions. 2 subscriptions with pending invoices will be skipped. This action can be reversed."
   * BAD: "This action may affect some subscriptions."
   */
  description: string;
  /**
   * Optional list of specific items affected.
   * Shows users exactly what will change (Sage transparency).
   */
  affectedItems?: Array<{
    label: string;
    detail?: string;
  }>;
  /** Confirm action. Label should describe the action, not "OK" or "Yes". */
  onConfirm: () => void;
  confirmLabel: string;
  /** Cancel action */
  onCancel: () => void;
  cancelLabel?: string;
  /** Whether this is a destructive (irreversible) action */
  destructive?: boolean;
  /** Loading state during action execution */
  loading?: boolean;
}

const JvConfirmationPrompt = ({
  title,
  description,
  affectedItems,
  onConfirm,
  confirmLabel,
  onCancel,
  cancelLabel = 'Cancel',
  destructive = false,
  loading = false,
}: JvConfirmationPromptProps): JSX.Element => {
  return (
    <Box css={{ padding: 'medium', backgroundColor: 'container', stack: 'y', gap: 'medium' }}>
      <Banner
        type={destructive ? 'critical' : 'default'}
        title={title}
        description={description}
      />
      {affectedItems && affectedItems.length > 0 && (
        <Box css={{ stack: 'y', gap: 'xsmall' }}>
          {affectedItems.map((item, index) => (
            <Box key={index} css={{ stack: 'x', gap: 'small' }}>
              <Inline css={{ fontWeight: 'semibold' }}>{item.label}</Inline>
              {item.detail && (
                <Inline css={{ color: 'secondary' }}>{item.detail}</Inline>
              )}
            </Box>
          ))}
        </Box>
      )}
      <Divider />
      <Box css={{ stack: 'x', gap: 'small', distribute: 'space-between' }}>
        <Button type="secondary" onPress={onCancel}>
          {cancelLabel}
        </Button>
        <Button
          type={destructive ? 'destructive' : 'primary'}
          disabled={loading}
          onPress={onConfirm}
        >
          {confirmLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default JvConfirmationPrompt;
