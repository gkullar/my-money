import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Accounts from './accounts';
import AuthenticatedLayout from './authenticated-layout';
import Transactions from './transactions';
import { useAuth } from '../hooks/use-auth';

const App: FunctionComponent<{}> = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <AuthenticatedLayout>
      <Switch>
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/accounts/:id" component={Transactions} />
        <Redirect exact from="/" to="/accounts" />
        <Redirect to="/not-found" />
      </Switch>
    </AuthenticatedLayout>
  );
};

export default App;
