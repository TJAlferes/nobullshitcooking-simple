import {
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGIN_FAILED,
  AUTH_USER_LOGOUT_SUCCEEDED,
  AUTH_USER_LOGOUT_FAILED,
  AUTH_USER_REGISTER_SUCCEEDED,
  AUTH_USER_REGISTER_FAILED,
  AUTH_USER_VERIFY_SUCCEEDED,
  AUTH_USER_VERIFY_FAILED,
  AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGIN_FAILED,
  AUTH_STAFF_LOGOUT_SUCCEEDED,
  AUTH_STAFF_LOGOUT_FAILED,
  AUTH_MESSAGE_CLEAR,
  AUTH_DISPLAY,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_RESET,
  AUTH_USER_LOGOUT,
  AUTH_STAFF_LOGOUT,
  IAuthState,
  AuthActions
} from './types';

const initialState: IAuthState = {
  message: '',
  isAuthenticated: false,
  authname: '',
  avatar: ''
};

const authReducer = (
  state = initialState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AUTH_USER_LOGIN_SUCCEEDED:
    case AUTH_USER_LOGIN_FAILED:
    case AUTH_USER_LOGOUT_SUCCEEDED:
    case AUTH_USER_LOGOUT_FAILED:
    case AUTH_USER_REGISTER_SUCCEEDED:
    case AUTH_USER_REGISTER_FAILED:
    case AUTH_USER_VERIFY_SUCCEEDED:
    case AUTH_USER_VERIFY_FAILED:
    case AUTH_STAFF_LOGIN_SUCCEEDED:
    case AUTH_STAFF_LOGIN_FAILED:
    case AUTH_STAFF_LOGOUT_SUCCEEDED:
    case AUTH_STAFF_LOGOUT_FAILED:
      return {...state, ...{message: action.message}};

    case AUTH_MESSAGE_CLEAR:
      return {...state, ...{message: ''}};

    case AUTH_DISPLAY:
      return {
        ...state,
        ...{
          isAuthenticated: true,
          authname: action.authname,
          avatar: action.avatar
        }
      };

    case AUTH_UPDATE_LOCAL_AVATAR:
      return {...state, ...{avatar: action.avatar}};

    case AUTH_RESET:
    case AUTH_USER_LOGOUT:
    case AUTH_STAFF_LOGOUT:
      return {...state, ...initialState};
      
    default: return state;
  }
};

export default authReducer;