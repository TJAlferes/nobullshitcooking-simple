import {
  MENU_SHADOW_SHOW,
  MENU_SHADOW_HIDE,
  MenuState,
  MenuActions
} from './types';

const initialState: MenuState = {shadow: false};

const menuReducer = (state = initialState, action: MenuActions): MenuState => {
  switch (action.type) {
    case MENU_SHADOW_SHOW: return {...state, ...{shadow: true}};
    case MENU_SHADOW_HIDE: return {...state, ...{shadow: false}};
    default: return state;
  }
};

export default menuReducer;