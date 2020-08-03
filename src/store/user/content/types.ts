import { Node } from 'slate';

export const USER_CREATE_NEW_CONTENT = 'USER_CREATE_NEW_CONTENT' as const;
export const USER_CREATE_NEW_CONTENT_SUCCEEDED = 'USER_CREATE_NEW_CONTENT_SUCCEEDED' as const;
export const USER_CREATE_NEW_CONTENT_FAILED = 'USER_CREATE_NEW_CONTENT_FAILED' as const;

export const USER_EDIT_CONTENT = 'USER_EDIT_CONTENT' as const;
export const USER_EDIT_CONTENT_SUCCEEDED = 'USER_EDIT_CONTENT_SUCCEEDED' as const;
export const USER_EDIT_CONTENT_FAILED = 'USER_EDIT_CONTENT_FAILED' as const;

export const USER_DELETE_CONTENT = 'USER_DELETE_CONTENT' as const;
export const USER_DELETE_CONTENT_SUCCEEDED = 'USER_DELETE_CONTENT_SUCCEEDED' as const;
export const USER_DELETE_CONTENT_FAILED = 'USER_DELETE_CONTENT_FAILED' as const;

export interface IUserCreateNewContent {
  type: typeof USER_CREATE_NEW_CONTENT;
  contentInfo: ICreatingContentInfo;
}

export interface IUserCreateNewContentSucceeded {
  type: typeof USER_CREATE_NEW_CONTENT_SUCCEEDED;
  message: string;
}

export interface IUserCreateNewContentFailed {
  type: typeof USER_CREATE_NEW_CONTENT_FAILED;
  message: string;
}

export interface IUserEditContent {
  type: typeof USER_EDIT_CONTENT;
  contentInfo: IEditingContentInfo;
}

export interface IUserEditContentSucceeded {
  type: typeof USER_EDIT_CONTENT_SUCCEEDED;
  message: string;
}

export interface IUserEditContentFailed {
  type: typeof USER_EDIT_CONTENT_FAILED;
  message: string;
}

export interface IUserDeleteContent {
  type: typeof USER_DELETE_CONTENT;
  contentId: number;
}

export interface IUserDeleteContentSucceeded {
  type: typeof USER_DELETE_CONTENT_SUCCEEDED;
  message: string;
}

export interface IUserDeleteContentFailed {
  type: typeof USER_DELETE_CONTENT_FAILED;
  message: string;
}

// For now, one image per page/post
export interface ICreatingContentInfo {
  contentTypeId: number;
  published: string | null;
  title: string;
  contentItems: Node[];
  contentImage: string | ArrayBuffer | null;
  contentFullImage: File | null;
  contentThumbImage: File | null;
}

export interface IEditingContentInfo extends ICreatingContentInfo {
  contentId: number;
  contentPrevImage: string;
}