import { NOBSCAPP_WINDOW_FOCUSED } from '../actions/actionTypes';

import nobscappReducer from './nobscapp';

const initialState = {windowFocused: true};

describe('the nobscapp reducer', () => {
  it('returns initial state', () => {
    const actual = nobscappReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
  it('handles actions of type NOBSCAPP_WINDOW_FOCUSED', () => {
    const actual = nobscappReducer(initialState, {
      type: NOBSCAPP_WINDOW_FOCUSED,
      condition: false
    });
    const expected = {windowFocused: false};
    expect(actual).toEqual(expected);
  });
});