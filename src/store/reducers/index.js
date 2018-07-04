import { combineReducers } from 'redux';

import modalsReducer from './modals/modals';
import ingredientsReducer from './ingredients/ingredients';
//import recipesReducer from "./recipes/recipes";

/*
  import all reducers,
  combine them into a single "root" reducer,
  and export it (to be used in src/index.js)
*/
const rootReducer = combineReducers({
  modals: modalsReducer,
  ingredients: ingredientsReducer,
  //recipes: recipesReducer,
});

export default rootReducer;