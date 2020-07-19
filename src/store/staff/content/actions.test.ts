import {
  staffCreateNewContent,
  staffCreateNewContentSucceeded,
  staffCreateNewContentFailed,
  staffEditContent,
  staffEditContentSucceeded,
  staffEditContentFailed,
  staffDeleteContent,
  staffDeleteContentSucceeded,
  staffDeleteContentFailed
} from './actions';
import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_CREATE_NEW_CONTENT_FAILED,
  STAFF_EDIT_CONTENT,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT_FAILED,
  STAFF_DELETE_CONTENT,
  STAFF_DELETE_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT_FAILED
} from './types';

const creatingContentInfo = {
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  contentItems: "[]",
  contentImage: null,
  fullContentImage: null,
  thumbContentImage: null
};
const editingContentInfo = {
  contentId: 888,
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  contentItems: "[]",
  prevContentImage: "nobsc-content-default",
  contentImage: null,
  fullContentImage: null,
  thumbContentImage: null
};

describe('the staffCreateNewContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewContent(creatingContentInfo).type;
    const expected = STAFF_CREATE_NEW_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct contentInfo', () => {
    const actual = staffCreateNewContent(creatingContentInfo).contentInfo;
    const expected = creatingContentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('the staffCreateNewContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewContentSucceeded('OK.').type;
    const expected = STAFF_CREATE_NEW_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffCreateNewContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewContentFailed('Try again.').type;
    const expected = STAFF_CREATE_NEW_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('the staffEditContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditContent(editingContentInfo).type;
    const expected = STAFF_EDIT_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct contentInfo', () => {
    const actual = staffEditContent(editingContentInfo).contentInfo;
    const expected = editingContentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('the staffEditContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditContentSucceeded('OK.').type;
    const expected = STAFF_EDIT_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffEditContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditContentFailed('Try again.').type;
    const expected = STAFF_EDIT_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('the staffDeleteContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteContent(7).type;
    const expected = STAFF_DELETE_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = staffDeleteContent(7).contentId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteContentSucceeded('OK.').type;
    const expected = STAFF_DELETE_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteContentFailed('Try again.').type;
    const expected = STAFF_DELETE_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});