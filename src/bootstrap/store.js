import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const reduxDevTools =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = reduxDevTools || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
