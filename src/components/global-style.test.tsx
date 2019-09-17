import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './global-style';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalStyle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
