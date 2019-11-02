import { NOBSCAPP_WINDOW_FOCUSED } from '../actions/actionTypes';

const initialState = {windowFocused: true};  // make false first, have them click on something (Connect button?)

const nobscappReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOBSCAPP_WINDOW_FOCUSED: return {...state, ...{windowFocused: action.condition}};
  }
  return state;
};

export default nobscappReducer;