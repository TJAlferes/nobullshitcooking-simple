import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  dataGetMeasurements,
  dataGetMeasurementsSucceeded,
  dataGetMeasurementsFailed,
  dataGetEquipments,
  dataGetEquipmentsSucceeded,
  dataGetEquipmentsFailed,
  dataGetEquipmentTypes,
  dataGetEquipmentTypesSucceeded,
  dataGetEquipmentTypesFailed,
  dataGetIngredients,
  dataGetIngredientsSucceeded,
  dataGetIngredientsFailed,
  dataGetIngredientTypes,
  dataGetIngredientTypesSucceeded,
  dataGetIngredientTypesFailed,
  dataGetRecipes,
  dataGetRecipesSucceeded,
  dataGetRecipesFailed,
  dataGetRecipeTypes,
  dataGetRecipeTypesSucceeded,
  dataGetRecipeTypesFailed,
  dataGetCuisines,
  dataGetCuisinesSucceeded,
  dataGetCuisinesFailed,
  dataGetMethods,
  dataGetMethodsSucceeded,
  dataGetMethodsFailed,
  dataGetPublicRecipes,
  dataGetPublicRecipesSucceeded,
  dataGetPublicRecipesFailed,
  dataGetMyPublicRecipes,
  dataGetMyPublicRecipesSucceeded,
  dataGetMyPublicRecipesFailed,
  dataGetMyPrivateEquipments,
  dataGetMyPrivateEquipmentsSucceeded,
  dataGetMyPrivateEquipmentsFailed,
  dataGetMyPrivateIngredients,
  dataGetMyPrivateIngredientsSucceeded,
  dataGetMyPrivateIngredientsFailed,
  dataGetMyPrivateRecipes,
  dataGetMyPrivateRecipesSucceeded,
  dataGetMyPrivateRecipesFailed,
  dataGetMyFavoriteRecipes,
  dataGetMyFavoriteRecipesSucceeded,
  dataGetMyFavoriteRecipesFailed,
  dataGetMySavedRecipes,
  dataGetMySavedRecipesSucceeded,
  dataGetMySavedRecipesFailed,
  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed,
  dataGetMyFriendships,
  dataGetMyFriendshipsSucceeded,
  dataGetMyFriendshipsFailed
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

// IMPLEMENT RETRY LOGIC

export function* dataGetMeasurementsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/measurement`);
    yield put(dataGetMeasurements(res.data));
    yield put(dataGetMeasurementsSucceeded());
  } catch (err) {
    yield put(dataGetMeasurementsFailed());
  }
}

export function* dataGetEquipmentsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/equipment/official/all`);
    yield put(dataGetEquipments(res.data));
    yield put(dataGetEquipmentsSucceeded());
  } catch (err) {
    yield put(dataGetEquipmentsFailed());
  }
}

export function* dataGetEquipmentTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/equipment-type`);
    yield put(dataGetEquipmentTypes(res.data));
    yield put(dataGetEquipmentTypesSucceeded());
  } catch (err) {
    yield put(dataGetEquipmentTypesFailed());
  }
}

export function* dataGetIngredientsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/ingredient/official/all`);
    yield put(dataGetIngredients(res.data));
    yield put(dataGetIngredientsSucceeded());
  } catch (err) {
    yield put(dataGetIngredientsFailed());
  }
}

export function* dataGetIngredientTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/ingredient-type`);
    yield put(dataGetIngredientTypes(res.data));
    yield put(dataGetIngredientTypesSucceeded());
  } catch (err) {
    yield put(dataGetIngredientTypesFailed());
  }
}

export function* dataGetRecipesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/recipe/official/all`);
    yield put(dataGetRecipes(res.data));
    yield put(dataGetRecipesSucceeded());
  } catch (err) {
    yield put(dataGetRecipesFailed());
  }
}

export function* dataGetRecipeTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/recipe-type`);
    yield put(dataGetRecipeTypes(res.data));
    yield put(dataGetRecipeTypesSucceeded());
  } catch (err) {
    yield put(dataGetRecipeTypesFailed());
  }
}

export function* dataGetCuisinesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/cuisine`);
    yield put(dataGetCuisines(res.data));
    yield put(dataGetCuisinesSucceeded('Cuisines loaded.'));
  } catch (err) {
    yield put(dataGetCuisinesFailed());
  }
}

export function* dataGetMethodsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/method`);
    yield put(dataGetMethods(res.data));
    yield put(dataGetMethodsSucceeded());
  } catch (err) {
    yield put(dataGetMethodsFailed());
  }
}

/*export function* dataGetRecipeMethodsSaga() {
  try {
    yield axios.get(`${endpoint}/`);
    yield put(dataGetSucceeded());
  } catch (err) {
    yield put(dataGetFailed());
  }
}

export function* dataGetRecipeEquipmentSaga() {
  try {
    yield axios.get(`${endpoint}/`);
    yield put(dataGetSucceeded());
  } catch (err) {
    yield put(dataGetFailed());
  }
}

export function* dataGetRecipeIngredientsSaga() {
  try {
    yield axios.get(`${endpoint}/`);
    yield put(dataGetSucceeded());
  } catch (err) {
    yield put(dataGetFailed());
  }
}

export function* dataGetRecipeSubrecipesSaga() {
  try {
    yield axios.get(`${endpoint}/`);
    yield put(dataGetSucceeded());
  } catch (err) {
    yield put(dataGetFailed());
  }
}*/

export function* dataGetPublicRecipesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/recipe/public/all`);
    yield put(dataGetPublicRecipes(res.data));
    yield put(dataGetPublicRecipesSucceeded());
  } catch (err) {
    yield put(dataGetPublicRecipesFailed());
  }
}



export function* dataGetMyPublicRecipesSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/recipe/public/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyPublicRecipes(res.data));
    yield put(dataGetMyPublicRecipesSucceeded());
  } catch (err) {
    yield put(dataGetMyPublicRecipesFailed());
  }
}



export function* dataGetMyPrivateEquipmentsSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/equipment/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyPrivateEquipments(res.data));
    yield put(dataGetMyPrivateEquipmentsSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateEquipmentsFailed());
  }
}

export function* dataGetMyPrivateIngredientsSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/ingredient/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyPrivateIngredients(res.data));
    yield put(dataGetMyPrivateIngredientsSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateIngredientsFailed());
  }
}

export function* dataGetMyPrivateRecipesSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/recipe/private/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyPrivateRecipes(res.data));
    yield put(dataGetMyPrivateRecipesSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateRecipesFailed());
  }
}



export function* dataGetMyFavoriteRecipesSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/favorite-recipe`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyFavoriteRecipes(res.data));
    yield put(dataGetMyFavoriteRecipesSucceeded());
  } catch (err) {
    yield put(dataGetMyFavoriteRecipesFailed());
  }
}

export function* dataGetMySavedRecipesSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/saved-recipe`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMySavedRecipes(res.data));
    yield put(dataGetMySavedRecipesSucceeded());
  } catch (err) {
    yield put(dataGetMySavedRecipesFailed());
  }
}



export function* dataGetMyPlansSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/plan/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyPlans(res.data));
    yield put(dataGetMyPlansSucceeded());
  } catch (err) {
    yield put(dataGetMyPlansFailed());
  }
}



export function* dataGetMyFriendshipsSaga() {
  try {
    const res = yield axios.post(
      `${endpoint}/user/friendship`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyFriendships(res.data));
    yield put(dataGetMyFriendshipsSucceeded());
  } catch (err) {
    yield put(dataGetMyFriendshipsFailed());
  }
}
