import {
  USER_MESSAGE_CLEAR,

  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,

  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,

  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED,

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

  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './actionTypes';



export const userMessageClear = () => ({type: USER_MESSAGE_CLEAR});



/*
An opportunity to DRY your code...
You may want to abstract all of this into just three functions...
(same with store/actions/data.js)

export const userCreateEntity = (entityType, entityInfo) => ({
  type: USER_CREATE_ENTITY,
  entityType,  // PRIVATE_EQUIPMENT
  entityInfo  // equipmentInfo
});
export const userUpdateEntity = (entityType, entityInfo) => ({
  type: USER_UPDATE_ENTITY,
  entityType,  // PRIVATE_EQUIPMENT
  entityInfo  // equipmentInfo
});
export const userDeleteEntity = (entityType, entityId) => ({
  type: USER_DELETE_ENTITY,
  entityType,  // PRIVATE_EQUIPMENT
  entityId  // equipmentId
});

... But then you'd have to redo your saga...
... And you'd still basically need a big ass switch statement...
... So would this DRYing actually help you that much?
... Maybe... think about it.
*/



export const userCreateNewPrivateEquipment = equipmentInfo => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userCreateNewPrivateEquipmentSucceeded = message => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userCreateNewPrivateEquipmentFailed = message => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  message
});



export const userEditPrivateEquipment = equipmentInfo => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userEditPrivateEquipmentSucceeded = message => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userEditPrivateEquipmentFailed = message => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  message
});



export const userDeletePrivateEquipment = equipmentId => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT,
  equipmentId
});
export const userDeletePrivateEquipmentSucceeded = message => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});
export const userDeletePrivateEquipmentFailed = message => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
  message
});



export const userCreateNewPrivateIngredient = ingredientInfo => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userCreateNewPrivateIngredientSucceeded = message => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userCreateNewPrivateIngredientFailed = message => ({
  type: USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  message
});



export const userEditPrivateIngredient = ingredientInfo => ({
  type: USER_EDIT_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userEditPrivateIngredientSucceeded = message => ({
  type: USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userEditPrivateIngredientFailed = message => ({
  type: USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  message
});



export const userDeletePrivateIngredient = ingredientId => ({
  type: USER_DELETE_PRIVATE_INGREDIENT,
  ingredientId
});
export const userDeletePrivateIngredientSucceeded = message => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  message
});
export const userDeletePrivateIngredientFailed = message => ({
  type: USER_DELETE_PRIVATE_INGREDIENT_FAILED,
  message
});



export const userCreateNewPrivateRecipe = recipeInfo => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE,
  recipeInfo
});
export const userCreateNewPrivateRecipeSucceeded = message => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPrivateRecipeFailed = message => ({
  type: USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  message
});



export const userEditPrivateRecipe = recipeInfo => ({
  type: USER_EDIT_PRIVATE_RECIPE,
  recipeInfo
});
export const userEditPrivateRecipeSucceeded = message => ({
  type: USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userEditPrivateRecipeFailed = message => ({
  type: USER_EDIT_PRIVATE_RECIPE_FAILED,
  message
});



export const userDeletePrivateRecipe = recipeId => ({
  type: USER_DELETE_PRIVATE_RECIPE,
  recipeId
});
export const userDeletePrivateRecipeSucceeded = message => ({
  type: USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  message
});
export const userDeletePrivateRecipeFailed = message => ({
  type: USER_DELETE_PRIVATE_RECIPE_FAILED,
  message
});



export const userCreateNewPublicRecipe = recipeInfo => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE,
  recipeInfo
});
export const userCreateNewPublicRecipeSucceeded = message => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userCreateNewPublicRecipeFailed = message => ({
  type: USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  message
});



