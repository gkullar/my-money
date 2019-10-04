import React, { FunctionComponent, UIEvent, useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Button from './button';
import ThemeToggle from './theme-toggle';
import { Props, WithPalette } from './with-palette';
import logo from '../assets/logo.png';
import { useAuth } from '../hooks/use-auth';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = WithPalette(styled.header<Props>`
  position: relative;
  height: 60px;
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

const Footer = WithPalette(styled.footer<Props>`
  color: ${props => props.theme[props.palette].text};
  background: ${props => props.theme[props.palette].background};
  border-top: 1px solid ${props => rgba(props.theme[props.palette].border, 0.3)};
  padding: 0 20px;
`);

const Main = WithPalette(styled.main<Props>`
  flex: 1;
  overflow: auto;
  padding: 60px 20px 20px;
  height: 100%;
  background: ${props => props.theme[props.palette].background};
`);

interface LogoProps extends Props {
  contain: boolean;
}

const Logo = WithPalette(styled.img.attrs({
  src: logo,
  alt: 'logo'
})<LogoProps>`
  position: absolute;
  top: 10px;
  height: 100px;
  background: ${props => props.theme[props.palette].background};
  transition: position 0.4s linear, height 0.4s linear, top 0.4s linear;

  ${props =>
    props.contain &&
    `
    position: relative;
    height: 55px;
    top: 0;
  `}
`);

const AuthenticatedLayout: FunctionComponent<{}> = ({ children }) => {
  const { logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const onScroll = (event: UIEvent) =>
    setScrolled(event.currentTarget.scrollTop > 0);

  return (
    <Layout>
      <Header>
        <Logo contain={scrolled} />
        <HeaderActions>
          <ThemeToggle />
          <Button onClick={logout}>logout</Button>
        </HeaderActions>
      </Header>
      <Main onScroll={onScroll}>{children}</Main>
      <Footer>
        <p>Environment: {process.env.NODE_ENV}</p>
      </Footer>
    </Layout>
  );
};

export default AuthenticatedLayout;
