// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import * as ElectionActions from '../actions/electionActions';
import withAppBar from '../../shared/enhancers/withAppBar';
import AddElectorPageStyles from '../styles/addElectorPageStyles';

type Props = {
  classes: *,
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.formContainer} onSubmit={this._handleSubmit}>
          <Input
            value={this.state.elector}
            placeholder="姓名"
            onChange={event => {
              this.setState({ elector: event.target.value });
            }}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            添加
          </Button>
        </form>
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
  withStyles(AddElectorPageStyles),
  connect(
    mapStateToProps,
    mapDispathToProps
  )
);

export default enhancers(AddElectorPage);
