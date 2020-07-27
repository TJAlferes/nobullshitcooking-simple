import { Node } from 'slate';

import {
  EDITOR_CLEAR_WORK,
  EDITOR_SET_CREATING,
  EDITOR_SET_EDITING_ID,
  EDITOR_SET_VALUE
} from './types';

export const editorClearWork = () => ({type: EDITOR_CLEAR_WORK});

export const editorSetCreating = () => ({type: EDITOR_SET_CREATING});

export const editorSetEditingId = (id: number) => ({
  type: EDITOR_SET_EDITING_ID,
  id
});

export const editorSetValue = (value: Node[]) => ({
  type: EDITOR_SET_VALUE,
  value
});