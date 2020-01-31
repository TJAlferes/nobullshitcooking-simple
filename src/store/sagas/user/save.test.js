import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userSaveRecipeSaga,
  userUnsaveRecipeSaga
} from './save';

import {
  userMessageClear,
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userSaveRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userSaveRecipeSaga, action)
    .silentRun(50);
  });*/


});



describe('the userUnsaveRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userUnsaveRecipeSaga, action)
    .silentRun(50);
  });*/


});