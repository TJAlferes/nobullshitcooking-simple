import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {};

const getIngredientsRequest = (state, action) => {
  return updateObject(state, {
    //
  });
};

const getIngredientsSuccess = (state, action) => {
  return updateObject(state, {
    //
  });
};

const getIngredientsFail = (state, action) => {
  return updateObject(state, {
    //
  });
};

const getIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTS_REQUEST: return getIngredientsRequest(state, action);
    case actionTypes.GET_INGREDIENTS_SUCCESS: return getIngredientsSuccess(state, action);
    case actionTypes.GET_INGREDIENTS_FAIL: return getIngredientsFail(state, action);
    default: return state;
  }
};

export default getIngredientsReducer;