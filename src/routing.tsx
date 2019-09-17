import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import NotFound from './components/not-found';

const Routing: FunctionComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
