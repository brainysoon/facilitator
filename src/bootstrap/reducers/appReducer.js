import { combineReducers } from 'redux';

import landing from '../../landing/reducers';
import election from '../../election/reducers';
import settings from '../../settings/reducers';

export default combineReducers({ landing, election, settings });
