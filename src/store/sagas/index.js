import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authCheckStateSaga,
  authStaffLoginSaga,
  authStaffLogoutSaga,
  authUserRegisterSaga,
  authUserLoginSaga,
  authUserLogoutSaga,
  authFacebookCheckStateSaga,
  authFacebookLoginSaga,
  authFacebookLogoutSaga
} from './auth';
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
    takeEvery(actionTypes.AUTH_USER_LOGOUT, authUserLogoutSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_CHECK_STATE, authFacebookCheckStateSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_LOGIN, authFacebookLoginSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_LOGOUT, authFacebookLogoutSaga),
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