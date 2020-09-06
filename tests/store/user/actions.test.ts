import { userMessageClear } from './actions';
import { USER_MESSAGE_CLEAR } from './types';

describe('userMessageClear action creator', () => {
  it('returns the correct action type', () => {
    expect(userMessageClear().type).toEqual(USER_MESSAGE_CLEAR);
  });
});