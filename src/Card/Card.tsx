import React from 'react';
import './Card.scss';

export default function Card(props: any) {
  return <div className="card">{props.children}</div>;
}
