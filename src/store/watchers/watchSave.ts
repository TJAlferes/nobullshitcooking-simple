import { all, takeEvery } from 'redux-saga/effects';

import { dataGetMySavedRecipesSaga } from '../data/sagas';
import { userSaveRecipeSaga, userUnsaveRecipeSaga } from '../user/save/sagas';
import {
  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED
} from '../user/save/types';

export function* watchUserSave() {
  yield all([
    takeEvery(USER_SAVE_RECIPE, userSaveRecipeSaga),
    takeEvery(USER_SAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga),

    takeEvery(USER_UNSAVE_RECIPE, userUnsaveRecipeSaga),
    takeEvery(USER_UNSAVE_RECIPE_SUCCEEDED, dataGetMySavedRecipesSaga)
  ]);
}