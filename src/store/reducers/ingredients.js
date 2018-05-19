import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {};

const ingredientsStart = (state, action) => {
  return updateObject(state, {
    //
  });
};

const ingredientsSuccess = (state, action) => {
  return updateObject(state, {
    //
  });
};

const ingredientsFail = (state, action) => {
  return updateObject(state, {
    //
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INGREDIENTS_START: return ingredientsStart(state, action);
    case actionTypes.INGREDIENTS_SUCCESS: return ingredientsSuccess(state, action);
    case actionTypes.INGREDIENTS_FAIL: return ingredientsFail(state, action);
    default: return state;
  }
};

export default reducer;