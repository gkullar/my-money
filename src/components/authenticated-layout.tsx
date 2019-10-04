import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Button from './button';
import ThemeToggle from './theme-toggle';
import { Props, withPalette } from './with-palette';
import logo from '../assets/logo.png';
import { useAuth } from '../hooks/use-auth';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = withPalette(styled.header<Props>`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${props => props.theme[props.palette].text};
  background: ${props => props.theme[props.palette].background};
  border-bottom: 1px solid
    ${props => rgba(props.theme[props.palette].border, 0.3)};
  padding: 5px 20px;
`);

const HeaderActions = styled.div`
  margin-left: auto;
  display: flex;

  button {
    margin-left: 10px;
  }
`;

const Footer = withPalette(styled.footer<Props>`
  color: ${props => props.theme[props.palette].text};
  background: ${props => props.theme[props.palette].background};
  border-top: 1px solid ${props => rgba(props.theme[props.palette].border, 0.3)};
  padding: 0 20px;
`);

const Main = withPalette(styled.main<Props>`
  flex: 1;
  overflow: auto;
  padding: 80px 20px 20px;
  height: 100%;
  background: ${props => props.theme[props.palette].background};
`);

const Logo = withPalette(styled.img.attrs({
  src: logo,
  alt: 'logo'
})<Props>`
  position: absolute;
  top: 10px;
  height: 100px;
  background: ${props => props.theme[props.palette].background};
  border: 2px solid ${props => props.theme[props.palette].background};
`);

const AuthenticatedLayout: FunctionComponent<{}> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Layout>
      <Header>
        <Logo />
        <HeaderActions>
          <ThemeToggle />
          <Button onClick={logout}>logout</Button>
        </HeaderActions>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </Footer>
    </Layout>
  );
};

export default AuthenticatedLayout;
