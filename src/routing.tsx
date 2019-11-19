import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Login from './components/login';
import NotFound from './components/not-found';
import OAuth from './components/oauth';
import Permissions from './components/permissions';

const Routing: FunctionComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/oauth/callback" component={OAuth} />
      <Route path="/permissions" component={Permissions} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
