import { menuReducer } from './reducer';
import { MENU_SHADOW_SHOW, MENU_SHADOW_HIDE } from './types';

const initialState = {shadow: false};

describe('menu reducer', () => {
  it('returns initial state', () => {
    expect(menuReducer(undefined, {type: MENU_SHADOW_SHOW}))
      .toEqual({shadow: true});
  });

  it('handles actions of type MENU_SHADOW_SHOW', () => {
    expect(menuReducer(initialState, {type: MENU_SHADOW_SHOW}))
      .toEqual({shadow: true});
  });

  it('handles actions of type MENU_SHADOW_HIDE', () => {
    expect(menuReducer({shadow: true}, {type: MENU_SHADOW_HIDE}))
      .toEqual({shadow: false});
  });
});