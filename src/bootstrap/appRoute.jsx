import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Spinner from '../shared/components/spinner';

const Election = Loadable({
  loader: () => import('../election'),
  loading: Spinner
});

const Settings = Loadable({
  loader: () => import('../settings'),
  loading: Spinner
});

export default (
  <Switch>
    <Route exact path="/" component={Election} />
    <Route path="/election" component={Election} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
