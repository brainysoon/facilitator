import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import app from './app';
import store from './store';
import { history } from '../shared/objects/browserObjects';

export default (
  <Provider store={store}>
    <ConnectedRouter history={history}>{app}</ConnectedRouter>
  </Provider>
);
