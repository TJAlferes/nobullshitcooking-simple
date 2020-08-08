import { Node } from 'slate';

export const STAFF_CREATE_NEW_CONTENT = 'STAFF_CREATE_NEW_CONTENT' as const;
export const STAFF_CREATE_NEW_CONTENT_SUCCEEDED = 'STAFF_CREATE_NEW_CONTENT_SUCCEEDED' as const;
export const STAFF_CREATE_NEW_CONTENT_FAILED = 'STAFF_CREATE_NEW_CONTENT_FAILED' as const;

export const STAFF_EDIT_CONTENT = 'STAFF_EDIT_CONTENT' as const;
export const STAFF_EDIT_CONTENT_SUCCEEDED = 'STAFF_EDIT_CONTENT_SUCCEEDED' as const;
export const STAFF_EDIT_CONTENT_FAILED = 'STAFF_EDIT_CONTENT_FAILED' as const;

export const STAFF_DELETE_CONTENT = 'STAFF_DELETE_CONTENT' as const;
export const STAFF_DELETE_CONTENT_SUCCEEDED = 'STAFF_DELETE_CONTENT_SUCCEEDED' as const;
export const STAFF_DELETE_CONTENT_FAILED = 'STAFF_DELETE_CONTENT_FAILED' as const;

export interface IStaffCreateNewContent {
  type: typeof STAFF_CREATE_NEW_CONTENT;
  contentInfo: ICreatingContentInfo;
}

export interface IStaffCreateNewContentSucceeded {
  type: typeof STAFF_CREATE_NEW_CONTENT_SUCCEEDED;
  message: string;
}

export interface IStaffCreateNewContentFailed {
  type: typeof STAFF_CREATE_NEW_CONTENT_FAILED;
  message: string;
}

export interface IStaffEditContent {
  type: typeof STAFF_EDIT_CONTENT;
  contentInfo: IEditingContentInfo;
}

export interface IStaffEditContentSucceeded {
  type: typeof STAFF_EDIT_CONTENT_SUCCEEDED;
  message: string;
}

export interface IStaffEditContentFailed {
  type: typeof STAFF_EDIT_CONTENT_FAILED;
  message: string;
}

export interface IStaffDeleteContent {
  type: typeof STAFF_DELETE_CONTENT;
  id: number;
}

export interface IStaffDeleteContentSucceeded {
  type: typeof STAFF_DELETE_CONTENT_SUCCEEDED;
  message: string;
}

export interface IStaffDeleteContentFailed {
  type: typeof STAFF_DELETE_CONTENT_FAILED;
  message: string;
}

// For now, one image per page/post
export interface ICreatingContentInfo {
  contentTypeId: number;
  published: string | null;
  title: string;
  items: Node[];
  image: string | ArrayBuffer | null;
  fullImage: File | null;
  thumbImage: File | null;
}

export interface IEditingContentInfo extends ICreatingContentInfo {
  id: number;
  prevImage: string;
}