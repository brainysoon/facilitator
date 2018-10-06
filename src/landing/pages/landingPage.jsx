// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as LandingActions from '../actions/landingActions';
import LandingPageStyles from '../styles/landingPageStyles';
import withConnectedReactRouter from '../../shared/enhancers/withConnectedReactRouter';
import Timer from '../components/timer';

type Props = {
  isFirstLanding: boolean,
  counter: number,
  brand: string,
  classes: *
};

class LandingPage extends Component<Props> {
  componentDidMount() {
    const {
      isFirstLanding,
      fetchLandingStatus,
      fetchLandingPage,
      push
    } = this.props;

    isFirstLanding ? push('/first/landing') : fetchLandingStatus();
    fetchLandingPage && fetchLandingPage();
  }

  _handleNext = () => {
    this.props.push('/election/home');
  };

  render() {
    const { brand, classes, counter } = this.props;

    return (
      <div>
        <img className={classes.brand} src={brand} />
        <Timer handleDone={this._handleNext} counter={counter} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFirstLanding: _.get(state, 'app.landing.isFirstLanding'),
  counter: _.get(state, 'app.landing.landingPage.counter'),
  brand: _.get(state, 'app.landing.landingPage.brand')
});

const mapDispatchToProps = {
  fetchLandingStatus: LandingActions.fetchLandingStatus,
  fetchLandingPage: LandingActions.fetchLandingPage
};

const enhancers = _.flowRight(
  withStyles(LandingPageStyles),
  withConnectedReactRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(LandingPage);
