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