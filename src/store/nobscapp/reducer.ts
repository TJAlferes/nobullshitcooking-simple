import {
  NOBSCAPP_WINDOW_FOCUSED,
  NOBSCAppState,
  NOBSCAppActions
} from './types';

// make false first, have them click on something (Connect button?)
const initialState: NOBSCAppState = {windowFocused: true};

const nobscappReducer = (
  state = initialState,
  action: NOBSCAppActions
): NOBSCAppState => {
  switch (action.type) {
    case NOBSCAPP_WINDOW_FOCUSED:
      return {...state, ...{windowFocused: action.condition}};
    default: return state;
  }
};

export default nobscappReducer;