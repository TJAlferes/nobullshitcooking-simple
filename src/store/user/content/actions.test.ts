import {
  userCreateNewContent,
  userCreateNewContentSucceeded,
  userCreateNewContentFailed,
  userEditContent,
  userEditContentSucceeded,
  userEditContentFailed,
  userDeleteContent,
  userDeleteContentSucceeded,
  userDeleteContentFailed
} from './actions';
import {
  USER_CREATE_NEW_CONTENT,
  USER_CREATE_NEW_CONTENT_SUCCEEDED,
  USER_CREATE_NEW_CONTENT_FAILED,
  USER_EDIT_CONTENT,
  USER_EDIT_CONTENT_SUCCEEDED,
  USER_EDIT_CONTENT_FAILED,
  USER_DELETE_CONTENT,
  USER_DELETE_CONTENT_SUCCEEDED,
  USER_DELETE_CONTENT_FAILED
} from './types';

const creatingContentInfo = {
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  contentItems: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  contentImage: null,
  fullContentImage: null,
  thumbContentImage: null
};
const editingContentInfo = {
  contentId: 888,
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  contentItems: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  prevContentImage: "nobsc-content-default",
  contentImage: null,
  fullContentImage: null,
  thumbContentImage: null
};

describe('userCreateNewContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewContent(creatingContentInfo).type;
    const expected = USER_CREATE_NEW_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct contentInfo', () => {
    const actual = userCreateNewContent(creatingContentInfo).contentInfo;
    const expected = creatingContentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('userCreateNewContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewContentSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userCreateNewContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewContentFailed('Try again.').type;
    const expected = USER_CREATE_NEW_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('userEditContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditContent(editingContentInfo).type;
    const expected = USER_EDIT_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct contentInfo', () => {
    const actual = userEditContent(editingContentInfo).contentInfo;
    const expected = editingContentInfo;
    expect(actual).toEqual(expected);
  });
});

describe('userEditContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditContentSucceeded('OK.').type;
    const expected = USER_EDIT_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userEditContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditContentFailed('Try again.').type;
    const expected = USER_EDIT_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('userDeleteContent action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteContent(7).type;
    const expected = USER_DELETE_CONTENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = userDeleteContent(7).contentId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('userDeleteContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteContentSucceeded('OK.').type;
    const expected = USER_DELETE_CONTENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteContentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userDeleteContentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteContentFailed('Try again.').type;
    const expected = USER_DELETE_CONTENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteContentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});