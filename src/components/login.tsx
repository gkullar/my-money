import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './button';
import UnAuthenticatedLayout from './unauthenticated-layout';
import monzoLogo from '../assets/monzo-logo.svg';
import { useAuth } from '../hooks/use-auth';
import { PaletteTypes } from '../theme/theme';

const StyledButton = styled(Button)`
  padding: 8px 12px;
  margin-top: 20px;
  width: 100%;
`;

const ButtonText = styled.span`
  vertical-align: middle;
`;

const ButtonIcon = styled.img.attrs({
  src: monzoLogo,
  alt: 'monzo logo'
})`
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
`;

const Login: FunctionComponent<{}> = () => {
  const { login } = useAuth();

  return (
    <UnAuthenticatedLayout>
      <StyledButton onClick={login}>
        <ButtonIcon />
        <ButtonText>login</ButtonText>
      </StyledButton>
    </UnAuthenticatedLayout>
  );
};

export default Login;
