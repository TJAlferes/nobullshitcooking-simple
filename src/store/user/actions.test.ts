import { USER_MESSAGE_CLEAR } from './types';

import { userMessageClear } from './actions';

describe('the userMessageClear action creator', () => {
  it('returns the correct action type', () => {
    const actual = userMessageClear().type;
    const expected = USER_MESSAGE_CLEAR;
    expect(actual).toEqual(expected);
  });
});