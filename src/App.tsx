import React from 'react';
import './App.scss';
import logo from './_assets/logo.svg';
import useFetch from './_hooks/useFetch';
import Account from './Account/Account';
import Spinner from './Spinner/Spinner';

interface State {
  accounts: {
    id: string;
    description: string;
    created: string;
  }[];
}

function App() {
  const { data, loading } = useFetch<State>(
    `${process.env.REACT_APP_API_URL}/accounts`
  );

  const accounts =
    data.accounts &&
    data.accounts.map((account, key) => (
      <Account key={key} id={account.id} title={`Account ${key + 1}`} />
    ));

  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
      </header>
      <main>
        <div className="accounts">{loading ? <Spinner /> : accounts}</div>
      </main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </div>
  );
}

export default App;
