import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga
} from './favorite';

import {
  userMessageClear,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userFavoriteRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userFavoriteRecipeSaga, action)
    .silentRun(50);
  });*/


});



describe('the userUnfavoriteRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userUnfavoriteRecipeSaga, action)
    .silentRun(50);
  });*/


});