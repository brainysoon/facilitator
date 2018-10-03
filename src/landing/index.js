import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstLandingPage from './pages/firstLandingPage';
import LandingPage from './pages/landingPage';

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/first/landing" component={FirstLandingPage} />
  </Switch>
);
