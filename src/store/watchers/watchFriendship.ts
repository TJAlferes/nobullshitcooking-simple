import { all, takeEvery } from 'redux-saga/effects';

import { dataGetMyFriendshipsSaga } from '../data/sagas';
import {
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga
} from '../user/friendship/sagas';
import {
  USER_REQUEST_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_BLOCK_USER,
  USER_BLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER,
  USER_UNBLOCK_USER_SUCCEEDED
} from '../user/friendship/types';
import { messengerUpdateOnlineSaga } from '../messenger/sagas';

export function* watchUserFriendship() {
  yield all([
    takeEvery(USER_REQUEST_FRIENDSHIP, userRequestFriendshipSaga),

    takeEvery(USER_ACCEPT_FRIENDSHIP, userAcceptFriendshipSaga),
    takeEvery(USER_ACCEPT_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_ACCEPT_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),

    takeEvery(USER_REJECT_FRIENDSHIP, userRejectFriendshipSaga),
    takeEvery(USER_REJECT_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),

    takeEvery(USER_DELETE_FRIENDSHIP, userDeleteFriendshipSaga),
    takeEvery(USER_DELETE_FRIENDSHIP_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_DELETE_FRIENDSHIP_SUCCEEDED, messengerUpdateOnlineSaga),

    takeEvery(USER_BLOCK_USER, userBlockUserSaga),
    takeEvery(USER_BLOCK_USER_SUCCEEDED, dataGetMyFriendshipsSaga),
    takeEvery(USER_BLOCK_USER_SUCCEEDED, messengerUpdateOnlineSaga),

    takeEvery(USER_UNBLOCK_USER, userUnblockUserSaga),
    takeEvery(USER_UNBLOCK_USER_SUCCEEDED, dataGetMyFriendshipsSaga)
  ]);
}