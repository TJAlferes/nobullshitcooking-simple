import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import { userSubmitAvatarSaga } from './avatar';

import {
  userMessageClear,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userSubmitAvatarSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userSubmitAvatarSaga, action).silentRun(50);
  });*/

  it('should dispatch succeeded, then reload', () => {
    const action = {
      fullAvatar: {type: "jpeg"},
      tinyAvatar: {type: "jpeg"}
    };
    const iterator = userSubmitAvatarSaga(action);
    const res = {data: {message: 'Avatar set.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/avatar`,
      {fileType: action.fullAvatar.type},
      {withCredentials: true}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.fullAvatar,
      {headers: {'Content-Type': action.fullAvatar.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.tinyAvatar,
      {headers: {'Content-Type': action.tinyAvatar.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/set-avatar`,
      {avatar: avatarUrl},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userSubmitAvatarSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(2000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next(res).value).toEqual(call([location, location.reload]));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const action = {
      fullAvatar: {type: "jpeg"},
      tinyAvatar: {type: "jpeg"}
    };
    const iterator = userSubmitAvatarSaga(action);
    const res = {data: {message: 'Not created, try again.'}};

    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();  //iterator.next(res);

    expect(iterator.next(res).value)
    .toEqual(put(userSubmitAvatarFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const action = {
      fullAvatar: {type: "jpeg"},
      tinyAvatar: {type: "jpeg"}
    };
    const iterator = userSubmitAvatarSaga(action);

    expect(iterator.throw('error').value)
    .toEqual(
      put(userSubmitAvatarFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});