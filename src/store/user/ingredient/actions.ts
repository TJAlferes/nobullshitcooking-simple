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
  ICreatingIngredientInfo,
  IEditingIngredientInfo
} from './types';

export const userCreateNewPrivateIngredient = (
  ingredientInfo: ICreatingIngredientInfo
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
  ingredientInfo: IEditingIngredientInfo
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

export const userDeletePrivateIngredient = (id: number) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT,
  id
});

export const userDeletePrivateIngredientSucceeded = (message: string) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});

export const userDeletePrivateIngredientFailed = (message: string) => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_FAILED,
  message
});