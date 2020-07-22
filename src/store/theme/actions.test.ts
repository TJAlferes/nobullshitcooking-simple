import { themeDarkTrigger, themeLightTrigger } from './actions';
import { THEME_DARK_TRIGGER, THEME_LIGHT_TRIGGER } from './types';

describe('themeDarkTrigger action creator', () => {
  it('returns the correct action type', () => {
    const actual = themeDarkTrigger().type;
    const expected = THEME_DARK_TRIGGER;
    expect(actual).toEqual(expected);
  });
});

describe('themeLightTrigger action creator', () => {
  it('returns the correct action type', () => {
    const actual = themeLightTrigger().type;
    const expected = THEME_LIGHT_TRIGGER;
    expect(actual).toEqual(expected);
  });
});