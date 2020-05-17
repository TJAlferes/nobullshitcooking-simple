import {
  NOBSCAPP_WINDOW_FOCUSED,
  INOBSCAppState,
  NOBSCAppActions
} from './types';

// make false first, have them click on something (Connect button?)
const initialState: INOBSCAppState = {windowFocused: true};

const nobscappReducer = (
  state = initialState,
  action: NOBSCAppActions
): INOBSCAppState => {
  switch (action.type) {
    case NOBSCAPP_WINDOW_FOCUSED:
      return {...state, ...{windowFocused: action.condition}};
    default: return state;
  }
};

export default nobscappReducer;