import { staffMessageClear } from './actions';
import { STAFF_MESSAGE_CLEAR } from './types';

describe('staffMessageClear action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffMessageClear().type;
    const expected = STAFF_MESSAGE_CLEAR;
    expect(actual).toEqual(expected);
  });
});