import * as actionTypes from './actionTypes';

export const getRecipesRequest = () => ({
  type: actionTypes.GET_RECIPES_REQUEST
});

export const getRecipesSucceeded = () => ({
  type: actionTypes.GET_RECIPES_SUCCEEDED
});

export const getRecipesFailed = () => ({
  type: actionTypes.GET_RECIPES_FAILED
});