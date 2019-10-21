import React from 'react';
import Button from '../button';
import { PaletteTypes } from '../../theme/theme';
import { render } from '../../utils/test-helpers';

describe('Button', () => {
  test('renders correctly with base palette', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly with accent palette', () => {
    const { container } = render(<Button palette={PaletteTypes.Accent} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
