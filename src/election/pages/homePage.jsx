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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import withAppBar from '../../shared/enhancers/withAppBar';
import { getElectors } from '../selectors/homePageSelectors';
import HomeStyles from '../styles/homeStyles';
import * as ElectionActions from '../actions/electionActions';
import withConnectedReactRouter from '../../shared/enhancers/withConnectedReactRouter';

type Props = {
  classes: *,
  electors: [{ name: string, weight: number }],
  startElect: () => void,
  fetchElectors: () => void
};

class HomePage extends Component<Props> {
  componentDidMount() {
    const { fetchElectors } = this.props;

    fetchElectors && fetchElectors();
  }

  _handleElect = () => {
    const { electors, startElect, push } = this.props;

    startElect && startElect(electors);
    push('/election/result');
  };

  render() {
    const { classes, electors, deleteElector } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {_.map(electors, (elector, index) => (
            <ListItem key={index}>
              <Avatar>{_.upperCase(elector.name[0])}</Avatar>
              <ListItemText primary={elector.name} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Delete"
                  onClick={() => deleteElector(elector)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div className={classes.bottomKit}>
          <Button
            variant="extendedFab"
            color="primary"
            onClick={this._handleElect}
          >
            <StartIcon />
            <span> Start Random </span>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  electors: getElectors(state)
});

const mapDispatchToProps = {
  startElect: ElectionActions.startElect,
  fetchElectors: ElectionActions.fetchElectors,
  deleteElector: ElectionActions.deleteElector
};

const enhancers = _.flowRight(
  withAppBar(),
  withStyles(HomeStyles),
  withConnectedReactRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhancers(HomePage);
