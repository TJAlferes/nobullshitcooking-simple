import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

// IMPLEMENT RETRY LOGIC

export function* dataGetMeasurementsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/measurements`);
    yield put(dataGetMeasurements(res.data));
    yield put(dataGetMeasurementsSucceeded());
  } catch (err) {
    yield put(dataGetMeasurementsFailed());
  }
}

export function* dataGetEquipmentsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/equipment`);
    yield put(dataGetEquipments(res.data));
    yield put(dataGetEquipmentSucceeded());
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
    const res = yield axios.get(`${endpoint}/ingredient`);
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
    const res = yield axios.get(`${endpoint}/recipe`);
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

export function* dataGetMyPublicRecipesSaga() {
  try {
    const res = yield axios.post(`${endpoint}/user/recipe/public/all`);
    yield put(dataMyGetPublicRecipes(res.data));
    yield put(dataMyGetPublicRecipesSucceeded());
  } catch (err) {
    yield put(dataMyGetPublicRecipesFailed());
  }
}

export function* dataGetMyPrivateEquipmentsSaga() {
  try {
    const res = yield axios.post(`${endpoint}/user/equipment/private/all`);
    yield put(dataGetMyPrivateEquipments(res.data));
    yield put(dataGetMyPrivateEquipmentsSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateEquipmentsFailed());
  }
}

export function* dataGetMyPrivateIngredientsSaga() {
  try {
    const res = yield axios.post(`${endpoint}/user/ingredient/private/all`);
    yield put(dataGetMyPrivateIngredients(res.data));
    yield put(dataGetMyPrivateIngredientsSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateIngredientsFailed());
  }
}

export function* dataGetMyPrivateRecipesSaga() {
  try {
    const res = yield axios.post(`${endpoint}/user/recipe/private/all`);
    yield put(dataGetMyPrivateRecipes(res.data));
    yield put(dataGetMyPrivateRecipesSucceeded());
  } catch (err) {
    yield put(dataGetMyPrivateRecipesFailed());
  }
}