import React, { FunctionComponent, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import UnAuthenticatedLayout from './unauthenticated-layout';
import { useAuth } from '../hooks/use-auth';
import { blink } from '../theme/animations';

const Heading = styled.h3`
  margin-bottom: 0;

  span {
    animation: ${blink} infinite 1.4s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const OAuth: FunctionComponent<{}> = () => {
  const { isAuthenticated, authenticate } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) authenticate();
  }, [isAuthenticated]);

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <UnAuthenticatedLayout>
      <Heading>
        Authenticating
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Heading>
    </UnAuthenticatedLayout>
  );
};

export default OAuth;
