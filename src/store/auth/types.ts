export const AUTH_DISPLAY = 'AUTH_DISPLAY' as const;
export const AUTH_RESET = 'AUTH_RESET' as const;
export const AUTH_CHECK_STATE = "AUTH_CHECK_STATE" as const;
export const AUTH_MESSAGE_CLEAR = "AUTH_MESSAGE_CLEAR" as const;
export const AUTH_UPDATE_LOCAL_AVATAR = "AUTH_UPDATE_LOCAL_AVATAR" as const;

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

export const AUTH_USER_LOGIN = "AUTH_USER_LOGIN" as const;
export const AUTH_USER_LOGIN_SUCCEEDED = "AUTH_USER_LOGIN_SUCCEEDED" as const;
export const AUTH_USER_LOGIN_FAILED = "AUTH_USER_LOGIN_FAILED" as const;

export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT" as const;
export const AUTH_USER_LOGOUT_SUCCEEDED = "AUTH_USER_LOGOUT_SUCCEEDED" as const;
export const AUTH_USER_LOGOUT_FAILED = "AUTH_USER_LOGOUT_FAILED" as const;

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

export interface AuthDisplay {
  type: typeof AUTH_DISPLAY
  authname: string
  avatar: string
}

export interface AuthReset {
  type: typeof AUTH_RESET
}

export interface AuthCheckState {
  type: typeof AUTH_CHECK_STATE
}

export interface AuthMessageClear {
  type: typeof AUTH_MESSAGE_CLEAR
}

export interface AuthUpdateLocalAvatar {
  type: typeof AUTH_UPDATE_LOCAL_AVATAR
  avatar: string
}

export interface AuthUserRegister {
  type: typeof AUTH_USER_REGISTER
  email: string
  password: string
  username: string
  history: {}
}

export interface AuthUserRegisterSucceeded {
  type: typeof AUTH_USER_REGISTER_SUCCEEDED
  message: string
}

export interface AuthUserRegisterFailed {
  type: typeof AUTH_USER_REGISTER_FAILED
  message: string
}

export interface AuthUserVerify {
  type: typeof AUTH_USER_VERIFY
  email: string
  password: string
  confirmationCode: string
  history: {}
}

export interface AuthUserVerifySucceeded {
  type: typeof AUTH_USER_VERIFY_SUCCEEDED
  message: string
}

export interface AuthUserVerifyFailed {
  type: typeof AUTH_USER_VERIFY_FAILED
  message: string
}

export interface AuthUserLogin {
  type: typeof AUTH_USER_LOGIN
  email: string
  password: string
}

export interface AuthUserLoginSucceeded {
  type: typeof AUTH_USER_LOGIN_SUCCEEDED
  message: string
}

export interface AuthUserLoginFailed {
  type: typeof AUTH_USER_LOGIN_FAILED
  message: string
}

export interface AuthUserLogout {
  type: typeof AUTH_USER_LOGOUT
}

export interface AuthUserLogoutSucceeded {
  type: typeof AUTH_USER_LOGOUT_SUCCEEDED
  message: string
}

export interface AuthUserLogoutFailed {
  type: typeof AUTH_USER_LOGOUT_FAILED
  message: string
}