import React, { FunctionComponent } from 'react';
import './account.scss';
import AccountDetail from '../account-detail/account-detail';
import useFetch from '../../_utils/use-fetch';
import Card from '../../card/card';
import Spinner from '../../spinner/spinner';

interface Props {
  id: string;
  title: string;
}

interface State {
  balance: number;
  total_balance: number;
  currency: string;
  spend_today: number;
}

const Account: FunctionComponent<Props> = ({ id, title }) => {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/balance?account_id=${id}`
  );

  return (
    <div className="account">
      <Card>
        <h2 className="account-title">{title}</h2>
        <hr />
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <AccountDetail title="Balance" value={data.balance} />
            <AccountDetail
              title="Available Balance"
              value={data.total_balance}
            />
            <AccountDetail title="Spend Today" value={data.spend_today} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default Account;
