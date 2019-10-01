import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Accounts from './accounts';
import Authenticatedlayout from './authenticated-layout';
import { useAuth } from '../hooks/use-auth';

const App: FunctionComponent<{}> = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <Authenticatedlayout>
      <Accounts />
    </Authenticatedlayout>
  );
};

export default App;
