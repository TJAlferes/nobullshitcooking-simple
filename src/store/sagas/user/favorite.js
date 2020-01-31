import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

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

export function* userFavoriteRecipeSaga(action) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/favorite-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Favorited.') {
      yield put(userFavoriteRecipeSucceeded(res.data.message));
    } else {
      yield put(userFavoriteRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userFavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnfavoriteRecipeSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/favorite-recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    if (res.data.message == 'Unfavorited.') {
      yield put(userUnfavoriteRecipeSucceeded(res.data.message));
    } else {
      yield put(userUnfavoriteRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnfavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}