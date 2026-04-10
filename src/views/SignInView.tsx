import { ContextView, Button } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { JvCard, JvStatusIndicator } from '../components/brand';

const SignInView = ({ userContext: _userContext }: ExtensionContextValue) => {
  return (
    <ContextView title="Javelin — Re-authorize">
      <JvCard>
        <JvStatusIndicator
          variant="warning"
          label="Session expired"
          context="Your Stripe authorization has expired. Click below to reconnect — your conversation history will be preserved."
        />
        <Button
          type="primary"
          href="https://marketplace.stripe.com/apps/javelin"
        >
          Re-authorize Javelin
        </Button>
      </JvCard>
    </ContextView>
  );
};

export default SignInView;
