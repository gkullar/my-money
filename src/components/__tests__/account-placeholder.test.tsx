import React from 'react';
import AccountPlaceholder from '../account-placeholder';
import { render } from '../../utils/test-helpers';

describe('AccountPlaceholder', () => {
  test('renders correctly', () => {
    const { container } = render(<AccountPlaceholder />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
