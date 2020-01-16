import { NOBSCAPP_WINDOW_FOCUSED } from '../actions/actionTypes';

// make false first, have them click on something (Connect button?)
const initialState = {windowFocused: true};

const nobscappReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOBSCAPP_WINDOW_FOCUSED:
      return {...state, ...{windowFocused: action.condition}};
  }
  return state;
};

export default nobscappReducer;