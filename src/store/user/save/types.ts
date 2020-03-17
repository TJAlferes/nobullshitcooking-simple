export const USER_SAVE_RECIPE = 'USER_SAVE_RECIPE' as const;
export const USER_SAVE_RECIPE_SUCCEEDED = 'USER_SAVE_RECIPE_SUCCEEDED' as const;
export const USER_SAVE_RECIPE_FAILED = 'USER_SAVE_RECIPE_FAILED' as const;
export const USER_UNSAVE_RECIPE = 'USER_UNSAVE_RECIPE' as const;
export const USER_UNSAVE_RECIPE_SUCCEEDED = 'USER_UNSAVE_RECIPE_SUCCEEDED' as const;
export const USER_UNSAVE_RECIPE_FAILED = 'USER_UNSAVE_RECIPE_FAILED' as const;

export interface UserSaveRecipe {
  type: typeof USER_SAVE_RECIPE
  recipeId: number
}

export interface UserSaveRecipeSucceeded {
  type: typeof USER_SAVE_RECIPE_SUCCEEDED
  message: string
}

export interface UserSaveRecipeFailed {
  type: typeof USER_SAVE_RECIPE_FAILED
  message: string
}

export interface UserUnsaveRecipe {
  type: typeof USER_UNSAVE_RECIPE
  recipeId: number
}

export interface UserUnsaveRecipeSucceeded {
  type: typeof USER_UNSAVE_RECIPE_SUCCEEDED
  message: string
}

export interface UserUnsaveRecipeFailed {
  type: typeof USER_UNSAVE_RECIPE_FAILED
  message: string
}