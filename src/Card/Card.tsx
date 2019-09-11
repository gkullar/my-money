import React, { FunctionComponent } from 'react';
import './card.scss';

const Card: FunctionComponent<{}> = ({ children }) => (
  <div className="card">{children}</div>
);

export default Card;
