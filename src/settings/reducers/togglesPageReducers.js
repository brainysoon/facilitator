// @flow

import { combineReducers } from 'redux';
import _ from 'lodash';

import SettingsActions from '../actions/settingsActionTypes';

const { SETTINGS_TOGGLE_TOGGLES } = SettingsActions;

const initialTogglesState = {
  landingAnimation: false
};

const toggles = (state = initialTogglesState, action) => {
  switch (action.type) {
    case SETTINGS_TOGGLE_TOGGLES: {
      const { toggles } = action;
      const resultToggles = { ...state };
      _.forEach(
        toggles,
        value => value && (resultToggles[value] = !resultToggles[value])
      );

      return resultToggles;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ toggles });
