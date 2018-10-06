// @flow

import React from 'react';
import _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WithAppBarStyles from '../styles/withAppBarStyles';

type Props = {
  classes: *
};

const withAppBar = Component => {
  class WithAppBar extends React.Component<Props> {
    render() {
      const { classes, ...restProps } = this.props;

      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Unicorn
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <Component {...restProps} />
          </div>
        </div>
      );
    }
  }

  const enhancers = _.flowRight(withStyles(WithAppBarStyles));
  return enhancers(WithAppBar);
};

export default withAppBar;
