import {
  AUTH_DISPLAY,
  AUTH_RESET,
  AUTH_CHECK_STATE,
  AUTH_MESSAGE_CLEAR,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_USER_REGISTER,
  AUTH_USER_REGISTER_SUCCEEDED,
  AUTH_USER_REGISTER_FAILED,
  AUTH_USER_VERIFY,
  AUTH_USER_VERIFY_SUCCEEDED,
  AUTH_USER_VERIFY_FAILED,
  //AUTH_FACEBOOK_CHECK_STATE,
  //AUTH_FACEBOOK_LOGIN,
  //AUTH_FACEBOOK_LOGOUT,
  //AUTH_GOOGLE_CHECK_STATE,
  //AUTH_GOOGLE_LOGIN,
  //AUTH_GOOGLE_LOGOUT,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGIN_FAILED,
  AUTH_USER_LOGOUT,
  AUTH_USER_LOGOUT_SUCCEEDED,
  AUTH_USER_LOGOUT_FAILED
} from './types';

export const authDisplay = (authname: string, avatar: string) => ({
  type: AUTH_DISPLAY,
  authname,
  avatar
});

export const authReset = () => ({type: AUTH_RESET});

export const authCheckState = () => ({type: AUTH_CHECK_STATE});

export const authMessageClear = () => ({type: AUTH_MESSAGE_CLEAR});

export const authUpdateLocalAvatar = (avatar: string) => ({
  type: AUTH_UPDATE_LOCAL_AVATAR,
  avatar
});

export const authUserRegister = (
  email: string,
  password: string,
  username: string,
  history: {}
) => ({
  type: AUTH_USER_REGISTER,
  email,
  password,
  username,
  history
});

export const authUserRegisterSucceeded = (message: string) => ({
  type: AUTH_USER_REGISTER_SUCCEEDED,
  message
});

export const authUserRegisterFailed = (message: string) => ({
  type: AUTH_USER_REGISTER_FAILED,
  message
});

export const authUserVerify = (
  email: string,
  password: string,
  confirmationCode: string,
  history: {}
) => ({
  type: AUTH_USER_VERIFY,
  email,
  password,
  confirmationCode,
  history
});

export const authUserVerifySucceeded = (message: string) => ({
  type: AUTH_USER_VERIFY_SUCCEEDED,
  message
});

export const authUserVerifyFailed = (message: string) => ({
  type: AUTH_USER_VERIFY_FAILED,
  message
});

//export const authFacebookCheckState = () => ({type: AUTH_FACEBOOK_CHECK_STATE});

//export const authFacebookLogin = () => ({type: AUTH_FACEBOOK_LOGIN});

//export const authFacebookLogout = () => ({type: AUTH_FACEBOOK_LOGOUT});

//export const authGoogleCheckState = () => ({type: AUTH_GOOGLE_CHECK_STATE});

//export const authGoogleLogin = () => ({type: AUTH_GOOGLE_LOGIN});

//export const authGoogleLogout = () => ({type: AUTH_GOOGLE_LOGOUT});

export const authUserLogin = (email: string, password: string) => ({
  type: AUTH_USER_LOGIN,
  email,
  password
});

export const authUserLoginSucceeded = (message: string) => ({
  type: AUTH_USER_LOGIN_SUCCEEDED,
  message
});

export const authUserLoginFailed = (message: string) => ({
  type: AUTH_USER_LOGIN_FAILED,
  message
});

export const authUserLogout = () => ({type: AUTH_USER_LOGOUT});

export const authUserLogoutSucceeded = (message: string) => ({
  type: AUTH_USER_LOGOUT_SUCCEEDED,
  message
});

export const authUserLogoutFailed = (message: string) => ({
  type: AUTH_USER_LOGOUT_FAILED,
  message
});