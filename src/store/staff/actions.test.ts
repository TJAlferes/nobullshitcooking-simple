import { staffMessageClear } from './actions';
import { STAFF_MESSAGE_CLEAR } from './types';

describe('staffMessageClear action creator', () => {
  it('returns the correct action type', () => {
    expect(staffMessageClear().type).toEqual(STAFF_MESSAGE_CLEAR);
  });
});