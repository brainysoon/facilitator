import { combineReducers } from 'redux';

import ElectionActionTypes from '../actions/electionActionTypes';

const { ELECTION_FETCH_ELECTORS } = ElectionActionTypes;

const response = (state = {}, action) => {
  switch (action.type) {
    case ELECTION_FETCH_ELECTORS: {
      return action.response;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ response });
