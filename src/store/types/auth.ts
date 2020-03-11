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
} from '../actions/actionTypes';

export interface AuthState {
  message: string
  isAuthenticated: boolean
  authname: string
  avatar: string
}

export type AuthActions =
AuthDisplay |
AuthReset |
AuthCheckState |
AuthMessageClear |
AuthUpdateLocalAvatar |
AuthUserRegister |
AuthUserRegisterSucceeded |
AuthUserRegisterFailed |
AuthUserVerify |
AuthUserVerifySucceeded |
AuthUserVerifyFailed |
AuthUserLogin |
AuthUserLoginSucceeded |
AuthUserLoginFailed |
AuthUserLogout |
AuthUserLogoutSucceeded |
AuthUserLogoutFailed;

interface AuthDisplay {
  type: typeof AUTH_DISPLAY
  
}

interface AuthReset {
  type: typeof AUTH_RESET
}

interface AuthCheckState {
  type: typeof AUTH_CHECK_STATE
}

interface AuthMessageClear {
  type: typeof AUTH_MESSAGE_CLEAR
}

interface AuthUpdateLocalAvatar {
  type: typeof AUTH_UPDATE_LOCAL_AVATAR
}

interface AuthUserRegister {
  type: typeof AUTH_USER_REGISTER
  email: string
  password: string
  username: string
  history: {}
}

interface AuthUserRegisterSucceeded {
  type: typeof AUTH_USER_REGISTER_SUCCEEDED
}

interface AuthUserRegisterFailed {
  type: typeof AUTH_USER_REGISTER_FAILED
}

interface AuthUserVerify {
  type: typeof AUTH_USER_VERIFY
}

interface AuthUserVerifySucceeded {
  type: typeof AUTH_USER_VERIFY_SUCCEEDED
}

interface AuthUserVerifyFailed {
  type: typeof AUTH_USER_VERIFY_FAILED
}

interface AuthUserLogin {
  type: typeof AUTH_USER_LOGIN
}

interface AuthUserLoginSucceeded {
  type: typeof AUTH_USER_LOGIN_SUCCEEDED
}

interface AuthUserLoginFailed {
  type: typeof AUTH_USER_LOGIN_FAILED
}

interface AuthUserLogout {
  type: typeof AUTH_USER_LOGOUT
}

interface AuthUserLogoutSucceeded {
  type: typeof AUTH_USER_LOGOUT_SUCCEEDED
}

interface AuthUserLogoutFailed {
  type: typeof AUTH_USER_LOGOUT_FAILED
}