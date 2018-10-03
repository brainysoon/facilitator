import LandingActionTypes from '../actions/landingActionTypes';

const { LANDING_FETCH_LANDING_PAGE } = LandingActionTypes;

export default (state = {}, action) => {
  switch (action.type) {
    case LANDING_FETCH_LANDING_PAGE: {
      return {
        counter: 6,
        brand:
          'https://up.enterdesk.com/edpic/76/54/b2/7654b28b1df8bed811dba6e29f3b2840.jpg'
      };
    }
    default: {
      return {
        counter: 6,
        brand:
          'https://up.enterdesk.com/edpic/76/54/b2/7654b28b1df8bed811dba6e29f3b2840.jpg'
      };
    }
  }
};
