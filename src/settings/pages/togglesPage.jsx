// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import AirplayIcon from '@material-ui/icons/Airplay';

import TogglesPageStyles from '../styles/togglesPageStyles';
import * as SettingsActions from '../actions/settingsActions';
import withAppBar from '../../shared/enhancers/withAppBar';

type Props = {
  toggles: *,
  toggleToggles: (Array<stirng>) => void
};

class TogglesPage extends Component<Props> {
  _handleSwitchToggle = (toggle: string) => {
    const { toggleToggles } = this.props;

    toggleToggles && toggleToggles([toggle]);
  };

  render() {
    const { classes, toggles, toggleToggles } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemIcon>
              <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary="首屏动画" />
            <ListItemSecondaryAction>
              <Switch
                onChange={() => this._handleSwitchToggle('landingAnimation')}
                checked={toggles.landingAnimation}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggles: _.get(state, 'app.settings.togglesPage.toggles')
});

const mapDispathToProps = {
  toggleToggles: SettingsActions.toggleToggles
};

const enhancers = _.flowRight(
  withAppBar({ shouldShowMenu: false, title: 'Settings' }),
  withStyles(TogglesPageStyles),
  connect(
    mapStateToProps,
    mapDispathToProps
  )
);

export default enhancers(TogglesPage);
