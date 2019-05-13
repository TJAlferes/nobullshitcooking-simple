import { combineReducers } from 'redux';

//import modalsReducer from './modals';
import themeReducer from './theme';
import menuReducer from './menu';
import authReducer from './auth';
import plannerReducer from './planner';
//import equipmentReducer from './equipment';
//import ingredientsReducer from './ingredients';
//import recipesReducer from "./recipes";



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
  planner: plannerReducer,
  //equipment: equipmentReducer,
  //ingredients: ingredientsReducer,
  //recipes: recipesReducer,
});

export default rootReducer;