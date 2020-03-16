export const USER_REQUEST_FRIENDSHIP = 'USER_REQUEST_FRIENDSHIP';
export const USER_REQUEST_FRIENDSHIP_SUCCEEDED = 'USER_REQUEST_FRIENDSHIP_SUCCEEDED';
export const USER_REQUEST_FRIENDSHIP_FAILED = 'USER_REQUEST_FRIENDSHIP_FAILED';

export const USER_ACCEPT_FRIENDSHIP = 'USER_ACCEPT_FRIENDSHIP';
export const USER_ACCEPT_FRIENDSHIP_SUCCEEDED = 'USER_ACCEPT_FRIENDSHIP_SUCCEEDED';
export const USER_ACCEPT_FRIENDSHIP_FAILED = 'USER_ACCEPT_FRIENDSHIP_FAILED';

export const USER_REJECT_FRIENDSHIP = 'USER_REJECT_FRIENDSHIP';
export const USER_REJECT_FRIENDSHIP_SUCCEEDED = 'USER_REJECT_FRIENDSHIP_SUCCEEDED';
export const USER_REJECT_FRIENDSHIP_FAILED = 'USER_REJECT_FRIENDSHIP_FAILED';

export const USER_DELETE_FRIENDSHIP = 'USER_DELETE_FRIENDSHIP';
export const USER_DELETE_FRIENDSHIP_SUCCEEDED = 'USER_DELETE_FRIENDSHIP_SUCCEEDED';
export const USER_DELETE_FRIENDSHIP_FAILED = 'USER_DELETE_FRIENDSHIP_FAILED';

export const USER_BLOCK_USER = 'USER_BLOCK_USER';
export const USER_BLOCK_USER_SUCCEEDED = 'USER_BLOCK_USER_SUCCEEDED';
export const USER_BLOCK_USER_FAILED = 'USER_BLOCK_USER_FAILED';

export const USER_UNBLOCK_USER = 'USER_UNBLOCK_USER';
export const USER_UNBLOCK_USER_SUCCEEDED = 'USER_UNBLOCK_USER_SUCCEEDED';
export const USER_UNBLOCK_USER_FAILED = 'USER_UNBLOCK_USER_FAILED';

interface UserRequestFriendship {
  type: typeof USER_REQUEST_FRIENDSHIP
  friendName: string
}

interface UserRequestFriendshipSucceeded {
  type: typeof USER_REQUEST_FRIENDSHIP_SUCCEEDED
  message: string
}

interface UserRequestFriendshipFailed {
  type: typeof USER_REQUEST_FRIENDSHIP_FAILED
  message: string
}

interface UserAcceptFriendship {
  type: typeof USER_ACCEPT_FRIENDSHIP
  friendName: string
}

interface UserAcceptFriendshipSucceeded {
  type: typeof USER_ACCEPT_FRIENDSHIP_SUCCEEDED
  message: string
}

interface UserAcceptFriendshipFailed {
  type: typeof USER_ACCEPT_FRIENDSHIP_FAILED
  message: string
}

interface UserRejectFriendship {
  type: typeof USER_REJECT_FRIENDSHIP
  friendName: string
}

interface UserRejectFriendshipSucceeded {
  type: typeof USER_REJECT_FRIENDSHIP_SUCCEEDED
  message: string
}

interface UserRejectFriendshipFailed {
  type: typeof USER_REJECT_FRIENDSHIP_FAILED
  message: string
}

interface UserDeleteFriendship {
  type: typeof USER_DELETE_FRIENDSHIP
  friendName: string
}

interface UserDeleteFriendshipSucceeded {
  type: typeof USER_DELETE_FRIENDSHIP_SUCCEEDED
  message: string
}

interface UserDeleteFriendshipFailed {
  type: typeof USER_DELETE_FRIENDSHIP_FAILED
  message: string
}

interface UserBlockUser {
  type: typeof USER_BLOCK_USER
  friendName: string
}

interface UserBlockUserSucceeded {
  type: typeof USER_BLOCK_USER_SUCCEEDED
  message: string
}

interface UserBlockUserFailed {
  type: typeof USER_BLOCK_USER_FAILED
  message: string
}

interface UserUnblockUser {
  type: typeof USER_UNBLOCK_USER
  friendName: string
}

interface UserUnblockUserSucceeded {
  type: typeof USER_UNBLOCK_USER_SUCCEEDED
  message: string
}

interface UserUnblockUserFailed {
  type: typeof USER_UNBLOCK_USER_FAILED
  message: string
}