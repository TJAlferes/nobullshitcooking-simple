import * as actionTypes from './actionTypes';

export const getIngredientsRequest = () => ({
  type: actionTypes.GET_INGREDIENTS_REQUEST
});

export const getIngredientsSucceeded = () => ({
  type: actionTypes.GET_INGREDIENTS_SUCCEEDED
});

export const getIngredientsFailed = () => ({
  type: actionTypes.GET_INGREDIENTS_FAILED
});