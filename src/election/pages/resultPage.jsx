// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { getResult } from '../selectors/resultPageSelectors';
import withAppBar from '../../shared/enhancers/withAppBar';
import ResultPageStyle from '../styles/resultPageStyles';

type Props = {
  result: { name: string },
  classes: *
};

class ResultPage extends Component<Props> {
  render() {
    const { result, classes } = this.props;
    return (
      <div className={classes.root}>
        <Avatar className={classes.resultAvatar}>
          {_.upperCase(result.name ? result.name[0] : ':)')}
        </Avatar>
        <Paper className={classes.resultDescContainer} elevation={5}>
          <Typography variant="h5" omponent="h3">
            {`The facilitator is ${result.name}`}
          </Typography>
          <Typography component="p">
            Please remember to take the ownership :)
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: getResult(state)
});
const mapDispatchToProps = {};

const enhancers = _.flowRight(
  withAppBar({ shouldShowMenu: false, title: 'Result' }),
  withStyles(ResultPageStyle),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(ResultPage);
