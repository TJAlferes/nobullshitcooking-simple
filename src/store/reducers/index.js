import { combineReducers } from 'redux';

//import modalsReducer from './modals';
import themeReducer from './theme';
import menuReducer from './menu';
import authReducer from './auth';
import dataReducer from './data';
import searchReducer from './search';
import userReducer from './user';
import plannerReducer from './planner';
import messengerReducer from './messenger';



/*
import all reducers,
combine them into a single "root" reducer,
and export it (to be used in src/index.js)
*/

const rootReducer = combineReducers({
  //modals: modalsReducer,
  theme: themeReducer,
  menu: menuReducer,
  auth: authReducer,
  data: dataReducer,
  search: searchReducer,
  user: userReducer,
  planner: plannerReducer,
  messenger: messengerReducer,
});

export default rootReducer;