import {
  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED,
  FullAvatar,
  TinyAvatar
} from './types';

export const userSubmitAvatar = (
  fullAvatar: FullAvatar,
  tinyAvatar: TinyAvatar
) => ({
  type: USER_SUBMIT_AVATAR,
  fullAvatar,
  tinyAvatar
});

export const userSubmitAvatarSucceeded = (message: string) => ({
  type: USER_SUBMIT_AVATAR_SUCCEEDED,
  message
});

export const userSubmitAvatarFailed = (message: string) => ({
  type: USER_SUBMIT_AVATAR_FAILED,
  message
});