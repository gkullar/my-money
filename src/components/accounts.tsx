import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Account from './account';
import AccountPlaceholder from './account-placeholder';
import Spinner from './spinner';
import useFetch from '../hooks/use-fetch';

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
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Accounts: FunctionComponent<{}> = () => {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/accounts`
  );

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
      <AccountWrapper key={key}>
        <AccountPlaceholder></AccountPlaceholder>
      </AccountWrapper>
    ));

  return (
    <StyledAccounts>
      {loading ? <Spinner /> : accounts.concat(accountPlaceholders)}
    </StyledAccounts>
  );
};

export default Accounts;
