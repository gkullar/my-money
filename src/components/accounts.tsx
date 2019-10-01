import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Account from './account';
import Spinner from './spinner';
import useFetch from '../hooks/use-fetch';
import { PaletteTypes } from '../theme/theme';

interface State {
  accounts: {
    id: string;
    account_number: string;
    description: string;
    created: string;
  }[];
}

const StyledAccounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;

  ${Account} {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

const Accounts: FunctionComponent<{}> = () => {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/accounts`
  );

  const accounts =
    data.accounts &&
    data.accounts.map((account, key) => (
      <Account
        key={key}
        id={account.id}
        accountNumber={account.account_number}
      />
    ));

  return (
    <StyledAccounts>
      {loading ? <Spinner palette={PaletteTypes.Accent} /> : accounts}
    </StyledAccounts>
  );
};

export default Accounts;
