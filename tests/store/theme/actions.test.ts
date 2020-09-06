import { themeDarkTrigger, themeLightTrigger } from './actions';
import { THEME_DARK_TRIGGER, THEME_LIGHT_TRIGGER } from './types';

describe('themeDarkTrigger action creator', () => {
  it('returns the correct action type', () => {
    expect(themeDarkTrigger().type).toEqual(THEME_DARK_TRIGGER);
  });
});

describe('themeLightTrigger action creator', () => {
  it('returns the correct action type', () => {
    expect(themeLightTrigger().type).toEqual(THEME_LIGHT_TRIGGER);
  });
});