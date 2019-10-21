import React from 'react';
import Account from '../account';
import { render, wait } from '../../utils/test-helpers';

describe('Account', () => {
  test('should render an error message if error', async () => {
    const spy = jest.spyOn(window, 'fetch') as jest.Mock<any>;
    spy.mockResolvedValue({ status: 404 });

    const { container } = render(
      <Account id="TestId" accountNumber="TestAccountNo" />
    );

    await wait(() =>
      expect(container.textContent).toContain(
        'There was an error retrieving account data'
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render account details if no error', async () => {
    const spy = jest.spyOn(window, 'fetch') as jest.Mock<any>;
    spy.mockResolvedValue({
      status: 200,
      json: () =>
        Promise.resolve({
          balance: 100,
          total_balance: 100,
          spend_today: 0
        })
    });

    const { container } = render(
      <Account id="TestId" accountNumber="TestAccountNo" />
    );

    await wait(() => expect(container.textContent).toContain('TestAccountNo'));

    expect(container.firstChild).toMatchSnapshot();
  });
});
