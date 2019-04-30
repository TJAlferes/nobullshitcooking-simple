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
  try {
    // do in App useEffect only once?
    // change / move
    // make own actionType?


    //https://github.com/pillarjs/understanding-csrf
    // ask someone

    //const res = yield axios.get(`${endpoint}/auth/get-csrf-token`);
    //yield console.log(res);
    //yield console.log(res.data.csrfToken);
    //yield axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.csrfToken;
    //yield console.log(axios.defaults.headers.common['X-CSRF-TOKEN']);
    // axios over to authEndpoint
    // eh??? just put? yield call ([authLogin]);  // check syntax on redux-saga docs

    //const st = yield axios.get(`${endpoint}/auth/simple-test`);
    //yield console.log(st.data.ast);

    console.log(action);
    console.log(action.email);
    console.log(action.password);
    const trial = yield axios.post(
      `${endpoint}/staff/auth/login`,
      {
        staffInfo: {
          email: action.email,
          password: action.password
        }
      }/*, {withCredentials: true}*/
    );
    yield console.log(trial);
    //yield axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.csrfToken;
    //yield console.log(axios.defaults.headers.common['X-CSRF-TOKEN']);



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