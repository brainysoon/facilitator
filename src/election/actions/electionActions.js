import _ from 'lodash';
import { goBack } from 'connected-react-router';
import localforage from 'localforage';

import ElectionActionTypes from './electionActionTypes';

const {
  ELECTION_START_ELECT,
  ELECTION_ADD_ELECTOR,
  ELECTION_FETCH_ELECTORS
} = ElectionActionTypes;

export const fetchElectors = () => {
  return dispatch => {
    localforage
      .getItem('electors')
      .then(electors => {
        const sortedElectors = _.chain(electors)
          .sort(value => value.name)
          .toArray()
          .value();

        dispatch({
          type: ELECTION_FETCH_ELECTORS,
          response: {
            electors: sortedElectors
          }
        });
      })
      .catch(() => {});
  };
};

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

export const addElector = elector => {
  return dispatch => {
    localforage
      .getItem('electors')
      .then(electors => {
        !electors && (electors = {});

        electors[_.toUpper(elector)] = {
          name: elector,
          weight: _.random(0, 3)
        };
        return localforage.setItem('electors', electors);
      })
      .then(electors => {
        dispatch({
          type: ELECTION_ADD_ELECTOR,
          electors
        });
        dispatch(goBack());
      })
      .catch(() => {});
  };
};

export const deleteElector = elector => {
  return dispatch => {
    localforage
      .getItem('electors')
      .then(electors => {
        delete electors[_.toUpper(elector.name)];
        return localforage.setItem('electors', electors);
      })
      .then(() => {
        dispatch(fetchElectors());
      })
      .catch(() => {});
  };
};
