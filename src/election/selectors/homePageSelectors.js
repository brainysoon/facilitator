import _ from 'lodash';

export const getElectors = state =>
  _.get(state, 'app.election.homePage.response.electors');
