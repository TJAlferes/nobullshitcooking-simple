import * as actionTypes from './actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

export const userMessageClear = () => ({type: actionTypes.USER_MESSAGE_CLEAR});

// create new (private) equipment
export const userCreateNewPrivateEquipment = equipmentInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userCreateNewPrivateEquipmentSucceeded = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userCreateNewPrivateEquipmentFailed = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  message
});

// edit equipment
export const userEditPrivateEquipment = equipmentInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userEditPrivateEquipmentSucceeded = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userEditPrivateEquipmentFailed = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  message
});

// delete equipment
export const userDeletePrivateEquipment = equipmentId => ({
  type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT,
  equipmentId
});
export const userDeletePrivateEquipmentSucceeded = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userDeletePrivateEquipmentFailed = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
  message
});



// create new (private) ingredient
export const userCreateNewPrivateIngredient = ingredientInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userCreateNewPrivateIngredientSucceeded = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userCreateNewPrivateIngredientFailed = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  message
});

// edit ingredient
export const userEditPrivateIngredient = ingredientInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userEditPrivateIngredientSucceeded = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userEditPrivateIngredientFailed = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  message
});

// delete ingredient
export const userDeletePrivateIngredient = ingredientId => ({
  type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT,
  ingredientId
});
export const userDeletePrivateIngredientSucceeded = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userDeletePrivateIngredientFailed = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT_FAILED,
  message
});



// create new (private) recipe
export const userCreateNewPrivateRecipe = recipeInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE,
  recipeInfo
});
export const userCreateNewPrivateRecipeSucceeded = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPrivateRecipeFailed = message => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  message
});

// edit (private) recipe
export const userEditPrivateRecipe = recipeInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_RECIPE,
  recipeInfo
});
export const userEditPrivateRecipeSucceeded = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userEditPrivateRecipeFailed = message => ({
  type: actionTypes.USER_EDIT_PRIVATE_RECIPE_FAILED,
  message
});

// delete (private) recipe
export const userDeletePrivateRecipe = recipeId => ({
  type: actionTypes.USER_DELETE_PRIVATE_RECIPE,
  recipeId
});
export const userDeletePrivateRecipeSucceeded = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userDeletePrivateRecipeFailed = message => ({
  type: actionTypes.USER_DELETE_PRIVATE_RECIPE_FAILED,
  message
});



