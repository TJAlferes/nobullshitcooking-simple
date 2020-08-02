import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

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
  let {
    ownership,
    recipeTypeId,
    cuisineId,
    title,
    description,
    directions,
    requiredMethods,
    requiredEquipment,
    requiredIngredients,
    requiredSubrecipes,
    recipeImage,
    recipeFullImage,
    recipeThumbImage,
    recipeTinyImage,
    equipmentImage,
    equipmentFullImage,
    ingredientsImage,
    ingredientsFullImage,
    cookingImage,
    cookingFullImage
  } = action.recipeInfo;
  try {
    // 1
    if (recipeFullImage && recipeThumbImage && recipeTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe`,
        {fileType: recipeFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        recipeFullImage,
        {headers: {'Content-Type': recipeFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        recipeThumbImage,
        {headers: {'Content-Type': recipeThumbImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        recipeTinyImage,
        {headers: {'Content-Type': recipeTinyImage.type}}
      );
      recipeImage = res1.data.urlFullSize;
    } else {
      recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (equipmentFullImage) {
      const res2 = yield call(
        [axios, axios.put],
        `${endpoint}/staff/get-signed-url/recipe-equipment`,
        {fileType: equipmentFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res2.data.signedRequestFullSize,
        equipmentFullImage,
        {headers: {'Content-Type': equipmentFullImage.type}}
      );
      equipmentImage = res2.data.urlFullSize;
    } else {
      equipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (ingredientsFullImage) {
      const res3 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-ingredients`,
        {fileType: ingredientsFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res3.data.signedRequestFullSize,
        ingredientsFullImage,
        {headers: {'Content-Type': ingredientsFullImage.type}}
      );
      ingredientsImage = res3.data.urlFullSize;
    } else {
      ingredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (cookingFullImage) {
      const res4 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-cooking`,
        {fileType: cookingFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res4.data.signedRequestFullSize,
        cookingFullImage,
        {headers: {'Content-Type': cookingFullImage.type}}
      );
      cookingImage = res4.data.urlFullSize;
    } else {
      cookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/recipe/create`,
      {
        recipeInfo: {
          ownership,
          recipeTypeId,
          cuisineId,
          title,
          description,
          directions,
          requiredMethods,
          requiredEquipment,
          requiredIngredients,
          requiredSubrecipes,
          recipeImage,
          recipeFullImage,
          recipeThumbImage,
          recipeTinyImage,
          equipmentImage,
          equipmentFullImage,
          ingredientsImage,
          ingredientsFullImage,
          cookingImage,
          cookingFullImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Recipe created.') {
      yield put(staffCreateNewRecipeSucceeded(message));
    } else {
      yield put(staffCreateNewRecipeFailed(message));
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
  let {
    recipeId,
    ownership,
    recipeTypeId,
    cuisineId,
    title,
    description,
    directions,
    requiredMethods,
    requiredEquipment,
    requiredIngredients,
    requiredSubrecipes,
    recipeImage,
    recipeFullImage,
    recipePrevImage,
    recipeThumbImage,
    recipeTinyImage,
    equipmentImage,
    equipmentFullImage,
    equipmentPrevImage,
    ingredientsImage,
    ingredientsFullImage,
    ingredientsPrevImage,
    cookingImage,
    cookingFullImage,
    cookingPrevImage
  } = action.recipeInfo;
  try {
    // 1
    if (recipeFullImage && recipeThumbImage && recipeTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe`,
        {fileType: recipeFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        recipeFullImage,
        {headers: {'Content-Type': recipeFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestThumbSize,
        recipeThumbImage,
        {headers: {'Content-Type': recipeThumbImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        recipeTinyImage,
        {headers: {'Content-Type': recipeTinyImage.type}}
      );
      recipeImage = res1.data.urlFullSize;
    } else {
      recipeImage = recipePrevImage;
    }

    // 2
    if (equipmentFullImage) {
      const res2 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-equipment`,
        {fileType: equipmentFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res2.data.signedRequestFullSize,
        equipmentFullImage,
        {headers: {'Content-Type': equipmentFullImage.type}}
      );
      equipmentImage = res2.data.urlFullSize;
    } else {
      equipmentImage = equipmentPrevImage;
    }

    // 3
    if (ingredientsFullImage) {
      const res3 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-ingredients`,
        {fileType: ingredientsFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res3.data.signedRequestFullSize,
        ingredientsFullImage,
        {headers: {'Content-Type': ingredientsFullImage.type}}
      );
      ingredientsImage = res3.data.urlFullSize;
    } else {
      ingredientsImage = ingredientsPrevImage;
    }

    // 4
    if (cookingFullImage) {
      const res4 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/recipe-cooking`,
        {fileType: cookingFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res4.data.signedRequestFullSize,
        cookingFullImage,
        {headers: {'Content-Type': cookingFullImage.type}}
      );
      cookingImage = res4.data.urlFullSize;
    } else {
      cookingImage = cookingPrevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/staff/recipe/update`,
      {
        recipeInfo: {
          recipeId,
          ownership,
          recipeTypeId,
          cuisineId,
          title,
          description,
          directions,
          requiredMethods,
          requiredEquipment,
          requiredIngredients,
          requiredSubrecipes,
          recipeImage,
          recipeFullImage,
          recipePrevImage,
          recipeThumbImage,
          recipeTinyImage,
          equipmentImage,
          equipmentFullImage,
          equipmentPrevImage,
          ingredientsImage,
          ingredientsFullImage,
          ingredientsPrevImage,
          cookingImage,
          cookingFullImage,
          cookingPrevImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Recipe updated.') {
      yield put(staffEditRecipeSucceeded(message));
    } else {
      yield put(staffEditRecipeFailed(message));
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
    const { message } = res.data;
    if (message == 'Recipe deleted.') {
      yield put(staffDeleteRecipeSucceeded(message));
    } else {
      yield put(staffDeleteRecipeFailed(message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffDeleteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}