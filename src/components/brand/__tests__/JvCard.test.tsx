import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Inline } from '@stripe/ui-extension-sdk/ui';
import JvCard from '../JvCard';

describe('JvCard', () => {
  it('renders children', () => {
    const { wrapper } = render(
      <JvCard>
        <Inline>Card content</Inline>
      </JvCard>,
    );

    expect(wrapper.text).toContain('Card content');
  });

  it('renders with default medium padding and container background', () => {
    const { wrapper } = render(
      <JvCard>
        <Inline>Content</Inline>
      </JvCard>,
    );

    expect(wrapper.text).toContain('Content');
  });

  it('renders transparent variant without background', () => {
    const { wrapper } = render(
      <JvCard transparent>
        <Inline>Transparent</Inline>
      </JvCard>,
    );

    expect(wrapper.text).toContain('Transparent');
  });
});
