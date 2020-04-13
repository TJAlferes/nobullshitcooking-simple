export const USER_SUBMIT_AVATAR = 'USER_SUBMIT_AVATAR' as const;
export const USER_SUBMIT_AVATAR_SUCCEEDED = 'USER_SUBMIT_AVATAR_SUCCEEDED' as const;
export const USER_SUBMIT_AVATAR_FAILED = 'USER_SUBMIT_AVATAR_FAILED' as const;

export interface IUserSubmitAvatar {
  type: typeof USER_SUBMIT_AVATAR
  fullAvatar: IFullAvatar
  tinyAvatar: ITinyAvatar
}

export interface IUserSubmitAvatarSucceeded {
  type: typeof USER_SUBMIT_AVATAR_SUCCEEDED
  message: string
}

export interface IUserSubmitAvatarFailed {
  type: typeof USER_SUBMIT_AVATAR_FAILED
  message: string
}

export interface IFullAvatar {
  type: string
}

export interface ITinyAvatar {
  type: string
}