export const USER_SUBMIT_AVATAR = 'USER_SUBMIT_AVATAR' as const;
export const USER_SUBMIT_AVATAR_SUCCEEDED = 'USER_SUBMIT_AVATAR_SUCCEEDED' as const;
export const USER_SUBMIT_AVATAR_FAILED = 'USER_SUBMIT_AVATAR_FAILED' as const;

export interface UserSubmitAvatar {
  type: typeof USER_SUBMIT_AVATAR
  fullAvatar: FullAvatar
  tinyAvatar: TinyAvatar
}

export interface UserSubmitAvatarSucceeded {
  type: typeof USER_SUBMIT_AVATAR_SUCCEEDED
  message: string
}

export interface UserSubmitAvatarFailed {
  type: typeof USER_SUBMIT_AVATAR_FAILED
  message: string
}

export interface FullAvatar {
  type: string
}

export interface TinyAvatar {
  type: string
}