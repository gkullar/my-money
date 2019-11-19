import React, { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './spinner';
import Transaction, { TransactionItem } from './transaction';
import { apiUrl } from '../config';
import useFetch from '../hooks/use-fetch';

interface State {
  transactions: TransactionItem[];
}

const StyledTransactions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

// only care about last 30 days...
const today = new Date();
const fromDate = today.setDate(today.getDate() - 30);
const startDate = new Date(fromDate).toISOString();

const Transactions: FunctionComponent<{}> = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch<State>(
    `${apiUrl}/transactions?account_id=${id}&expand[]=merchant&since=${startDate}`
  );

  const transactions =
    data.transactions &&
    data.transactions
      .map((transaction, key) => (
        <Transaction key={key} transaction={transaction} />
      ))
      .reverse();

  return (
    <StyledTransactions>
      {loading && <Spinner />}
      {!loading && error && (
        <p>There was an error retrieving transactions data</p>
      )}
      {!loading && !error && (
        <div>
          <Link to="/accounts">Accounts</Link>
          <h2>Recent Account Activity</h2>
          {transactions}
        </div>
      )}
    </StyledTransactions>
  );
};

export default Transactions;
