// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import withAppBar from '../../shared/enhancers/withAppBar';
import { getElectors } from '../selectors/homePageSelectors';
import HomeStyles from '../styles/homeStyles';

type Props = {
  electors: [{ name: string, weight: number }]
};

class Home extends Component<Props> {
  render() {
    const { electors } = this.props;

    return (
      <List>
        {_.map(electors, (elector, index) => (
          <ListItem key={index}>
            <Avatar>{_.upperCase(elector.name[0])}</Avatar>
            <ListItemText primary={elector.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  electors: getElectors(state)
});

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
