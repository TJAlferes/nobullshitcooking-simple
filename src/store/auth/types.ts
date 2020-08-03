//import { MemoryHistory} from 'history';
import { History} from 'history';

export const AUTH_CHECK_STATE = "AUTH_CHECK_STATE" as const;
export const AUTH_MESSAGE_CLEAR = "AUTH_MESSAGE_CLEAR" as const;
export const AUTH_RESET = 'AUTH_RESET' as const;
export const AUTH_UPDATE_LOCAL_AVATAR = "AUTH_UPDATE_LOCAL_AVATAR" as const;
export const AUTH_STAFF_DISPLAY = 'AUTH_STAFF_DISPLAY' as const;
export const AUTH_STAFF_LOGIN = "AUTH_STAFF_LOGIN" as const;
export const AUTH_STAFF_LOGIN_SUCCEEDED = "AUTH_STAFF_LOGIN_SUCCEEDED" as const;
export const AUTH_STAFF_LOGIN_FAILED = "AUTH_STAFF_LOGIN_FAILED" as const;
export const AUTH_STAFF_LOGOUT = "AUTH_STAFF_LOGOUT" as const;
export const AUTH_STAFF_LOGOUT_SUCCEEDED = "AUTH_STAFF_LOGOUT_SUCCEEDED" as const;
export const AUTH_STAFF_LOGOUT_FAILED = "AUTH_STAFF_LOGOUT_FAILED" as const;
export const AUTH_USER_DISPLAY = 'AUTH_USER_DISPLAY' as const;
export const AUTH_USER_LOGIN = "AUTH_USER_LOGIN" as const;
export const AUTH_USER_LOGIN_SUCCEEDED = "AUTH_USER_LOGIN_SUCCEEDED" as const;
export const AUTH_USER_LOGIN_FAILED = "AUTH_USER_LOGIN_FAILED" as const;
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT" as const;
export const AUTH_USER_LOGOUT_SUCCEEDED = "AUTH_USER_LOGOUT_SUCCEEDED" as const;
export const AUTH_USER_LOGOUT_FAILED = "AUTH_USER_LOGOUT_FAILED" as const;
export const AUTH_USER_REGISTER = 'AUTH_USER_REGISTER' as const;
export const AUTH_USER_REGISTER_SUCCEEDED = 'AUTH_USER_REGISTER_SUCCEEDED' as const;
export const AUTH_USER_REGISTER_FAILED = 'AUTH_USER_REGISTER_FAILED' as const;
export const AUTH_USER_VERIFY = 'AUTH_USER_VERIFY' as const;
export const AUTH_USER_VERIFY_SUCCEEDED = 'AUTH_USER_VERIFY_SUCCEEDED' as const;
export const AUTH_USER_VERIFY_FAILED = 'AUTH_USER_VERIFY_FAILED' as const;
//export const AUTH_FACEBOOK_CHECK_STATE = "AUTH_FACEBOOK_CHECK_STATE" as const;
//export const AUTH_FACEBOOK_LOGIN = "AUTH_FACEBOOK_LOGIN" as const;
//export const AUTH_FACEBOOK_LOGOUT = "AUTH_FACEBOOK_LOGOUT" as const;
//export const AUTH_GOOGLE_CHECK_STATE = "AUTH_GOOGLE_CHECK_STATE" as const;
//export const AUTH_GOOGLE_LOGIN = "AUTH_GOOGLE_LOGIN" as const;
//export const AUTH_GOOGLE_LOGOUT = "AUTH_GOOGLE_LOGOUT" as const;

/*

State

*/

export interface IAuthState {
  authname: string;
  avatar: string;
  message: string;
  staffIsAuthenticated: boolean;
  userIsAuthenticated: boolean;
}

/*

Actions

*/

