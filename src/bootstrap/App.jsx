import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../landing';

export default (
  <Switch>
    <Route path="/" component={Landing} />
  </Switch>
);
