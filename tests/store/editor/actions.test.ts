import {
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue
} from '../../../src/store/editor/actions';
import {
  EDITOR_CLEAR_WORK,
  EDITOR_SET_CREATING,
  EDITOR_SET_EDITING_ID,
  EDITOR_SET_VALUE
} from '../../../src/store/editor/types';

describe('editorClearWork action creator', () => {
  it('returns the correct action type', () => {
    expect(editorClearWork().type).toEqual(EDITOR_CLEAR_WORK);
  });
});

describe('editorSetCreating action creator', () => {
  it('returns the correct action type', () => {
    expect(editorSetCreating().type).toEqual(EDITOR_SET_CREATING);
  });
});

describe('editorSetEditingId action creator', () => {
  it('returns the correct action type', () => {
    expect(editorSetEditingId(5).type).toEqual(EDITOR_SET_EDITING_ID);
  });

  it('returns the correct id', () => {
    expect(editorSetEditingId(5).id).toEqual(5);
  });
});

describe('editorSetValue action creator', () => {
  const value = [{type: 'paragraph', children: [{text: 'Some text.'}]}];

  it('returns the correct action type', () => {
    expect(editorSetValue(value).type).toEqual(EDITOR_SET_VALUE);
  });

  it('returns the correct value', () => {
    expect(editorSetValue(value).value).toEqual(value);
  });
});