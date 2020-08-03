import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import { userSubmitAvatarSucceeded, userSubmitAvatarFailed } from './actions';
import { userSubmitAvatarSaga } from './sagas';
import { USER_SUBMIT_AVATAR } from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
const fullAvatar = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyAvatar = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

describe('userSubmitAvatarSaga', () => {
  const action = {type: USER_SUBMIT_AVATAR, fullAvatar, tinyAvatar};
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "avatarUrlString"
    }
  };

  it('should dispatch succeeded, then reload', () => {
    const iterator = userSubmitAvatarSaga(action);
    const res = {data: {message: 'Avatar set.'}};
    const avatarUrl = res1.data.urlFullSize;

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/avatar`,
      {fileType: action.fullAvatar.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.fullAvatar,
      {headers: {'Content-Type': action.fullAvatar.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.tinyAvatar,
      {headers: {'Content-Type': action.tinyAvatar.type}}
    ));

    expect(iterator.next(avatarUrl).value)
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
    expect(JSON.stringify(iterator.next(res).value))
    .toEqual(JSON.stringify(call(() => location.reload())));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userSubmitAvatarSaga(action);
    const res = {data: {message: 'Oops.'}};
    const avatarUrl = res1.data.urlFullSize;

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next(avatarUrl);  //iterator.next(res);

    expect(iterator.next(res).value)
    .toEqual(put(userSubmitAvatarFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userSubmitAvatarSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userSubmitAvatarFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});