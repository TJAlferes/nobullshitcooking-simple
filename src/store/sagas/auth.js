import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  authLogin,
  authLogout,

  authDisplay,

  authStaffLoginSucceeded,
  authStaffLoginFailed,
  authStaffLogoutSucceeded,
  authStaffLogoutFailed,

  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,

  authFacebookCheckState,
  authFacebookLogin,
  authFacebookLogout
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
      {
        staffInfo: {
          email: action.email,
          password: action.password
        }
      }/*, {withCredentials: true}*/
    );
    //make a reducer (??? see maxs code and reduxsaga docs) to update state with:
    //isAuthenticated: true
    //authName: response.data.staffname (?)
    const { redirectPath, staffId, staffname, avatar } = response.data;
    yield put(authDisplay(staffname, avatar));  // ?
    history.push(redirectPath);
    yield put(authStaffLoginSucceeded());
  } catch(err) {
    yield put(authStaffLoginFailed());
  }
}

export function* authStaffLogoutSaga() {
  try {
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogout]);  // check syntax on redux-saga docs
    yield axios.get(`${endpoint}/staff/auth/logout`);  // change from .get() to .delete()?
    yield put(authStaffLogoutSucceeded());
  } catch(err) {
    yield put(authStaffLogoutFailed());
  }
}



/*
User
*/
export function* authUserLoginSaga(action) {
  try {
    //csrf, if even needed anymore?
    //https://github.com/pillarjs/understanding-csrf
    // ask someone
    // do in App useEffect only once?
    // change / move
    // make own actionType?
    //const res = yield axios.get(`${endpoint}/auth/get-csrf-token`);
    //yield console.log(res);
    //yield console.log(res.data.csrfToken);
    //yield axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.csrfToken;
    //yield console.log(axios.defaults.headers.common['X-CSRF-TOKEN']);
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogin]);  // check syntax on redux-saga docs
    const response = yield axios.post(
      `${endpoint}/user/auth/login`,
      {
        userInfo: {
          email: action.email,
          password: action.password
        }
      }/*, {withCredentials: true}*/
    );
    //make a reducer (??? see maxs code and reduxsaga docs) to update state with:
    //isAuthenticated: true
    //authName: response.data.username (?)
    yield put(authUserLoginSucceeded());
  } catch(err) {
    yield put(authUserLoginFailed());
  }
}

export function* authUserLogoutSaga() {
  try {
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogout]);  // check syntax on redux-saga docs
    yield axios.get(`${endpoint}/user/auth/logout`);  // change from .get() to .delete()?
    yield put(authUserLogoutSucceeded());
  } catch(err) {
    yield put(authUserLogoutFailed());
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
