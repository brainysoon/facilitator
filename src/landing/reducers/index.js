import { combineReducers } from 'redux';

import landingPage from './landingPageReducer';
import firstLandingPage from './firstLandingPageReducer';

export default combineReducers({ landingPage, firstLandingPage });
