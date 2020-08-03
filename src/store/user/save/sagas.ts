import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from './actions';
import { IUserSaveRecipe, IUserUnsaveRecipe } from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userSaveRecipeSaga(action: IUserSaveRecipe) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/saved-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Saved.') {
      yield put(userSaveRecipeSucceeded(message));
    } else {
      yield put(userSaveRecipeFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userSaveRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnsaveRecipeSaga(action: IUserUnsaveRecipe) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/saved-recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    const { message } = res.data;
    if (message == 'Unsaved.') {
      yield put(userUnsaveRecipeSucceeded(message));
    } else {
      yield put(userUnsaveRecipeFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnsaveRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}