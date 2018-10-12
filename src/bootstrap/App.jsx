import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Spinner from '../shared/components/spinner';

const Election = Loadable({
  loader: () => import('../election'),
  loading: Spinner
});

const Landing = Loadable({
  loader: () => import('../landing'),
  loading: Spinner
});

export default (
  <Switch>
    <Route path="/election" component={Election} />
    <Route path="/" component={Landing} />
  </Switch>
);
