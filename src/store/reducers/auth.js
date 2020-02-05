import {
  AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGIN_FAILED,
  AUTH_STAFF_LOGOUT_SUCCEEDED,
  AUTH_STAFF_LOGOUT_FAILED,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGIN_FAILED,
  AUTH_USER_LOGOUT_SUCCEEDED,
  AUTH_USER_LOGOUT_FAILED,
  AUTH_USER_REGISTER_SUCCEEDED,
  AUTH_USER_REGISTER_FAILED,
  AUTH_USER_VERIFY_SUCCEEDED,
  AUTH_USER_VERIFY_FAILED,
  AUTH_MESSAGE_CLEAR,
  AUTH_DISPLAY,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_RESET,
  AUTH_USER_LOGOUT,
  AUTH_STAFF_LOGOUT
} from '../actions/actionTypes';

const initialState = {
  message: '',
  isAuthenticated: false,
  authname: '',
  avatar: ''
};

const authMessage = (state, action) => ({
  ...state,
  ...{message: action.message}
});

const authMessageClear = (state, action) => ({
  ...state,
  ...{message: ''}
});

const authDisplay = (state, action) => ({
  ...state,
  ...{isAuthenticated: true, authname: action.authname, avatar: action.avatar}
});

const updateLocalAvatar = (state, action) => ({
  ...state,
  ...{avatar: action.avatar}
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_STAFF_LOGIN_SUCCEEDED: return authMessage(state, action);
    case AUTH_STAFF_LOGIN_FAILED: return authMessage(state, action);

    case AUTH_STAFF_LOGOUT_SUCCEEDED: return authMessage(state, action);
    case AUTH_STAFF_LOGOUT_FAILED: return authMessage(state, action);

    case AUTH_USER_LOGIN_SUCCEEDED: return authMessage(state, action);
    case AUTH_USER_LOGIN_FAILED: return authMessage(state, action);

    case AUTH_USER_LOGOUT_SUCCEEDED: return authMessage(state, action);
    case AUTH_USER_LOGOUT_FAILED: return authMessage(state, action);

    case AUTH_USER_REGISTER_SUCCEEDED: return authMessage(state, action);
    case AUTH_USER_REGISTER_FAILED: return authMessage(state, action);

    case AUTH_USER_VERIFY_SUCCEEDED: return authMessage(state, action);
    case AUTH_USER_VERIFY_FAILED: return authMessage(state, action);

    case AUTH_MESSAGE_CLEAR: return authMessageClear(state, action);

    case AUTH_DISPLAY: return authDisplay(state, action);

    case AUTH_UPDATE_LOCAL_AVATAR: return updateLocalAvatar(state, action);

    case AUTH_RESET: return {...state, ...initialState};

    case AUTH_USER_LOGOUT: return {...state, ...initialState};
    case AUTH_STAFF_LOGOUT: return {...state, ...initialState};
  }
  return state;
};

export default authReducer;