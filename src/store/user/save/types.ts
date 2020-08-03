export const USER_SAVE_RECIPE = 'USER_SAVE_RECIPE' as const;
export const USER_SAVE_RECIPE_SUCCEEDED = 'USER_SAVE_RECIPE_SUCCEEDED' as const;
export const USER_SAVE_RECIPE_FAILED = 'USER_SAVE_RECIPE_FAILED' as const;
export const USER_UNSAVE_RECIPE = 'USER_UNSAVE_RECIPE' as const;
export const USER_UNSAVE_RECIPE_SUCCEEDED = 'USER_UNSAVE_RECIPE_SUCCEEDED' as const;
export const USER_UNSAVE_RECIPE_FAILED = 'USER_UNSAVE_RECIPE_FAILED' as const;

export interface IUserSaveRecipe {
  type: typeof USER_SAVE_RECIPE;
  recipeId: number;
}

export interface IUserSaveRecipeSucceeded {
  type: typeof USER_SAVE_RECIPE_SUCCEEDED;
  message: string;
}

export interface IUserSaveRecipeFailed {
  type: typeof USER_SAVE_RECIPE_FAILED;
  message: string;
}

export interface IUserUnsaveRecipe {
  type: typeof USER_UNSAVE_RECIPE;
  recipeId: number;
}

export interface IUserUnsaveRecipeSucceeded {
  type: typeof USER_UNSAVE_RECIPE_SUCCEEDED;
  message: string;
}

export interface IUserUnsaveRecipeFailed {
  type: typeof USER_UNSAVE_RECIPE_FAILED;
  message: string;
}