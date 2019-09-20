import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import AppProviders from './app-providers';
import Routing from './routing';
import GlobalStyle from './components/global-style';
import { ThemeProvider } from './hooks/use-theme';
import * as serviceWorker from './utils/service-worker';

ReactDOM.render(
  <AppProviders>
    <ThemeProvider>
      <Normalize />
      <GlobalStyle />
      <Routing />
    </ThemeProvider>
  </AppProviders>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
