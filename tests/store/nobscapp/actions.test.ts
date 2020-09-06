import { nobscappWindowFocused } from '../../../src/store/nobscapp/actions';
import { NOBSCAPP_WINDOW_FOCUSED } from '../../../src/store/nobscapp/types';

describe('nobscappWindowFocused action creator', () => {
  it('returns the correct action type', () => {
    expect(nobscappWindowFocused(false).type).toEqual(NOBSCAPP_WINDOW_FOCUSED);
  });

  it('returns the correct condition', () => {
    expect(nobscappWindowFocused(false).condition).toEqual(false);
  });
});