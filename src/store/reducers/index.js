import { combineReducers } from 'redux';

//import modalsReducer from './modals/modals';
import menuReducer from './menu';
//import ingredientsReducer from './ingredients/ingredients';
//import recipesReducer from "./recipes/recipes";
import plannerReducer from './planner';

/*
  import all reducers,
  combine them into a single "root" reducer,
  and export it (to be used in src/index.js)
*/
const rootReducer = combineReducers({
  //modals: modalsReducer,
  menu: menuReducer,
  //ingredients: ingredientsReducer,
  //recipes: recipesReducer,
  planner: plannerReducer
});

export default rootReducer;