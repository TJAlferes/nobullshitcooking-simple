import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import cartReducer from './cart/reducer';
import dataReducer from './data/reducer';
import geolocationReducer from './geolocation/reducer';
import menuReducer from './menu/reducer';
import messengerReducer from './messenger/reducer';
import nobscappReducer from './nobscapp/reducer';
import plannerReducer from './planner/reducer';
import plannerViewReducer from './plannerView/reducer';
import searchReducer from './search/reducer';
import themeReducer from './theme/reducer';
import userReducer from './user/reducer';

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

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;