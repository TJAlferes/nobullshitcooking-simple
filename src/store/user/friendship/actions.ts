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

export const userRequestFriendship = (friendName: string) => ({
  type: USER_REQUEST_FRIENDSHIP,
  friendName
});

export const userRequestFriendshipSucceeded = (message: string) => ({
  type: USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  message
});

export const userRequestFriendshipFailed = (message: string) => ({
  type: USER_REQUEST_FRIENDSHIP_FAILED,
  message
});

export const userAcceptFriendship = (friendName: string) => ({
  type: USER_ACCEPT_FRIENDSHIP,
  friendName
});

export const userAcceptFriendshipSucceeded = (message: string) => ({
  type: USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  message
});

export const userAcceptFriendshipFailed = (message: string) => ({
  type: USER_ACCEPT_FRIENDSHIP_FAILED,
  message
});

export const userRejectFriendship = (friendName: string) => ({
  type: USER_REJECT_FRIENDSHIP,
  friendName
});

export const userRejectFriendshipSucceeded = (message: string) => ({
  type: USER_REJECT_FRIENDSHIP_SUCCEEDED,
  message
});

export const userRejectFriendshipFailed = (message: string) => ({
  type: USER_REJECT_FRIENDSHIP_FAILED,
  message
});

export const userDeleteFriendship = (friendName: string) => ({
  type: USER_DELETE_FRIENDSHIP,
  friendName
});

export const userDeleteFriendshipSucceeded = (message: string) => ({
  type: USER_DELETE_FRIENDSHIP_SUCCEEDED,
  message
});

export const userDeleteFriendshipFailed = (message: string) => ({
  type: USER_DELETE_FRIENDSHIP_FAILED,
  message
});

export const userBlockUser = (friendName: string) => ({
  type: USER_BLOCK_USER,
  friendName
});

export const userBlockUserSucceeded = (message: string) => ({
  type: USER_BLOCK_USER_SUCCEEDED,
  message
});

export const userBlockUserFailed = (message: string) => ({
  type: USER_BLOCK_USER_FAILED,
  message
});

export const userUnblockUser = (friendName: string) => ({
  type: USER_UNBLOCK_USER,
  friendName
});

export const userUnblockUserSucceeded = (message: string) => ({
  type: USER_UNBLOCK_USER_SUCCEEDED,
  message
});

export const userUnblockUserFailed = (message: string) => ({
  type: USER_UNBLOCK_USER_FAILED,
  message
});