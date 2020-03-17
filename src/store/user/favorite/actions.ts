import {
  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED
} from './types';

export const userFavoriteRecipe = (recipeId: number) => ({
  type: USER_FAVORITE_RECIPE,
  recipeId
});

export const userFavoriteRecipeSucceeded = (message: string) => ({
  type: USER_FAVORITE_RECIPE_SUCCEEDED,
  message
});

export const userFavoriteRecipeFailed = (message: string) => ({
  type: USER_FAVORITE_RECIPE_FAILED,
  message
});

export const userUnfavoriteRecipe = (recipeId: number) => ({
  type: USER_UNFAVORITE_RECIPE,
  recipeId
});

export const userUnfavoriteRecipeSucceeded = (message: string) => ({
  type: USER_UNFAVORITE_RECIPE_SUCCEEDED,
  message
});

export const userUnfavoriteRecipeFailed = (message: string) => ({
  type: USER_UNFAVORITE_RECIPE_FAILED,
  message
});