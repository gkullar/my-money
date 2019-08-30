import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// @todo redirect user to authenticate / login
localStorage.setItem(
  'accessToken',
  'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlYiI6IlVoSWxYYnhHcXdUblhmZ3JiUVU2IiwianRpIjoiYWNjdG9rXzAwMDA5bVBFbG1paXlTc1I1cGlyRE4iLCJ0eXAiOiJhdCIsInYiOiI1In0.wJNYrseWcZvyxjsiAiMWYBL8VrYuMC_NzbJNpnjlRxH6OfIta-3O22RD19C_VgJlC7Nhc2uMSJhW8yXAajN_1A'
);
