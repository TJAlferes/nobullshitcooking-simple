export const USER_FAVORITE_RECIPE = 'USER_FAVORITE_RECIPE';
export const USER_FAVORITE_RECIPE_SUCCEEDED = 'USER_FAVORITE_RECIPE_SUCCEEDED';
export const USER_FAVORITE_RECIPE_FAILED = 'USER_FAVORITE_RECIPE_FAILED';

export const USER_UNFAVORITE_RECIPE = 'USER_UNFAVORITE_RECIPE';
export const USER_UNFAVORITE_RECIPE_SUCCEEDED = 'USER_UNFAVORITE_RECIPE_SUCCEEDED';
export const USER_UNFAVORITE_RECIPE_FAILED = 'USER_UNFAVORITE_RECIPE_FAILED';

export interface UserFavoriteRecipe {
  type: typeof USER_FAVORITE_RECIPE
  recipeId: number
}

export interface UserFavoriteRecipeSucceeded {
  type: typeof USER_FAVORITE_RECIPE_SUCCEEDED
  message: string
}

export interface UserFavoriteRecipeFailed {
  type: typeof USER_FAVORITE_RECIPE_FAILED
  message: string
}

export interface UserUnfavoriteRecipe {
  type: typeof USER_UNFAVORITE_RECIPE
  recipeId: number
}

export interface UserUnfavoriteRecipeSucceeded {
  type: typeof USER_UNFAVORITE_RECIPE_SUCCEEDED
  message: string
}

export interface UserUnfavoriteRecipeFailed {
  type: typeof USER_UNFAVORITE_RECIPE_FAILED
  message: string
}