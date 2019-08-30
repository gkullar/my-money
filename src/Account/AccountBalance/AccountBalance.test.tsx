import React from 'react';
import ReactDOM from 'react-dom';
import AccountBalance from './AccountBalance';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountBalance />, div);
  ReactDOM.unmountComponentAtNode(div);
});
