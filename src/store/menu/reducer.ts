import {
  MENU_SHADOW_SHOW,
  MENU_SHADOW_HIDE,
  IMenuState,
  MenuActions
} from './types';

const initialState: IMenuState = {shadow: false};

export const menuReducer = (
  state = initialState,
  action: MenuActions
): IMenuState => {
  switch (action.type) {
    case MENU_SHADOW_SHOW: return {...state, ...{shadow: true}};
    case MENU_SHADOW_HIDE: return {...state, ...{shadow: false}};
    default: return state;
  }
};