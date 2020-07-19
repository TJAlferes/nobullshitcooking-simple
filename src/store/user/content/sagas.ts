import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

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
  try {
    if (
      action.contentInfo.fullContentImage &&
      action.contentInfo.thumbContentImage
    ) {
      // for (const contentImage of contentImages)
      // limit to 10 images per page?
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/content`,
        {fileType: action.contentInfo.fullContentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.contentInfo.fullContentImage,
        {headers: {'Content-Type': action.contentInfo.fullContentImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        action.contentInfo.thumbContentImage,
        {headers: {'Content-Type': action.contentInfo.thumbContentImage.type}}
      );
      action.contentInfo.contentImage = res1.data.urlFullSize;
    } else {
      action.contentInfo.contentImage = 'nobsc-content-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/content/create`,
      {contentInfo: action.contentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Content created.') {
      yield put(userCreateNewContentSucceeded(res.data.message));
    } else {
      yield put(userCreateNewContentFailed(res.data.message));
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
  try {
    if (
      action.contentInfo.fullContentImage &&
      action.contentInfo.thumbContentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/content`,
        {fileType: action.contentInfo.fullContentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.contentInfo.fullContentImage,
        {headers: {'Content-Type': action.contentInfo.fullContentImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        action.contentInfo.thumbContentImage,
        {headers: {'Content-Type': action.contentInfo.thumbContentImage.type}}
      );
      action.contentInfo.contentImage = res1.data.urlFullSize;
    } else {
      action.contentInfo.contentImage = action.contentInfo.prevContentImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/content/update`,
      {contentInfo: action.contentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Content updated.') {
      yield put(userEditContentSucceeded(res.data.message));
    } else {
      yield put(userEditContentFailed(res.data.message));
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
      {withCredentials: true, data: {contentId: action.contentId}}
    );
    if (res.data.message == 'Content deleted.') {
      yield put(userDeleteContentSucceeded(res.data.message));
    } else {
      yield put(userDeleteContentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeleteContentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}