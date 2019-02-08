import * as actionTypes from './actionTypes';

export const plannerAddRecipeToPlan = recipeInstance => ({
  type: actionTypes.PLANNER_ADD_RECIPE_TO_PLAN,
  recipeInstance
});

export const plannerRemoveRecipeFromPlan = recipeInstance => ({
  type: actionTypes.PLANNER_REMOVE_RECIPE_FROM_PLAN,
  recipeInstance
});

export const plannerClickDay = day => ({
  type: actionTypes.PLANNER_CLICK_DAY,
  day
});

export const plannerAddRecipeToDay = (day, recipe) => ({
  type: actionTypes.PLANNER_ADD_RECIPE_TO_DAY,
  day,
  recipe
});

export const plannerRemoveRecipeFromDay = (day, index) => ({
  type: actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY,
  day,
  index
});

export const plannerReorderRecipeInDay = (
  day,
  dragIndex,
  hoverIndex,
  dragRecipe
) => ({
  type: actionTypes.PLANNER_REORDER_RECIPE_IN_DAY,
  day,
  dragIndex,
  hoverIndex,
  dragRecipe
});