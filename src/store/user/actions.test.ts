import { userMessageClear } from './actions';
import { USER_MESSAGE_CLEAR } from './types';

describe('userMessageClear action creator', () => {
  it('returns the correct action type', () => {
    const actual = userMessageClear().type;
    const expected = USER_MESSAGE_CLEAR;
    expect(actual).toEqual(expected);
  });
});