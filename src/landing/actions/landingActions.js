// @flow

import store from 'store2';
import LandingActionTypes from './landingActionTypes';

const {
  LANDING_FETCH_LANDING_STATUS,
  LANDING_FETCH_LANDING_PAGE
} = LandingActionTypes;

export const fetchLandingStatus = () => {
  return (dispatch: *) => {
    new Promise(resolve => resolve(store.get('LANDING_STATUS'))).then(value => {
      dispatch({
        type: LANDING_FETCH_LANDING_STATUS,
        value
      });
    });
  };
};

export const fetchLandingPage = () => {
  return {
    type: LANDING_FETCH_LANDING_PAGE
  };
};