export type AuthActions =
IAuthCheckState |
IAuthMessageClear |
IAuthReset |
IAuthUpdateLocalAvatar |
IAuthStaffDisplay |
IAuthStaffLogin |
IAuthStaffLoginSucceeded |
IAuthStaffLoginFailed |
IAuthStaffLogout |
IAuthStaffLogoutSucceeded |
IAuthStaffLogoutFailed |
IAuthUserDisplay | 
IAuthUserRegister |
IAuthUserRegisterSucceeded |
IAuthUserRegisterFailed |
IAuthUserVerify |
IAuthUserVerifySucceeded |
IAuthUserVerifyFailed |
IAuthUserLogin |
IAuthUserLoginSucceeded |
IAuthUserLoginFailed |
IAuthUserLogout |
IAuthUserLogoutSucceeded |
IAuthUserLogoutFailed;

export interface IAuthCheckState {
  type: typeof AUTH_CHECK_STATE;
}

export interface IAuthMessageClear {
  type: typeof AUTH_MESSAGE_CLEAR;
}

export interface IAuthReset {
  type: typeof AUTH_RESET;
}

export interface IAuthUpdateLocalAvatar {
  type: typeof AUTH_UPDATE_LOCAL_AVATAR;
  avatar: string
}

export interface IAuthStaffDisplay {
  type: typeof AUTH_STAFF_DISPLAY;
  authname: string;
  avatar: string;
}

export interface IAuthStaffLogin {
  type: typeof AUTH_STAFF_LOGIN;
  email: string;
  password: string;
}

export interface IAuthStaffLoginSucceeded {
  type: typeof AUTH_STAFF_LOGIN_SUCCEEDED;
  message: string;
}

export interface IAuthStaffLoginFailed {
  type: typeof AUTH_STAFF_LOGIN_FAILED;
  message: string;
}

export interface IAuthStaffLogout {
  type: typeof AUTH_STAFF_LOGOUT;
}

export interface IAuthStaffLogoutSucceeded {
  type: typeof AUTH_STAFF_LOGOUT_SUCCEEDED;
  message: string;
}

export interface IAuthStaffLogoutFailed {
  type: typeof AUTH_STAFF_LOGOUT_FAILED;
  message: string;
}

export interface IAuthUserDisplay {
  type: typeof AUTH_USER_DISPLAY;
  authname: string;
  avatar: string;
}

export interface IAuthUserLogin {
  type: typeof AUTH_USER_LOGIN;
  email: string;
  password: string;
}

export interface IAuthUserLoginSucceeded {
  type: typeof AUTH_USER_LOGIN_SUCCEEDED;
  message: string;
}

export interface IAuthUserLoginFailed {
  type: typeof AUTH_USER_LOGIN_FAILED;
  message: string;
}

export interface IAuthUserLogout {
  type: typeof AUTH_USER_LOGOUT;
}

export interface IAuthUserLogoutSucceeded {
  type: typeof AUTH_USER_LOGOUT_SUCCEEDED;
  message: string;
}

export interface IAuthUserLogoutFailed {
  type: typeof AUTH_USER_LOGOUT_FAILED;
  message: string;
}

export interface IAuthUserRegister {
  type: typeof AUTH_USER_REGISTER;
  email: string;
  password: string;
  username: string;
  history: History;
}

export interface IAuthUserRegisterSucceeded {
  type: typeof AUTH_USER_REGISTER_SUCCEEDED;
  message: string;
}

export interface IAuthUserRegisterFailed {
  type: typeof AUTH_USER_REGISTER_FAILED;
  message: string;
}

export interface IAuthUserVerify {
  type: typeof AUTH_USER_VERIFY;
  email: string;
  password: string;
  confirmationCode: string;
  history: History;
}

export interface IAuthUserVerifySucceeded {
  type: typeof AUTH_USER_VERIFY_SUCCEEDED;
  message: string;
}

export interface IAuthUserVerifyFailed {
  type: typeof AUTH_USER_VERIFY_FAILED;
  message: string;
}