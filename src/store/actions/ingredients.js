import * as actionTypes from './actionTypes';

export const getIngredientsRequest = () => ({
  type: actionTypes.GET_INGREDIENTS_REQUEST
});

export const getIngredientsSuccess = () => ({
  type: actionTypes.GET_INGREDIENTS_SUCCESS
});

export const getIngredientsFail = () => ({
  type: actionTypes.GET_INGREDIENTS_FAIL
});