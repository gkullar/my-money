import React from 'react';
import './AccountBalance.scss';
import AccountDetail from '../AccountDetail/AccountDetail';
import useFetch from '../../_hooks/useFetch';
import Card from '../../Card/Card';
import Spinner from '../../Spinner/Spinner';

interface Props {
  title: string;
  accountId: string;
}

interface State {
  balance: number;
  total_balance: number;
  currency: string;
  spend_today: number;
}

export default function AccountBalance(props: Props) {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/balance?account_id=${props.accountId}`
  );

  return (
    <div className="account-balance">
      <Card>
        <h2 className="title">{props.title}</h2>
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
}
