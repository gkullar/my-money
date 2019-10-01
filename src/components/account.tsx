import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AccountDetail from './account-detail';
import Card from './card';
import Spinner from './spinner';
import { Props as PaletteProps, withPalette } from './with-palette';
import useFetch from '../hooks/use-fetch';
import { PaletteTypes } from '../theme/theme';

interface Props {
  id: string;
  accountNumber: string;
  className?: string;
}

interface State {
  balance: number;
  total_balance: number;
  currency: string;
  spend_today: number;
}

// @todo use dynamic values for spinner margin calc (default is 24px)
const StyledAccount = styled.div`
  ${Card} {
    width: 320px;
    min-height: 180px;
  }

  ${Spinner} {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 12px;
    margin-left: -12px;
  }

  ${AccountDetail} {
    margin-bottom: 10px;
  }

  ${AccountDetail}:first-of-type {
    margin-top: 20px;
  }
`;

const StyledAccountTitle = withPalette(styled.h2<PaletteProps>`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme[props.palette].borderColor};
`);

const AccountComponent: FunctionComponent<Props> = ({
  id,
  accountNumber,
  className
}) => {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/balance?account_id=${id}`
  );

  return (
    <StyledAccount className={className}>
      <Card>
        <StyledAccountTitle palette={PaletteTypes.Accent}>
          <small>Account No. </small>
          {accountNumber}
        </StyledAccountTitle>
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
    </StyledAccount>
  );
};

const Account = styled(AccountComponent)``;

export default Account;
