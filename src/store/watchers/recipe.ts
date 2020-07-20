import { all, takeEvery } from 'redux-saga/effects';

import {
  dataGetRecipesSaga,
  dataGetMyPrivateRecipesSaga,
  dataGetMyPublicRecipesSaga
} from '../data/sagas';
import {
  staffCreateNewRecipeSaga,
  staffEditRecipeSaga,
  staffDeleteRecipeSaga
} from '../staff/recipe/sagas';
import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE,
  STAFF_DELETE_RECIPE_SUCCEEDED
} from '../staff/recipe/types';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from '../user/recipe/sagas';
import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  
  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED
} from '../user/recipe/types';

export function* watchRecipe() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_RECIPE, staffCreateNewRecipeSaga),
    takeEvery(STAFF_CREATE_NEW_RECIPE_SUCCEEDED, dataGetRecipesSaga),

    takeEvery(STAFF_EDIT_RECIPE, staffEditRecipeSaga),
    takeEvery(STAFF_EDIT_RECIPE_SUCCEEDED, dataGetRecipesSaga),

    takeEvery(STAFF_DELETE_RECIPE, staffDeleteRecipeSaga),
    takeEvery(STAFF_DELETE_RECIPE_SUCCEEDED, dataGetRecipesSaga),

    takeEvery(USER_CREATE_NEW_PRIVATE_RECIPE, userCreateNewRecipeSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),

    takeEvery(USER_EDIT_PRIVATE_RECIPE, userEditRecipeSaga),
    takeEvery(USER_EDIT_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),

    takeEvery(USER_DELETE_PRIVATE_RECIPE, userDeletePrivateRecipeSaga),
    takeEvery(USER_DELETE_PRIVATE_RECIPE_SUCCEEDED, dataGetMyPrivateRecipesSaga),
    
    takeEvery(USER_CREATE_NEW_PUBLIC_RECIPE, userCreateNewRecipeSaga),
    takeEvery(USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),

    takeEvery(USER_EDIT_PUBLIC_RECIPE, userEditRecipeSaga),
    takeEvery(USER_EDIT_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga),
    
    takeEvery(USER_DISOWN_PUBLIC_RECIPE, userDisownPublicRecipeSaga),
    takeEvery(USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED, dataGetMyPublicRecipesSaga)
  ]);
}