import {
  USER_MESSAGE_CLEAR,

  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,

  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,

  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED,

  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,

  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE_FAILED,

  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE_FAILED,

  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,

  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE_FAILED,

  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE_FAILED,

  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,

  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,

  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED,

  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,

  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED,

  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,

  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED,

  USER_REQUEST_FRIENDSHIP,
  USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  USER_REQUEST_FRIENDSHIP_FAILED,

  USER_ACCEPT_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_ACCEPT_FRIENDSHIP_FAILED,

  USER_REJECT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP_FAILED,

  USER_DELETE_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP_FAILED,

  USER_BLOCK_USER,
  USER_BLOCK_USER_SUCCEEDED,
  USER_BLOCK_USER_FAILED,

  USER_UNBLOCK_USER,
  USER_UNBLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER_FAILED,
} from './types';



export const userMessageClear = () => ({type: USER_MESSAGE_CLEAR});



export const userCreateNewPrivateIngredient = ingredientInfo => ({
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



export const userEditPrivateIngredient = ingredientInfo => ({
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



export const userDeletePrivateIngredient = ingredientId => ({
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



export const userCreateNewPrivateRecipe = recipeInfo => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE,
  recipeInfo
});
export const userCreateNewPrivateRecipeSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPrivateRecipeFailed = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  message
});



export const userEditPrivateRecipe = recipeInfo => ({
  type: USER_EDIT_PRIVATE_RECIPE,
  recipeInfo
});
export const userEditPrivateRecipeSucceeded = (message: string) => ({
  type: USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userEditPrivateRecipeFailed = (message: string) => ({
  type: USER_EDIT_PRIVATE_RECIPE_FAILED,
  message
});



export const userDeletePrivateRecipe = recipeId => ({
  type: USER_DELETE_PRIVATE_RECIPE,
  recipeId
});
export const userDeletePrivateRecipeSucceeded = (message: string) => ({
  type: USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userDeletePrivateRecipeFailed = (message: string) => ({
  type: USER_DELETE_PRIVATE_RECIPE_FAILED,
  message
});



export const userCreateNewPublicRecipe = recipeInfo => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE,
  recipeInfo
});
export const userCreateNewPublicRecipeSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPublicRecipeFailed = (message: string) => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  message
});



export const userEditPublicRecipe = recipeInfo => ({
  type: USER_EDIT_PUBLIC_RECIPE,
  recipeInfo
});
export const userEditPublicRecipeSucceeded = (message: string) => ({
  type: USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userEditPublicRecipeFailed = (message: string) => ({
  type: USER_EDIT_PUBLIC_RECIPE_FAILED,
  message
});



export const userDisownPublicRecipe = recipeId => ({
  type: USER_DISOWN_PUBLIC_RECIPE,
  recipeId
});
export const userDisownPublicRecipeSucceeded = (message: string) => ({
  type: USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userDisownPublicRecipeFailed = (message: string) => ({
  type: USER_DISOWN_PUBLIC_RECIPE_FAILED,
  message
});



export const userCreateNewPlan = planInfo => ({
  type: USER_CREATE_NEW_PLAN,
  planInfo
});
export const userCreateNewPlanSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PLAN_SUCCEEDED,
  message
});
export const userCreateNewPlanFailed = (message: string) => ({
  type: USER_CREATE_NEW_PLAN_FAILED,
  message
});



export const userEditPlan = (planInfo: ) => ({
  type: USER_EDIT_PLAN,
  planInfo
});
export const userEditPlanSucceeded = (message: string) => ({
  type: USER_EDIT_PLAN_SUCCEEDED,
  message
});
export const userEditPlanFailed = (message: string) => ({
  type: USER_EDIT_PLAN_FAILED,
  message
});



export const userDeletePlan = (planId: number) => ({
  type: USER_DELETE_PLAN,
  planId
});
export const userDeletePlanSucceeded = (message: string) => ({
  type: USER_DELETE_PLAN_SUCCEEDED,
  message
});
export const userDeletePlanFailed = (message: string) => ({
  type: USER_DELETE_PLAN_FAILED,
  message
});



export const userFavoriteRecipe = (recipeId: number) => ({
  type: USER_FAVORITE_RECIPE,
  recipeId
});
export const userFavoriteRecipeSucceeded = (message: string) => ({
  type: USER_FAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userFavoriteRecipeFailed = (message: string) => ({
  type: USER_FAVORITE_RECIPE_FAILED,
  message
});



export const userUnfavoriteRecipe = (recipeId: number) => ({
  type: USER_UNFAVORITE_RECIPE,
  recipeId
});
export const userUnfavoriteRecipeSucceeded = (message: string) => ({
  type: USER_UNFAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userUnfavoriteRecipeFailed = (message: string) => ({
  type: USER_UNFAVORITE_RECIPE_FAILED,
  message
});



export const userSaveRecipe = (recipeId: number) => ({
  type: USER_SAVE_RECIPE,
  recipeId
});
export const userSaveRecipeSucceeded = (message: string) => ({
  type: USER_SAVE_RECIPE_SUCCEEDED,
  message
});
export const userSaveRecipeFailed = (message: string) => ({
  type: USER_SAVE_RECIPE_FAILED,
  message
});



export const userUnsaveRecipe = (recipeId: number) => ({
  type: USER_UNSAVE_RECIPE,
  recipeId
});
export const userUnsaveRecipeSucceeded = (message: string) => ({
  type: USER_UNSAVE_RECIPE_SUCCEEDED,
  message
});
export const userUnsaveRecipeFailed = (message: string) => ({
  type: USER_UNSAVE_RECIPE_FAILED,
  message
});



export const userRequestFriendship = (friendName: string) => ({
  type: USER_REQUEST_FRIENDSHIP,
  friendName
});
export const userRequestFriendshipSucceeded = (message: string) => ({
  type: USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRequestFriendshipFailed = (message: string) => ({
  type: USER_REQUEST_FRIENDSHIP_FAILED,
  message
});



export const userAcceptFriendship = (friendName: string) => ({
  type: USER_ACCEPT_FRIENDSHIP,
  friendName
});
export const userAcceptFriendshipSucceeded = (message: string) => ({
  type: USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userAcceptFriendshipFailed = (message: string) => ({
  type: USER_ACCEPT_FRIENDSHIP_FAILED,
  message
});



export const userRejectFriendship = (friendName: string) => ({
  type: USER_REJECT_FRIENDSHIP,
  friendName
});
export const userRejectFriendshipSucceeded = (message: string) => ({
  type: USER_REJECT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRejectFriendshipFailed = (message: string) => ({
  type: USER_REJECT_FRIENDSHIP_FAILED,
  message
});



export const userDeleteFriendship = (friendName: string) => ({
  type: USER_DELETE_FRIENDSHIP,
  friendName
});
export const userDeleteFriendshipSucceeded = (message: string) => ({
  type: USER_DELETE_FRIENDSHIP_SUCCEEDED,
  message
});
export const userDeleteFriendshipFailed = (message: string) => ({
  type: USER_DELETE_FRIENDSHIP_FAILED,
  message
});



export const userBlockUser = (friendName: string) => ({
  type: USER_BLOCK_USER,
  friendName
});
export const userBlockUserSucceeded = (message: string) => ({
  type: USER_BLOCK_USER_SUCCEEDED,
  message
});
export const userBlockUserFailed = (message: string) => ({
  type: USER_BLOCK_USER_FAILED,
  message
});



export const userUnblockUser = (friendName: string) => ({
  type: USER_UNBLOCK_USER,
  friendName
});
export const userUnblockUserSucceeded = (message: string) => ({
  type: USER_UNBLOCK_USER_SUCCEEDED,
  message
});
export const userUnblockUserFailed = (message: string) => ({
  type: USER_UNBLOCK_USER_FAILED,
  message
});