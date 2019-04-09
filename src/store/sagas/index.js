import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authCheckStateSaga,
  authLoginSaga,
  authLogoutSaga,
  authFacebookCheckStateSaga,
  authFacebookLoginSaga,
  authFacebookLogoutSaga
} from './auth';
import {
  plannerPublicLoadFromUrlSaga,
  plannerPublicSaveToUrlSaga,
  //plannerSaveSaga,
  //plannerLoadSaga
} from './planner';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_LOGIN, authLoginSaga),
    takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_CHECK_STATE, authFacebookCheckStateSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_LOGIN, authFacebookLoginSaga),
    takeEvery(actionTypes.AUTH_FACEBOOK_LOGOUT, authFacebookLogoutSaga),
  ]);
}

export function* watchPlanner() {
  yield all([
    takeEvery(actionTypes.PLANNER_PUBLIC_LOAD_FROM_URL, plannerPublicLoadFromUrlSaga),
    takeEvery(actionTypes.PLANNER_PUBLIC_SAVE_TO_URL, plannerPublicSaveToUrlSaga),
    //takeEvery(actionTypes.PLANNER_LOAD, plannerLoadSaga),
    //takeEvery(actionTypes.PLANNER_SAVE, plannerSaveSaga),
  ]);
}