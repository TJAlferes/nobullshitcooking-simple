import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga
} from './plan';

import {
  userMessageClear,

  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userCreateNewPlanSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPlanSaga, action)
    .silentRun(50);
  });*/


});



describe('the userEditPlanSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userEditPlanSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDeletePlanSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePlanSaga, action)
    .silentRun(50);
  });*/


});