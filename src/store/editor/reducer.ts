import {
  EDITOR_CLEAR_WORK,
  EDITOR_SET_CREATING,
  EDITOR_SET_EDITING_ID,
  EDITOR_SET_VALUE,
  IEditorState,
  EditorActions
} from './types';

const initialState: IEditorState = {
  isLoading: false,
  creating: false,
  editingId: null,
  value: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}]
};

export const editorReducer = (
  state = initialState,
  action: EditorActions
): IEditorState => {
  switch (action.type) {
    case EDITOR_CLEAR_WORK: return {...state, ...initialState};
    case EDITOR_SET_CREATING: return {...state, ...{creating: true}};
    case EDITOR_SET_EDITING_ID: return {...state, ...{editingId: action.id}};
    case EDITOR_SET_VALUE: return {...state, ...{value: action.value}};
    default: return state;
  }
};