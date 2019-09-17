import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Accounts from './accounts';
import Button from './button';
import background from '../assets/background.jpg';
import logo from '../assets/logo.svg';
import { useAuth } from '../utils/use-auth';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    display: flex;
    align-items: center;

    .logo {
      transform: rotate(270deg);
      height: 50px;
      pointer-events: none;
      margin-right: 10px;
    }

    button {
      margin-left: auto;
    }
  }

  header,
  footer {
    background: #14233c;
    padding: 0 20px;
  }

  main {
    flex: 1;
    overflow: auto;
    padding: 20px;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(20, 35, 60, 0.8);
  }
`;

const App: FunctionComponent<{}> = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <StyledApp>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
        <Button onClick={logout}>logout</Button>
      </header>
      <main>
        <Accounts />
      </main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </StyledApp>
  );
};

export default App;
