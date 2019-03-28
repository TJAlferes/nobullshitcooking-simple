import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../utils/updateObject';

const initialState = {};

const getIngredientsRequest = (state, action) => {
  return updateObject(state, {
    //
  });
};

const getIngredientsSucceeded = (state, action) => {
  return updateObject(state, {
    //
  });
};

const getIngredientsFailed = (state, action) => {
  return updateObject(state, {
    //
  });
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTS_REQUEST: return getIngredientsRequest(state, action);
    case actionTypes.GET_INGREDIENTS_SUCCEEDED: return getIngredientsSucceeded(state, action);
    case actionTypes.GET_INGREDIENTS_FAILED: return getIngredientsFailed(state, action);
    default: return state;
  }
};

export default ingredientsReducer;