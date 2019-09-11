import React, { FunctionComponent } from 'react';
import './accounts.scss';
import Account from './account/account';
import useFetch from '../_utils/use-fetch';
import Spinner from '../spinner/spinner';

interface State {
  accounts: {
    id: string;
    description: string;
    created: string;
  }[];
}

const Accounts: FunctionComponent<{}> = () => {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/accounts`
  );

  const accounts =
    data.accounts &&
    data.accounts.map((account, key) => (
      <Account key={key} id={account.id} title={`Account ${key + 1}`} />
    ));

  return <div className="accounts">{loading ? <Spinner /> : accounts}</div>;
};

export default Accounts;
