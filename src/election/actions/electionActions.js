import _ from 'lodash';

import ElectionActionTypes from './electionActionTypes';

const { ELECTION_START_ELECT } = ElectionActionTypes;

export const startElect = electors => {
  const result = _.chain(electors)
    .map(elector => ({
      ...elector,
      value: (_.random(0, 10) + elector.weight) % 10
    }))
    .sortBy(elector => elector.value)
    .first()
    .value();

  return {
    type: ELECTION_START_ELECT,
    result
  };
};
