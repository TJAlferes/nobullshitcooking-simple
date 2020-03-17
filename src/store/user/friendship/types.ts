export const USER_REQUEST_FRIENDSHIP = 'USER_REQUEST_FRIENDSHIP' as const;
export const USER_REQUEST_FRIENDSHIP_SUCCEEDED = 'USER_REQUEST_FRIENDSHIP_SUCCEEDED' as const;
export const USER_REQUEST_FRIENDSHIP_FAILED = 'USER_REQUEST_FRIENDSHIP_FAILED' as const;
export const USER_ACCEPT_FRIENDSHIP = 'USER_ACCEPT_FRIENDSHIP' as const;
export const USER_ACCEPT_FRIENDSHIP_SUCCEEDED = 'USER_ACCEPT_FRIENDSHIP_SUCCEEDED' as const;
export const USER_ACCEPT_FRIENDSHIP_FAILED = 'USER_ACCEPT_FRIENDSHIP_FAILED' as const;
export const USER_REJECT_FRIENDSHIP = 'USER_REJECT_FRIENDSHIP' as const;
export const USER_REJECT_FRIENDSHIP_SUCCEEDED = 'USER_REJECT_FRIENDSHIP_SUCCEEDED' as const;
export const USER_REJECT_FRIENDSHIP_FAILED = 'USER_REJECT_FRIENDSHIP_FAILED' as const;
export const USER_DELETE_FRIENDSHIP = 'USER_DELETE_FRIENDSHIP' as const;
export const USER_DELETE_FRIENDSHIP_SUCCEEDED = 'USER_DELETE_FRIENDSHIP_SUCCEEDED' as const;
export const USER_DELETE_FRIENDSHIP_FAILED = 'USER_DELETE_FRIENDSHIP_FAILED' as const;
export const USER_BLOCK_USER = 'USER_BLOCK_USER' as const;
export const USER_BLOCK_USER_SUCCEEDED = 'USER_BLOCK_USER_SUCCEEDED' as const;
export const USER_BLOCK_USER_FAILED = 'USER_BLOCK_USER_FAILED' as const;
export const USER_UNBLOCK_USER = 'USER_UNBLOCK_USER' as const;
export const USER_UNBLOCK_USER_SUCCEEDED = 'USER_UNBLOCK_USER_SUCCEEDED' as const;
export const USER_UNBLOCK_USER_FAILED = 'USER_UNBLOCK_USER_FAILED' as const;

export interface UserRequestFriendship {
  type: typeof USER_REQUEST_FRIENDSHIP
  friendName: string
}

export interface UserRequestFriendshipSucceeded {
  type: typeof USER_REQUEST_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface UserRequestFriendshipFailed {
  type: typeof USER_REQUEST_FRIENDSHIP_FAILED
  message: string
}

export interface UserAcceptFriendship {
  type: typeof USER_ACCEPT_FRIENDSHIP
  friendName: string
}

export interface UserAcceptFriendshipSucceeded {
  type: typeof USER_ACCEPT_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface UserAcceptFriendshipFailed {
  type: typeof USER_ACCEPT_FRIENDSHIP_FAILED
  message: string
}

export interface UserRejectFriendship {
  type: typeof USER_REJECT_FRIENDSHIP
  friendName: string
}

export interface UserRejectFriendshipSucceeded {
  type: typeof USER_REJECT_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface UserRejectFriendshipFailed {
  type: typeof USER_REJECT_FRIENDSHIP_FAILED
  message: string
}

export interface UserDeleteFriendship {
  type: typeof USER_DELETE_FRIENDSHIP
  friendName: string
}

export interface UserDeleteFriendshipSucceeded {
  type: typeof USER_DELETE_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface UserDeleteFriendshipFailed {
  type: typeof USER_DELETE_FRIENDSHIP_FAILED
  message: string
}

export interface UserBlockUser {
  type: typeof USER_BLOCK_USER
  friendName: string
}

export interface UserBlockUserSucceeded {
  type: typeof USER_BLOCK_USER_SUCCEEDED
  message: string
}

export interface UserBlockUserFailed {
  type: typeof USER_BLOCK_USER_FAILED
  message: string
}

export interface UserUnblockUser {
  type: typeof USER_UNBLOCK_USER
  friendName: string
}

export interface UserUnblockUserSucceeded {
  type: typeof USER_UNBLOCK_USER_SUCCEEDED
  message: string
}

export interface UserUnblockUserFailed {
  type: typeof USER_UNBLOCK_USER_FAILED
  message: string
}