import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE_FAILED,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE_FAILED,
  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE_FAILED,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE_FAILED,
  CreatingRecipeInfo,
  EditingRecipeInfo
} from './types';

export const userCreateNewPrivateRecipe = (
  recipeInfo: CreatingRecipeInfo
) => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE,
  recipeInfo
});

export const userCreateNewPrivateRecipeSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  message
});

export const userCreateNewPrivateRecipeFailed = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  message
});

export const userEditPrivateRecipe = (
  recipeInfo: EditingRecipeInfo
) => ({
  type: USER_EDIT_PRIVATE_RECIPE,
  recipeInfo
});

export const userEditPrivateRecipeSucceeded = (message: string) => ({
  type: USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  message
});

export const userEditPrivateRecipeFailed = (message: string) => ({
  type: USER_EDIT_PRIVATE_RECIPE_FAILED,
  message
});

export const userDeletePrivateRecipe = (recipeId: number) => ({
  type: USER_DELETE_PRIVATE_RECIPE,
  recipeId
});

export const userDeletePrivateRecipeSucceeded = (message: string) => ({
  type: USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  message
});

export const userDeletePrivateRecipeFailed = (message: string) => ({
  type: USER_DELETE_PRIVATE_RECIPE_FAILED,
  message
});

export const userCreateNewPublicRecipe = (
  recipeInfo: CreatingRecipeInfo
) => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE,
  recipeInfo
});

export const userCreateNewPublicRecipeSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  message
});

export const userCreateNewPublicRecipeFailed = (message: string) => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  message
});

export const userEditPublicRecipe = (
  recipeInfo: EditingRecipeInfo
) => ({
  type: USER_EDIT_PUBLIC_RECIPE,
  recipeInfo
});

export const userEditPublicRecipeSucceeded = (message: string) => ({
  type: USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  message
});

export const userEditPublicRecipeFailed = (message: string) => ({
  type: USER_EDIT_PUBLIC_RECIPE_FAILED,
  message
});

export const userDisownPublicRecipe = (recipeId: number) => ({
  type: USER_DISOWN_PUBLIC_RECIPE,
  recipeId
});

export const userDisownPublicRecipeSucceeded = (message: string) => ({
  type: USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  message
});

export const userDisownPublicRecipeFailed = (message: string) => ({
  type: USER_DISOWN_PUBLIC_RECIPE_FAILED,
  message
});