import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authStaffLoginSaga,
  authStaffLogoutSaga,
  authUserRegisterSaga,
  authUserLoginSaga,
  authUserLogoutSaga
} from './auth';
import {
  dataGetMeasurementsSaga,

  dataGetEquipmentsSaga,
  dataGetEquipmentTypesSaga,

  dataGetIngredientsSaga,
  dataGetIngredientTypesSaga,

  dataGetRecipesSaga,  // rename to dataGetAllOfficialRecipesSaga ?
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
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga,

  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga,

  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga,

  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga,

  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga,
  userSaveRecipeSaga,
  userUnsaveRecipeSaga,
  
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga,
  userSubmitAvatarSaga
} from './user';
import {
  messengerConnectSaga,
  messengerDisconnectSaga,
  messengerChangeChannelSaga,
  messengerSendMessageSaga,
  messengerSendWhisperSaga,
  messengerUpdateOnlineSaga
} from './messenger';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_STAFF_LOGIN, authStaffLoginSaga),
    takeEvery(actionTypes.AUTH_STAFF_LOGOUT, authStaffLogoutSaga),
    takeEvery(actionTypes.AUTH_USER_REGISTER, authUserRegisterSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN, authUserLoginSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMySavedRecipesSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(actionTypes.AUTH_USER_LOGOUT, authUserLogoutSaga)
  ]);
}

export function* watchData() {
  yield all([
    takeEvery(actionTypes.DATA_INIT, dataGetMeasurementsSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetEquipmentsSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetEquipmentTypesSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetIngredientsSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetIngredientTypesSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetRecipesSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetRecipeTypesSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetCuisinesSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetMethodsSaga)
  ]);
}

export function* watchUser() {  // please break this down
  yield all([
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT, userCreateNewPrivateEquipmentSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_EQUIPMENT, userEditPrivateEquipmentSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_EQUIPMENT, userDeletePrivateEquipmentSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),

    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT, userCreateNewPrivateIngredientSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_INGREDIENT, userEditPrivateIngredientSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_INGREDIENT, userDeletePrivateIngredientSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),

    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE, userCreateNewRecipeSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_RECIPE, userEditRecipeSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_RECIPE, userDeletePrivateRecipeSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),

    takeEvery(actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE, userCreateNewRecipeSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(actionTypes.USER_EDIT_PUBLIC_RECIPE, userEditRecipeSaga),
    takeEvery(actionTypes.USER_EDIT_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(actionTypes.USER_DISOWN_PUBLIC_RECIPE, userDisownPublicRecipeSaga),
    takeEvery(actionTypes.USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),

    takeEvery(actionTypes.USER_CREATE_NEW_PLAN, userCreateNewPlanSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PLAN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(actionTypes.USER_EDIT_PLAN, userEditPlanSaga),
    takeEvery(actionTypes.USER_EDIT_PLAN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(actionTypes.USER_DELETE_PLAN, userDeletePlanSaga),
    takeEvery(actionTypes.USER_DELETE_PLAN_SUCCEEDED, dataGetMyPlansSaga),

    takeEvery(actionTypes.USER_FAVORITE_RECIPE, userFavoriteRecipeSaga),
    takeEvery(actionTypes.USER_FAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    takeEvery(actionTypes.USER_UNFAVORITE_RECIPE, userUnfavoriteRecipeSaga),
    takeEvery(actionTypes.USER_UNFAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga),

    takeEvery(actionTypes.USER_SAVE_RECIPE, userSaveRecipeSaga),
    takeEvery(actionTypes.USER_SAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga),
    takeEvery(actionTypes.USER_UNSAVE_RECIPE, userUnsaveRecipeSaga),
    takeEvery(actionTypes.USER_UNSAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga),

    takeEvery(actionTypes.USER_REQUEST_FRIENDSHIP, userRequestFriendshipSaga),
    takeEvery(actionTypes.USER_ACCEPT_FRIENDSHIP, userAcceptFriendshipSaga),
    takeEvery(actionTypes.USER_ACCEPT_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(actionTypes.USER_ACCEPT_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(actionTypes.USER_REJECT_FRIENDSHIP, userRejectFriendshipSaga),
    takeEvery(actionTypes.USER_DELETE_FRIENDSHIP, userDeleteFriendshipSaga),
    takeEvery(actionTypes.USER_DELETE_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(actionTypes.USER_DELETE_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(actionTypes.USER_BLOCK_USER, userBlockUserSaga),
    takeEvery(actionTypes.USER_BLOCK_USER_SUCCEEDED, messengerUpdateOnlineSaga),
    takeEvery(actionTypes.USER_BLOCK_USER_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(actionTypes.USER_UNBLOCK_USER, userUnblockUserSaga),

    takeEvery(actionTypes.USER_SUBMIT_AVATAR, userSubmitAvatarSaga),
  ]);
}

export function* watchMessenger() {
  yield all([
    takeEvery(actionTypes.MESSENGER_CONNECT, messengerConnectSaga),
    takeEvery(actionTypes.MESSENGER_DISCONNECT, messengerDisconnectSaga),
    takeEvery(actionTypes.AUTH_USER_LOGOUT, messengerDisconnectSaga),
    takeEvery(actionTypes.MESSENGER_CHANGE_CHANNEL, messengerChangeChannelSaga),
    takeEvery(actionTypes.MESSENGER_SEND_MESSAGE, messengerSendMessageSaga),
    takeEvery(actionTypes.MESSENGER_SEND_WHISPER, messengerSendWhisperSaga)
  ]);
}