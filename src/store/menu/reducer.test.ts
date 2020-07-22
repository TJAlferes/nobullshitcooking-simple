import { menuReducer } from './reducer';
import { MENU_SHADOW_SHOW, MENU_SHADOW_HIDE } from './types';

const initialState = {shadow: false};

describe('menu reducer', () => {
  it('returns initial state', () => {
    const actual = menuReducer(undefined, {type: MENU_SHADOW_SHOW});
    const expected = {shadow: true};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MENU_SHADOW_SHOW', () => {
    const actual = menuReducer(initialState, {type: MENU_SHADOW_SHOW});
    const expected = {shadow: true};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MENU_SHADOW_HIDE', () => {
    const beforeState = {shadow: true};
    const actual = menuReducer(beforeState, {type: MENU_SHADOW_HIDE});
    const expected = {shadow: false};
    expect(actual).toEqual(expected);
  });
});