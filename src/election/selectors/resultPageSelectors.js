import _ from 'lodash';

export const getResult = state =>
  _.get(state, 'app.election.resultPage.result');
