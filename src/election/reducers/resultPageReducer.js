import { combineReducers } from 'redux';

import ElectionActionTypes from '../actions/electionActionTypes';

const { ELECTION_START_ELECT } = ElectionActionTypes;

const initialState = {};

const result = (state = initialState, action) => {
  switch (action.type) {
    case ELECTION_START_ELECT: {
      return action.result;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ result });
