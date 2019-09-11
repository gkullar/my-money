import React from 'react';
import ReactDOM from 'react-dom';
import Accounts from './accounts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accounts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
