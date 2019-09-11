import React, { FunctionComponent } from 'react';
import { useAuth } from '../_utils/use-auth';

const Login: FunctionComponent<{}> = () => {
  const { login } = useAuth();

  return (
    <div className="login">
      <p>
        Please <button onClick={login}>login</button> to use My Money
      </p>
    </div>
  );
};

export default Login;
