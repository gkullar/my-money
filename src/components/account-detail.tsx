import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  value: number;
  className?: string;
}

const StyledAccountDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccountDetailTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
`;

const StyledAccountDetailValue = styled.span`
  font-size: 22px;
`;

const AccountDetailComponent: FunctionComponent<Props> = ({
  title,
  value,
  className
}) => (
  <StyledAccountDetail className={className}>
    <StyledAccountDetailTitle>{title}</StyledAccountDetailTitle>
    <StyledAccountDetailValue>
      <small>£</small>
      {(value / 100).toFixed(2)}
    </StyledAccountDetailValue>
  </StyledAccountDetail>
);

const AccountDetail = styled(AccountDetailComponent)``;

export default AccountDetail;
