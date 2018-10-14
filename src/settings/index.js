// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TogglesPage from './pages/togglesPage';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/toggles`} component={TogglesPage} />
  </Switch>
);
