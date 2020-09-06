import { userMessageClear } from '../../../src/store/user/actions';
import { USER_MESSAGE_CLEAR } from '../../../src/store/user/types';

describe('userMessageClear action creator', () => {
  it('returns the correct action type', () => {
    expect(userMessageClear().type).toEqual(USER_MESSAGE_CLEAR);
  });
});