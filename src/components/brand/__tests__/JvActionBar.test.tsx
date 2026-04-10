import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button, Divider } from '@stripe/ui-extension-sdk/ui';
import JvActionBar from '../JvActionBar';

describe('JvActionBar', () => {
  it('renders the primary action button', () => {
    const onPress = vi.fn();
    const { wrapper } = render(
      <JvActionBar primary={{ label: 'Save changes', onPress }} />,
    );

    expect(wrapper.text).toContain('Save changes');
  });

  it('calls primary handler on press', () => {
    const onPress = vi.fn();
    const { wrapper } = render(
      <JvActionBar primary={{ label: 'Save changes', onPress }} />,
    );

    wrapper.findAll(Button)[0].trigger('onPress');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders secondary action when provided', () => {
    const { wrapper } = render(
      <JvActionBar
        primary={{ label: 'Save', onPress: vi.fn() }}
        secondary={{ label: 'Preview', onPress: vi.fn() }}
      />,
    );

    expect(wrapper.text).toContain('Preview');
    expect(wrapper.text).toContain('Save');
  });

  it('renders destructive action when provided', () => {
    const { wrapper } = render(
      <JvActionBar
        primary={{ label: 'Update 23 subscriptions', onPress: vi.fn() }}
        destructive={{ label: 'Delete dashboard', onPress: vi.fn() }}
      />,
    );

    expect(wrapper.text).toContain('Delete dashboard');
  });

  it('renders divider when showDivider is true', () => {
    const { wrapper } = render(
      <JvActionBar
        primary={{ label: 'Save', onPress: vi.fn() }}
        showDivider
      />,
    );

    const divider = wrapper.find(Divider);
    expect(divider).not.toBeNull();
  });

  it('does not render divider by default', () => {
    const { wrapper } = render(
      <JvActionBar primary={{ label: 'Save', onPress: vi.fn() }} />,
    );

    const divider = wrapper.find(Divider);
    expect(divider).toBeNull();
  });
});
