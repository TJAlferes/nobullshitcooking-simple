import { staffMessageClear } from '../../../src/store/staff/actions';
import { STAFF_MESSAGE_CLEAR } from '../../../src/store/staff/types';

describe('staffMessageClear action creator', () => {
  it('returns the correct action type', () => {
    expect(staffMessageClear().type).toEqual(STAFF_MESSAGE_CLEAR);
  });
});