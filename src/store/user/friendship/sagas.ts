import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
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
} from './actions';
import {
  IUserRequestFriendship,
  IUserAcceptFriendship,
  IUserRejectFriendship,
  IUserDeleteFriendship,
  IUserBlockUser,
  IUserUnblockUser
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userRequestFriendshipSaga(action: IUserRequestFriendship) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/friendship/create`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Friendship request sent.') {
      yield put(userRequestFriendshipSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userRequestFriendshipFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRequestFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userAcceptFriendshipSaga(action: IUserAcceptFriendship) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/friendship/accept`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Friendship request accepted.') {
      yield put(userAcceptFriendshipSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userAcceptFriendshipFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userAcceptFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userRejectFriendshipSaga(action: IUserRejectFriendship) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/friendship/reject`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Friendship request rejected.') {
      yield put(userRejectFriendshipSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userRejectFriendshipFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRejectFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeleteFriendshipSaga(action: IUserDeleteFriendship) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/delete`,
      {withCredentials: true, data: {friendName: action.friendName}}
    );
    const { message } = res.data;
    if (message == 'No longer friends. Maybe again later.') {
      yield put(userDeleteFriendshipSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userDeleteFriendshipFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeleteFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userBlockUserSaga(action: IUserBlockUser) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/friendship/block`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'User blocked.') {
      yield put(userBlockUserSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userBlockUserFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userBlockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnblockUserSaga(action: IUserUnblockUser) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/unblock`,
      {withCredentials: true, data: {friendName: action.friendName}}
    );
    const { message } = res.data;
    if (message == 'User unblocked.') {
      yield put(userUnblockUserSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userUnblockUserFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnblockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}