import * as actionTypes from './actionTypes';

export const clickDay = () => ({
  type: actionTypes.CLICK_DAY
});

export const addRecipeToDay = () => ({
  type: actionTypes.ADD_RECIPE_TO_DAY
});

export const removeRecipeFromDay = () => ({
  type: actionTypes.REMOVE_RECIPE_FROM_DAY
});

export const reorderRecipeInDay = () => ({
  type: actionTypes.REORDER_RECIPE_IN_DAY
});