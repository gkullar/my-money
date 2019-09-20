import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';
import Button from './button';
import { Props, withPalette } from './with-palette';
import background from '../assets/background.jpg';
import logo from '../assets/logo.svg';
import { useAuth } from '../hooks/use-auth';

const StyledLayout = withPalette(styled.div<Props>`
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
    background: ${props => props.theme[props.palette].background};
    padding: 0 20px;
  }

  main {
    flex: 1;
    overflow: auto;
    padding: 20px;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px
      ${props => rgba(darken(0.5, props.theme[props.palette].background), 0.8)};
  }
`);

const Layout: FunctionComponent<{}> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <StyledLayout>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
        <Button onClick={logout}>logout</Button>
      </header>
      <main>{children}</main>
      <footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </footer>
    </StyledLayout>
  );
};

export default Layout;
