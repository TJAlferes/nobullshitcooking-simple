import {
  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,
  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED
} from './types';

export const userSaveRecipe = (recipeId: number) => ({
  type: USER_SAVE_RECIPE,
  recipeId
});

export const userSaveRecipeSucceeded = (message: string) => ({
  type: USER_SAVE_RECIPE_SUCCEEDED,
  message
});

export const userSaveRecipeFailed = (message: string) => ({
  type: USER_SAVE_RECIPE_FAILED,
  message
});

export const userUnsaveRecipe = (recipeId: number) => ({
  type: USER_UNSAVE_RECIPE,
  recipeId
});

export const userUnsaveRecipeSucceeded = (message: string) => ({
  type: USER_UNSAVE_RECIPE_SUCCEEDED,
  message
});

export const userUnsaveRecipeFailed = (message: string) => ({
  type: USER_UNSAVE_RECIPE_FAILED,
  message
});