import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppProviders from './app-providers';
import App from './app';
import * as serviceWorker from './_utils/service-worker';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
