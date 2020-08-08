import {
  USER_CREATE_NEW_CONTENT,
  USER_CREATE_NEW_CONTENT_SUCCEEDED,
  USER_CREATE_NEW_CONTENT_FAILED,
  USER_EDIT_CONTENT,
  USER_EDIT_CONTENT_SUCCEEDED,
  USER_EDIT_CONTENT_FAILED,
  USER_DELETE_CONTENT,
  USER_DELETE_CONTENT_SUCCEEDED,
  USER_DELETE_CONTENT_FAILED,
  ICreatingContentInfo,
  IEditingContentInfo
} from './types';

export const userCreateNewContent = (contentInfo: ICreatingContentInfo) => ({
  type: USER_CREATE_NEW_CONTENT,
  contentInfo
});

export const userCreateNewContentSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_CONTENT_SUCCEEDED,
  message
});

export const userCreateNewContentFailed = (message: string) => ({
  type: USER_CREATE_NEW_CONTENT_FAILED,
  message
});

export const userEditContent = (contentInfo: IEditingContentInfo) => ({
  type: USER_EDIT_CONTENT,
  contentInfo
});

export const userEditContentSucceeded = (message: string) => ({
  type: USER_EDIT_CONTENT_SUCCEEDED,
  message
});

export const userEditContentFailed = (message: string) => ({
  type: USER_EDIT_CONTENT_FAILED,
  message
});

export const userDeleteContent = (id: number) => ({
  type: USER_DELETE_CONTENT,
  id
});

export const userDeleteContentSucceeded = (message: string) => ({
  type: USER_DELETE_CONTENT_SUCCEEDED,
  message
});

export const userDeleteContentFailed = (message: string) => ({
  type: USER_DELETE_CONTENT_FAILED,
  message
});