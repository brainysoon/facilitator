// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import withAppBar from '../../shared/enhancers/withAppBar';
import HomeStyles from '../styles/homeStyles';

type Props = {};

class Home extends Component<Props> {
  render() {
    return <div>Wellcome home!</div>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

const enhancers = _.flowRight(
  withStyles(HomeStyles),
  withAppBar,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(Home);
