import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import { userFavoriteRecipeSaga, userUnfavoriteRecipeSaga } from './favorite';

import {
  userMessageClear,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed
} from '../actions';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

const action = {recipeId: 99};

describe('the userFavoriteRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userFavoriteRecipeSaga, action)
    .silentRun(50);
  });*/

  it ('should dispatch succeeded', () => {
    const iterator = userFavoriteRecipeSaga(action);
    const res = {data: {message: 'Favorited.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/favorite-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userFavoriteRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userFavoriteRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userFavoriteRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userFavoriteRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userFavoriteRecipeFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userUnfavoriteRecipeSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userUnfavoriteRecipeSaga, action)
    .silentRun(50);
  });*/

  it ('should dispatch succeeded', () => {
    const iterator = userUnfavoriteRecipeSaga(action);
    const res = {data: {message: 'Unfavorited.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/favorite-recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userUnfavoriteRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userUnfavoriteRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userUnfavoriteRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userUnfavoriteRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userUnfavoriteRecipeFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});