import React, { FunctionComponent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import AccountCard from './account-card';
import AccountDetail from './account-detail';
import AccountLayout from './account-layout';
import Spinner from './spinner';
import { apiUrl } from '../config';
import useFetch from '../hooks/use-fetch';
import { PaletteTypes } from '../theme/theme';
import { toGBP } from '../utils/currency-formatter';

interface Props {
  id: string;
  accountNumber: string;
}

interface State {
  balance: number;
  total_balance: number;
  spend_today: number;
  currency?: string;
}

const AccountSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: calc(${Spinner.defaultProps!!.size} / -2);
  margin-left: calc(${Spinner.defaultProps!!.size} / -2);
`;

const Account: FunctionComponent<Props> = ({ id, accountNumber }) => {
  const { data, loading, error } = useFetch<State>(
    `${apiUrl}/balance?account_id=${id}`
  );
  const [isRedirect, setRedirect] = useState(false);
  const handleClick = () => setRedirect(true);

  return (
    <AccountCard
      palette={PaletteTypes.Accent}
      isLink={true}
      onClick={handleClick}
    >
      {loading && <AccountSpinner palette={PaletteTypes.Accent} />}
      {!loading && error && <p>There was an error retrieving account data</p>}
      {!loading && !error && (
        <AccountLayout
          top={
            <AccountDetail
              title="Account No"
              value={accountNumber}
              inline={true}
            />
          }
          middle={
            <AccountDetail
              title="Balance"
              value={toGBP(data.balance)}
              bold={true}
            />
          }
          bottomItemOne={
            <AccountDetail
              title="Available"
              value={toGBP(data.total_balance)}
            />
          }
          bottomItemTwo={
            <AccountDetail
              title="Todays Spend"
              value={toGBP(data.spend_today)}
            />
          }
        />
      )}
      {isRedirect && <Redirect to={`/accounts/${id}`} />}
    </AccountCard>
  );
};

export default Account;
