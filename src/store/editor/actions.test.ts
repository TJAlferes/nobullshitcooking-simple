import {
  editorClearWork,
  editorSetCreating,
  editorSetEditingId,
  editorSetValue
} from './actions';
import {
  EDITOR_CLEAR_WORK,
  EDITOR_SET_CREATING,
  EDITOR_SET_EDITING_ID,
  EDITOR_SET_VALUE
} from './types';

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
  const type = EDITOR_SET_EDITING_ID;
  const id = 5;

  it('returns the correct action type', () => {
    expect(editorSetEditingId(id).type).toEqual(type);
  });

  it('returns the correct id', () => {
    expect(editorSetEditingId(id).id).toEqual(id);
  });
});

describe('editorSetValue action creator', () => {
  const type = EDITOR_SET_VALUE;
  const value = [{type: 'paragraph', children: [{text: 'Some text.'}]}];

  it('returns the correct action type', () => {
    expect(editorSetValue(value).type).toEqual(type);
  });

  it('returns the correct value', () => {
    expect(editorSetValue(value).value).toEqual(value);
  });
});