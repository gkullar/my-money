import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Card from './card';
import FullScreenBackground from './fullscreen-background';
import logo from '../assets/logo.png';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentCard = styled(Card)`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

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

const UnAuthenticatedLayout: FunctionComponent<{}> = ({ children }) => (
  <FullScreenBackground>
    <Layout>
      <ContentCard>
        <Logo />
        {children}
      </ContentCard>
    </Layout>
  </FullScreenBackground>
);

export default UnAuthenticatedLayout;
