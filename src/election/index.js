import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage';
import ResultPage from './pages/resultPage';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/home`} component={HomePage} />
    <Route path={`${match.url}/result`} component={ResultPage} />
  </Switch>
);
