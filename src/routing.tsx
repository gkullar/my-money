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
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/permissions" component={Permissions} />
      <Route exact path="/oauth/callback" component={OAuth} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
