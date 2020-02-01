import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga
} from './friendship';

import {
  dataGetMyFriendshipsSaga
} from '../data';  // just call from index, like others?

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
} from '../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userRequestFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userRequestFriendshipSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userRequestFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userAcceptFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userAcceptFriendshipSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userAcceptFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userRejectFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userRejectFriendshipSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userRejectFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userDeleteFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeleteFriendshipSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userDeleteFriendshipFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userBlockUserSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userBlockUserSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userBlockUserFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userUnblockUserSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userUnblockUserSaga, action)
    .silentRun(50);
  });*/

  const action = {friendName: "Allison"};

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

    expect(iterator.throw('error').value)
    .toEqual(
      put(userUnblockUserFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});