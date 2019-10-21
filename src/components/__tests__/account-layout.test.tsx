import React from 'react';
import AccountLayout from '../account-layout';
import { render } from '../../utils/test-helpers';

describe('AccountLayout', () => {
  test('renders correctly', () => {
    const { container } = render(
      <AccountLayout
        top={<div></div>}
        middle={<div></div>}
        bottomItemOne={<div></div>}
        bottomItemTwo={<div></div>}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
