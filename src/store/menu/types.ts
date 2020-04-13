export const MENU_SHADOW_SHOW = 'MENU_SHADOW_SHOW' as const;
export const MENU_SHADOW_HIDE = 'MENU_SHADOW_HIDE' as const;

export interface IMenuState {
  shadow: boolean
}

export type MenuActions = IMenuShadowShow|IMenuShadowHide;

interface IMenuShadowShow {
  type: typeof MENU_SHADOW_SHOW
}

interface IMenuShadowHide {
  type: typeof MENU_SHADOW_HIDE
}