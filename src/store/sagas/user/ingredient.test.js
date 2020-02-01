import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga,
} from './ingredient';

import {
  userMessageClear,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userCreateNewPrivateIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateIngredientSaga, action)
    .silentRun(50);
  });*/


});



describe('the userEditPrivateIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateIngredientSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDeletePrivateIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateIngredientSaga, action)
    .silentRun(50);
  });*/


});