import {
  IUserSubmitAvatarSucceeded,
  IUserSubmitAvatarFailed
} from './avatar/types';
import {
  IUserCreateNewContentSucceeded,
  IUserCreateNewContentFailed,
  IUserEditContentSucceeded,
  IUserEditContentFailed,
  IUserDeleteContentSucceeded,
  IUserDeleteContentFailed
} from './content/types';
import {
  IUserCreateNewPrivateEquipmentSucceeded,
  IUserCreateNewPrivateEquipmentFailed,
  IUserEditPrivateEquipmentSucceeded,
  IUserEditPrivateEquipmentFailed,
  IUserDeletePrivateEquipmentSucceeded,
  IUserDeletePrivateEquipmentFailed
} from './equipment/types';
import {
  IUserFavoriteRecipeSucceeded,
  IUserFavoriteRecipeFailed,
  IUserUnfavoriteRecipeSucceeded,
  IUserUnfavoriteRecipeFailed
} from './favorite/types';
import {
  IUserRequestFriendshipSucceeded,
  IUserRequestFriendshipFailed,
  IUserAcceptFriendshipSucceeded,
  IUserAcceptFriendshipFailed,
  IUserRejectFriendshipSucceeded,
  IUserRejectFriendshipFailed,
  IUserDeleteFriendshipSucceeded,
  IUserDeleteFriendshipFailed,
  IUserBlockUserSucceeded,
  IUserBlockUserFailed,
  IUserUnblockUserSucceeded,
  IUserUnblockUserFailed
} from './friendship/types';
import {
  IUserCreateNewPrivateIngredientSucceeded,
  IUserCreateNewPrivateIngredientFailed,
  IUserEditPrivateIngredientSucceeded,
  IUserEditPrivateIngredientFailed,
  IUserDeletePrivateIngredientSucceeded,
  IUserDeletePrivateIngredientFailed
} from './ingredient/types';
import {
  IUserCreatePlanSucceeded,
  IUserCreatePlanFailed,
  IUserEditPlanSucceeded,
  IUserEditPlanFailed,
  IUserDeletePlanSucceeded,
  IUserDeletePlanFailed
} from './plan/types';
import {
  IUserCreateNewPrivateRecipeSucceeded,
  IUserCreateNewPrivateRecipeFailed,
  IUserEditPrivateRecipeSucceeded,
  IUserEditPrivateRecipeFailed,
  IUserDeletePrivateRecipeSucceeded,
  IUserDeletePrivateRecipeFailed,
  IUserCreateNewPublicRecipeSucceeded,
  IUserCreateNewPublicRecipeFailed,
  IUserEditPublicRecipeSucceeded,
  IUserEditPublicRecipeFailed,
  IUserDisownPublicRecipeSucceeded,
  IUserDisownPublicRecipeFailed
} from './recipe/types';
import {
  IUserSaveRecipeSucceeded,
  IUserSaveRecipeFailed,
  IUserUnsaveRecipeSucceeded,
  IUserUnsaveRecipeFailed
} from './save/types';

export const USER_MESSAGE_CLEAR = 'USER_MESSAGE_CLEAR' as const;

export interface IUserMessageClear {
  type: typeof USER_MESSAGE_CLEAR;
}

export interface IUserState {
  message: string;
}

export type UserActions =
IUserMessageClear |
IUserCreateNewContentSucceeded |
IUserCreateNewContentFailed |
IUserEditContentSucceeded |
IUserEditContentFailed |
IUserDeleteContentSucceeded |
IUserDeleteContentFailed |
IUserSubmitAvatarSucceeded |
IUserSubmitAvatarFailed |
IUserCreateNewPrivateEquipmentSucceeded |
IUserCreateNewPrivateEquipmentFailed |
IUserEditPrivateEquipmentSucceeded |
IUserEditPrivateEquipmentFailed |
IUserDeletePrivateEquipmentSucceeded |
IUserDeletePrivateEquipmentFailed |
IUserFavoriteRecipeSucceeded |
IUserFavoriteRecipeFailed |
IUserUnfavoriteRecipeSucceeded |
IUserUnfavoriteRecipeFailed |
IUserRequestFriendshipSucceeded |
IUserRequestFriendshipFailed |
IUserAcceptFriendshipSucceeded |
IUserAcceptFriendshipFailed |
IUserRejectFriendshipSucceeded |
IUserRejectFriendshipFailed |
IUserDeleteFriendshipSucceeded |
IUserDeleteFriendshipFailed |
IUserBlockUserSucceeded |
IUserBlockUserFailed |
IUserUnblockUserSucceeded |
IUserUnblockUserFailed |
IUserCreateNewPrivateIngredientSucceeded |
IUserCreateNewPrivateIngredientFailed |
IUserEditPrivateIngredientSucceeded |
IUserEditPrivateIngredientFailed |
IUserDeletePrivateIngredientSucceeded |
IUserDeletePrivateIngredientFailed |
IUserCreatePlanSucceeded |
IUserCreatePlanFailed |
IUserEditPlanSucceeded |
IUserEditPlanFailed |
IUserDeletePlanSucceeded |
IUserDeletePlanFailed |
IUserCreateNewPrivateRecipeSucceeded |
IUserCreateNewPrivateRecipeFailed |
IUserEditPrivateRecipeSucceeded |
IUserEditPrivateRecipeFailed |
IUserDeletePrivateRecipeSucceeded |
IUserDeletePrivateRecipeFailed |
IUserCreateNewPublicRecipeSucceeded |
IUserCreateNewPublicRecipeFailed |
IUserEditPublicRecipeSucceeded |
IUserEditPublicRecipeFailed |
IUserDisownPublicRecipeSucceeded |
IUserDisownPublicRecipeFailed |
IUserSaveRecipeSucceeded |
IUserSaveRecipeFailed |
IUserUnsaveRecipeSucceeded |
IUserUnsaveRecipeFailed;