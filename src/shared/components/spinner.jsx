// @flow

import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import SpinnerStyles from '../styles/spinnerStyles';

type Props = {
  classes: *
};

class Spinner extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CircularProgress className={classes.spinner} />
      </div>
    );
  }
}

export default withStyles(SpinnerStyles)(Spinner);
