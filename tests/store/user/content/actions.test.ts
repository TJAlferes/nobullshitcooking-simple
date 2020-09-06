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
} from '../../../../src/store/user/content/actions';
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
} from '../../../../src/store/user/content/types';

const creatingContentInfo = {
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  items: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  image: null,
  fullImage: null,
  thumbImage: null
};
const editingContentInfo = {
  id: 888,
  contentTypeId: 13,
  published: null,
  title: "Some Title",
  items: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  prevImage: "nobsc-content-default",
  image: null,
  fullImage: null,
  thumbImage: null
};

describe('userCreateNewContent action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewContent(creatingContentInfo).type)
      .toEqual(USER_CREATE_NEW_CONTENT);
  });

  it('returns the correct contentInfo', () => {
    expect(userCreateNewContent(creatingContentInfo).contentInfo)
      .toEqual(creatingContentInfo);
  });
});

describe('userCreateNewContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewContentSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userCreateNewContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewContentFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewContentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userEditContent action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditContent(editingContentInfo).type).toEqual(USER_EDIT_CONTENT);
  });

  it('returns the correct contentInfo', () => {
    expect(userEditContent(editingContentInfo).contentInfo)
      .toEqual(editingContentInfo);
  });
});

describe('userEditContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditContentSucceeded('OK.').type)
      .toEqual(USER_EDIT_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditContentFailed('Try again.').type)
      .toEqual(USER_EDIT_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditContentFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('userDeleteContent action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteContent(7).type).toEqual(USER_DELETE_CONTENT);
  });

  it('returns the correct id', () => {
    expect(userDeleteContent(7).id).toEqual(7);
  });
});

describe('userDeleteContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteContentSucceeded('OK.').type)
      .toEqual(USER_DELETE_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeleteContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeleteContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeleteContentFailed('Try again.').type)
      .toEqual(USER_DELETE_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeleteContentFailed('Try again.').message).toEqual('Try again.');
  });
});