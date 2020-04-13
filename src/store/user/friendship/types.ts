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

export interface IUserRequestFriendship {
  type: typeof USER_REQUEST_FRIENDSHIP
  friendName: string
}

export interface IUserRequestFriendshipSucceeded {
  type: typeof USER_REQUEST_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface IUserRequestFriendshipFailed {
  type: typeof USER_REQUEST_FRIENDSHIP_FAILED
  message: string
}

export interface IUserAcceptFriendship {
  type: typeof USER_ACCEPT_FRIENDSHIP
  friendName: string
}

export interface IUserAcceptFriendshipSucceeded {
  type: typeof USER_ACCEPT_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface IUserAcceptFriendshipFailed {
  type: typeof USER_ACCEPT_FRIENDSHIP_FAILED
  message: string
}

export interface IUserRejectFriendship {
  type: typeof USER_REJECT_FRIENDSHIP
  friendName: string
}

export interface IUserRejectFriendshipSucceeded {
  type: typeof USER_REJECT_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface IUserRejectFriendshipFailed {
  type: typeof USER_REJECT_FRIENDSHIP_FAILED
  message: string
}

export interface IUserDeleteFriendship {
  type: typeof USER_DELETE_FRIENDSHIP
  friendName: string
}

export interface IUserDeleteFriendshipSucceeded {
  type: typeof USER_DELETE_FRIENDSHIP_SUCCEEDED
  message: string
}

export interface IUserDeleteFriendshipFailed {
  type: typeof USER_DELETE_FRIENDSHIP_FAILED
  message: string
}

export interface IUserBlockUser {
  type: typeof USER_BLOCK_USER
  friendName: string
}

export interface IUserBlockUserSucceeded {
  type: typeof USER_BLOCK_USER_SUCCEEDED
  message: string
}

export interface IUserBlockUserFailed {
  type: typeof USER_BLOCK_USER_FAILED
  message: string
}

export interface IUserUnblockUser {
  type: typeof USER_UNBLOCK_USER
  friendName: string
}

export interface IUserUnblockUserSucceeded {
  type: typeof USER_UNBLOCK_USER_SUCCEEDED
  message: string
}

export interface IUserUnblockUserFailed {
  type: typeof USER_UNBLOCK_USER_FAILED
  message: string
}