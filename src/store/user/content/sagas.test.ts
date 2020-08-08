import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewContentSucceeded,
  userCreateNewContentFailed,
  userEditContentSucceeded,
  userEditContentFailed,
  userDeleteContentSucceeded,
  userDeleteContentFailed
} from './actions';
import {
  userCreateNewContentSaga,
  userEditContentSaga,
  userDeleteContentSaga
} from './sagas';
import {
  USER_CREATE_NEW_CONTENT,
  USER_EDIT_CONTENT,
  USER_DELETE_CONTENT
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

const fullImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const thumbImage = new File([(new Blob)], "resizedThumb", {type: "image/jpeg"});

const creatingContentInfo = {
  contentTypeId: 2,
  published: null,
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
    type: USER_CREATE_NEW_CONTENT,
    contentInfo: creatingContentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-thumb",
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
    const iterator = userCreateNewContentSaga(action);
    const res = {data: {message: 'Content created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/content`,
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
      res1.data.tinySignature,
      thumbImage,
      {headers: {'Content-Type': thumbImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/content/create`,
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
    .toEqual(put(userCreateNewContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userCreateNewContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userCreateNewContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userCreateNewContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('userEditContentSaga', () => {
  const action = {
    type: USER_EDIT_CONTENT,
    contentInfo: editingContentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-thumb",
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
    const iterator = userEditContentSaga(action);
    const res = {data: {message: 'Content updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/content`,
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
      res1.data.tinySignature,
      thumbImage,
      {headers: {'Content-Type': thumbImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/content/update`,
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
    .toEqual(put(userEditContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userEditContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userEditContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userEditContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userEditContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('userDeleteContentSaga', () => {
  const action = {type: USER_DELETE_CONTENT, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeleteContentSaga(action);
    const res = {data: {message: 'Content deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/content/delete`,
      {withCredentials: true, data: {id: action.id}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeleteContentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userDeleteContentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeleteContentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userDeleteContentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userDeleteContentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});