export const USER_CREATE_NEW_PRIVATE_RECIPE = 'USER_CREATE_NEW_PRIVATE_RECIPE' as const;
export const USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED' as const;
export const USER_CREATE_NEW_PRIVATE_RECIPE_FAILED = 'USER_CREATE_NEW_PRIVATE_RECIPE_FAILED' as const;
export const USER_EDIT_PRIVATE_RECIPE = 'USER_EDIT_PRIVATE_RECIPE' as const;
export const USER_EDIT_PRIVATE_RECIPE_SUCCEEDED = 'USER_EDIT_PRIVATE_RECIPE_SUCCEEDED' as const;
export const USER_EDIT_PRIVATE_RECIPE_FAILED = 'USER_EDIT_PRIVATE_RECIPE_FAILED' as const;
export const USER_DELETE_PRIVATE_RECIPE = 'USER_DELETE_PRIVATE_RECIPE' as const;
export const USER_DELETE_PRIVATE_RECIPE_SUCCEEDED = 'USER_DELETE_PRIVATE_RECIPE_SUCCEEDED' as const;
export const USER_DELETE_PRIVATE_RECIPE_FAILED = 'USER_DELETE_PRIVATE_RECIPE_FAILED' as const;

export const USER_CREATE_NEW_PUBLIC_RECIPE = 'USER_CREATE_NEW_PUBLIC_RECIPE' as const;
export const USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED' as const;
export const USER_CREATE_NEW_PUBLIC_RECIPE_FAILED = 'USER_CREATE_NEW_PUBLIC_RECIPE_FAILED' as const;
export const USER_EDIT_PUBLIC_RECIPE = 'USER_EDIT_PUBLIC_RECIPE' as const;
export const USER_EDIT_PUBLIC_RECIPE_SUCCEEDED = 'USER_EDIT_PUBLIC_RECIPE_SUCCEEDED' as const;
export const USER_EDIT_PUBLIC_RECIPE_FAILED = 'USER_EDIT_PUBLIC_RECIPE_FAILED' as const;
export const USER_DISOWN_PUBLIC_RECIPE = 'USER_DISOWN_PUBLIC_RECIPE' as const;
export const USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED = 'USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED' as const;
export const USER_DISOWN_PUBLIC_RECIPE_FAILED = 'USER_DISOWN_PUBLIC_RECIPE_FAILED' as const;

export interface IUserCreateNewPrivateRecipe {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE
  recipeInfo: ICreatingRecipeInfo
}

export interface IUserCreateNewPrivateRecipeSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface IUserCreateNewPrivateRecipeFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE_FAILED
  message: string
}

export interface IUserEditPrivateRecipe {
  type: typeof USER_EDIT_PRIVATE_RECIPE
  recipeInfo: IEditingRecipeInfo
}

export interface IUserEditPrivateRecipeSucceeded {
  type: typeof USER_EDIT_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface IUserEditPrivateRecipeFailed {
  type: typeof USER_EDIT_PRIVATE_RECIPE_FAILED
  message: string
}

export interface IUserDeletePrivateRecipe {
  type: typeof USER_DELETE_PRIVATE_RECIPE
  recipeId: number
}

export interface IUserDeletePrivateRecipeSucceeded {
  type: typeof USER_DELETE_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface IUserDeletePrivateRecipeFailed {
  type: typeof USER_DELETE_PRIVATE_RECIPE_FAILED
  message: string
}

export interface IUserCreateNewPublicRecipe {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE
  recipeInfo: ICreatingRecipeInfo
}

export interface IUserCreateNewPublicRecipeSucceeded {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface IUserCreateNewPublicRecipeFailed {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE_FAILED
  message: string
}

export interface IUserEditPublicRecipe {
  type: typeof USER_EDIT_PUBLIC_RECIPE
  recipeInfo: IEditingRecipeInfo
}

export interface IUserEditPublicRecipeSucceeded {
  type: typeof USER_EDIT_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface IUserEditPublicRecipeFailed {
  type: typeof USER_EDIT_PUBLIC_RECIPE_FAILED
  message: string
}

export interface IUserDisownPublicRecipe {
  type: typeof USER_DISOWN_PUBLIC_RECIPE
  recipeId: number
}

export interface IUserDisownPublicRecipeSucceeded {
  type: typeof USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface IUserDisownPublicRecipeFailed {
  type: typeof USER_DISOWN_PUBLIC_RECIPE_FAILED
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