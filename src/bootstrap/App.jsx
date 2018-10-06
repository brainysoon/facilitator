import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../landing';
import Election from '../election';

export default (
  <Switch>
    <Route path="/election" component={Election} />
    <Route path="/" component={Landing} />
  </Switch>
);
