import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewRecipeSucceeded,
  staffCreateNewRecipeFailed,
  staffEditRecipeSucceeded,
  staffEditRecipeFailed,
  staffDeleteRecipeSucceeded,
  staffDeleteRecipeFailed
} from './actions';
import {
  IStaffCreateNewRecipe,
  IStaffEditRecipe,
  IStaffDeleteRecipe
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* staffCreateNewRecipeSaga(action: IStaffCreateNewRecipe) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (action.recipeInfo.fullRecipeEquipmentImage) {
      const res2 = yield call(
        [axios, axios.put],
        `${endpoint}/staff/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res2.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (action.recipeInfo.fullRecipeIngredientsImage) {
      const res3 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res3.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (action.recipeInfo.fullRecipeCookingImage) {
      const res4 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res4.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe created.') {
      yield put(staffCreateNewRecipeSucceeded(res.data.message));
    } else {
      yield put(staffCreateNewRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffCreateNewRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffEditRecipeSaga(action: IStaffEditRecipe) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = action.recipeInfo.prevRecipeImage;
    }

    // 2
    if (action.recipeInfo.fullRecipeEquipmentImage) {
      const res2 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res2.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = action.recipeInfo.prevEquipmentImage;
    }

    // 3
    if (action.recipeInfo.fullRecipeIngredientsImage) {
      const res3 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res3.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = action.recipeInfo.prevIngredientsImage;
    }

    // 4
    if (action.recipeInfo.fullRecipeCookingImage) {
      const res4 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res4.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = action.recipeInfo.prevCookingImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/staff/recipe/update`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe updated.') {
      yield put(staffEditRecipeSucceeded(res.data.message));
    } else {
      yield put(staffEditRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffEditRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffDeleteRecipeSaga(action: IStaffDeleteRecipe) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/staff/recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    if (res.data.message == 'Recipe deleted.') {
      yield put(staffDeleteRecipeSucceeded(res.data.message));
    } else {
      yield put(staffDeleteRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffDeleteRecipeFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}