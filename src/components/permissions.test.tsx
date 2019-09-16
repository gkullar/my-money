import React from 'react';
import ReactDOM from 'react-dom';
import Permissions from './permissions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Permissions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
