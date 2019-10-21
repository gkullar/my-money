import React from 'react';
import Accounts from '../accounts';
import { render, wait } from '../../utils/test-helpers';

describe('Accounts', () => {
  test('should render an error message if error', async () => {
    const spy = jest.spyOn(window, 'fetch') as jest.Mock<any>;
    spy.mockResolvedValue({ status: 404 });

    const { container } = render(<Accounts />);

    await wait(() =>
      expect(container.textContent).toContain(
        'There was an error retrieving accounts data'
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render accounts if no error', async () => {
    const spy = jest.spyOn(window, 'fetch') as jest.Mock<any>;
    spy.mockResolvedValue({
      status: 200,
      json: () =>
        Promise.resolve({
          accounts: [
            {
              id: 'TestAccountIs',
              account_number: 'TestAccountNo',
              description: 'TestAccountDescription',
              created: 'TestAccountCreated'
            }
          ]
        })
    });

    const { container } = render(<Accounts />);

    await wait(() => expect(container.textContent).toContain('TestAccountNo'));

    expect(container.firstChild).toMatchSnapshot();
  });
});
