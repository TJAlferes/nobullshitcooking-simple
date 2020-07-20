import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import {
  dataGetInitialData,
  dataGetInitialDataSucceeded,
  dataGetInitialDataFailed,
  dataGetInitialUserData,
  dataGetInitialUserDataSucceeded,
  dataGetInitialUserDataFailed,
  dataGetContent,
  dataGetContentSucceeded,
  dataGetContentFailed,
  dataGetContentTypes,
  dataGetContentTypesSucceeded,
  dataGetContentTypesFailed,
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
  dataGetMyContent,
  dataGetMyContentSucceeded,
  dataGetMyContentFailed,
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
} from './actions';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* dataGetInitialDataSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/data-init`);
    yield put(dataGetInitialData(res.data));
    yield put(dataGetInitialDataSucceeded());
  } catch (err) {
    yield put(dataGetInitialDataFailed());
  }
}

export function* dataGetInitialUserDataSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/data-init`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetInitialUserData(res.data));
    yield put(dataGetInitialUserDataSucceeded());
  } catch (err) {
    yield put(dataGetInitialUserDataFailed());
  }
}

export function* dataGetContentSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/content`);
    yield put(dataGetContent(res.data));
    yield put(dataGetContentSucceeded());
  } catch (err) {
    yield put(dataGetContentFailed());
  }
}

export function* dataGetContentTypesSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/content-type`);
    yield put(dataGetContentTypes(res.data));
    yield put(dataGetContentTypesSucceeded());
  } catch (err) {
    yield put(dataGetContentTypesFailed());
  }
}

export function* dataGetMeasurementsSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/measurement`);
    yield put(dataGetMeasurements(res.data));
    yield put(dataGetMeasurementsSucceeded());
  } catch (err) {
    yield put(dataGetMeasurementsFailed());
  }
}

export function* dataGetEquipmentsSaga() {
  try {
    const res = yield call(
      [axios, axios.get],
      `${endpoint}/equipment/official/all`
    );
    yield put(dataGetEquipments(res.data));
    yield put(dataGetEquipmentsSucceeded());
  } catch (err) {
    yield put(dataGetEquipmentsFailed());
  }
}

export function* dataGetEquipmentTypesSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/equipment-type`);
    yield put(dataGetEquipmentTypes(res.data));
    yield put(dataGetEquipmentTypesSucceeded());
  } catch (err) {
    yield put(dataGetEquipmentTypesFailed());
  }
}

export function* dataGetIngredientsSaga() {
  try {
    const res = yield call(
      [axios, axios.get],
      `${endpoint}/ingredient/official/all`
    );
    yield put(dataGetIngredients(res.data));
    yield put(dataGetIngredientsSucceeded());
  } catch (err) {
    yield put(dataGetIngredientsFailed());
  }
}

export function* dataGetIngredientTypesSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/ingredient-type`);
    yield put(dataGetIngredientTypes(res.data));
    yield put(dataGetIngredientTypesSucceeded());
  } catch (err) {
    yield put(dataGetIngredientTypesFailed());
  }
}

export function* dataGetRecipesSaga() {
  try {
    const res = yield call(
      [axios, axios.get],
      `${endpoint}/recipe/official/all`
    );
    yield put(dataGetRecipes(res.data));
    yield put(dataGetRecipesSucceeded());
  } catch (err) {
    yield put(dataGetRecipesFailed());
  }
}

export function* dataGetRecipeTypesSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/recipe-type`);
    yield put(dataGetRecipeTypes(res.data));
    yield put(dataGetRecipeTypesSucceeded());
  } catch (err) {
    yield put(dataGetRecipeTypesFailed());
  }
}

export function* dataGetCuisinesSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/cuisine`);
    yield put(dataGetCuisines(res.data));
    yield put(dataGetCuisinesSucceeded());
  } catch (err) {
    yield put(dataGetCuisinesFailed());
  }
}

export function* dataGetMethodsSaga() {
  try {
    const res = yield call([axios, axios.get], `${endpoint}/method`);
    yield put(dataGetMethods(res.data));
    yield put(dataGetMethodsSucceeded());
  } catch (err) {
    yield put(dataGetMethodsFailed());
  }
}

/*
perhaps too early to abstract

function postData(path, action, succeeded, failed) {
  return function*() {
    try {
      const res = yield call(
        [axios, axios.post],
        `${endpoint}/${path}`,
        {},
        {withCredentials: true}
      );
      yield put(action(res.data));
      yield put(succeeded());
    } catch (err) {
      yield put(failed());
    }
  }
}

export const dataGetMyPlansSaga = postData(
  'user/plan/all',
  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed
);*/

export function* dataGetMyContentSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/content/all`,
      {},
      {withCredentials: true}
    );
    yield put(dataGetMyContent(res.data));
    yield put(dataGetMyContentSucceeded());
  } catch (err) {
    yield put(dataGetMyContentFailed());
  }
}

export function* dataGetMyPlansSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
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

export function* dataGetMyPublicRecipesSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
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

export function* dataGetMyPrivateRecipesSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
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
    const res = yield call(
      [axios, axios.post],
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
    const res = yield call(
      [axios, axios.post],
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

export function* dataGetMyPrivateEquipmentsSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
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
    const res = yield call(
      [axios, axios.post],
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

export function* dataGetMyFriendshipsSaga() {
  try {
    const res = yield call(
      [axios, axios.post],
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