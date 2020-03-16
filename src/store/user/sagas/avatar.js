import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from '../actions';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userSubmitAvatarSaga(action) {
  try {
    let avatarUrl;
    if (action.fullAvatar && action.tinyAvatar) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/avatar`,
        {fileType: action.fullAvatar.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.fullAvatar,
        {headers: {'Content-Type': action.fullAvatar.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.tinyAvatar,
        {headers: {'Content-Type': action.tinyAvatar.type}}
      );
      avatarUrl = res1.data.urlFullSize;
    } else {
      avatarUrl = "nobsc-user-default";
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/auth/set-avatar`,
      {avatar: avatarUrl},
      {withCredentials: true}
    );

    if (res.data.message == 'Avatar set.') {
      //yield put();  refresh/update respective list
      yield put(userSubmitAvatarSucceeded(res.data.message));
      yield delay(2000);
      yield put(userMessageClear());
      yield call([location, location.reload]);
    } else {
      yield put(userSubmitAvatarFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch (err) {
    yield put(userSubmitAvatarFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}