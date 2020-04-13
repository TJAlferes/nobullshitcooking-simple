import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { userMessageClear } from '../actions';
import {
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from './actions';
import { IUserSaveRecipe, IUserUnsaveRecipe } from './types';
import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userSaveRecipeSaga(action: IUserSaveRecipe) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/saved-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Saved.') {
      yield put(userSaveRecipeSucceeded(res.data.message));
    } else {
      yield put(userSaveRecipeFailed(res.data.message));
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
    if (res.data.message == 'Unsaved.') {
      yield put(userUnsaveRecipeSucceeded(res.data.message));
    } else {
      yield put(userUnsaveRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnsaveRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}