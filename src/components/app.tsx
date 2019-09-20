import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Accounts from './accounts';
import Layout from './layout';
import { useAuth } from '../hooks/use-auth';

const App: FunctionComponent<{}> = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <Layout>
      <Accounts />
    </Layout>
  );
};

export default App;
