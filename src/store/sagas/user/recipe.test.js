import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from './recipe';

import {
  userMessageClear,

  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,

  userCreateNewPublicRecipeSucceeded,
  userCreateNewPublicRecipeFailed,
  userEditPublicRecipeSucceeded,
  userEditPublicRecipeFailed,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userCreateNewRecipeSaga', () => {
  /*it('works', () => {
    const action = {ownership: "public"};
    return expectSaga(userCreateNewRecipeSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDeletePrivateRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateRecipeSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDisownPublicRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDisownPublicRecipeSaga, action)
    .silentRun(50);
  });*/


});



describe('the userEditRecipeSaga', () => {
  /*it('works', () => {
    const action = {ownership: "public"};
    return expectSaga(userEditRecipeSaga, action)
    .silentRun(50);
  });*/


});