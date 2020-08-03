import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed
} from './actions';
import { IUserFavoriteRecipe, IUserUnfavoriteRecipe } from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userFavoriteRecipeSaga(action: IUserFavoriteRecipe) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/favorite-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Favorited.') {
      yield put(userFavoriteRecipeSucceeded(message));
    } else {
      yield put(userFavoriteRecipeFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userFavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnfavoriteRecipeSaga(action: IUserUnfavoriteRecipe) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/favorite-recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    const { message } = res.data;
    if (message == 'Unfavorited.') {
      yield put(userUnfavoriteRecipeSucceeded(message));
    } else {
      yield put(userUnfavoriteRecipeFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnfavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}