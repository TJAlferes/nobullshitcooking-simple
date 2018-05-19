import * as actionTypes from './actionTypes';

export const getIngredientsStart = () => ({
  type: actionTypes.GET_INGREDIENTS_START
});

export const getIngredientsSuccess = () => ({
  type: actionTypes.GET_INGREDIENTS_SUCCESS
});

export const getIngredientsFail = () => ({
  type: actionTypes.GET_INGREDIENTS_FAIL
});