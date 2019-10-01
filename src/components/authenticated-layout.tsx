import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './button';
import FullScreenBackground from './fullscreen-background';
import { Props, withPalette } from './with-palette';
import logo from '../assets/monzo-logo.svg';
import { useAuth } from '../hooks/use-auth';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = withPalette(styled.header<Props>`
  display: flex;
  align-items: center;
  background: ${props => props.theme[props.palette].background};
  padding: 0 20px;

  .logo {
    transform: rotate(270deg);
    height: 50px;
    pointer-events: none;
    margin-right: 10px;
  }

  button {
    margin-left: auto;
  }
`);

const Footer = withPalette(styled.footer<Props>`
  background: ${props => props.theme[props.palette].background};
  padding: 0 20px;
`);

const MainWrapper = styled(FullScreenBackground).attrs({
  isAuth: true
})`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const AuthenticatedLayout: FunctionComponent<{}> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Layout>
      <Header>
        <img src={logo} className="logo" alt="logo" />
        <h1>My Money</h1>
        <Button onClick={logout}>logout</Button>
      </Header>
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
      <Footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </Footer>
    </Layout>
  );
};

export default AuthenticatedLayout;
