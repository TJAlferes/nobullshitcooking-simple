import * as actionTypes from '../actions/actionTypes';
//import update from 'immutability-helper';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

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

const authDisplay = (state, action) => ({
  ...state,
  ...{isAuthenticated: true, authname: action.authname, avatar: action.avatar}
});

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
    case actionTypes.AUTH_DISPLAY: return authDisplay(state, action);
    case actionTypes.AUTH_RESET: return {...state, ...initialState};
    case actionTypes.AUTH_USER_LOGOUT: return {...state, ...initialState};
    case actionTypes.AUTH_STAFF_LOGOUT: return {...state, ...initialState};
    //case actionTypes.AUTH_
  }
  return state;
};

export default authReducer;