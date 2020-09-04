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

describe('staffCreateNewContent action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewContent(creatingContentInfo).type)
      .toEqual(STAFF_CREATE_NEW_CONTENT);
  });

  it('returns the correct contentInfo', () => {
    expect(staffCreateNewContent(creatingContentInfo).contentInfo)
      .toEqual(creatingContentInfo);
  });
});

describe('staffCreateNewContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewContentSucceeded('OK.').type)
      .toEqual(STAFF_CREATE_NEW_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffCreateNewContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewContentFailed('Try again.').type)
      .toEqual(STAFF_CREATE_NEW_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewContentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffEditContent action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditContent(editingContentInfo).type)
      .toEqual(STAFF_EDIT_CONTENT);
  });

  it('returns the correct contentInfo', () => {
    expect(staffEditContent(editingContentInfo).contentInfo)
      .toEqual(editingContentInfo);
  });
});

describe('staffEditContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditContentSucceeded('OK.').type)
      .toEqual(STAFF_EDIT_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffEditContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffEditContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditContentFailed('Try again.').type)
      .toEqual(STAFF_EDIT_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffEditContentFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('staffDeleteContent action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteContent(7).type).toEqual(STAFF_DELETE_CONTENT);
  });

  it('returns the correct id', () => {
    expect(staffDeleteContent(7).id).toEqual(7);
  });
});

describe('staffDeleteContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteContentSucceeded('OK.').type)
      .toEqual(STAFF_DELETE_CONTENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteContentSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffDeleteContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteContentFailed('Try again.').type)
      .toEqual(STAFF_DELETE_CONTENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteContentFailed('Try again.').message)
      .toEqual('Try again.');
  });
});