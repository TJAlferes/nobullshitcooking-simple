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

describe('userRequestFriendship action creator', () => {
  it('returns the correct action type', () => {
    expect(userRequestFriendship('Juan').type).toEqual(USER_REQUEST_FRIENDSHIP);
  });

  it('returns the correct friendName', () => {
    expect(userRequestFriendship('Juan').friendName).toEqual('Juan');
  });
});

describe('userRequestFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userRequestFriendshipSucceeded('OK.').type)
      .toEqual(USER_REQUEST_FRIENDSHIP_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userRequestFriendshipSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userRequestFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userRequestFriendshipFailed('Try again.').type)
      .toEqual(USER_REQUEST_FRIENDSHIP_FAILED);
  });

  it('returns the correct message', () => {
    expect(userRequestFriendshipFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userAcceptFriendship action creator', () => {
  it('returns the correct action type', () => {
    expect(userAcceptFriendship('Juan').type).toEqual(USER_ACCEPT_FRIENDSHIP);
  });

  it('returns the correct friendName', () => {
    expect(userAcceptFriendship('Juan').friendName).toEqual('Juan');
  });
});

describe('userAcceptFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userAcceptFriendshipSucceeded('OK.').type)
      .toEqual(USER_ACCEPT_FRIENDSHIP_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userAcceptFriendshipSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userAcceptFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userAcceptFriendshipFailed('Try again.').type)
      .toEqual(USER_ACCEPT_FRIENDSHIP_FAILED);
  });

  it('returns the correct message', () => {
    expect(userAcceptFriendshipFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userRejectFriendship action creator', () => {
  it('returns the correct action type', () => {
    expect(userRejectFriendship('Juan').type).toEqual(USER_REJECT_FRIENDSHIP);
  });

  it('returns the correct friendName', () => {
    expect(userRejectFriendship('Juan').friendName).toEqual('Juan');
  });
});

describe('userRejectFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userRejectFriendshipSucceeded('OK.').type)
      .toEqual(USER_REJECT_FRIENDSHIP_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userRejectFriendshipSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userRejectFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userRejectFriendshipFailed('Try again.').type)
      .toEqual(USER_REJECT_FRIENDSHIP_FAILED);
  });

  it('returns the correct message', () => {
    expect(userRejectFriendshipFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userDeleteFriendship action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteFriendship('Juan').type).toEqual(USER_DELETE_FRIENDSHIP);
  });

  it('returns the correct friendName', () => {
    expect(userDeleteFriendship('Juan').friendName).toEqual('Juan');
  });
});

describe('userDeleteFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteFriendshipSucceeded('OK.').type)
      .toEqual(USER_DELETE_FRIENDSHIP_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeleteFriendshipSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeleteFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteFriendshipFailed('Try again.').type)
      .toEqual(USER_DELETE_FRIENDSHIP_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeleteFriendshipFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userBlockUser action creator', () => {
  it('returns the correct action type', () => {
    expect(userBlockUser('Juan').type).toEqual(USER_BLOCK_USER);
  });

  it('returns the correct friendName', () => {
    expect(userBlockUser('Juan').friendName).toEqual('Juan');
  });
});

describe('userBlockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userBlockUserSucceeded('OK.').type)
      .toEqual(USER_BLOCK_USER_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userBlockUserSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userBlockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userBlockUserFailed('Try again.').type)
      .toEqual(USER_BLOCK_USER_FAILED);
  });

  it('returns the correct message', () => {
    expect(userBlockUserFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('userUnblockUser action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnblockUser('Juan').type).toEqual(USER_UNBLOCK_USER);
  });

  it('returns the correct friendName', () => {
    expect(userUnblockUser('Juan').friendName).toEqual('Juan');
  });
});

describe('userUnblockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnblockUserSucceeded('OK.').type)
      .toEqual(USER_UNBLOCK_USER_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userUnblockUserSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userUnblockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnblockUserFailed('Try again.').type)
      .toEqual(USER_UNBLOCK_USER_FAILED);
  });

  it('returns the correct message', () => {
    expect(userUnblockUserFailed('Try again.').message).toEqual('Try again.');
  });
});