import { nobscappWindowFocused } from './actions';
import { NOBSCAPP_WINDOW_FOCUSED } from './types';

describe('nobscappWindowFocused action creator', () => {
  it('returns the correct action type', () => {
    expect(nobscappWindowFocused(false).type).toEqual(NOBSCAPP_WINDOW_FOCUSED);
  });

  it('returns the correct condition', () => {
    expect(nobscappWindowFocused(false).condition).toEqual(false);
  });
});