export const USER_SUBMIT_AVATAR = 'USER_SUBMIT_AVATAR' as const;
export const USER_SUBMIT_AVATAR_SUCCEEDED = 'USER_SUBMIT_AVATAR_SUCCEEDED' as const;
export const USER_SUBMIT_AVATAR_FAILED = 'USER_SUBMIT_AVATAR_FAILED' as const;

export interface IUserSubmitAvatar {
  type: typeof USER_SUBMIT_AVATAR;
  fullAvatar: File | null;  // rename to avatarFull ?
  tinyAvatar: File | null;  // rename to avatarTiny ?
}

export interface IUserSubmitAvatarSucceeded {
  type: typeof USER_SUBMIT_AVATAR_SUCCEEDED;
  message: string;
}

export interface IUserSubmitAvatarFailed {
  type: typeof USER_SUBMIT_AVATAR_FAILED;
  message: string;
}