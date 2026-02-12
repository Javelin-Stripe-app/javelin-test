import { SettingsView, Box, Inline } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const AppSettingsView = ({ userContext: _userContext }: ExtensionContextValue) => {
  return (
    <SettingsView>
      <Box css={{ padding: 'medium' }}>
        <Inline>Javelin settings coming soon.</Inline>
      </Box>
    </SettingsView>
  );
};

export default AppSettingsView;
