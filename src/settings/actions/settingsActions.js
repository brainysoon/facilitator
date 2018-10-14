// @flow

import SettingsActions from './settingsActionTypes';
import localforage from 'localforage';
import _ from 'lodash';

const { SETTINGS_TOGGLE_TOGGLES, SETTINGS_FETCH_TOGGLES } = SettingsActions;

export const toggleToggles = (toggledToggles: Array<string>) => {
  return (dispatch, getState) => {
    const toggles = _.get(getState(), 'app.settings.togglesPage.toggles');
    const resultToggles = { ...toggles };
    _.forEach(
      toggledToggles,
      value => value && (resultToggles[value] = !resultToggles[value])
    );

    localforage.setItem('toggles', resultToggles).then(toggles => {
      return dispatch({
        type: SETTINGS_TOGGLE_TOGGLES,
        toggles
      });
    });
  };
};

export const fetchToggles = () => {
  return dispatch => {
    return localforage.getItem('toggles').then((toggles = {}) => {
      dispatch({
        type: SETTINGS_FETCH_TOGGLES,
        toggles
      });

      return toggles;
    });
  };
};
