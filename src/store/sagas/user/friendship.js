import axios from 'axios';
import { call, put, delay } from 'redux-saga/effects';

import {
  userMessageClear,
  userRequestFriendshipSucceeded,
  userRequestFriendshipFailed,
  userAcceptFriendshipSucceeded,
  userAcceptFriendshipFailed,
  userRejectFriendshipSucceeded,
  userRejectFriendshipFailed,
  userDeleteFriendshipSucceeded,
  userDeleteFriendshipFailed,
  userBlockUserSucceeded,
  userBlockUserFailed,
  userUnblockUserSucceeded,
  userUnblockUserFailed
} from '../../actions/index';

import {
  dataGetMyFriendshipsSaga
} from '../data';  // just call from index, like others?

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userRequestFriendshipSaga(action) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/friendship/create`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request sent.') {
      yield put(userRequestFriendshipSucceeded(res.data.message));
      yield delay(3000);
    } else {
      yield put(userRequestFriendshipFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRequestFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userAcceptFriendshipSaga(action) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/friendship/accept`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request accepted.') {
      yield put(userAcceptFriendshipSucceeded(res.data.message));
      yield delay(3000);
      //yield dataGetMyFriendshipsSaga();
    } else {
      yield put(userAcceptFriendshipFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userAcceptFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userRejectFriendshipSaga(action) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/friendship/reject`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request rejected.') {
      yield put(userRejectFriendshipSucceeded(res.data.message));
      yield delay(3000);
      yield dataGetMyFriendshipsSaga();
    } else {
      yield put(userRejectFriendshipFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRejectFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeleteFriendshipSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/delete`,
      {withCredentials: true, data: {friendName: action.friendName}}
    );
    if (res.data.message == 'No longer friends. Maybe again later.') {
      yield put(userDeleteFriendshipSucceeded(res.data.message));
      yield delay(3000);
      //yield dataGetMyFriendshipsSaga();
    } else {
      yield put(userDeleteFriendshipFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeleteFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userBlockUserSaga(action) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/friendship/block`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'User blocked.') {
      yield put(userBlockUserSucceeded(res.data.message));
      yield delay(3000);
      //yield dataGetMyFriendshipsSaga();
    } else {
      yield put(userBlockUserFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userBlockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnblockUserSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/unblock`,
      {withCredentials: true, data: {friendName: action.friendName}}
    );
    if (res.data.message == 'User unblocked.') {
      yield put(userUnblockUserSucceeded(res.data.message));
      yield delay(3000);
      yield dataGetMyFriendshipsSaga();
    } else {
      yield put(userUnblockUserFailed(res.data.message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnblockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}