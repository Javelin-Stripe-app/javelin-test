import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button, Banner } from '@stripe/ui-extension-sdk/ui';
import JvConfirmationPrompt from '../JvConfirmationPrompt';

describe('JvConfirmationPrompt', () => {
  const baseProps = {
    title: 'Update 23 subscriptions to the Pro plan',
    description: 'This will change the plan for 23 active subscriptions.',
    onConfirm: vi.fn(),
    confirmLabel: 'Update 23 subscriptions',
    onCancel: vi.fn(),
  };

  it('renders title and description in banner', () => {
    const { wrapper } = render(<JvConfirmationPrompt {...baseProps} />);

    const banner = wrapper.find(Banner);
    expect(banner).not.toBeNull();
    expect(banner!.props.title).toBe('Update 23 subscriptions to the Pro plan');
    expect(banner!.props.description).toBe('This will change the plan for 23 active subscriptions.');
  });

  it('renders with default (non-destructive) banner type', () => {
    const { wrapper } = render(<JvConfirmationPrompt {...baseProps} />);

    const banner = wrapper.find(Banner);
    expect(banner!.props.type).toBe('default');
  });

  it('renders critical banner for destructive actions', () => {
    const { wrapper } = render(
      <JvConfirmationPrompt {...baseProps} destructive />,
    );

    const banner = wrapper.find(Banner);
    expect(banner!.props.type).toBe('critical');
  });

  it('calls onConfirm when confirm button is pressed', () => {
    const onConfirm = vi.fn();
    const { wrapper } = render(
      <JvConfirmationPrompt {...baseProps} onConfirm={onConfirm} />,
    );

    const buttons = wrapper.findAll(Button);
    const confirmButton = buttons.find((b) => b.text.includes('Update 23 subscriptions'));
    confirmButton!.trigger('onPress');
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when cancel button is pressed', () => {
    const onCancel = vi.fn();
    const { wrapper } = render(
      <JvConfirmationPrompt {...baseProps} onCancel={onCancel} />,
    );

    const buttons = wrapper.findAll(Button);
    const cancelButton = buttons.find((b) => b.text.includes('Cancel'));
    cancelButton!.trigger('onPress');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('disables confirm button when loading', () => {
    const { wrapper } = render(
      <JvConfirmationPrompt {...baseProps} loading />,
    );

    const buttons = wrapper.findAll(Button);
    const confirmButton = buttons.find((b) => b.text.includes('Update 23 subscriptions'));
    expect(confirmButton!.props.disabled).toBe(true);
  });

  it('renders affected items when provided', () => {
    const { wrapper } = render(
      <JvConfirmationPrompt
        {...baseProps}
        affectedItems={[
          { label: 'cus_001', detail: 'Pro plan' },
          { label: 'cus_002', detail: 'Basic plan' },
        ]}
      />,
    );

    expect(wrapper.text).toContain('cus_001');
    expect(wrapper.text).toContain('Pro plan');
    expect(wrapper.text).toContain('cus_002');
  });

  it('uses custom cancel label when provided', () => {
    const { wrapper } = render(
      <JvConfirmationPrompt {...baseProps} cancelLabel="Go back" />,
    );

    expect(wrapper.text).toContain('Go back');
  });
});
