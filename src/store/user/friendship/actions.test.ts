import {
  USER_REQUEST_FRIENDSHIP,
  USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  USER_REQUEST_FRIENDSHIP_FAILED,
  USER_ACCEPT_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_ACCEPT_FRIENDSHIP_FAILED,
  USER_REJECT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP_FAILED,
  USER_DELETE_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP_FAILED,
  USER_BLOCK_USER,
  USER_BLOCK_USER_SUCCEEDED,
  USER_BLOCK_USER_FAILED,
  USER_UNBLOCK_USER,
  USER_UNBLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER_FAILED
} from './types';

import {
  userRequestFriendship,
  userRequestFriendshipSucceeded,
  userRequestFriendshipFailed,
  userAcceptFriendship,
  userAcceptFriendshipSucceeded,
  userAcceptFriendshipFailed,
  userRejectFriendship,
  userRejectFriendshipSucceeded,
  userRejectFriendshipFailed,
  userDeleteFriendship,
  userDeleteFriendshipSucceeded,
  userDeleteFriendshipFailed,
  userBlockUser,
  userBlockUserSucceeded,
  userBlockUserFailed,
  userUnblockUser,
  userUnblockUserSucceeded,
  userUnblockUserFailed
} from './actions';

describe('the userRequestFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendship('Juan').type;
    const expected = USER_REQUEST_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userRequestFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userRequestFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendshipSucceeded('OK.').type;
    const expected = USER_REQUEST_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRequestFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userRequestFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendshipFailed('Try again.').type;
    const expected = USER_REQUEST_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRequestFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userAcceptFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendship('Juan').type;
    const expected = USER_ACCEPT_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userAcceptFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userAcceptFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendshipSucceeded('OK.').type;
    const expected = USER_ACCEPT_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userAcceptFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userAcceptFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendshipFailed('Try again.').type;
    const expected = USER_ACCEPT_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userAcceptFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userRejectFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendship('Juan').type;
    const expected = USER_REJECT_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userRejectFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userRejectFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendshipSucceeded('OK.').type;
    const expected = USER_REJECT_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRejectFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userRejectFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendshipFailed('Try again.').type;
    const expected = USER_REJECT_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRejectFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeleteFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendship('Juan').type;
    const expected = USER_DELETE_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userDeleteFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeleteFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendshipSucceeded('OK.').type;
    const expected = USER_DELETE_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeleteFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendshipFailed('Try again.').type;
    const expected = USER_DELETE_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userBlockUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUser('Juan').type;
    const expected = USER_BLOCK_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userBlockUser('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userBlockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUserSucceeded('OK.').type;
    const expected = USER_BLOCK_USER_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userBlockUserSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userBlockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUserFailed('Try again.').type;
    const expected = USER_BLOCK_USER_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userBlockUserFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnblockUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUser('Juan').type;
    const expected = USER_UNBLOCK_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userUnblockUser('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnblockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUserSucceeded('OK.').type;
    const expected = USER_UNBLOCK_USER_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnblockUserSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnblockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUserFailed('Try again.').type;
    const expected = USER_UNBLOCK_USER_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnblockUserFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});