// @flow

import LandingActionTypes from './landingActionTypes';

const {
  LANDING_FETCH_LANDING_STATUS,
  LANDING_FETCH_LANDING_PAGE
} = LandingActionTypes;

export const fetchLandingStatus = () => {
  return (dispatch: *) => {
    new Promise(resolve => resolve({})).then(value => {
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
