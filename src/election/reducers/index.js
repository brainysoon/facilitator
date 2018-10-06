import { combineReducers } from 'redux';

import homePage from './homePageReducer';
import resultPage from './resultPageReducer';

export default combineReducers({ homePage, resultPage });
