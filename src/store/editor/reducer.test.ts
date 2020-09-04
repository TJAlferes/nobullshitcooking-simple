import { editorReducer } from './reducer';
import {
  EDITOR_CLEAR_WORK,
  EDITOR_SET_CREATING,
  EDITOR_SET_EDITING_ID,
  EDITOR_SET_VALUE
} from './types';

const initialState = {
  creating: false,
  editingId: null,
  isLoading: false,
  value: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}]
};

describe('planner reducer', () => {
  it('returns initial state', () => {
    expect(editorReducer(undefined, {type: EDITOR_CLEAR_WORK}))
    .toEqual(initialState);
  });

  it ('handles actions of type EDITOR_CLEAR_WORK', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: null,
      value: [{type: 'paragraph', children: [{text: 'Something unwanted.'}]}]
    };

    expect(editorReducer(beforeState, {type: EDITOR_CLEAR_WORK}))
      .toEqual(initialState);
  });

  it ('handles actions of type EDITOR_SET_CREATING', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: null,
      value: [{type: 'paragraph', children: [{text: 'Something.'}]}]
    };

    expect(editorReducer(beforeState, {type: EDITOR_SET_CREATING})).toEqual({
      isLoading: false,
      creating: true,
      editingId: null,
      value: [{type: 'paragraph', children: [{text: 'Something.'}]}]
    });
  });

  it('handles actions of type EDITOR_SET_EDITING_ID', () => {
    const id = 5;

    expect(editorReducer(initialState, {type: EDITOR_SET_EDITING_ID, id}))
      .toEqual({
        isLoading: false,
        creating: false,
        editingId: 5,
        value: [{type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}]
      });
  });

  it('handles actions of type EDITOR_SET_VALUE', () => {
    const value = [{type: 'paragraph', children: [{text: 'Some text.'}]}];

    expect(editorReducer(initialState, {type: EDITOR_SET_VALUE, value}))
      .toEqual({
        isLoading: false,
        creating: false,
        editingId: null,
        value
      });
  });
});