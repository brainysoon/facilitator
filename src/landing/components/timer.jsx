// @flow

import React, { Component } from 'react';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';

import TimerStyles from '../styles/timerStyles';

type Props = {
  counter: number,
  handleDone: () => void
};

class Timer extends Component<Props> {
  state = {
    count: this.props.counter
  };

  _hanleCount = () => {
    const { count } = this.state;
    const { handleDone } = this.props;

    const nextCount = count - 1;
    this.setState({ count: nextCount });

    if (nextCount === 0) {
      handleDone && handleDone();
      clearInterval(this.interval);
    }
  };

  componentDidMount() {
    this.interval = setInterval(this._hanleCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { classes } = this.props;
    const { count } = this.state;

    return <div className={classes.count}>{count}</div>;
  }
}

const enhancers = _.flowRight(withStyles(TimerStyles));

export default enhancers(Timer);
