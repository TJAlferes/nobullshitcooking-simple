import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authDisplay,
  authCheckState,
  authUserRegisterSucceeded,
  authUserRegisterFailed,
  authUserVerifySucceeded,
  authUserVerifyFailed,
  authFacebookCheckState,
  authFacebookLogin,
  authFacebookLogout,
  //authGoogleCheckState,
  //authGoogleLogin,
  //authGoogleLogout,
  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,
  authStaffLoginSucceeded,
  authStaffLoginFailed,
  authStaffLogoutSucceeded,
  authStaffLogoutFailed,
  authReset
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;


/*

Shared

*/

export function* authCheckStateSaga() {
  yield put(authCheckState());
  // axios over to authEndpoint
  // eh??? just put? yield call ([authCheckState]);  // check syntax on redux-saga docs
}



/*

Staff

*/

export function* authStaffLoginSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/staff/auth/login`,
      {staffInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    );
    if (res.data.message == 'Signed in.') {
      yield put(authDisplay(res.data.staffname, res.data.avatar));
      yield put(authStaffLoginSucceeded(res.data.message));
    } else {
      yield put(authStaffLoginFailed(res.data.message));
    }
  } catch(err) {
    yield put(authStaffLoginFailed('An error occurred. Please try again.'));
  }
}

export function* authStaffLogoutSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/staff/auth/logout`,
      {},
      {withCredentials: true}
    );
    if (res.data.message == 'Signed out.') {
      yield put(authStaffLogoutSucceeded(res.data.message));
    } else {
      yield put(authStaffLogoutFailed(res.data.message));
    }
  } catch(err) {
    yield put(authStaffLogoutFailed('An error occurred. Please try again.'));
  }
}



/*

User

*/

export function* authUserLoginSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/auth/login`,
      {userInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    );
    if (res.data.message == 'Signed in.') {
      yield put(authDisplay(res.data.username, res.data.avatar));
      yield put(authUserLoginSucceeded(res.data.message));
    } else {
      yield put(authUserLoginFailed(res.data.message));
    }
  } catch(err) {
    yield put(authUserLoginFailed('An error occurred. Please try again.'));
  }
}

export function* authUserLogoutSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
      );
    if (res.data.message == 'Signed out.') {
      yield put(authUserLogoutSucceeded(res.data.message));
    } else {
      yield put(authUserLogoutFailed(res.data.message));
    }
  } catch(err) {
    yield put(authUserLogoutFailed('An error occurred. Please try again.'));
  }
}

export function* authUserRegisterSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/auth/register`,
      {userInfo: {email: action.email, password: action.password, username: action.username}}
    );
    if (res.data.message == 'User account created.') {
      yield put(authUserRegisterSucceeded(res.data.message));
    } else {
      yield put(authUserRegisterFailed(res.data.message));
    }
  } catch(err) {
    yield put(authUserRegisterFailed('An error occurred. Please try again.'));
  }
}

/*export function* authUserVerifySaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/auth/verify`,
      {userInfo: {email: action.email, pass: action.pass, confirmationCode: action.confirmationCode}}
    );
    //history.push(redirectPath);
    yield put(authUserVerifySucceeded());
  } catch(err) {
    yield put(authUserVerifyFailed());
  }
}*/



/*

Facebook

*/
/*
export function* authFacebookCheckStateSaga() {  // before authFacebookLoginSaga
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
}
*/


/*

Google

*/
