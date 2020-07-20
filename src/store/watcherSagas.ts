import { all, takeEvery } from 'redux-saga/effects';


import {
  dataGetInitialDataSaga,
  dataGetInitialUserDataSaga,
  dataGetContentTypesSaga,
  dataGetMeasurementsSaga,
  dataGetEquipmentsSaga,  // official
  dataGetEquipmentTypesSaga,
  dataGetIngredientsSaga,  // official
  dataGetIngredientTypesSaga,
  dataGetRecipesSaga,  // official
  dataGetRecipeTypesSaga,
  dataGetCuisinesSaga,
  dataGetMethodsSaga,
  dataGetMyPublicRecipesSaga,
  dataGetMyPrivateEquipmentsSaga,
  dataGetMyPrivateIngredientsSaga,
  dataGetMyPrivateRecipesSaga,
  dataGetMyFavoriteRecipesSaga,
  dataGetMySavedRecipesSaga,
  dataGetMyPlansSaga,
  dataGetMyFriendshipsSaga
} from './data/sagas';
import { DATA_INIT } from './data/types';
import {
  staffCreateNewContentSaga,
  staffEditContentSaga,
  staffDeleteContentSaga
} from './staff/content/sagas';
import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT,
  STAFF_DELETE_CONTENT_SUCCEEDED
} from './staff/content/types';
import {
  staffCreateNewEquipmentSaga,
  staffEditEquipmentSaga,
  staffDeleteEquipmentSaga
} from './staff/equipment/sagas';
import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED
} from './staff/equipment/types';
import {
  staffCreateNewIngredientSaga,
  staffEditIngredientSaga,
  staffDeleteIngredientSaga
} from './staff/ingredient/sagas';
import {
  STAFF_CREATE_NEW_INGREDIENT,
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT,
  STAFF_DELETE_INGREDIENT_SUCCEEDED
} from './staff/ingredient/types';
import {
  staffCreateNewRecipeSaga,
  staffEditRecipeSaga,
  staffDeleteRecipeSaga
} from './staff/recipe/sagas';
import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE,
  STAFF_DELETE_RECIPE_SUCCEEDED
} from './staff/recipe/types';
import { userSubmitAvatarSaga } from './user/avatar/sagas';
import { USER_SUBMIT_AVATAR } from './user/avatar/types';
import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from './user/equipment/sagas';
import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED
} from './user/equipment/types';
import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga
} from './user/ingredient/sagas';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED
} from './user/ingredient/types';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from './user/recipe/sagas';
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
} from './user/recipe/types';

export function* watchData() {
  yield all([takeEvery(DATA_INIT, dataGetInitialDataSaga)]);
}

export function* watchUserAvatar() {
  yield all([takeEvery(USER_SUBMIT_AVATAR, userSubmitAvatarSaga)]);
}

export function* watchUserEquipment() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_CONTENT, staffCreateNewContentSaga),
    takeEvery(STAFF_CREATE_NEW_CONTENT_SUCCEEDED, dataGetContentSaga),
    takeEvery(STAFF_EDIT_CONTENT, staffEditContentSaga),
    takeEvery(STAFF_EDIT_CONTENT_SUCCEEDED, dataGetContentSaga),
    takeEvery(STAFF_DELETE_CONTENT, staffDeleteContentSaga),
    takeEvery(STAFF_DELETE_CONTENT_SUCCEEDED, dataGetContentSaga),

    takeEvery(STAFF_CREATE_NEW_EQUIPMENT, staffCreateNewEquipmentSaga),
    takeEvery(STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),
    takeEvery(STAFF_EDIT_EQUIPMENT, staffEditEquipmentSaga),
    takeEvery(STAFF_EDIT_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),
    takeEvery(STAFF_DELETE_EQUIPMENT, staffDeleteEquipmentSaga),
    takeEvery(STAFF_DELETE_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),

    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT, userCreateNewPrivateEquipmentSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT, userEditPrivateEquipmentSaga),
    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT, userDeletePrivateEquipmentSaga),
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga)
  ]);
}

export function* watchUserIngredient() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_INGREDIENT, staffCreateNewIngredientSaga),
    takeEvery(STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),
    takeEvery(STAFF_EDIT_INGREDIENT, staffEditIngredientSaga),
    takeEvery(STAFF_EDIT_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),
    takeEvery(STAFF_DELETE_INGREDIENT, staffDeleteIngredientSaga),
    takeEvery(STAFF_DELETE_INGREDIENT_SUCCEEDED, dataGetIngredientsSaga),

    takeEvery(USER_CREATE_NEW_PRIVATE_INGREDIENT, userCreateNewPrivateIngredientSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(USER_EDIT_PRIVATE_INGREDIENT, userEditPrivateIngredientSaga),
    takeEvery(USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga),
    takeEvery(USER_DELETE_PRIVATE_INGREDIENT, userDeletePrivateIngredientSaga),
    takeEvery(USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED, dataGetMyPrivateIngredientsSaga)
  ]);
}

export function* watchUserRecipe() {
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