// create new (public) recipe
export const userCreateNewPublicRecipe = recipeInfo => ({
  type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE,
  recipeInfo
});
export const userCreateNewPublicRecipeSucceeded = message => ({
  type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPublicRecipeFailed = message => ({
  type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  message
});

// edit (public) recipe
export const userEditPublicRecipe = recipeInfo => ({
  type: actionTypes.USER_EDIT_PUBLIC_RECIPE,
  recipeInfo
});
export const userEditPublicRecipeSucceeded = message => ({
  type: actionTypes.USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userEditPublicRecipeFailed = message => ({
  type: actionTypes.USER_EDIT_PUBLIC_RECIPE_FAILED,
  message
});

// disown (public) recipe
export const userDisownPublicRecipe = recipeId => ({
  type: actionTypes.USER_DISOWN_PUBLIC_RECIPE,
  recipeId
});
export const userDisownPublicRecipeSucceeded = message => ({
  type: actionTypes.USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userDisownPublicRecipeFailed = message => ({
  type: actionTypes.USER_DISOWN_PUBLIC_RECIPE_FAILED,
  message
});



// create new plan
export const userCreateNewPlan = planInfo => ({
  type: actionTypes.USER_CREATE_NEW_PLAN,
  planInfo
});
export const userCreateNewPlanSucceeded = message => ({
  type: actionTypes.USER_CREATE_NEW_PLAN_SUCCEEDED,
  message
});
export const userCreateNewPlanFailed = message => ({
  type: actionTypes.USER_CREATE_NEW_PLAN_FAILED,
  message
});

// edit plan
export const userEditPlan = planInfo => ({
  type: actionTypes.USER_EDIT_PLAN,
  planInfo
});
export const userEditPlanSucceeded = message => ({
  type: actionTypes.USER_EDIT_PLAN_SUCCEEDED,
  message
});
export const userEditPlanFailed = message => ({
  type: actionTypes.USER_EDIT_PLAN_FAILED,
  message
});

// delete plan
export const userDeletePlan = planId => ({
  type: actionTypes.USER_DELETE_PLAN,
  planId
});
export const userDeletePlanSucceeded = message => ({
  type: actionTypes.USER_DELETE_PLAN_SUCCEEDED,
  message
});
export const userDeletePlanFailed = message => ({
  type: actionTypes.USER_DELETE_PLAN_FAILED,
  message
});



// favorite recipe
export const userFavoriteRecipe = recipeId => ({
  type: actionTypes.USER_FAVORITE_RECIPE,
  recipeId
});
export const userFavoriteRecipeSucceeded = message => ({
  type: actionTypes.USER_FAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userFavoriteRecipeFailed = message => ({
  type: actionTypes.USER_FAVORITE_RECIPE_FAILED,
  message
});

// unfavorite recipe
export const userUnfavoriteRecipe = recipeId => ({
  type: actionTypes.USER_UNFAVORITE_RECIPE,
  recipeId
});
export const userUnfavoriteRecipeSucceeded = message => ({
  type: actionTypes.USER_UNFAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userUnfavoriteRecipeFailed = message => ({
  type: actionTypes.USER_UNFAVORITE_RECIPE_FAILED,
  message
});



// save recipe
export const userSaveRecipe = recipeId => ({
  type: actionTypes.USER_SAVE_RECIPE,
  recipeId
});
export const userSaveRecipeSucceeded = message => ({
  type: actionTypes.USER_SAVE_RECIPE_SUCCEEDED,
  message
});
export const userSaveRecipeFailed = message => ({
  type: actionTypes.USER_SAVE_RECIPE_FAILED,
  message
});

// unsave recipe
export const userUnsaveRecipe = recipeId => ({
  type: actionTypes.USER_UNSAVE_RECIPE,
  recipeId
});
export const userUnsaveRecipeSucceeded = message => ({
  type: actionTypes.USER_UNSAVE_RECIPE_SUCCEEDED,
  message
});
export const userUnsaveRecipeFailed = message => ({
  type: actionTypes.USER_UNSAVE_RECIPE_FAILED,
  message
});



// request friendship
export const userRequestFriendship = friendName => ({
  type: actionTypes.USER_REQUEST_FRIENDSHIP,
  friendName
});
export const userRequestFriendshipSucceeded = message => ({
  type: actionTypes.USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRequestFriendshipFailed = message => ({
  type: actionTypes.USER_REQUEST_FRIENDSHIP_FAILED,
  message
});

// accept friendship
export const userAcceptFriendship = friendName => ({
  type: actionTypes.USER_ACCEPT_FRIENDSHIP,
  friendName
});
export const userAcceptFriendshipSucceeded = message => ({
  type: actionTypes.USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userAcceptFriendshipFailed = message => ({
  type: actionTypes.USER_ACCEPT_FRIENDSHIP_FAILED,
  message
});

// reject friendship
export const userRejectFriendship = friendName => ({
  type: actionTypes.USER_REJECT_FRIENDSHIP,
  friendName
});
export const userRejectFriendshipSucceeded = message => ({
  type: actionTypes.USER_REJECT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRejectFriendshipFailed = message => ({
  type: actionTypes.USER_REJECT_FRIENDSHIP_FAILED,
  message
});

// delete friendship
export const userDeleteFriendship = friendName => ({
  type: actionTypes.USER_DELETE_FRIENDSHIP,
  friendName
});
export const userDeleteFriendshipSucceeded = message => ({
  type: actionTypes.USER_DELETE_FRIENDSHIP_SUCCEEDED,
  message
});
export const userDeleteFriendshipFailed = message => ({
  type: actionTypes.USER_DELETE_FRIENDSHIP_FAILED,
  message
});

// block user
export const userBlockUser = friendName => ({
  type: actionTypes.USER_BLOCK_USER,
  friendName
});
export const userBlockUserSucceeded = message => ({
  type: actionTypes.USER_BLOCK_USER_SUCCEEDED,
  message
});
export const userBlockUserFailed = message => ({
  type: actionTypes.USER_BLOCK_USER_FAILED,
  message
});

// unblock user
export const userUnblockUser = friendName => ({
  type: actionTypes.USER_UNBLOCK_USER,
  friendName
});
export const userUnblockUserSucceeded = message => ({
  type: actionTypes.USER_UNBLOCK_USER_SUCCEEDED,
  message
});
export const userUnblockUserFailed = message => ({
  type: actionTypes.USER_UNBLOCK_USER_FAILED,
  message
});

// submit avatar
export const userSubmitAvatar = avatar => ({
  type: actionTypes.USER_SUBMIT_AVATAR,
  avatar
});
export const userSubmitAvatarSucceeded = message => ({
  type: actionTypes.USER_SUBMIT_AVATAR_SUCCEEDED,
  message
});
export const userSubmitAvatarFailed = message => ({
  type: actionTypes.USER_SUBMIT_AVATAR_FAILED,
  message
});