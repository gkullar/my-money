import React, { FunctionComponent } from 'react';
import './account-detail.scss';

interface Props {
  title: string;
  value: number;
}

const AccountDetail: FunctionComponent<Props> = ({ title, value }) => (
  <div className="account-detail">
    <span className="account-detail-title">{title}</span>
    <span className="account-detail-value">
      <small>£</small>
      {(value / 100).toFixed(2)}
    </span>
  </div>
);

export default AccountDetail;
