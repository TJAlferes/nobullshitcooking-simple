import * as actionTypes from './actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

/*

auth -- general

*/

export const authDisplay = (authname, avatar) => ({
  type: actionTypes.AUTH_DISPLAY,
  authname,
  avatar
});
export const authReset = () => ({type: actionTypes.AUTH_RESET});
export const authCheckState = () => ({type: actionTypes.AUTH_CHECK_STATE});
export const authMessageClear = () => ({type: actionTypes.AUTH_MESSAGE_CLEAR});



/*

auth -- users

*/

export const authUserRegister = (email, password, username, history) => ({
  type: actionTypes.AUTH_USER_REGISTER,
  email,
  password,
  username,
  history
});
export const authUserRegisterSucceeded = message => ({
  type: actionTypes.AUTH_USER_REGISTER_SUCCEEDED,
  message
});
export const authUserRegisterFailed = message => ({
  type: actionTypes.AUTH_USER_REGISTER_FAILED,
  message
});

export const authUserVerify = (email, password, confirmationCode) => ({
  type: actionTypes.AUTH_USER_VERIFY,
  email,
  password,
  confirmationCode
});
export const authUserVerifySucceeded = () => ({type: actionTypes.AUTH_USER_VERIFY_SUCCEEDED});
export const authUserVerifyFailed = () => ({type: actionTypes.AUTH_USER_VERIFY_FAILED});

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
export const authUserLoginSucceeded = message => ({
  type: actionTypes.AUTH_USER_LOGIN_SUCCEEDED,
  message
});
export const authUserLoginFailed = message => ({
  type: actionTypes.AUTH_USER_LOGIN_FAILED,
  message
});

export const authUserLogout = () => ({type: actionTypes.AUTH_USER_LOGOUT});
export const authUserLogoutSucceeded = message => ({
  type: actionTypes.AUTH_USER_LOGOUT_SUCCEEDED,
  message
});
export const authUserLogoutFailed = message => ({
  type: actionTypes.AUTH_USER_LOGOUT_FAILED,
  message
});



/*

auth -- staff

*/

export const authStaffLogin = (email, password) => ({
  type: actionTypes.AUTH_STAFF_LOGIN,
  email,
  password
});
export const authStaffLoginSucceeded = message => ({
  type: actionTypes.AUTH_STAFF_LOGIN_SUCCEEDED,
  message
});
export const authStaffLoginFailed = message => ({
  type: actionTypes.AUTH_STAFF_LOGIN_FAILED,
  message
});

export const authStaffLogout = () => ({type: actionTypes.AUTH_STAFF_LOGOUT});
export const authStaffLogoutSucceeded = message => ({
  type: actionTypes.AUTH_STAFF_LOGOUT_SUCCEEDED,
  message
});
export const authStaffLogoutFailed = message => ({
  type: actionTypes.AUTH_STAFF_LOGOUT_FAILED,
  message
});