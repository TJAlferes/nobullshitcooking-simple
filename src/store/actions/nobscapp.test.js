import { NOBSCAPP_WINDOW_FOCUSED } from './actionTypes';

import { nobscappWindowFocused } from './nobscapp';

describe('the nobscappWindowFocused action creator', () => {
  it('returns the correct action type', () => {
    const actual = nobscappWindowFocused().type;
    const expected = NOBSCAPP_WINDOW_FOCUSED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct condition', () => {
    const actual = nobscappWindowFocused(false).condition;
    const expected = false;
    expect(actual).toEqual(expected);
  });
});