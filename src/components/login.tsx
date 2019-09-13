import React, { FunctionComponent } from 'react';
import Button from './button';
import { useAuth } from '../utils/use-auth';

const Login: FunctionComponent<{}> = () => {
  const { login } = useAuth();

  return (
    <div className="login">
      <p>
        Please <Button onClick={login}>login</Button> to use My Money
      </p>
    </div>
  );
};

export default Login;
