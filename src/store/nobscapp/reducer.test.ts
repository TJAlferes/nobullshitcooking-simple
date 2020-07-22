import { nobscappReducer } from './reducer';
import { NOBSCAPP_WINDOW_FOCUSED } from './types';

describe('nobscapp reducer', () => {
  it('returns initial state', () => {
    const actual = nobscappReducer(undefined, {
      type: NOBSCAPP_WINDOW_FOCUSED,
      condition: false
    });
    const expected = {windowFocused: false};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type NOBSCAPP_WINDOW_FOCUSED', () => {
    const initialState = {windowFocused: true};
    const actual = nobscappReducer(initialState, {
      type: NOBSCAPP_WINDOW_FOCUSED,
      condition: false
    });
    const expected = {windowFocused: false};
    expect(actual).toEqual(expected);
  });
});