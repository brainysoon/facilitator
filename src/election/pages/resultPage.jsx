// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { getResult } from '../selectors/resultPageSelectors';
import withAppBar from '../../shared/enhancers/withAppBar';

type Props = {
  result: { name: string }
};

class ResultPage extends Component<Props> {
  render() {
    const { result } = this.props;
    return <div>{result.name}</div>;
  }
}

const mapStateToProps = state => ({
  result: getResult(state)
});
const mapDispatchToProps = {};

const enhancers = _.flowRight(
  withAppBar,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(ResultPage);
