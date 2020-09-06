import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../../../../src/store/staff/actions';
import {
  staffCreateNewContentSucceeded,
  staffCreateNewContentFailed,
  staffEditContentSucceeded,
  staffEditContentFailed,
  staffDeleteContentSucceeded,
  staffDeleteContentFailed
} from '../../../../src/store/staff/content/actions';
import {
  staffCreateNewContentSaga,
  staffEditContentSaga,
  staffDeleteContentSaga
} from '../../../../src/store/staff/content/sagas';
import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_EDIT_CONTENT,
  STAFF_DELETE_CONTENT
} from '../../../../src/store/staff/content/types';

const endpoint = NOBSCBackendAPIEndpointOne;

const fullImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const thumbImage = new File([(new Blob)], "resizedthumb", {type: "image/jpeg"});

const creatingContentInfo = {
  id: 150,
  contentTypeId: 2,
  published: "2020-07-17",
  title: "My Content",
  items: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  image: "my-content",
  fullImage,
  thumbImage
};
const editingContentInfo = {
  id: 150,
  contentTypeId: 2,
  published: "2020-07-17",
  title: "My Content",
  items: [
    {type: 'paragraph', children: [{text: 'COOK EAT WIN REPEAT'}]}
  ],
  prevImage: "nobsc-content-default",
  image: "my-content",
  fullImage,
  thumbImage
};

describe('userCreateNewContentSaga', () => {
  const action = {
    type: STAFF_CREATE_NEW_CONTENT,
    contentInfo: creatingContentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      thumbSignature: "signedUrlString-thumb",
      fullName: "contentUrlString"
    }
  };
  const {
    contentTypeId,
    published,
    title,
    items,
    fullImage,
    thumbImage
  } = action.contentInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewContentSaga(action);
    const res = {data: {message: 'Content created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/content`,
      {fileType: fullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      fullImage,
      {headers: {'Content-Type': fullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.thumbSignature,
      thumbImage,
      {headers: {'Content-Type': thumbImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/content/create`,
      {
        contentInfo: {
          contentTypeId,
          published,
          title,
          items,
          image: "contentUrlString"
        }
      },
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffCreateNewContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffCreateNewContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffCreateNewContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffEditContentSaga', () => {
  const action = {
    type: STAFF_EDIT_CONTENT,
    contentInfo: editingContentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      thumbSignature: "signedUrlString-thumb",
      fullName: "contentUrlString"
    }
  };
  const {
    id,
    contentTypeId,
    published,
    title,
    items,
    fullImage,
    thumbImage,
    prevImage
  } = action.contentInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffEditContentSaga(action);
    const res = {data: {message: 'Content updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/content`,
      {fileType: fullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      fullImage,
      {headers: {'Content-Type': fullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.thumbSignature,
      thumbImage,
      {headers: {'Content-Type': thumbImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/staff/content/update`,
      {
        contentInfo: {
          id,
          contentTypeId,
          published,
          title,
          items,
          image: "contentUrlString",
          prevImage
        }
      },
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffEditContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffEditContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffEditContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffEditContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffEditContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffDeleteContentSaga', () => {
  const action = {type: STAFF_DELETE_CONTENT, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = staffDeleteContentSaga(action);
    const res = {data: {message: 'Content deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/staff/content/delete`,
      {withCredentials: true, data: {id: action.id}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffDeleteContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffDeleteContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffDeleteContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});