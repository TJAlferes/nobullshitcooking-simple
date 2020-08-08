import {
  STAFF_CREATE_NEW_INGREDIENT,
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_CREATE_NEW_INGREDIENT_FAILED,
  STAFF_EDIT_INGREDIENT,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT_FAILED,
  STAFF_DELETE_INGREDIENT,
  STAFF_DELETE_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT_FAILED,
  ICreatingIngredientInfo,
  IEditingIngredientInfo
} from './types';

export const staffCreateNewIngredient = (
  ingredientInfo: ICreatingIngredientInfo
) => ({
  type: STAFF_CREATE_NEW_INGREDIENT,
  ingredientInfo
});

export const staffCreateNewIngredientSucceeded = (message: string) => ({
  type: STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  message
});

export const staffCreateNewIngredientFailed = (message: string) => ({
  type: STAFF_CREATE_NEW_INGREDIENT_FAILED,
  message
});

export const staffEditIngredient = (
  ingredientInfo: IEditingIngredientInfo
) => ({
  type: STAFF_EDIT_INGREDIENT,
  ingredientInfo
});

export const staffEditIngredientSucceeded = (message: string) => ({
  type: STAFF_EDIT_INGREDIENT_SUCCEEDED,
  message
});

export const staffEditIngredientFailed = (message: string) => ({
  type: STAFF_EDIT_INGREDIENT_FAILED,
  message
});

export const staffDeleteIngredient = (id: number) => ({
  type: STAFF_DELETE_INGREDIENT,
  id
});

export const staffDeleteIngredientSucceeded = (message: string) => ({
  type: STAFF_DELETE_INGREDIENT_SUCCEEDED,
  message
});

export const staffDeleteIngredientFailed = (message: string) => ({
  type: STAFF_DELETE_INGREDIENT_FAILED,
  message
});