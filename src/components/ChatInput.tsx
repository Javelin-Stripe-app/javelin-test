import { Box, TextArea, Button } from '@stripe/ui-extension-sdk/ui';
import { useState, useCallback } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  initialValue?: string;
}

const ChatInput = ({ onSend, disabled = false, initialValue = '' }: ChatInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  }, [value, disabled, onSend]);

  return (
    <Box css={{ stack: 'x', gap: 'small', alignY: 'bottom', padding: 'small' }}>
      <Box css={{ width: 'fill' }}>
        <TextArea
          label="Ask a question"
          placeholder="What's my MRR?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={2}
          disabled={disabled}
        />
      </Box>
      <Button
        type="primary"
        onPress={handleSend}
        disabled={disabled || !value.trim()}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
