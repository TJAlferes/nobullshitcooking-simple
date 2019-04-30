import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

// auth -- general
export const authDisplay = (name, avatar) => ({
  type: actionTypes.AUTH_DISPLAY,
  name,
  avatar
});
export const authReset = () => ({type: actionTypes.AUTH_RESET});
export const authCheckState = () => ({type: actionTypes.AUTH_CHECK_STATE});

// auth -- users
export const authUserRegister = () => ({type: actionTypes.AUTH_USER_REGISTER});
export const authUserRegisterSucceeded = () => ({type: actionTypes.AUTH_USER_REGISTER_SUCCEEDED});
export const authUserRegisterFailed = () => ({type: actionTypes.AUTH_USER_REGISTER_FAILED});

export const authFacebookCheckState = () => ({type: actionTypes.AUTH_FACEBOOK_CHECK_STATE});
export const authFacebookLogin = () => ({type: actionTypes.AUTH_FACEBOOK_LOGIN});
export const authFacebookLogout = () => ({type: actionTypes.AUTH_FACEBOOK_LOGOUT});

export const authGoogleCheckState = () => ({type: actionTypes.AUTH_GOOGLE_CHECK_STATE});
export const authGoogleLogin = () => ({type: actionTypes.AUTH_GOOGLE_LOGIN});
export const authGoogleLogout = () => ({type: actionTypes.AUTH_GOOGLE_LOGOUT});

export const authUserLogin = (email, password) => ({
  type: actionTypes.AUTH_USER_LOGIN,
  email,
  password
});
export const authUserLoginSucceeded = () => ({type: actionTypes.AUTH_USER_LOGIN_SUCCEEDED});
export const authUserLoginFailed = () => ({type: actionTypes.AUTH_USER_LOGIN_FAILED});

export const authUserLogout = () => ({type: actionTypes.AUTH_USER_LOGOUT});
export const authUserLogoutSucceeded = () => ({type: actionTypes.AUTH_USER_LOGOUT_SUCCEEDED});
export const authUserLogoutFailed = () => ({type: actionTypes.AUTH_USER_LOGOUT_FAILED});

// auth -- staff
export const authStaffLogin = () => ({
  type: actionTypes.AUTH_STAFF_LOGIN,
  email,
  password
});
export const authStaffLoginSucceeded = () => ({type: actionTypes.AUTH_STAFF_LOGIN_SUCCEEDED});
export const authStaffLoginFailed = () => ({type: actionTypes.AUTH_STAFF_LOGIN_FAILED});

export const authStaffLogout = () => ({type: actionTypes.AUTH_STAFF_LOGOUT});
export const authStaffLogoutSucceeded = () => ({type: actionTypes.AUTH_STAFF_LOGOUT_SUCCEEDED});
export const authStaffLogoutFailed = () => ({type: actionTypes.AUTH_STAFF_LOGOUT_FAILED});
