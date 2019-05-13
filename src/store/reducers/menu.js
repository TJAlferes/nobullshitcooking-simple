import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {shadow: false};

const shadowShow = (state, action) => {
  return Object.assign({}, state, {shadow: true});
};

const shadowHide = (state, action) => {
  return Object.assign({}, state, {shadow: false});
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_SHADOW_SHOW: return shadowShow(state, action);
    case actionTypes.MENU_SHADOW_HIDE: return shadowHide(state, action);
  }
  return state;
};

export default menuReducer;