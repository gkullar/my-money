import React from 'react';
import ReactDOM from 'react-dom';
import Account from './account';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Account />, div);
  ReactDOM.unmountComponentAtNode(div);
});
