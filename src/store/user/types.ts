import {
  UserSubmitAvatarSucceeded,
  UserSubmitAvatarFailed
} from './avatar/types';

import {
  UserCreateNewPrivateEquipmentSucceeded,
  UserCreateNewPrivateEquipmentFailed,
  UserEditPrivateEquipmentSucceeded,
  UserEditPrivateEquipmentFailed,
  UserDeletePrivateEquipmentSucceeded,
  UserDeletePrivateEquipmentFailed
} from './equipment/types';

import {
  UserFavoriteRecipeSucceeded,
  UserFavoriteRecipeFailed,
  UserUnfavoriteRecipeSucceeded,
  UserUnfavoriteRecipeFailed
} from './favorite/types';

import {
  UserRequestFriendshipSucceeded,
  UserRequestFriendshipFailed,
  UserAcceptFriendshipSucceeded,
  UserAcceptFriendshipFailed,
  UserRejectFriendshipSucceeded,
  UserRejectFriendshipFailed,
  UserDeleteFriendshipSucceeded,
  UserDeleteFriendshipFailed,
  UserBlockUserSucceeded,
  UserBlockUserFailed,
  UserUnblockUserSucceeded,
  UserUnblockUserFailed
} from './friendship/types';

import {
  UserCreateNewPrivateIngredientSucceeded,
  UserCreateNewPrivateIngredientFailed,
  UserEditPrivateIngredientSucceeded,
  UserEditPrivateIngredientFailed,
  UserDeletePrivateIngredientSucceeded,
  UserDeletePrivateIngredientFailed
} from './ingredient/types';

import {
  UserCreatePlanSucceeded,
  UserCreatePlanFailed,
  UserEditPlanSucceeded,
  UserEditPlanFailed,
  UserDeletePlanSucceeded,
  UserDeletePlanFailed
} from './plan/types';

import {
  UserCreateNewPrivateRecipeSucceeded,
  UserCreateNewPrivateRecipeFailed,
  UserEditPrivateRecipeSucceeded,
  UserEditPrivateRecipeFailed,
  UserDeletePrivateRecipeSucceeded,
  UserDeletePrivateRecipeFailed,
  UserCreateNewPublicRecipeSucceeded,
  UserCreateNewPublicRecipeFailed,
  UserEditPublicRecipeSucceeded,
  UserEditPublicRecipeFailed,
  UserDisownPublicRecipeSucceeded,
  UserDisownPublicRecipeFailed
} from './recipe/types';

import {
  UserSaveRecipeSucceeded,
  UserSaveRecipeFailed,
  UserUnsaveRecipeSucceeded,
  UserUnsaveRecipeFailed
} from './save/types';

export const USER_MESSAGE_CLEAR = 'USER_MESSAGE_CLEAR';

export interface UserMessageClear {
  type: typeof USER_MESSAGE_CLEAR
}

export interface UserState {
  message: string
}

export type UserActions =
UserMessageClear |
UserSubmitAvatarSucceeded |
UserSubmitAvatarFailed |
UserCreateNewPrivateEquipmentSucceeded |
UserCreateNewPrivateEquipmentFailed |
UserEditPrivateEquipmentSucceeded |
UserEditPrivateEquipmentFailed |
UserDeletePrivateEquipmentSucceeded |
UserDeletePrivateEquipmentFailed |
UserFavoriteRecipeSucceeded |
UserFavoriteRecipeFailed |
UserUnfavoriteRecipeSucceeded |
UserUnfavoriteRecipeFailed |
UserRequestFriendshipSucceeded |
UserRequestFriendshipFailed |
UserAcceptFriendshipSucceeded |
UserAcceptFriendshipFailed |
UserRejectFriendshipSucceeded |
UserRejectFriendshipFailed |
UserDeleteFriendshipSucceeded |
UserDeleteFriendshipFailed |
UserBlockUserSucceeded |
UserBlockUserFailed |
UserUnblockUserSucceeded |
UserUnblockUserFailed |
UserCreateNewPrivateIngredientSucceeded |
UserCreateNewPrivateIngredientFailed |
UserEditPrivateIngredientSucceeded |
UserEditPrivateIngredientFailed |
UserDeletePrivateIngredientSucceeded |
UserDeletePrivateIngredientFailed |
UserCreatePlanSucceeded |
UserCreatePlanFailed |
UserEditPlanSucceeded |
UserEditPlanFailed |
UserDeletePlanSucceeded |
UserDeletePlanFailed |
UserCreateNewPrivateRecipeSucceeded |
UserCreateNewPrivateRecipeFailed |
UserEditPrivateRecipeSucceeded |
UserEditPrivateRecipeFailed |
UserDeletePrivateRecipeSucceeded |
UserDeletePrivateRecipeFailed |
UserCreateNewPublicRecipeSucceeded |
UserCreateNewPublicRecipeFailed |
UserEditPublicRecipeSucceeded |
UserEditPublicRecipeFailed |
UserDisownPublicRecipeSucceeded |
UserDisownPublicRecipeFailed |
UserSaveRecipeSucceeded |
UserSaveRecipeFailed |
UserUnsaveRecipeSucceeded |
UserUnsaveRecipeFailed;