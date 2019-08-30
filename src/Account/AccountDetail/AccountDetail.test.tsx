import React from 'react';
import ReactDOM from 'react-dom';
import AccountDetail from './AccountDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
