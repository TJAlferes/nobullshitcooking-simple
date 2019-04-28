import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

export const authCheckState = () => ({
  type: actionTypes.AUTH_CHECK_STATE
});

export const authLogin = (email, password) => ({
  type: actionTypes.AUTH_LOGIN,
  email,
  password
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT
});



export const authFacebookCheckState = () => ({
  type: actionTypes.AUTH_FACEBOOK_CHECK_STATE
});

export const authFacebookLogin = () => ({
  type: actionTypes.AUTH_FACEBOOK_LOGIN
});

export const authFacebookLogout = () => ({
  type: actionTypes.AUTH_FACEBOOK_LOGOUT
});



export const authGoogleCheckState = () => ({
  type: actionTypes.AUTH_GOOGLE_CHECK_STATE
});

export const authGoogleLogin = () => ({
  type: actionTypes.AUTH_GOOGLE_LOGIN
});

export const authGoogleLogout = () => ({
  type: actionTypes.AUTH_GOOGLE_LOGOUT
});



export const authLoginSucceeded = () => ({
  type: actionTypes.AUTH_LOGIN_SUCCEEDED
});

export const authLoginFailed = () => ({
  type: actionTypes.AUTH_LOGIN_FAILED
});

export const authLogoutSucceeded = () => ({
  type: actionTypes.AUTH_LOGOUT_SUCCEEDED
});

export const authLogoutFailed = () => ({
  type: actionTypes.AUTH_LOGOUT_FAILED
});