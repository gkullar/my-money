import React from 'react';
import './AccountDetail.scss';

interface Props {
  title: string;
  value: number;
}

export default function AccountDetail(props: Props) {
  return (
    <div className="account-detail">
      <span className="account-detail-title">{props.title}</span>
      <span className="account-detail-value">
        <small>£</small>
        {(props.value / 100).toFixed(2)}
      </span>
    </div>
  );
}
