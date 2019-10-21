import React from 'react';
import AccountCard from '../account-card';
import { toEm } from '../../theme/mixins';
import { breakpoints } from '../../theme/theme';
import { render } from '../../utils/test-helpers';

describe('AccountCard', () => {
  test('renders correctly', () => {
    const { container } = render(<AccountCard />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '310px');
    expect(container.firstChild).toHaveStyleRule('width', '350px', {
      media: `(min-width: ${toEm(breakpoints.xs)})`
    });
  });
});
