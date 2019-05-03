import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authDisplay,
  authCheckState,
  authUserRegisterSucceeded,
  authUserRegisterFailed,
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

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';



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
    const response = yield axios.post(
      `${endpoint}/staff/auth/login`,
      {staffInfo: {email: action.email, password: action.password}}
    );
    const { staffname, avatar } = response.data;
    yield put(authDisplay(staffname, avatar));
    //history.push(redirectPath);
    yield put(authStaffLoginSucceeded());
  } catch(err) {
    yield put(authStaffLoginFailed());
  }
}

export function* authStaffLogoutSaga() {
  try {
    const loggedOut = yield axios.post(
      `${endpoint}/staff/auth/logout`,
      {},
      {withCredentials: true}
    );  // change to .delete()?
    if (loggedOut) yield put(authStaffLogoutSucceeded());
  } catch(err) {
    yield put(authStaffLogoutFailed());
  }
}



/*
User
*/
export function* authUserLoginSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/user/auth/login`,
      {userInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    );
    const { username, avatar } = response.data;
    console.log(username);
    yield put(authDisplay(username, avatar));
    yield put(authUserLoginSucceeded());
  } catch(err) {
    yield put(authUserLoginFailed());
  }
}

export function* authUserLogoutSaga() {
  try {
    const loggedOut = yield axios.post(
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
      );  // change to .delete()?
    if (loggedOut) yield put(authUserLogoutSucceeded());
  } catch(err) {
    yield put(authUserLogoutFailed());
  }
}

export function* authUserRegisterSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/user/auth/register`,
      {userInfo: {email: action.email, password: action.password, username: action.username}}
    );
    //history.push(redirectPath);
    yield put(authUserRegisterSucceeded());
  } catch(err) {
    yield put(authUserRegisterFailed());
  }
}



/*
Facebook
*/
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



/*
Google
*/
