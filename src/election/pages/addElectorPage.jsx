// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import * as ElectionActions from '../actions/electionActions';
import withAppBar from '../../shared/enhancers/withAppBar';

type Props = {
  addElector: () => void
};

class AddElectorPage extends Component<Props> {
  state = {
    elector: ''
  };

  _handleSubmit = () => {
    const { addElector } = this.props;
    const { elector } = this.state;

    this.setState({ elector: '' });
    addElector && addElector(elector);
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.elector}
          onChange={event => {
            this.setState({ elector: event.target.value });
          }}
        />
        <Button onClick={this._handleSubmit}>添加</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispathToProps = {
  addElector: ElectionActions.addElector
};

const enhancers = _.flowRight(
  withAppBar({ shouldShowMenu: false }),
  connect(
    mapStateToProps,
    mapDispathToProps
  )
);

export default enhancers(AddElectorPage);
