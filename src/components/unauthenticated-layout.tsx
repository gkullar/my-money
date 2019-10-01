import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Card from './card';
import FullScreenBackground from './fullscreen-background';
import logo from '../assets/logo.png';

interface Props {
  className?: string;
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${Card} {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  p {
    margin: 0 auto;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  display: block;
  margin: 0 auto;
`;

const UnAuthenticatedLayout: FunctionComponent<{} & Partial<Props>> = ({
  children,
  className
}) => (
  <FullScreenBackground>
    <Layout className={className}>
      <Card>
        <Logo />
        {children}
      </Card>
    </Layout>
  </FullScreenBackground>
);

export default UnAuthenticatedLayout;
