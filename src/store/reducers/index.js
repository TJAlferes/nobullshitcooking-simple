import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
//import recipesReducer from "./recipes";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  //recipes: recipesReducer,
});

export default rootReducer;