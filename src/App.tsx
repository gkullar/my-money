import React from 'react';
import logo from './_assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
      </header>
      <main>
        <p>Hello World!</p>
      </main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </div>
  );
}

export default App;
