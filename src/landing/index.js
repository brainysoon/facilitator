// @flow

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import FirstLandingPage from './pages/firstLandingPage';
import LandingPage from './pages/landingPage';
import * as SettingsActions from '../settings/actions/settingsActions';
import withConnectedReactRouter from '../shared/enhancers/withConnectedReactRouter';

type Props = {
  toggles: *,
  fetchToggles: () => void
};

export class Landing extends Component<Props> {
  componentDidMount() {
    const { fetchToggles, push } = this.props;

    fetchToggles &&
      fetchToggles().then(toggles => {
        !toggles.landingAnimation && push('/election/home');
      });
  }

  render() {
    const { toggles } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/first/landing" component={FirstLandingPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  toggles: _.get(state, 'app.settings.togglesPage.toggles')
});

const mapDispatchToProps = {
  fetchToggles: SettingsActions.fetchToggles
};

const enhancers = _.flowRight(
  withConnectedReactRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(Landing);
