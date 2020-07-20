import { all, takeEvery } from 'redux-saga/effects';

import {
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga,
  authUserVerifySaga,
  authStaffLoginSaga,
  authStaffLogoutSaga
} from '../auth/sagas';
import {
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGOUT,
  AUTH_USER_REGISTER,
  AUTH_USER_VERIFY,
  AUTH_STAFF_LOGIN,
  //AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGOUT
} from '../auth/types';
import { dataGetInitialUserDataSaga } from '../data/sagas';

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_STAFF_LOGIN, authStaffLoginSaga),
    //takeEvery(AUTH_STAFF_LOGIN_SUCCEEDED, dataGetStaffDataSaga),
    takeEvery(AUTH_STAFF_LOGOUT, authStaffLogoutSaga),
    takeEvery(AUTH_USER_REGISTER, authUserRegisterSaga),
    takeEvery(AUTH_USER_VERIFY, authUserVerifySaga),
    takeEvery(AUTH_USER_LOGIN, authUserLoginSaga),
    takeEvery(AUTH_USER_LOGIN_SUCCEEDED, dataGetInitialUserDataSaga),
    takeEvery(AUTH_USER_LOGOUT, authUserLogoutSaga)
  ]);
}