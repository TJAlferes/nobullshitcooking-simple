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
  type: typeof STAFF_CREATE_NEW_RECIPE
  recipeInfo: ICreatingRecipeInfo
}

export interface IStaffCreateNewRecipeSucceeded {
  type: typeof STAFF_CREATE_NEW_RECIPE_SUCCEEDED
  message: string
}

export interface IStaffCreateNewRecipeFailed {
  type: typeof STAFF_CREATE_NEW_RECIPE_FAILED
  message: string
}

export interface IStaffEditRecipe {
  type: typeof STAFF_EDIT_RECIPE
  recipeInfo: IEditingRecipeInfo
}

export interface IStaffEditRecipeSucceeded {
  type: typeof STAFF_EDIT_RECIPE_SUCCEEDED
  message: string
}

export interface IStaffEditRecipeFailed {
  type: typeof STAFF_EDIT_RECIPE_FAILED
  message: string
}

export interface IStaffDeleteRecipe {
  type: typeof STAFF_DELETE_RECIPE
  recipeId: number
}

export interface IStaffDeleteRecipeSucceeded {
  type: typeof STAFF_DELETE_RECIPE_SUCCEEDED
  message: string
}

export interface IStaffDeleteRecipeFailed {
  type: typeof STAFF_DELETE_RECIPE_FAILED
  message: string
}

export interface ICreatingRecipeInfo {
  ownership: string
  recipeTypeId: number
  cuisineId: number
  title: string
  description: string
  directions: string
  requiredMethods: IRequiredMethod[]
  requiredEquipment: IRequiredEquipment[]
  requiredIngredients: IRequiredIngredient[]
  requiredSubrecipes: IRequiredSubrecipe[]
  recipeImage: string | ArrayBuffer | null
  fullRecipeImage: File | null
  thumbRecipeImage: File | null
  tinyRecipeImage: File | null
  recipeEquipmentImage: string | ArrayBuffer | null
  fullRecipeEquipmentImage: File | null
  recipeIngredientsImage: string | ArrayBuffer | null
  fullRecipeIngredientsImage: File | null
  recipeCookingImage: string | ArrayBuffer | null
  fullRecipeCookingImage: File | null
}

export interface IEditingRecipeInfo {
  recipeId: number
  prevRecipeImage: string
  prevEquipmentImage: string
  prevIngredientsImage: string
  prevCookingImage: string
  ownership: string
  recipeTypeId: number
  cuisineId: number
  title: string
  description: string
  directions: string
  requiredMethods: IRequiredMethod[]
  requiredEquipment: IRequiredEquipment[]
  requiredIngredients: IRequiredIngredient[]
  requiredSubrecipes: IRequiredSubrecipe[]
  recipeImage: string | ArrayBuffer | null
  fullRecipeImage: File | null
  thumbRecipeImage: File | null
  tinyRecipeImage: File | null
  recipeEquipmentImage: string | ArrayBuffer | null
  fullRecipeEquipmentImage: File | null
  recipeIngredientsImage: string | ArrayBuffer | null
  fullRecipeIngredientsImage: File | null
  recipeCookingImage: string | ArrayBuffer | null
  fullRecipeCookingImage: File | null
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