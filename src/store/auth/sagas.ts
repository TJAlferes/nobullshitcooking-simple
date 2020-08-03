import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { removeStorageItem } from '../../utils/storageHelpers';
import {
  authMessageClear,
  authStaffDisplay,
  authStaffLoginSucceeded,
  authStaffLoginFailed,
  authStaffLogoutSucceeded,
  authStaffLogoutFailed,
  authUserDisplay,
  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,
  authUserRegisterSucceeded,
  authUserRegisterFailed,
  authUserVerifySucceeded,
  authUserVerifyFailed,
  //authFacebookCheckState,
  //authFacebookLogin,
  //authFacebookLogout,
  //authGoogleCheckState,
  //authGoogleLogin,
  //authGoogleLogout,
} from './actions';
import {
  IAuthUserRegister,
  IAuthUserVerify,
  IAuthUserLogin,
  IAuthUserLogout,
  IAuthStaffLogin,
  IAuthStaffLogout
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* authStaffLoginSaga(action: IAuthStaffLogin) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/auth/login`,
      {staffInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    );
    const { avatar, message, staffname } = res.data;
    if (message == 'Signed in.') {
      yield put(authStaffDisplay(staffname, avatar));
      yield put(authStaffLoginSucceeded(message));
    } else {
      yield put(authStaffLoginFailed(message));
    }
    yield delay(4000);
    yield put(authMessageClear());
  } catch(err) {
    yield put(authStaffLoginFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

export function* authStaffLogoutSaga(action: IAuthStaffLogout) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/auth/logout`,
      {},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Signed out.') {
      yield call(removeStorageItem, 'appState');
      yield put(authStaffLogoutSucceeded(message));
    } else {
      yield call(removeStorageItem, 'appState');  // clear their browser anyway
      yield put(authStaffLogoutFailed(message));
    }
    yield delay(4000);
    yield put(authMessageClear());
  } catch(err) {
    yield put(authStaffLogoutFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

export function* authUserLoginSaga(action: IAuthUserLogin) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/auth/login`,
      {userInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    );
    const { avatar, message, username } = res.data;
    if (message == 'Signed in.') {
      yield put(authUserDisplay(username, avatar));
      yield put(authUserLoginSucceeded(message));
    } else {
      yield put(authUserLoginFailed(message));
    }
    yield delay(4000);
    yield put(authMessageClear());
  } catch(err) {
    yield put(authUserLoginFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

export function* authUserLogoutSaga(action: IAuthUserLogout) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Signed out.') {
      yield call(removeStorageItem, 'appState');
      yield put(authUserLogoutSucceeded(message));
    } else {
      yield call(removeStorageItem, 'appState');  // clear their browser anyway
      yield put(authUserLogoutFailed(message));
    }
    yield delay(4000);
    yield put(authMessageClear());
  } catch(err) {
    yield put(authUserLogoutFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

export function* authUserRegisterSaga(action: IAuthUserRegister) {
  try {
    const { history } = action;
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/auth/register`,
      {
        userInfo: {
          email: action.email,
          password: action.password,
          username: action.username
        }
      }
    );
    const { message } = res.data;
    if (message == 'User account created.') {
      yield put(authUserRegisterSucceeded(message));
      yield delay(2000);
      yield put(authMessageClear());
      yield call(() => history.push('/verify'));
    } else {
      yield put(authUserRegisterFailed(message));
      yield delay(4000);
      yield put(authMessageClear());
    }
  } catch(err) {
    yield put(authUserRegisterFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

export function* authUserVerifySaga(action: IAuthUserVerify) {
  try {
    const { history } = action;
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/auth/verify`,
      {
        userInfo: {
          email: action.email,
          password: action.password,
          confirmationCode: action.confirmationCode
        }
      }
    );
    const { message } = res.data;
    if (message === "User account verified.") {
      yield put(authUserVerifySucceeded(message));
      yield delay(2000);
      yield put(authMessageClear());
      //yield call([history, history.push], '/login');
      yield call(() => history.push('/login'));
    } else {
      yield put(authUserVerifyFailed(message));
      yield delay(4000);
      yield put(authMessageClear());
    }
  } catch(err) {
    yield put(authUserVerifyFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(authMessageClear());
  }
}

/*

Facebook OAuth

*/

/*export function* authFacebookCheckStateSaga() {  // before authFacebookLoginSaga
  yield put(authFacebookCheckState());
  window.FB && window.FB.getLoginStatus(
    function(response) {
      //statusChangeCallback(response);
      if (response.status === 'connected') {
        // already logged in, continue to allow access
      } else {
        // not, continue to deny access, so execute authFacebookLoginSaga if trying to FBLogin
      }
    }
  );
}

export function* authFacebookLoginSaga() {
  yield put(authFacebookLogin());
  window.FB && window.FB.login(
    function(response) {
      //loginCallback(response);
      if (response.status === 'connected') {
        // just logged in, allow access
      } else {
        // still not
      }
    },
    {scope: 'email'}
  );
  yield put(authLoginSucceeded());
}

export function* authFacebookLogoutSaga() {
  yield put(authFacebookLogout());
  window.FB && window.FB.logout();
  // just logged out, deny access
  yield put(authLogoutSucceeded());
}*/

/*

Google OAuth

*/

// TO DO: Google OAuth

/*

Twitter OAuth

*/

// TO DO: Twitter OAuth