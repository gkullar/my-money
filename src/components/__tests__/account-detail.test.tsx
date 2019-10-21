import React from 'react';
import AccountDetail from '../account-detail';
import { render } from '../../utils/test-helpers';

describe('AccountDetail', () => {
  test('renders correctly', () => {
    const { container, getByText } = render(
      <AccountDetail title="TestTitle" value="TestValue" />
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('TestTitle')).toHaveStyleRule('margin-bottom', '5px');
    expect(getByText('TestValue')).toHaveStyleRule('font-size', '1.3rem');
  });

  test('renders correctly when `bold` prop passed in', () => {
    const { container, getByText } = render(
      <AccountDetail title="TestTitle" value="TestValue" bold={true} />
    );

    expect(container).toMatchSnapshot();
    expect(getByText('TestValue')).toHaveStyleRule('font-size', '1.5rem');
    expect(getByText('TestValue')).toHaveStyleRule('font-weight', 'bold');
  });

  test('renders correctly when `inline` prop passed in', () => {
    const { container, getByText } = render(
      <AccountDetail title="TestTitle" value="TestValue" inline={true} />
    );

    expect(container).toMatchSnapshot();
    expect(getByText('TestTitle')).toHaveStyleRule('margin-right', '15px');
    expect(getByText('TestValue')).toHaveStyleRule('display', 'inline-block');
    expect(getByText('TestValue')).toHaveStyleRule('display', 'inline-block');
  });
});
