import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  authLogin,
  authLogout,

  authFacebookCheckState,
  authFacebookLogin,
  authFacebookLogout,

  authLoginSucceeded,
  authLoginFailed,
  authLogoutSucceeded,
  authLogoutFailed
} from '../actions/index';

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';

export function* authCheckStateSaga() {
  yield put(authCheckState());
  // axios over to authEndpoint
  // eh??? just put? yield call ([authCheckState]);  // check syntax on redux-saga docs
}

export function* authLoginSaga(action) {
  console.log('triggered');
  try {
    // do in App useEffect only once?
    // change / move
    // make own actionType?
    const res = yield axios.get(`${endpoint}/auth/get-csrf-token`);
    yield console.log(res);
    yield axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.csrfToken;
    
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogin]);  // check syntax on redux-saga docs
    yield axios.post(`${endpoint}/staff/auth/login`, {email: action.email, password: action.password}/*, {withCredentials: true}*/);
    yield put(authLoginSucceeded());
  } catch(err) {
    yield put(authLoginFailed());
  }
}

export function* authLogoutSaga() {
  try {
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogout]);  // check syntax on redux-saga docs
    yield axios.get(`${endpoint}/staff/auth/logout`);  // change from .get() to .delete()?
    yield put(authLogoutSucceeded());
  } catch(err) {
    yield put(authLogoutFailed());
  }
}



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