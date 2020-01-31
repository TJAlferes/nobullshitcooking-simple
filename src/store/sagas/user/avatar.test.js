import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
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
    return expectSaga(userSubmitAvatarSaga, action)
    .silentRun(50);
  });*/


});