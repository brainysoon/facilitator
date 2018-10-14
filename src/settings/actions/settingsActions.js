// @flow

import SettingsActions from './settingsActionTypes';

const { SETTINGS_TOGGLE_TOGGLES } = SettingsActions;

export const toggleToggles = (toggles: Array<string>) => ({
  type: SETTINGS_TOGGLE_TOGGLES,
  toggles
});
