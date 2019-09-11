import React, { FunctionComponent } from 'react';
import './app.scss';
import { useAuth } from './_utils/use-auth';
import logo from './_assets/logo.svg';
import Accounts from './accounts/accounts';
import Login from './login/login';

const App: FunctionComponent<{}> = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
        {isAuthenticated ? <button onClick={logout}>logout</button> : null}
      </header>
      <main>{isAuthenticated ? <Accounts /> : <Login />}</main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </div>
  );
};

export default App;
