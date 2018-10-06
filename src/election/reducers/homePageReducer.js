import { combineReducers } from 'redux';

const initialState = {
  electors: [
    {
      name: 'Peppa',
      weight: 1
    },
    {
      name: 'George',
      weight: 0.5
    },
    {
      name: 'Alexander',
      weight: 0.8
    },
    {
      name: 'Candy',
      weight: 0.9
    }
  ]
};

const response = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default combineReducers({ response });
