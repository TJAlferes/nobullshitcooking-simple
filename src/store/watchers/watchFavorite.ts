import { all, takeEvery } from 'redux-saga/effects';

import { dataGetMyFavoriteRecipesSaga } from '../data/sagas';
import {
  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga
} from '../user/favorite/sagas';
import {
  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED
} from '../user/favorite/types';

export function* watchUserFavorite() {
  yield all([
    takeEvery(USER_FAVORITE_RECIPE, userFavoriteRecipeSaga),
    takeEvery(USER_FAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga),
    
    takeEvery(USER_UNFAVORITE_RECIPE, userUnfavoriteRecipeSaga),
    takeEvery(USER_UNFAVORITE_RECIPE_SUCCEEDED, dataGetMyFavoriteRecipesSaga)
  ]);
}