// @flow

import React from 'react';
import { connect } from 'react-redux';
import { push, replace, go, goBack, goForward } from 'connected-react-router';

const withConnectedReactRouter = (Component: *) => {
  const WithConnectedReactRouter = (props: *) => <Component {...props} />;

  return connect(
    () => ({}),
    { push, replace, go, goBack, goForward }
  )(WithConnectedReactRouter);
};

export default withConnectedReactRouter;
