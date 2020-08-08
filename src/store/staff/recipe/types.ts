export const STAFF_CREATE_NEW_RECIPE = 'STAFF_CREATE_NEW_RECIPE' as const;
export const STAFF_CREATE_NEW_RECIPE_SUCCEEDED = 'STAFF_CREATE_NEW_RECIPE_SUCCEEDED' as const;
export const STAFF_CREATE_NEW_RECIPE_FAILED = 'STAFF_CREATE_NEW_RECIPE_FAILED' as const;

export const STAFF_EDIT_RECIPE = 'STAFF_EDIT_RECIPE' as const;
export const STAFF_EDIT_RECIPE_SUCCEEDED = 'STAFF_EDIT_RECIPE_SUCCEEDED' as const;
export const STAFF_EDIT_RECIPE_FAILED = 'STAFF_EDIT_RECIPE_FAILED' as const;

export const STAFF_DELETE_RECIPE = 'STAFF_DELETE_RECIPE' as const;
export const STAFF_DELETE_RECIPE_SUCCEEDED = 'STAFF_DELETE_RECIPE_SUCCEEDED' as const;
export const STAFF_DELETE_RECIPE_FAILED = 'STAFF_DELETE_RECIPE_FAILED' as const;

export interface IStaffCreateNewRecipe {
  type: typeof STAFF_CREATE_NEW_RECIPE;
  recipeInfo: ICreatingRecipeInfo;
}

export interface IStaffCreateNewRecipeSucceeded {
  type: typeof STAFF_CREATE_NEW_RECIPE_SUCCEEDED;
  message: string;
}

export interface IStaffCreateNewRecipeFailed {
  type: typeof STAFF_CREATE_NEW_RECIPE_FAILED;
  message: string;
}

export interface IStaffEditRecipe {
  type: typeof STAFF_EDIT_RECIPE;
  recipeInfo: IEditingRecipeInfo;
}

export interface IStaffEditRecipeSucceeded {
  type: typeof STAFF_EDIT_RECIPE_SUCCEEDED;
  message: string;
}

export interface IStaffEditRecipeFailed {
  type: typeof STAFF_EDIT_RECIPE_FAILED;
  message: string;
}

export interface IStaffDeleteRecipe {
  type: typeof STAFF_DELETE_RECIPE;
  id: number;
}

export interface IStaffDeleteRecipeSucceeded {
  type: typeof STAFF_DELETE_RECIPE_SUCCEEDED;
  message: string;
}

export interface IStaffDeleteRecipeFailed {
  type: typeof STAFF_DELETE_RECIPE_FAILED;
  message: string;
}

export interface ICreatingRecipeInfo {
  ownership: string;
  recipeTypeId: number;
  cuisineId: number;
  title: string;
  description: string;
  directions: string;
  requiredMethods: IRequiredMethod[];
  requiredEquipment: IRequiredEquipment[];
  requiredIngredients: IRequiredIngredient[];
  requiredSubrecipes: IRequiredSubrecipe[];
  recipeImage: string | ArrayBuffer | null;
  recipeFullImage: File | null;
  recipeThumbImage: File | null;
  recipeTinyImage: File | null;
  equipmentImage: string | ArrayBuffer | null;
  equipmentFullImage: File | null;
  ingredientsImage: string | ArrayBuffer | null;
  ingredientsFullImage: File | null;
  cookingImage: string | ArrayBuffer | null;
  cookingFullImage: File | null;
}

export interface IEditingRecipeInfo extends ICreatingRecipeInfo {
  id: number
  recipePrevImage: string;
  equipmentPrevImage: string;
  ingredientsPrevImage: string;
  cookingPrevImage: string;
}

export interface IRequiredMethod {
  methodId: number;
}

/*
NOTE: you should probably change
equipment to equipmentId
unit to measurementId
ingredient to ingredientId
and subrecipe to subrecipeId
*/

export interface IRequiredEquipment {
  amount: number;
  equipment: number;
}

export interface IRequiredIngredient {
  amount: number;
  unit: number;
  ingredient: number;
}

export interface IRequiredSubrecipe {
  amount: number;
  unit: number;
  subrecipe: number;
}