import { all, takeEvery } from 'redux-saga/effects';

import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,

  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,

  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,

  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,

  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED,

  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,

  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED,

  USER_REQUEST_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_BLOCK_USER,
  USER_BLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER,
  USER_UNBLOCK_USER_SUCCEEDED,

  USER_SUBMIT_AVATAR,

  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGOUT,
  AUTH_USER_REGISTER,
  AUTH_USER_VERIFY,

  DATA_INIT,

  MESSENGER_CONNECT,
  MESSENGER_DISCONNECT,
  MESSENGER_CHANGE_CHANNEL,
  MESSENGER_SEND_MESSAGE,
  MESSENGER_SEND_WHISPER,
} from '../actions/actionTypes';

import { userSubmitAvatarSaga } from './user/avatar';
import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from './user/equipment';
import {
  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga
} from './user/favorite';
import {
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga
} from './user/friendship';
import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga
} from './user/ingredient';
import {
  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga
} from './user/plan';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from './user/recipe';
import {
  userSaveRecipeSaga,
  userUnsaveRecipeSaga
} from './user/save';

import {
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga,
  authUserVerifySaga
} from './auth';

import {
  dataGetMeasurementsSaga,
  dataGetEquipmentsSaga,  // official
  dataGetEquipmentTypesSaga,
  dataGetIngredientsSaga,  // official
  dataGetIngredientTypesSaga,
  dataGetRecipesSaga,  // official
  dataGetRecipeTypesSaga,
  dataGetCuisinesSaga,
  dataGetMethodsSaga,
  dataGetMyPublicRecipesSaga,
  dataGetMyPrivateEquipmentsSaga,
  dataGetMyPrivateIngredientsSaga,
  dataGetMyPrivateRecipesSaga,
  dataGetMyFavoriteRecipesSaga,
  dataGetMySavedRecipesSaga,
  dataGetMyPlansSaga,
  dataGetMyFriendshipsSaga
} from './data';

import {
  messengerConnectSaga,
  messengerDisconnectSaga,
  messengerChangeChannelSaga,
  messengerSendMessageSaga,
  messengerSendWhisperSaga,
  messengerUpdateOnlineSaga
} from './messenger';

export function* watchUserAvatar() {
  yield all([
    takeEvery(USER_SUBMIT_AVATAR, userSubmitAvatarSaga),
  ]);
}

export function* watchUserEquipment() {
  yield all([
    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT, userCreateNewPrivateEquipmentSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT, userEditPrivateEquipmentSaga),
    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT, userDeletePrivateEquipmentSaga),
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga)
  ]);
}

export function* watchUserFavorite() {
  yield all([
    takeEvery(USER_FAVORITE_RECIPE, userFavoriteRecipeSaga),
    takeEvery(USER_FAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    takeEvery(USER_UNFAVORITE_RECIPE, userUnfavoriteRecipeSaga),
    takeEvery(USER_UNFAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga)
  ]);
}

export function* watchUserFriendship() {
  yield all([
    takeEvery(USER_REQUEST_FRIENDSHIP, userRequestFriendshipSaga),
    takeEvery(USER_ACCEPT_FRIENDSHIP, userAcceptFriendshipSaga),
    takeEvery(USER_ACCEPT_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(USER_ACCEPT_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_REJECT_FRIENDSHIP, userRejectFriendshipSaga),
    takeEvery(USER_REJECT_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_DELETE_FRIENDSHIP, userDeleteFriendshipSaga),
    takeEvery(USER_DELETE_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(USER_DELETE_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_BLOCK_USER, userBlockUserSaga),
    takeEvery(USER_BLOCK_USER_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(USER_BLOCK_USER_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_UNBLOCK_USER, userUnblockUserSaga),
    takeEvery(USER_UNBLOCK_USER_SUCCEEDED, dataGetMyFriendshipsSaga)
  ]);
}

export function* watchUserIngredient() {
  yield all([
    takeEvery(USER_CREATE_NEW_PRIVATE_INGREDIENT, userCreateNewPrivateIngredientSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(USER_EDIT_PRIVATE_INGREDIENT, userEditPrivateIngredientSaga),
    takeEvery(USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(USER_DELETE_PRIVATE_INGREDIENT, userDeletePrivateIngredientSaga),
    takeEvery(USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga)
  ]);
}

export function* watchUserPlan() {
  yield all([
    takeEvery(USER_CREATE_NEW_PLAN, userCreateNewPlanSaga),
    takeEvery(USER_CREATE_NEW_PLAN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(USER_EDIT_PLAN, userEditPlanSaga),
    takeEvery(USER_EDIT_PLAN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(USER_DELETE_PLAN, userDeletePlanSaga),
    takeEvery(USER_DELETE_PLAN_SUCCEEDED, dataGetMyPlansSaga)
  ]);
}

export function* watchUserRecipe() {
  yield all([
    takeEvery(USER_CREATE_NEW_PRIVATE_RECIPE, userCreateNewRecipeSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(USER_EDIT_PRIVATE_RECIPE, userEditRecipeSaga),
    takeEvery(USER_EDIT_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(USER_DELETE_PRIVATE_RECIPE, userDeletePrivateRecipeSaga),
    takeEvery(USER_DELETE_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    
    takeEvery(USER_CREATE_NEW_PUBLIC_RECIPE, userCreateNewRecipeSaga),
    takeEvery(USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(USER_EDIT_PUBLIC_RECIPE, userEditRecipeSaga),
    takeEvery(USER_EDIT_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(USER_DISOWN_PUBLIC_RECIPE, userDisownPublicRecipeSaga),
    takeEvery(USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga)
  ]);
}

export function* watchUserSave() {
  yield all([
    takeEvery(USER_SAVE_RECIPE, userSaveRecipeSaga),
    takeEvery(USER_SAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga),
    takeEvery(USER_UNSAVE_RECIPE, userUnsaveRecipeSaga),
    takeEvery(USER_UNSAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga)
  ]);
}

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_USER_REGISTER, authUserRegisterSaga),
    takeEvery(AUTH_USER_VERIFY, authUserVerifySaga),
    takeEvery(AUTH_USER_LOGIN, authUserLoginSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMySavedRecipesSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(AUTH_USER_LOGOUT, authUserLogoutSaga)
  ]);
}

export function* watchData() {
  yield all([
    takeEvery(DATA_INIT, dataGetMeasurementsSaga),
    takeEvery(DATA_INIT, dataGetEquipmentsSaga),
    takeEvery(DATA_INIT, dataGetEquipmentTypesSaga),
    takeEvery(DATA_INIT, dataGetIngredientsSaga),
    takeEvery(DATA_INIT, dataGetIngredientTypesSaga),
    takeEvery(DATA_INIT, dataGetRecipesSaga),
    takeEvery(DATA_INIT, dataGetRecipeTypesSaga),
    takeEvery(DATA_INIT, dataGetCuisinesSaga),
    takeEvery(DATA_INIT, dataGetMethodsSaga)
  ]);
}

export function* watchMessenger() {
  yield all([
    takeEvery(MESSENGER_CONNECT, messengerConnectSaga),
    takeEvery(MESSENGER_DISCONNECT, messengerDisconnectSaga),
    takeEvery(AUTH_USER_LOGOUT, messengerDisconnectSaga),
    takeEvery(MESSENGER_CHANGE_CHANNEL, messengerChangeChannelSaga),
    takeEvery(MESSENGER_SEND_MESSAGE, messengerSendMessageSaga),
    takeEvery(MESSENGER_SEND_WHISPER, messengerSendWhisperSaga)
  ]);
}