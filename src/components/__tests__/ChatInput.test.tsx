import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button, TextArea } from '@stripe/ui-extension-sdk/ui';
import ChatInput from '../ChatInput';

describe('ChatInput', () => {
  it('renders TextArea and Send button', () => {
    const { wrapper } = render(<ChatInput onSend={() => {}} />);

    const textarea = wrapper.find(TextArea);
    expect(textarea).not.toBeNull();
    expect(textarea!.props.placeholder).toBe("What's my MRR?");

    const button = wrapper.find(Button);
    expect(button).not.toBeNull();
    expect(button!.text).toContain('Send');
  });

  it('disables Send button when empty', () => {
    const { wrapper } = render(<ChatInput onSend={() => {}} />);

    const button = wrapper.find(Button);
    expect(button!.props.disabled).toBe(true);
  });

  it('disables both input and button when disabled prop is true', () => {
    const { wrapper } = render(
      <ChatInput onSend={() => {}} disabled={true} />,
    );

    const textarea = wrapper.find(TextArea);
    expect(textarea!.props.disabled).toBe(true);

    const button = wrapper.find(Button);
    expect(button!.props.disabled).toBe(true);
  });

  it('uses initialValue when provided', () => {
    const { wrapper } = render(
      <ChatInput onSend={() => {}} initialValue="Preloaded question" />,
    );

    const textarea = wrapper.find(TextArea);
    expect(textarea!.props.value).toBe('Preloaded question');
  });
});
