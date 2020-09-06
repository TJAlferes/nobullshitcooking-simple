import { menuShadowShow, menuShadowHide } from '../../../src/store/menu/actions';
import { MENU_SHADOW_SHOW, MENU_SHADOW_HIDE } from '../../../src/store/menu/types';

describe('menuShadowShow action creator', () => {
  it('returns the correct action type', () => {
    expect(menuShadowShow().type).toEqual(MENU_SHADOW_SHOW);
  });
});

describe('menuShadowHide action creator', () => {
  it('returns the correct action type', () => {
    expect(menuShadowHide().type).toEqual(MENU_SHADOW_HIDE);
  });
});