import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

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
  IStaffCreateNewContent,
  IStaffEditContent,
  IStaffDeleteContent
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* staffCreateNewContentSaga(action: IStaffCreateNewContent) {
  try {
    if (
      action.contentInfo.fullContentImage &&
      action.contentInfo.thumbContentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/content`,
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
      `${endpoint}/staff/content/create`,
      {contentInfo: action.contentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Content created.') {
      yield put(staffCreateNewContentSucceeded(res.data.message));
    } else {
      yield put(staffCreateNewContentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffCreateNewContentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffEditContentSaga(action: IStaffEditContent) {
  try {
    if (
      action.contentInfo.fullContentImage &&
      action.contentInfo.thumbContentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/content`,
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
      `${endpoint}/staff/content/update`,
      {contentInfo: action.contentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Content updated.') {
      yield put(staffEditContentSucceeded(res.data.message));
    } else {
      yield put(staffEditContentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffEditContentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffDeleteContentSaga(action: IStaffDeleteContent) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/staff/content/delete`,
      {withCredentials: true, data: {contentId: action.contentId}}
    );
    if (res.data.message == 'Content deleted.') {
      yield put(staffDeleteContentSucceeded(res.data.message));
    } else {
      yield put(staffDeleteContentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffDeleteContentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}