import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Account from './account';
import Spinner from './spinner';
import useFetch from '../hooks/use-fetch';

interface State {
  accounts: {
    id: string;
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
      <Account key={key} id={account.id} title={`Account ${key + 1}`} />
    ));

  return <StyledAccounts>{loading ? <Spinner /> : accounts}</StyledAccounts>;
};

export default Accounts;
