import { ContextView, Box, Inline, Banner, Button } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const SignInView = ({ userContext: _userContext }: ExtensionContextValue) => {
  return (
    <ContextView title="Javelin — Re-authorize">
      <Box css={{ padding: 'medium', stack: 'y', gap: 'medium', alignX: 'center' }}>
        <Banner
          type="caution"
          title="Session expired"
          description="Your Stripe authorization has expired. Please re-authorize Javelin to continue."
        />
        <Inline css={{ color: 'secondary' }}>
          Click below to reconnect your Stripe account. Your conversation history will be preserved.
        </Inline>
        <Button
          type="primary"
          href="https://marketplace.stripe.com/apps/javelin"
        >
          Re-authorize Javelin
        </Button>
      </Box>
    </ContextView>
  );
};

export default SignInView;
