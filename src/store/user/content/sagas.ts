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
  IUserCreateNewContent,
  IUserEditContent,
  IUserDeleteContent
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewContentSaga(action: IUserCreateNewContent) {
  let {
    contentTypeId,
    published,
    title,
    items,
    image,
    fullImage,
    thumbImage
  } = action.contentInfo;
  try {
    if (fullImage && thumbImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/content`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.fullSignature,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.thumbSignature,
        thumbImage,
        {headers: {'Content-Type': thumbImage.type}}
      );
      image = res1.data.fullName;
    } else {
      image = 'nobsc-content-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/content/create`,
      {
        contentInfo: {
          contentTypeId,
          published,
          title,
          items,
          image
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Content created.') {
      yield put(userCreateNewContentSucceeded(message));
    } else {
      yield put(userCreateNewContentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewContentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditContentSaga(action: IUserEditContent) {
  let {
    id,
    contentTypeId,
    published,
    title,
    items,
    image,
    fullImage,
    thumbImage,
    prevImage
  } = action.contentInfo;
  try {
    if (fullImage && thumbImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/content`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.fullSignature,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.thumbSignature,
        thumbImage,
        {headers: {'Content-Type': thumbImage.type}}
      );
      image = res1.data.fullName;
    } else {
      image = prevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/content/update`,
      {
        contentInfo: {
          id,
          contentTypeId,
          published,
          title,
          items,
          image,
          prevImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Content updated.') {
      yield put(userEditContentSucceeded(message));
    } else {
      yield put(userEditContentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditContentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeleteContentSaga(action: IUserDeleteContent) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/content/delete`,
      {withCredentials: true, data: {id: action.id}}
    );
    const { message } = res.data;
    if (message == 'Content deleted.') {
      yield put(userDeleteContentSucceeded(message));
    } else {
      yield put(userDeleteContentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeleteContentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}