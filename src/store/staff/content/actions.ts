import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_CREATE_NEW_CONTENT_FAILED,
  STAFF_EDIT_CONTENT,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT_FAILED,
  STAFF_DELETE_CONTENT,
  STAFF_DELETE_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT_FAILED,
  ICreatingContentInfo,
  IEditingContentInfo
} from './types';

export const staffCreateNewContent = (contentInfo: ICreatingContentInfo) => ({
  type: STAFF_CREATE_NEW_CONTENT,
  contentInfo
});

export const staffCreateNewContentSucceeded = (message: string) => ({
  type: STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  message
});

export const staffCreateNewContentFailed = (message: string) => ({
  type: STAFF_CREATE_NEW_CONTENT_FAILED,
  message
});

export const staffEditContent = (contentInfo: IEditingContentInfo) => ({
  type: STAFF_EDIT_CONTENT,
  contentInfo
});

export const staffEditContentSucceeded = (message: string) => ({
  type: STAFF_EDIT_CONTENT_SUCCEEDED,
  message
});

export const staffEditContentFailed = (message: string) => ({
  type: STAFF_EDIT_CONTENT_FAILED,
  message
});

export const staffDeleteContent = (contentId: number) => ({
  type: STAFF_DELETE_CONTENT,
  contentId
});

export const staffDeleteContentSucceeded = (message: string) => ({
  type: STAFF_DELETE_CONTENT_SUCCEEDED,
  message
});

export const staffDeleteContentFailed = (message: string) => ({
  type: STAFF_DELETE_CONTENT_FAILED,
  message
});