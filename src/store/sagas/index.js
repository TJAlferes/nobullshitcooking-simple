import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authCheckStateSaga,
  authStaffLoginSaga,
  authStaffLogoutSaga,
  authUserRegisterSaga,
  authUserLoginSaga,
  authUserLogoutSaga,
  //authFacebookCheckStateSaga,
  //authFacebookLoginSaga,
  //authFacebookLogoutSaga
} from './auth';
import {
  dataGetMeasurementsSaga,
  dataGetEquipmentsSaga,
  dataGetEquipmentTypesSaga,
  dataGetIngredientsSaga,
  dataGetIngredientTypesSaga,
  dataGetRecipesSaga,
  dataGetRecipeTypesSaga,
  dataGetCuisinesSaga,
  dataGetMethodsSaga,
  dataGetPublicRecipesSaga,
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
  userCreateNewPrivateRecipeSaga,
  userEditPrivateRecipeSaga,
  userDeletePrivateRecipeSaga,
  userCreateNewPublicRecipeSaga,
  userEditPublicRecipeSaga,
  userDisownPublicRecipeSaga,
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
  userUnblockUserSaga
} from './user';
import {
  messengerChangeChannelSaga,
  messengerSendMessageSaga
} from './messenger';
import {
  //plannerPublicLoadFromUrlSaga,
  plannerPublicSaveToUrlSaga,
  //plannerSaveSaga,
  //plannerLoadSaga
} from './planner';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
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
    takeEvery(actionTypes.AUTH_USER_LOGOUT, authUserLogoutSaga),
    //takeEvery(actionTypes.AUTH_FACEBOOK_CHECK_STATE, authFacebookCheckStateSaga),
    //takeEvery(actionTypes.AUTH_FACEBOOK_LOGIN, authFacebookLoginSaga),
    //takeEvery(actionTypes.AUTH_FACEBOOK_LOGOUT, authFacebookLogoutSaga),
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
    takeEvery(actionTypes.DATA_INIT, dataGetMethodsSaga),
    takeEvery(actionTypes.DATA_INIT, dataGetPublicRecipesSaga)
  ]);
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT, userCreateNewPrivateEquipmentSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_EQUIPMENT, userEditPrivateEquipmentSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_EQUIPMENT, userDeletePrivateEquipmentSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT, userCreateNewPrivateIngredientSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_INGREDIENT, userEditPrivateIngredientSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_INGREDIENT, userDeletePrivateIngredientSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE, userCreateNewPrivateRecipeSaga),
    takeEvery(actionTypes.USER_EDIT_PRIVATE_RECIPE, userEditPrivateRecipeSaga),
    takeEvery(actionTypes.USER_DELETE_PRIVATE_RECIPE, userDeletePrivateRecipeSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE, userCreateNewPublicRecipeSaga),
    takeEvery(actionTypes.USER_EDIT_PUBLIC_RECIPE, userEditPublicRecipeSaga),
    takeEvery(actionTypes.USER_DISOWN_PUBLIC_RECIPE, userDisownPublicRecipeSaga),
    takeEvery(actionTypes.USER_CREATE_NEW_PLAN, userCreateNewPlanSaga),
    takeEvery(actionTypes.USER_EDIT_PLAN, userEditPlanSaga),
    takeEvery(actionTypes.USER_DELETE_PLAN, userDeletePlanSaga),
    takeEvery(actionTypes.USER_FAVORITE_RECIPE, userFavoriteRecipeSaga),
    takeEvery(actionTypes.USER_UNFAVORITE_RECIPE, userUnfavoriteRecipeSaga),
    takeEvery(actionTypes.USER_SAVE_RECIPE, userSaveRecipeSaga),
    takeEvery(actionTypes.USER_UNSAVE_RECIPE, userUnsaveRecipeSaga),
    takeEvery(actionTypes.USER_REQUEST_FRIENDSHIP, userRequestFriendshipSaga),
    takeEvery(actionTypes.USER_ACCEPT_FRIENDSHIP, userAcceptFriendshipSaga),
    takeEvery(actionTypes.USER_REJECT_FRIENDSHIP, userRejectFriendshipSaga),
    takeEvery(actionTypes.USER_DELETE_FRIENDSHIP, userDeleteFriendshipSaga),
    takeEvery(actionTypes.USER_BLOCK_USER, userBlockUserSaga),
    takeEvery(actionTypes.USER_UNBLOCK_USER, userUnblockUserSaga)
  ]);
}

export function* watchMessenger() {
  yield all([
    takeEvery(actionTypes.MESSENGER_CHANGE_CHANNEL, messengerChangeChannelSaga),
    takeEvery(action.Types.MESSENGER_SEND_MESSAGE, messengerSendMessageSaga)
  ]);
}

export function* watchPlanner() {
  yield all([
    //takeEvery(actionTypes.PLANNER_PUBLIC_LOAD_FROM_URL, plannerPublicLoadFromUrlSaga),
    takeEvery(actionTypes.PLANNER_PUBLIC_SAVE_TO_URL, plannerPublicSaveToUrlSaga),
    //takeEvery(actionTypes.PLANNER_LOAD, plannerLoadSaga),
    //takeEvery(actionTypes.PLANNER_SAVE, plannerSaveSaga),
  ]);
}