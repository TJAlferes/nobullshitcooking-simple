import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import {
  userMessageClear } from '../../../../src/store/user/actions';
import {
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from '../../../../src/store/user/save/actions';
import { userSaveRecipeSaga, userUnsaveRecipeSaga } from '../../../../src/store/user/save/sagas';
import { USER_SAVE_RECIPE, USER_UNSAVE_RECIPE } from '../../../../src/store/user/save/types';

const endpoint = NOBSCBackendAPIEndpointOne;

describe('userSaveRecipeSaga', () => {
  const action = {type: USER_SAVE_RECIPE, recipeId: 99};

  it ('should dispatch succeeded', () => {
    const iterator = userSaveRecipeSaga(action);
    const res = {data: {message: 'Saved.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/saved-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userSaveRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userSaveRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userSaveRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userSaveRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userSaveRecipeFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userUnsaveRecipeSaga', () => {
  const action = {type: USER_UNSAVE_RECIPE, recipeId: 99};

  it ('should dispatch succeeded', () => {
    const iterator = userUnsaveRecipeSaga(action);
    const res = {data: {message: 'Unsaved.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/saved-recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userUnsaveRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userUnsaveRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userUnsaveRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userUnsaveRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userUnsaveRecipeFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});