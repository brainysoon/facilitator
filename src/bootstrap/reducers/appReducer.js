import { combineReducers } from 'redux';

import landing from '../../landing/reducers';
import election from '../../election/reducers';

export default combineReducers({ landing, election });
