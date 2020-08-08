import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_CREATE_NEW_RECIPE_FAILED,
  STAFF_EDIT_RECIPE,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE_FAILED,
  STAFF_DELETE_RECIPE,
  STAFF_DELETE_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE_FAILED,
  ICreatingRecipeInfo,
  IEditingRecipeInfo
} from './types';

export const staffCreateNewRecipe = (recipeInfo: ICreatingRecipeInfo) => ({
  type: STAFF_CREATE_NEW_RECIPE,
  recipeInfo
});

export const staffCreateNewRecipeSucceeded = (message: string) => ({
  type: STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  message
});

export const staffCreateNewRecipeFailed = (message: string) => ({
  type: STAFF_CREATE_NEW_RECIPE_FAILED,
  message
});

export const staffEditRecipe = (recipeInfo: IEditingRecipeInfo) => ({
  type: STAFF_EDIT_RECIPE,
  recipeInfo
});

export const staffEditRecipeSucceeded = (message: string) => ({
  type: STAFF_EDIT_RECIPE_SUCCEEDED,
  message
});

export const staffEditRecipeFailed = (message: string) => ({
  type: STAFF_EDIT_RECIPE_FAILED,
  message
});

export const staffDeleteRecipe = (id: number) => ({
  type: STAFF_DELETE_RECIPE,
  id
});

export const staffDeleteRecipeSucceeded = (message: string) => ({
  type: STAFF_DELETE_RECIPE_SUCCEEDED,
  message
});

export const staffDeleteRecipeFailed = (message: string) => ({
  type: STAFF_DELETE_RECIPE_FAILED,
  message
});