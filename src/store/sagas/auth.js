import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  //authLogin,
  //authLogout,
  authFacebookCheckState,
  authFacebookLogin,
  authFacebookLogout,
  authLoginSuccess,
  authLogoutSuccess,
} from '../actions/index';

// our backend API 
const authEndpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/auth'
: 'http://localhost:3003/auth';

export function* authCheckStateSaga() {
  yield put(authCheckState());
  // axios over to authEndpoint
  // eh??? just put? yield call ([authCheckState]);  // check syntax on redux-saga docs
}

export function* authLoginSaga() {
  // axios over to authEndpoint
  // eh??? just put? yield call ([authLogin]);  // check syntax on redux-saga docs
  axios.post({email, password});
  yield put(authLoginSuccess());
}

export function* authLogoutSaga() {
  // axios over to authEndpoint
  // eh??? just put? yield call ([authLogout]);  // check syntax on redux-saga docs
  yield put(authLogoutSuccess());
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
  yield put(authLoginSuccess());
}

export function* authFacebookLogoutSaga() {
  yield put(authFacebookLogout());
  window.FB && window.FB.logout();
  // just logged out, deny access
  yield put(authLogoutSuccess());
}