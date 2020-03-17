import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED,
  CreatingIngredientInfo,
  EditingIngredientInfo
} from './types';

export const userCreateNewPrivateIngredient = (
  ingredientInfo: CreatingIngredientInfo
) => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT,
  ingredientInfo
});

export const userCreateNewPrivateIngredientSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});

export const userCreateNewPrivateIngredientFailed = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  message
});

export const userEditPrivateIngredient = (
  ingredientInfo: EditingIngredientInfo
) => ({
  type: USER_EDIT_PRIVATE_INGREDIENT,
  ingredientInfo
});

export const userEditPrivateIngredientSucceeded = (message: string) => ({
  type: USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});

export const userEditPrivateIngredientFailed = (message: string) => ({
  type: USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  message
});

export const userDeletePrivateIngredient = (ingredientId: number) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT,
  ingredientId
});

export const userDeletePrivateIngredientSucceeded = (message: string) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});

export const userDeletePrivateIngredientFailed = (message: string) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_FAILED,
  message
});