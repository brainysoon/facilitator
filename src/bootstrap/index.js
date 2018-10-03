import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

export default (
  <Provider store={store}>
    <Router>{App}</Router>
  </Provider>
);
