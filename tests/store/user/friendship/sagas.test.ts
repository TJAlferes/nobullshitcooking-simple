import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../../../../src/store/user/actions';
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
} from '../../../../src/store/user/friendship/actions';
import {
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga
} from '../../../../src/store/user/friendship/sagas';
import {
  USER_REQUEST_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP,
  USER_BLOCK_USER,
  USER_UNBLOCK_USER
} from '../../../../src/store/user/friendship/types';

const endpoint = NOBSCBackendAPIEndpointOne;

describe('userRequestFriendshipSaga', () => {
  const action = {type: USER_REQUEST_FRIENDSHIP, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userRequestFriendshipSaga(action);
    const res = {data: {message: 'Friendship request sent.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/friendship/create`,
      {friendName: action.friendName},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userRequestFriendshipSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userRequestFriendshipSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userRequestFriendshipFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userRequestFriendshipSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userRequestFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userAcceptFriendshipSaga', () => {
  const action = {type: USER_ACCEPT_FRIENDSHIP, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userAcceptFriendshipSaga(action);
    const res = {data: {message: 'Friendship request accepted.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/friendship/accept`,
      {friendName: action.friendName},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userAcceptFriendshipSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userAcceptFriendshipSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userAcceptFriendshipFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userAcceptFriendshipSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userAcceptFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userRejectFriendshipSaga', () => {
  const action = {type: USER_REJECT_FRIENDSHIP, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userRejectFriendshipSaga(action);
    const res = {data: {message: 'Friendship request rejected.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/friendship/reject`,
      {friendName: action.friendName},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userRejectFriendshipSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userRejectFriendshipSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userRejectFriendshipFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userRejectFriendshipSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userRejectFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeleteFriendshipSaga', () => {
  const action = {type: USER_DELETE_FRIENDSHIP, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userDeleteFriendshipSaga(action);
    const res = {data: {message: 'No longer friends. Maybe again later.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/delete`,
      {withCredentials: true, data: {friendName: action.friendName}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeleteFriendshipSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userDeleteFriendshipSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeleteFriendshipFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userDeleteFriendshipSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userDeleteFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userBlockUserSaga', () => {
  const action = {type: USER_BLOCK_USER, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userBlockUserSaga(action);
    const res = {data: {message: 'User blocked.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/friendship/block`,
      {friendName: action.friendName},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userBlockUserSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userBlockUserSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userBlockUserFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userBlockUserSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userBlockUserFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userUnblockUserSaga', () => {
  const action = {type: USER_UNBLOCK_USER, friendName: "Allison"};

  it ('should dispatch succeeded', () => {
    const iterator = userUnblockUserSaga(action);
    const res = {data: {message: 'User unblocked.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/friendship/unblock`,
      {withCredentials: true, data: {friendName: action.friendName}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userUnblockUserSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userUnblockUserSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userUnblockUserFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userUnblockUserSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userUnblockUserFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});