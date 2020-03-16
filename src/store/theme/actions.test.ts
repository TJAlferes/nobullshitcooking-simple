import { THEME_DARK_TRIGGER, THEME_LIGHT_TRIGGER } from './types';

import { themeDarkTrigger, themeLightTrigger } from './actions';

describe('the themeDarkTrigger action creator', () => {
  it('returns the correct action type', () => {
    const actual = themeDarkTrigger().type;
    const expected = THEME_DARK_TRIGGER;
    expect(actual).toEqual(expected);
  });
});

describe('the themeLightTrigger action creator', () => {
  it('returns the correct action type', () => {
    const actual = themeLightTrigger().type;
    const expected = THEME_LIGHT_TRIGGER;
    expect(actual).toEqual(expected);
  });
});