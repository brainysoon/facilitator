// @flow

import { combineReducers } from 'redux';
import _ from 'lodash';

import SettingsActions from '../actions/settingsActionTypes';

const { SETTINGS_TOGGLE_TOGGLES, SETTINGS_FETCH_TOGGLES } = SettingsActions;

const initialTogglesState = {
  landingAnimation: false
};

const toggles = (state = initialTogglesState, action) => {
  switch (action.type) {
    case SETTINGS_FETCH_TOGGLES:
    case SETTINGS_TOGGLE_TOGGLES: {
      return action.toggles;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ toggles });
