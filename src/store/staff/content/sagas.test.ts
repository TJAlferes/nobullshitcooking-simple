import axios from 'axios';
import { call, put, delay } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewContentSucceeded,
  staffCreateNewContentFailed,
  staffEditContentSucceeded,
  staffEditContentFailed,
  staffDeleteContentSucceeded,
  staffDeleteContentFailed
} from './actions';
import {
  staffCreateNewContentSaga,
  staffEditContentSaga,
  staffDeleteContentSaga
} from './sagas';
import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_EDIT_CONTENT,
  STAFF_DELETE_CONTENT
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
const fullContentImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const thumbContentImage =
  new File([(new Blob)], "resizedthumb", {type: "image/jpeg"});

describe('userCreateNewContentSaga', () => {
  const action = {
    type: STAFF_CREATE_NEW_CONTENT,
    contentInfo: {
      contentId: 150,
      contentTypeId: 2,
      published: "2020-07-17",
      title: "My Content",
      contentItems: "[]",
      contentImage: "my-content",
      fullContentImage,
      thumbContentImage
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestThumbSize: "signedUrlString-thumb",
      urlFullSize: "contentUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewContentSaga(action);
    const res = {data: {message: 'Content created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/content`,
      {fileType: action.contentInfo.fullContentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.contentInfo.fullContentImage,
      {headers: {'Content-Type': action.contentInfo.fullContentImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestThumbSize,
      action.contentInfo.thumbContentImage,
      {headers: {'Content-Type': action.contentInfo.thumbContentImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/content/create`,
      {contentInfo: action.contentInfo},
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
    .toEqual(put(
      staffCreateNewContentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffEditContentSaga', () => {
  const action = {
    type: STAFF_EDIT_CONTENT,
    contentInfo: {
      contentId: 150,
      contentTypeId: 2,
      published: "2020-07-17",
      title: "My Content",
      contentItems: "[]",
      prevContentImage: "nobsc-content-default",
      contentImage: "my-content",
      fullContentImage,
      thumbContentImage
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestThumbSize: "signedUrlString-thumb",
      urlFullSize: "contentUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = staffEditContentSaga(action);
    const res = {data: {message: 'Content updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/content`,
      {fileType: action.contentInfo.fullContentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.contentInfo.fullContentImage,
      {headers: {'Content-Type': action.contentInfo.fullContentImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestThumbSize,
      action.contentInfo.thumbContentImage,
      {headers: {'Content-Type': action.contentInfo.thumbContentImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/staff/content/update`,
      {contentInfo: action.contentInfo},
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
    .toEqual(put(
      staffEditContentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffDeleteContentSaga', () => {
  const action = {type: STAFF_DELETE_CONTENT, contentId: 4};

  it('should dispatch succeeded', () => {
    const iterator = staffDeleteContentSaga(action);
    const res = {data: {message: 'Content deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/staff/content/delete`,
      {withCredentials: true, data: {contentId: action.contentId}}
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
    .toEqual(put(
      staffDeleteContentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});