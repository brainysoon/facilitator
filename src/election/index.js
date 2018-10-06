import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/home`} component={Home} />
  </Switch>
);
