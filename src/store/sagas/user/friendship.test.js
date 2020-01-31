import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
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


});



describe('the userAcceptFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userAcceptFriendshipSaga, action)
    .silentRun(50);
  });*/


});



describe('the userRejectFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userRejectFriendshipSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDeleteFriendshipSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeleteFriendshipSaga, action)
    .silentRun(50);
  });*/


});



describe('the userBlockUserSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userBlockUserSaga, action)
    .silentRun(50);
  });*/


});



describe('the userUnblockUserSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userUnblockUserSaga, action)
    .silentRun(50);
  });*/


});