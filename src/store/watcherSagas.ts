import { all, takeEvery } from 'redux-saga/effects';

import {
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga,
  authUserVerifySaga,
  authStaffLoginSaga,
  authStaffLogoutSaga
} from './auth/sagas';
import {
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGOUT,
  AUTH_USER_REGISTER,
  AUTH_USER_VERIFY,
  AUTH_STAFF_LOGIN,
  AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGOUT
} from './auth/types';
import {
  dataGetInitialDataSaga,
  dataGetContentTypesSaga,
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
} from './data/sagas';
import { DATA_INIT } from './data/types';
import {
  messengerConnectSaga,
  messengerDisconnectSaga,
  messengerChangeChannelSaga,
  messengerSendMessageSaga,
  messengerSendWhisperSaga,
  messengerUpdateOnlineSaga
} from './messenger/sagas';
import {
  MESSENGER_CONNECT,
  MESSENGER_DISCONNECT,
  MESSENGER_CHANGE_CHANNEL,
  MESSENGER_SEND_MESSAGE,
  MESSENGER_SEND_WHISPER,
} from './messenger/types';
import {
  staffCreateNewEquipmentSaga,
  staffEditEquipmentSaga,
  staffDeleteEquipmentSaga
} from './staff/equipment/sagas';
import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED
} from './staff/equipment/types';
import {
  staffCreateNewIngredientSaga,
  staffEditIngredientSaga,
  staffDeleteIngredientSaga
} from './staff/ingredient/sagas';
import {
  STAFF_CREATE_NEW_INGREDIENT,
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT,
  STAFF_DELETE_INGREDIENT_SUCCEEDED
} from './staff/ingredient/types';
import {
  staffCreateNewRecipeSaga,
  staffEditRecipeSaga,
  staffDeleteRecipeSaga
} from './staff/recipe/sagas';
import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE,
  STAFF_DELETE_RECIPE_SUCCEEDED
} from './staff/recipe/types';
import { userSubmitAvatarSaga } from './user/avatar/sagas';
import { USER_SUBMIT_AVATAR } from './user/avatar/types';
import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from './user/equipment/sagas';
import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED
} from './user/equipment/types';
import {
  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga
} from './user/favorite/sagas';
import {
  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED
} from './user/favorite/types';
import {
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga
} from './user/friendship/sagas';
import {
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
  USER_UNBLOCK_USER_SUCCEEDED
} from './user/friendship/types';
import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga
} from './user/ingredient/sagas';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED
} from './user/ingredient/types';
import {
  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga
} from './user/plan/sagas';
import {
  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED
} from './user/plan/types';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from './user/recipe/sagas';
import {
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
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED
} from './user/recipe/types';
import { userSaveRecipeSaga, userUnsaveRecipeSaga } from './user/save/sagas';
import {
  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED
} from './user/save/types';

// You're making 8 (really 16) network trips. Consolidate into 1 (2) trips?
export function* watchAuth() {
  yield all([
    takeEvery(AUTH_STAFF_LOGIN, authStaffLoginSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyPublicRecipesSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMySavedRecipesSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyPlansSaga),
    takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(AUTH_STAFF_LOGOUT, authStaffLogoutSaga),

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

// You're making 10 (really 20) network trips. Consolidate into 1 (2) trips?
export function* watchData() {
  yield all([
    takeEvery(DATA_INIT, dataGetInitialDataSaga)
    /*takeEvery(DATA_INIT, dataGetContentTypesSaga),
    takeEvery(DATA_INIT, dataGetMeasurementsSaga),
    takeEvery(DATA_INIT, dataGetEquipmentsSaga),
    takeEvery(DATA_INIT, dataGetEquipmentTypesSaga),
    takeEvery(DATA_INIT, dataGetIngredientsSaga),
    takeEvery(DATA_INIT, dataGetIngredientTypesSaga),
    takeEvery(DATA_INIT, dataGetRecipesSaga),
    takeEvery(DATA_INIT, dataGetRecipeTypesSaga),
    takeEvery(DATA_INIT, dataGetCuisinesSaga),
    takeEvery(DATA_INIT, dataGetMethodsSaga)*/
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

export function* watchUserAvatar() {
  yield all([takeEvery(USER_SUBMIT_AVATAR, userSubmitAvatarSaga)]);
}

export function* watchUserEquipment() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_EQUIPMENT, staffCreateNewEquipmentSaga),
    takeEvery(STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),
    takeEvery(STAFF_EDIT_EQUIPMENT, staffEditEquipmentSaga),
    takeEvery(STAFF_EDIT_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),
    takeEvery(STAFF_DELETE_EQUIPMENT, staffDeleteEquipmentSaga),
    takeEvery(STAFF_DELETE_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),

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
    takeEvery(STAFF_CREATE_NEW_INGREDIENT, staffCreateNewIngredientSaga),
    takeEvery(STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),
    takeEvery(STAFF_EDIT_INGREDIENT, staffEditIngredientSaga),
    takeEvery(STAFF_EDIT_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),
    takeEvery(STAFF_DELETE_INGREDIENT, staffDeleteIngredientSaga),
    takeEvery(STAFF_DELETE_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),

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
    takeEvery(STAFF_CREATE_NEW_RECIPE, staffCreateNewRecipeSaga),
    takeEvery(STAFF_CREATE_NEW_RECIPE_SUCCEEDED, dataGetRecipesSaga),
    takeEvery(STAFF_EDIT_RECIPE, staffEditRecipeSaga),
    takeEvery(STAFF_EDIT_RECIPE_SUCCEEDED, dataGetRecipesSaga),
    takeEvery(STAFF_DELETE_RECIPE, staffDeleteRecipeSaga),
    takeEvery(STAFF_DELETE_RECIPE_SUCCEEDED, dataGetRecipesSaga),

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