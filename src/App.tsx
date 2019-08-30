import React from 'react';
import './App.scss';
import logo from './_assets/logo.svg';
import AccountBalance from './Account/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
      </header>
      <main>
        <AccountBalance
          accountId="acc_00009Uiudfe6RpmqpOZ0Sn"
          title="Main Account"
        />
      </main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </div>
  );
}

export default App;
