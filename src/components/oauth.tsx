import React, { FunctionComponent } from 'react';
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
  const params = new URLSearchParams(window.location.search);
  const stateToken = localStorage.getItem(
    `${process.env.REACT_APP_API_STATE_TOKEN_KEY}`
  );

  if (!isAuthenticated && params.has('code') && params.has('state')) {
    if (params.get('state') !== stateToken)
      throw new Error('Error: state token not matched'); // @todo handle error in UI

    authenticate(params.get('code') as string);
  }

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
