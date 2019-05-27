import * as actionTypes from '../actions/actionTypes';
//import update from 'immutability-helper';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {
  isAuthenticated: false,
  authname: '',
  avatar: ''
};

const authDisplay = (state, action) => ({
  ...state,
  ...{isAuthenticated: true, authname: action.authname, avatar: action.avatar}
});

//function facebookCheckLoginState() {}

//function facebookLogin() {}

//function facebookLogout() {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_DISPLAY: return authDisplay(state, action);
    case actionTypes.AUTH_RESET: return {...state, ...initialState};
    case actionTypes.AUTH_USER_LOGOUT: return {...state, ...initialState};
    case actionTypes.AUTH_STAFF_LOGOUT: return {...state, ...initialState};
    //case actionTypes.AUTH_
  }
  return state;
};

export default authReducer;