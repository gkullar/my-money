import React from 'react';
import AuthenticatedLayout from '../authenticated-layout';
import { render } from '../../utils/test-helpers';

describe('AuthenticatedLayout', () => {
  test('renders correctly', () => {
    const { container } = render(<AuthenticatedLayout />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