export const userEditPublicRecipe = recipeInfo => ({
  type: USER_EDIT_PUBLIC_RECIPE,
  recipeInfo
});
export const userEditPublicRecipeSucceeded = message => ({
  type: USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userEditPublicRecipeFailed = message => ({
  type: USER_EDIT_PUBLIC_RECIPE_FAILED,
  message
});



export const userDisownPublicRecipe = recipeId => ({
  type: USER_DISOWN_PUBLIC_RECIPE,
  recipeId
});
export const userDisownPublicRecipeSucceeded = message => ({
  type: USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  message
});
export const userDisownPublicRecipeFailed = message => ({
  type: USER_DISOWN_PUBLIC_RECIPE_FAILED,
  message
});



export const userCreateNewPlan = planInfo => ({
  type: USER_CREATE_NEW_PLAN,
  planInfo
});
export const userCreateNewPlanSucceeded = message => ({
  type: USER_CREATE_NEW_PLAN_SUCCEEDED,
  message
});
export const userCreateNewPlanFailed = message => ({
  type: USER_CREATE_NEW_PLAN_FAILED,
  message
});



export const userEditPlan = planInfo => ({
  type: USER_EDIT_PLAN,
  planInfo
});
export const userEditPlanSucceeded = message => ({
  type: USER_EDIT_PLAN_SUCCEEDED,
  message
});
export const userEditPlanFailed = message => ({
  type: USER_EDIT_PLAN_FAILED,
  message
});



export const userDeletePlan = planId => ({
  type: USER_DELETE_PLAN,
  planId
});
export const userDeletePlanSucceeded = message => ({
  type: USER_DELETE_PLAN_SUCCEEDED,
  message
});
export const userDeletePlanFailed = message => ({
  type: USER_DELETE_PLAN_FAILED,
  message
});



export const userFavoriteRecipe = recipeId => ({
  type: USER_FAVORITE_RECIPE,
  recipeId
});
export const userFavoriteRecipeSucceeded = message => ({
  type: USER_FAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userFavoriteRecipeFailed = message => ({
  type: USER_FAVORITE_RECIPE_FAILED,
  message
});



export const userUnfavoriteRecipe = recipeId => ({
  type: USER_UNFAVORITE_RECIPE,
  recipeId
});
export const userUnfavoriteRecipeSucceeded = message => ({
  type: USER_UNFAVORITE_RECIPE_SUCCEEDED,
  message
});
export const userUnfavoriteRecipeFailed = message => ({
  type: USER_UNFAVORITE_RECIPE_FAILED,
  message
});



export const userSaveRecipe = recipeId => ({
  type: USER_SAVE_RECIPE,
  recipeId
});
export const userSaveRecipeSucceeded = message => ({
  type: USER_SAVE_RECIPE_SUCCEEDED,
  message
});
export const userSaveRecipeFailed = message => ({
  type: USER_SAVE_RECIPE_FAILED,
  message
});



export const userUnsaveRecipe = recipeId => ({
  type: USER_UNSAVE_RECIPE,
  recipeId
});
export const userUnsaveRecipeSucceeded = message => ({
  type: USER_UNSAVE_RECIPE_SUCCEEDED,
  message
});
export const userUnsaveRecipeFailed = message => ({
  type: USER_UNSAVE_RECIPE_FAILED,
  message
});



export const userRequestFriendship = friendName => ({
  type: USER_REQUEST_FRIENDSHIP,
  friendName
});
export const userRequestFriendshipSucceeded = message => ({
  type: USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRequestFriendshipFailed = message => ({
  type: USER_REQUEST_FRIENDSHIP_FAILED,
  message
});



export const userAcceptFriendship = friendName => ({
  type: USER_ACCEPT_FRIENDSHIP,
  friendName
});
export const userAcceptFriendshipSucceeded = message => ({
  type: USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userAcceptFriendshipFailed = message => ({
  type: USER_ACCEPT_FRIENDSHIP_FAILED,
  message
});



export const userRejectFriendship = friendName => ({
  type: USER_REJECT_FRIENDSHIP,
  friendName
});
export const userRejectFriendshipSucceeded = message => ({
  type: USER_REJECT_FRIENDSHIP_SUCCEEDED,
  message
});
export const userRejectFriendshipFailed = message => ({
  type: USER_REJECT_FRIENDSHIP_FAILED,
  message
});



export const userDeleteFriendship = friendName => ({
  type: USER_DELETE_FRIENDSHIP,
  friendName
});
export const userDeleteFriendshipSucceeded = message => ({
  type: USER_DELETE_FRIENDSHIP_SUCCEEDED,
  message
});
export const userDeleteFriendshipFailed = message => ({
  type: USER_DELETE_FRIENDSHIP_FAILED,
  message
});



export const userBlockUser = friendName => ({
  type: USER_BLOCK_USER,
  friendName
});
export const userBlockUserSucceeded = message => ({
  type: USER_BLOCK_USER_SUCCEEDED,
  message
});
export const userBlockUserFailed = message => ({
  type: USER_BLOCK_USER_FAILED,
  message
});



export const userUnblockUser = friendName => ({
  type: USER_UNBLOCK_USER,
  friendName
});
export const userUnblockUserSucceeded = message => ({
  type: USER_UNBLOCK_USER_SUCCEEDED,
  message
});
export const userUnblockUserFailed = message => ({
  type: USER_UNBLOCK_USER_FAILED,
  message
});



export const userSubmitAvatar = (fullAvatar, tinyAvatar) => ({
  type: USER_SUBMIT_AVATAR,
  fullAvatar,
  tinyAvatar
});
export const userSubmitAvatarSucceeded = message => ({
  type: USER_SUBMIT_AVATAR_SUCCEEDED,
  message
});
export const userSubmitAvatarFailed = message => ({
  type: USER_SUBMIT_AVATAR_FAILED,
  message
});