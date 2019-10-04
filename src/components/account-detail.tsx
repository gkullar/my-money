import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  value: string;
  bold?: boolean;
  inline?: boolean;
}

const Title = styled.div<Partial<Props>>`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${props =>
    !props.inline &&
    `
    margin-bottom: 5px;
  `}

  ${props =>
    props.inline &&
    `
    display: inline-block;
    margin-right: 15px;
  `}
`;

const Value = styled.div<Partial<Props>>`
  font-size: 1.3rem;
  letter-spacing: 1px;

  ${props =>
    props.bold &&
    `
    font-weight: bold;
    font-size: 1.5rem;
  `}

  ${props =>
    props.inline &&
    `
    display: inline-block;
  `}
`;

const AccountDetail: FunctionComponent<Props> = props => (
  <div className="account-detail">
    <Title inline={props.inline}>{props.title}</Title>
    <Value inline={props.inline} bold={props.bold}>
      {props.value}
    </Value>
  </div>
);

export default AccountDetail;
