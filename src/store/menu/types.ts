export const MENU_SHADOW_SHOW = 'MENU_SHADOW_SHOW';
export const MENU_SHADOW_HIDE = 'MENU_SHADOW_HIDE';

export interface MenuState {
  shadow: boolean
}

export type MenuActions = MenuShadowShow|MenuShadowHide;

interface MenuShadowShow {
  type: typeof MENU_SHADOW_SHOW
}

interface MenuShadowHide {
  type: typeof MENU_SHADOW_HIDE
}