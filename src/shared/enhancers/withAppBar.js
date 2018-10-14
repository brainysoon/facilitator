// @flow

import React from 'react';
import _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBack from '@material-ui/icons/ArrowBack';

import WithAppBarStyles from '../styles/withAppBarStyles';
import withConnectedReactRouter from './withConnectedReactRouter';

type Props = {
  classes: *
};

type Options = {
  shouldShowMenu: boolean,
  title: string
};

const defaultOptions = {
  shouldShowMenu: true,
  title: 'Unicorn'
};

const withAppBar = (options: Options = defaultOptions) => {
  const { shouldShowMenu, title } = options;

  return Component => {
    class WithAppBar extends React.Component<Props> {
      state = {
        open: false
      };

      _toggleDrawer = (toggleState: boolean) => () => {
        this.setState({
          open: toggleState
        });
      };

      _renderMenuButton = () => {
        const { classes } = this.props;

        return (
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this._toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        );
      };

      _renderBackButton = () => {
        const { classes, goBack } = this.props;

        return (
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Back"
            onClick={goBack}
          >
            <ArrowBack />
          </IconButton>
        );
      };

      _handleItemClick = (toPath: string) => {
        const { push } = this.props;

        push && push(toPath);
      };

      render() {
        const { classes, ...restProps } = this.props;
        const { open } = this.state;

        return (
          <div className={classes.root}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                {shouldShowMenu
                  ? this._renderMenuButton()
                  : this._renderBackButton()}
                <Typography variant="title" color="inherit">
                  {title}
                </Typography>
              </Toolbar>
            </AppBar>
            <SwipeableDrawer
              open={open}
              onClose={this._toggleDrawer(false)}
              onOpen={this._toggleDrawer(true)}
            >
              <div className={classes.menuList}>
                <List>
                  <ListItem
                    onClick={() =>
                      this._handleItemClick('/election/add/elector')
                    }
                    button
                  >
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Elector" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem
                    onClick={() => this._handleItemClick('/settings/toggles')}
                    button
                  >
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
            <div className={classes.content}>
              <Component {...restProps} />
            </div>
          </div>
        );
      }
    }

    const enhancers = _.flowRight(
      withStyles(WithAppBarStyles),
      withConnectedReactRouter
    );
    return enhancers(WithAppBar);
  };
};

export default withAppBar;
