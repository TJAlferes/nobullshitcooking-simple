export const USER_CREATE_NEW_PRIVATE_RECIPE = 'USER_CREATE_NEW_PRIVATE_RECIPE';
export const USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED';
export const USER_CREATE_NEW_PRIVATE_RECIPE_FAILED = 'USER_CREATE_NEW_PRIVATE_RECIPE_FAILED';

export const USER_EDIT_PRIVATE_RECIPE = 'USER_EDIT_PRIVATE_RECIPE';
export const USER_EDIT_PRIVATE_RECIPE_SUCCEEDED = 'USER_EDIT_PRIVATE_RECIPE_SUCCEEDED';
export const USER_EDIT_PRIVATE_RECIPE_FAILED = 'USER_EDIT_PRIVATE_RECIPE_FAILED';

export const USER_DELETE_PRIVATE_RECIPE = 'USER_DELETE_PRIVATE_RECIPE';
export const USER_DELETE_PRIVATE_RECIPE_SUCCEEDED = 'USER_DELETE_PRIVATE_RECIPE_SUCCEEDED';
export const USER_DELETE_PRIVATE_RECIPE_FAILED = 'USER_DELETE_PRIVATE_RECIPE_FAILED';

export const USER_CREATE_NEW_PUBLIC_RECIPE = 'USER_CREATE_NEW_PUBLIC_RECIPE';
export const USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED';
export const USER_CREATE_NEW_PUBLIC_RECIPE_FAILED = 'USER_CREATE_NEW_PUBLIC_RECIPE_FAILED';

export const USER_EDIT_PUBLIC_RECIPE = 'USER_EDIT_PUBLIC_RECIPE';
export const USER_EDIT_PUBLIC_RECIPE_SUCCEEDED = 'USER_EDIT_PUBLIC_RECIPE_SUCCEEDED';
export const USER_EDIT_PUBLIC_RECIPE_FAILED = 'USER_EDIT_PUBLIC_RECIPE_FAILED';

export const USER_DISOWN_PUBLIC_RECIPE = 'USER_DISOWN_PUBLIC_RECIPE';
export const USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED = 'USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED';
export const USER_DISOWN_PUBLIC_RECIPE_FAILED = 'USER_DISOWN_PUBLIC_RECIPE_FAILED';

export interface UserCreateNewPrivateRecipe {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE
  recipeInfo: CreatingRecipeInfo
}

export interface UserCreateNewPrivateRecipeSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface UserCreateNewPrivateRecipeFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_RECIPE_FAILED
  message: string
}

export interface UserEditPrivateRecipe {
  type: typeof USER_EDIT_PRIVATE_RECIPE
  recipeInfo: EditingRecipeInfo
}

export interface UserEditPrivateRecipeSucceeded {
  type: typeof USER_EDIT_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface UserEditPrivateRecipeFailed {
  type: typeof USER_EDIT_PRIVATE_RECIPE_FAILED
  message: string
}

export interface UserDeletePrivateRecipe {
  type: typeof USER_DELETE_PRIVATE_RECIPE
  recipeId: number
}

export interface UserDeletePrivateRecipeSucceeded {
  type: typeof USER_DELETE_PRIVATE_RECIPE_SUCCEEDED
  message: string
}

export interface UserDeletePrivateRecipeFailed {
  type: typeof USER_DELETE_PRIVATE_RECIPE_FAILED
  message: string
}

export interface UserCreateNewPublicRecipe {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE
  recipeInfo: CreatingRecipeInfo
}

export interface UserCreateNewPublicRecipeSucceeded {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface UserCreateNewPublicRecipeFailed {
  type: typeof USER_CREATE_NEW_PUBLIC_RECIPE_FAILED
  message: string
}

export interface UserEditPublicRecipe {
  type: typeof USER_EDIT_PUBLIC_RECIPE
  recipeInfo: EditingRecipeInfo
}

export interface UserEditPublicRecipeSucceeded {
  type: typeof USER_EDIT_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface UserEditPublicRecipeFailed {
  type: typeof USER_EDIT_PUBLIC_RECIPE_FAILED
  message: string
}

export interface UserDisownPublicRecipe {
  type: typeof USER_DISOWN_PUBLIC_RECIPE
  recipeId: number
}

export interface UserDisownPublicRecipeSucceeded {
  type: typeof USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED
  message: string
}

export interface UserDisownPublicRecipeFailed {
  type: typeof USER_DISOWN_PUBLIC_RECIPE_FAILED
  message: string
}

export interface CreatingRecipeInfo {
  ownership: string
  recipeTypeId: number
  cuisineId: number
  title: string
  description: string
  directions: string
  requiredMethods: []
  requiredEquipment: []
  requiredIngredients: []
  requiredSubrecipes: []
  recipeImage: RecipeImage
  fullRecipeImage: RecipeImage
  thumbRecipeImage: RecipeImage
  tinyRecipeImage: RecipeImage
  recipeEquipmentImage: RecipeImage
  fullRecipeEquipmentImage: RecipeImage
  recipeIngredientsImage: RecipeImage
  fullRecipeIngredientsImage: RecipeImage
  recipeCookingImage: RecipeImage
  fullRecipeCookingImage: RecipeImage
}

export interface EditingRecipeInfo {
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
  requiredMethods: []
  requiredEquipment: []
  requiredIngredients: []
  requiredSubrecipes: []
  recipeImage: RecipeImage
  fullRecipeImage: RecipeImage
  thumbRecipeImage: RecipeImage
  tinyRecipeImage: RecipeImage
  recipeEquipmentImage: RecipeImage
  fullRecipeEquipmentImage: RecipeImage
  recipeIngredientsImage: RecipeImage
  fullRecipeIngredientsImage: RecipeImage
  recipeCookingImage: RecipeImage
  fullRecipeCookingImage: RecipeImage
}

interface RecipeImage {
  type: string
}