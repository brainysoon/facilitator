// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import StartIcon from '@material-ui/icons/PlayCircleFilled';

import withAppBar from '../../shared/enhancers/withAppBar';
import { getElectors } from '../selectors/homePageSelectors';
import HomeStyles from '../styles/homeStyles';

type Props = {
  classes: *,
  electors: [{ name: string, weight: number }]
};

class Home extends Component<Props> {
  render() {
    const { classes, electors } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {_.map(electors, (elector, index) => (
            <ListItem key={index}>
              <Avatar>{_.upperCase(elector.name[0])}</Avatar>
              <ListItemText primary={elector.name} />
            </ListItem>
          ))}
        </List>
        <div className={classes.bottomKit}>
          <Button variant="extendedFab" color="primary">
            <StartIcon />
            开始随机
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  electors: getElectors(state)
});

const mapDispatchToProps = {};

const enhancers = _.flowRight(
  withAppBar,
  withStyles(HomeStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(Home);
