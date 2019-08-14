import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

export function* dataGetMeasurementsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/measurements`);
    yield put(dataGetMeasurements(res.data));
    yield put(dataGetMeasurementsSucceeded('Measurements loaded.'));
  } catch (err) {
    yield put(dataGetMeasurementsFailed('An error occurred while requesting measurements.'));
  }
}

export function* dataGetEquipmentsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/equipment`);
    yield put(dataGetEquipments(res.data));
    yield put(dataGetEquipmentSucceeded('Equipments loaded.'));
  } catch (err) {
    yield put(dataGetEquipmentsFailed('An error occurred while requesting equipments.'));
  }
}

export function* dataGetEquipmentTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/equipment-type`);
    yield put(dataGetEquipmentTypes(res.data));
    yield put(dataGetEquipmentTypesSucceeded('Equipment types loaded.'));
  } catch (err) {
    yield put(dataGetEquipmentTypesFailed('An error occurred while requesting equipment types.'));
  }
}

export function* dataGetIngredientsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/ingredient`);
    yield put(dataGetIngredients(res.data));
    yield put(dataGetIngredientsSucceeded('Ingredients loaded.'));
  } catch (err) {
    yield put(dataGetIngredientsFailed('An error occurred while requesting ingredients.'));
  }
}

export function* dataGetIngredientTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/ingredient-type`);
    yield put(dataGetIngredientTypes(res.data));
    yield put(dataGetIngredientTypesSucceeded('Ingredient types loaded.'));
  } catch (err) {
    yield put(dataGetIngredientTypesFailed('An error occurred while requesting ingredient types.'));
  }
}

export function* dataGetRecipesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/recipe`);
    yield put(dataGetRecipes(res.data));
    yield put(dataGetRecipesSucceeded('Recipes loaded.'));
  } catch (err) {
    yield put(dataGetRecipesFailed('An error occurred while requesting recipes.'));
  }
}

export function* dataGetRecipeTypesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/recipe-type`);
    yield put(dataGetRecipeTypes(res.data));
    yield put(dataGetRecipeTypesSucceeded('Recipe types loaded.'));
  } catch (err) {
    yield put(dataGetRecipeTypesFailed('An error occurred while requesting recipe types.'));
  }
}

export function* dataGetCuisinesSaga() {
  try {
    const res = yield axios.get(`${endpoint}/cuisine`);
    yield put(dataGetCuisines(res.data));
    yield put(dataGetCuisinesSucceeded('Cuisines loaded.'));
  } catch (err) {
    yield put(dataGetCuisinesFailed('An error occurred while requesting cuisines.'));
  }
}

export function* dataGetMethodsSaga() {
  try {
    const res = yield axios.get(`${endpoint}/method`);
    yield put(dataGetMethods(res.data));
    yield put(dataGetMethodsSucceeded('Methods loaded.'));
  } catch (err) {
    yield put(dataGetMethodsFailed('An error occurred while requesting methods.'));
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