import React from 'react';
import ReactDOM from 'react-dom';
import OAuth from './oauth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OAuth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
