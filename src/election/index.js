import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/home`} component={HomePage} />
  </Switch>
);
