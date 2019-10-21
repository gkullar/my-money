import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Account from './account';
import AccountPlaceholder from './account-placeholder';
import Spinner from './spinner';
import { apiUrl } from '../config';
import useFetch from '../hooks/use-fetch';
import { respondTo } from '../theme/mixins';

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
`;

const AccountWrapper = styled.div`
  margin-bottom: 20px;

  ${respondTo.xs`
    margin-right: 20px;
  `}
`;

const Accounts: FunctionComponent<{}> = () => {
  const { data, loading, error } = useFetch<State>(`${apiUrl}/accounts`);

  const accounts =
    data.accounts &&
    data.accounts.map((account, key) => (
      <AccountWrapper key={key}>
        <Account id={account.id} accountNumber={account.account_number} />
      </AccountWrapper>
    ));

  const accountPlaceholders = Array(2)
    .fill({})
    .map((_, key) => (
      <AccountWrapper key={'0' + key}>
        <AccountPlaceholder />
      </AccountWrapper>
    ));

  return (
    <StyledAccounts>
      {loading && <Spinner />}
      {!loading && error && <p>There was an error retrieving accounts data</p>}
      {!loading && !error && Array().concat(accounts, accountPlaceholders)}
    </StyledAccounts>
  );
};

export default Accounts;
