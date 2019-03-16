import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

export const authCheckState = () => ({
  type: actionTypes.AUTH_CHECK_STATE
});

export const authLogin = () => ({
  type: actionTypes.AUTH_LOGIN
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



export const authLoginSuccess = () => ({
  type: actionTypes.AUTH_LOGIN_SUCCESS
});

export const authLogoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT_SUCCESS
});