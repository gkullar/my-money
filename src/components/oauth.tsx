import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../utils/use-auth';

const blink = keyframes`
0% {
  opacity: 0.2;
}
20% {
  opacity: 1;
}
100% {
  opacity: 0.2;
}
`;

const StyledOAuth = styled.div`
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
    <StyledOAuth>
      Authenticating
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </StyledOAuth>
  );
};

export default OAuth;
