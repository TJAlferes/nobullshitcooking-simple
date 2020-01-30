import { combineReducers } from 'redux';

import authReducer from './auth';
import cartReducer from './cart';
import dataReducer from './data';
import geolocationReducer from './geolocation';
import menuReducer from './menu';
import messengerReducer from './messenger';
import nobscappReducer from './nobscapp';
import plannerReducer from './planner';
import plannerViewReducer from './plannerView';
import searchReducer from './search';
import themeReducer from './theme';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  data: dataReducer,
  geolocation: geolocationReducer,
  menu: menuReducer,
  messenger: messengerReducer,
  nobscapp: nobscappReducer,
  planner: plannerReducer,
  plannerView: plannerViewReducer,
  search: searchReducer,
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;