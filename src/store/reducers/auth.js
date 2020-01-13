import * as actionTypes from '../actions/actionTypes';

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

// Note to self: See: Nir Kofman
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER_REGISTER_SUCCEEDED: return authMessage(state, action);
    case actionTypes.AUTH_USER_REGISTER_FAILED: return authMessage(state, action);

    case actionTypes.AUTH_USER_LOGIN_SUCCEEDED: return authMessage(state, action);
    case actionTypes.AUTH_USER_LOGIN_FAILED: return authMessage(state, action);

    case actionTypes.AUTH_USER_LOGOUT_SUCCEEDED: return authMessage(state, action);
    case actionTypes.AUTH_USER_LOGOUT_FAILED: return authMessage(state, action);

    case actionTypes.AUTH_STAFF_LOGIN_SUCCEEDED: return authMessage(state, action);
    case actionTypes.AUTH_STAFF_LOGIN_FAILED: return authMessage(state, action);

    case actionTypes.AUTH_STAFF_LOGOUT_SUCCEEDED: return authMessage(state, action);
    case actionTypes.AUTH_STAFF_LOGOUT_FAILED: return authMessage(state, action);

    case actionTypes.AUTH_MESSAGE_CLEAR: return authMessageClear(state, action);

    case actionTypes.AUTH_DISPLAY: return authDisplay(state, action);

    case actionTypes.AUTH_UPDATE_LOCAL_AVATAR: return updateLocalAvatar(state, action);

    case actionTypes.AUTH_RESET: return {...state, ...initialState};

    case actionTypes.AUTH_USER_LOGOUT: return {...state, ...initialState};
    case actionTypes.AUTH_STAFF_LOGOUT: return {...state, ...initialState};
  }
  return state;
};

export default authReducer;