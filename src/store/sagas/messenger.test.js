import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  messengerConnectSaga,
  messengerDisconnectSaga,
  messengerChangeChannelSaga,
  messengerSendMessageSaga,
  messengerSendWhisperSaga,
  messengerUpdateOnlineSaga,
  messengerRejoinRoomSaga
} from './messenger';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;  // remove in test?

// mock/stub socket.io-client ?



describe('the messengerConnectSaga', () => {
  it('works', () => {
    return expectSaga(messengerConnectSaga)
    .silentRun(50);
  });
});

describe('the messengerDisconnectSaga', () => {
  it('works', () => {
    return expectSaga(messengerDisconnectSaga)
    .silentRun(50);
  });
});

describe('the messengerChangeChannelSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(messengerChangeChannelSaga, action)
    .silentRun(50);
  });
});

describe('the messengerSendMessageSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(messengerSendMessageSaga, action)
    .silentRun(50);
  });
});

describe('the messengerSendWhisperSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(messengerSendWhisperSaga, action)
    .silentRun(50);
  });
});

describe('the messengerUpdateOnlineSaga', () => {
  it('works', () => {
    return expectSaga(messengerUpdateOnlineSaga)
    .silentRun(50);
  });
});

describe('the messengerRejoinRoomSaga', () => {
  it('works', () => {
    return expectSaga(messengerRejoinRoomSaga)
    .silentRun(50);
  });
});