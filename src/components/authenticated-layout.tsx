import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './button';
import FullScreenBackground from './fullscreen-background';
import ThemeToggle from './theme-toggle';
import { Props, withPalette } from './with-palette';
import logo from '../assets/logo.png';
import { useAuth } from '../hooks/use-auth';
import { PaletteTypes } from '../theme/theme';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    height: 100%;
  }
`;

const Header = withPalette(styled.header<Props>`
  display: flex;
  align-items: center;
  color: ${props => props.theme[props.palette].text};
  background: ${props => props.theme[props.palette].background};
  border-bottom: 1px solid ${props => props.theme[props.palette].borderColor};
  padding: 5px 20px;
`);

const HeaderActions = styled.div`
  margin-left: auto;

  button:first-of-type {
    margin-right: 5px;
  }
`;

const Footer = withPalette(styled.footer<Props>`
  color: ${props => props.theme[props.palette].text};
  background: ${props => props.theme[props.palette].background};
  border-top: 1px solid ${props => props.theme[props.palette].borderColor};
  padding: 0 20px;
`);

const MainWrapper = styled(FullScreenBackground).attrs({
  isAuth: true
})`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  height: 60px;
`;

const AuthenticatedLayout: FunctionComponent<{}> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Layout>
      <Header>
        <Logo />
        <HeaderActions>
          <ThemeToggle />
          <Button palette={PaletteTypes.Accent} onClick={logout}>
            logout
          </Button>
        </HeaderActions>
      </Header>
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
      <Footer palette={PaletteTypes.Accent}>
        <p>Environment: {process.env.NODE_ENV}</p>
      </Footer>
    </Layout>
  );
};

export default AuthenticatedLayout;
