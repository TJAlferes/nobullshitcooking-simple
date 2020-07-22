import { menuShadowShow, menuShadowHide } from './actions';
import { MENU_SHADOW_SHOW, MENU_SHADOW_HIDE } from './types';

describe('menuShadowShow action creator', () => {
  it('returns the correct action type', () => {
    const actual = menuShadowShow().type;
    const expected = MENU_SHADOW_SHOW;
    expect(actual).toEqual(expected);
  });
});

describe('menuShadowHide action creator', () => {
  it('returns the correct action type', () => {
    const actual = menuShadowHide().type;
    const expected = MENU_SHADOW_HIDE;
    expect(actual).toEqual(expected);
  });
});