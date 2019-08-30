import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed,
  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,
  userCreateNewPublicRecipeSucceeded,
  userCreateNewPublicRecipeFailed,
  userEditPublicRecipeSucceeded,
  userEditPublicRecipeFailed,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed,
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed,
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed,
  userRequestFriendshipSucceeded,
  userRequestFriendshipFailed,
  userAcceptFriendshipSucceeded,
  userAcceptFriendshipFailed,
  userRejectFriendshipSucceeded,
  userRejectFriendshipFailed,
  userDeleteFriendshipSucceeded,
  userDeleteFriendshipFailed,
  userBlockUserSucceeded,
  userBlockUserFailed,
  userUnblockUserSucceeded,
  userUnblockUserFailed,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;



/*

equipment

*/

export function* userCreateNewPrivateEquipmentSaga(action) {
  try {
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.thumbEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.fullEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.equipmentInfo.fullEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.equipmentInfo.thumbEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.thumbEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.equipmentInfo.tinyEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.urlFullSize;
    } else {
      action.equipmentInfo.equipmentImage = 'nobsc-equipment-default';
    }

    const res = yield axios.post(
      `${endpoint}/user/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateEquipmentSaga(action) {
  try {
    // RADIO FOR KEEP CURRENT IMAGE / SET NEW IMAGE / USE DEFAULT IMAGE ?
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.thumbEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.fullEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.equipmentInfo.fullEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.equipmentInfo.thumbEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.thumbEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.equipmentInfo.tinyEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.urlFullSize;
    } else {
      action.equipmentInfo.equipmentImage = 'nobsc-equipment-default';
    }

    const res = yield axios.put(
      `${endpoint}/user/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userEditPrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateEquipmentSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/equipment/delete`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Equipment deleted.') {
      //yield put();  refresh/update respective list
      yield put(userDeletePrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

ingredient

*/

export function* userCreateNewPrivateIngredientSaga(action) {
  try {
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.thumbIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.fullIngredientImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.ingredientInfo.fullIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.ingredientInfo.thumbIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.thumbIngredientImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.ingredientInfo.tinyIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.urlFullSize;
    } else {
      action.ingredientInfo.ingredientImage = 'nobsc-ingredient-default';
    }

    const res = yield axios.post(
      `${endpoint}/user/ingredient/create`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPrivateIngredientSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPrivateIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateIngredientSaga(action) {
  try {
    // RADIO FOR KEEP CURRENT IMAGE / SET NEW IMAGE / USE DEFAULT IMAGE ?
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.thumbIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.fullIngredientImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.ingredientInfo.fullIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.ingredientInfo.thumbIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.thumbIngredientImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.ingredientInfo.tinyIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.urlFullSize;
    } else {
      action.ingredientInfo.ingredientImage = 'nobsc-ingredient-default';
    }

    const res = yield axios.put(
      `${endpoint}/user/ingredient/update`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPrivateIngredientSucceeded(res.data.message));
    } else {
      yield put(userEditPrivateIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateIngredientSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/ingredient/delete`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Ingredient deleted.') {
      //yield put();  refresh/update respective list
      yield put(userDeletePrivateIngredientSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

recipe (private)

*/

export function* userCreateNewPrivateRecipeSaga(action) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (
      action.recipeInfo.fullRecipeEquipmentImage &&
      action.recipeInfo.thumbRecipeEquipmentImage &&
      action.recipeInfo.tinyRecipeEquipmentImage
    ) {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (
      action.recipeInfo.fullRecipeIngredientsImage &&
      action.recipeInfo.thumbRecipeIngredientsImage &&
      action.recipeInfo.tinyRecipeIngredientsImage
    ) {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (
      action.recipeInfo.fullRecipeCookingImage &&
      action.recipeInfo.thumbRecipeCookingImage &&
      action.recipeInfo.tinyRecipeCookingImage
    ) {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield axios.post(
      `${endpoint}/user/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPrivateRecipeSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPrivateRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



export function* userEditPrivateRecipeSaga(action) {
  try {
    // RADIO FOR KEEP CURRENT IMAGE / SET NEW IMAGE / USE DEFAULT IMAGE ?

    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (
      action.recipeInfo.fullRecipeEquipmentImage &&
      action.recipeInfo.thumbRecipeEquipmentImage &&
      action.recipeInfo.tinyRecipeEquipmentImage
    ) {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (
      action.recipeInfo.fullRecipeIngredientsImage &&
      action.recipeInfo.thumbRecipeIngredientsImage &&
      action.recipeInfo.tinyRecipeIngredientsImage
    ) {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (
      action.recipeInfo.fullRecipeCookingImage &&
      action.recipeInfo.thumbRecipeCookingImage &&
      action.recipeInfo.tinyRecipeCookingImage
    ) {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield axios.put(
      `${endpoint}/user/recipe/update/private`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPrivateRecipeSucceeded(res.data.message));
    } else {
      yield put(userEditPrivateRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



export function* userDeletePrivateRecipeSaga(action) {
  try {
    console.log(action.recipeId);
    const res = yield axios.delete(
      `${endpoint}/user/recipe/delete/private`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    if (res.data.message == 'Recipe deleted.') {
      //yield put();  refresh/update respective list
      yield put(userDeletePrivateRecipeSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

recipe (public)

*/

export function* userCreateNewPublicRecipeSaga(action) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (
      action.recipeInfo.fullRecipeEquipmentImage &&
      action.recipeInfo.thumbRecipeEquipmentImage &&
      action.recipeInfo.tinyRecipeEquipmentImage
    ) {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (
      action.recipeInfo.fullRecipeIngredientsImage &&
      action.recipeInfo.thumbRecipeIngredientsImage &&
      action.recipeInfo.tinyRecipeIngredientsImage
    ) {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (
      action.recipeInfo.fullRecipeCookingImage &&
      action.recipeInfo.thumbRecipeCookingImage &&
      action.recipeInfo.tinyRecipeCookingImage
    ) {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield axios.post(
      `${endpoint}/user/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );
    
    if (res.data.message == 'Recipe created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPublicRecipeSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPublicRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPublicRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



export function* userEditPublicRecipeSaga(action) {
  try {
    // RADIO FOR KEEP CURRENT IMAGE / SET NEW IMAGE / USE DEFAULT IMAGE ?

    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.fullRecipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.urlFullSize;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    // 2
    if (
      action.recipeInfo.fullRecipeEquipmentImage &&
      action.recipeInfo.thumbRecipeEquipmentImage &&
      action.recipeInfo.tinyRecipeEquipmentImage
    ) {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeEquipmentImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.urlFullSize;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    // 3
    if (
      action.recipeInfo.fullRecipeIngredientsImage &&
      action.recipeInfo.thumbRecipeIngredientsImage &&
      action.recipeInfo.tinyRecipeIngredientsImage
    ) {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeIngredientsImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.urlFullSize;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    // 4
    if (
      action.recipeInfo.fullRecipeCookingImage &&
      action.recipeInfo.thumbRecipeCookingImage &&
      action.recipeInfo.tinyRecipeCookingImage
    ) {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.fullRecipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.recipeInfo.fullRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestThumbSize,
        action.recipeInfo.thumbRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.thumbRecipeCookingImage.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.recipeInfo.tinyRecipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.tinyRecipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.urlFullSize;
    } else {
      action.recipeInfo.recipeCookingImage = "nobsc-recipe-cooking-default";
    }

    const res = yield axios.put(
      `${endpoint}/user/recipe/update/public`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );
    
    if (res.data.message == 'Recipe updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPublicRecipeSucceeded(res.data.message));
    } else {
      yield put(userEditPublicRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPublicRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



export function* userDisownPublicRecipeSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/recipe/disown/public`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Recipe disowned.') {
      //yield put();  refresh/update respective list
      yield put(userDisownPublicRecipeSucceeded(res.data.message));
    } else {
      yield put(userDisownPublicRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDisownPublicRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

plan

*/

export function* userCreateNewPlanSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/plan/create`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Plan created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPlanSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPlanFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPlanSaga(action) {
  try {
    const res = yield axios.put(
      `${endpoint}/user/plan/update`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Plan updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPlanSucceeded(res.data.message));
    } else {
      yield put(userEditPlanFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePlanSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/plan/delete`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Plan deleted.') {
      //yield put();  refresh/update respective list
      yield put(userDeletePlanSucceeded(res.data.message));
    } else {
      yield put(userDeletePlanFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

favorite

*/

export function* userFavoriteRecipeSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/favorite-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Favorited.') {
      //yield put();  refresh/update respective list
      yield put(userFavoriteRecipeSucceeded(res.data.message));
    } else {
      yield put(userFavoriteRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userFavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnfavoriteRecipeSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/favorite-recipe/delete`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Unfavorited.') {
      //yield put();  refresh/update respective list
      yield put(userUnfavoriteRecipeSucceeded(res.data.message));
    } else {
      yield put(userUnfavoriteRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnfavoriteRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

save

*/

export function* userSaveRecipeSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/saved-recipe/create`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Saved.') {
      //yield put();  refresh/update respective list
      yield put(userSaveRecipeSucceeded(res.data.message));
    } else {
      yield put(userSaveRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userSaveRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnsaveRecipeSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/saved-recipe/delete`,
      {recipeId: action.recipeId},
      {withCredentials: true}
    );
    if (res.data.message == 'Unsaved.') {
      //yield put();  refresh/update respective list
      yield put(userUnsaveRecipeSucceeded(res.data.message));
    } else {
      yield put(userUnsaveRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnsaveRecipeFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

friendship

*/

export function* userRequestFriendshipSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/friendship/create`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request sent.') {
      //yield put();  refresh/update respective list
      yield put(userRequestFriendshipSucceeded(res.data.message));
    } else {
      yield put(userRequestFriendshipFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRequestFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userAcceptFriendshipSaga(action) {
  try {
    const res = yield axios.put(
      `${endpoint}/user/friendship/accept`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request accepted.') {
      //yield put();  refresh/update respective list
      yield put(userAcceptFriendshipSucceeded(res.data.message));
    } else {
      yield put(userAcceptFriendshipFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userAcceptFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userRejectFriendshipSaga(action) {
  try {
    const res = yield axios.put(
      `${endpoint}/user/friendship/reject`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'Friendship request rejected.') {
      //yield put();  refresh/update respective list
      yield put(userRejectFriendshipSucceeded(res.data.message));
    } else {
      yield put(userRejectFriendshipFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userRejectFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeleteFriendshipSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/friendship/delete`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'No longer friends. Maybe again later.') {
      //yield put();  refresh/update respective list
      yield put(userDeleteFriendshipSucceeded(res.data.message));
    } else {
      yield put(userDeleteFriendshipFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeleteFriendshipFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userBlockUserSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/friendship/block`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'User blocked.') {
      //yield put();  refresh/update respective list
      yield put(userBlockUserSucceeded(res.data.message));
    } else {
      yield put(userBlockUserFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userBlockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userUnblockUserSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/friendship/unblock`,
      {friendName: action.friendName},
      {withCredentials: true}
    );
    if (res.data.message == 'User unblocked.') {
      //yield put();  refresh/update respective list
      yield put(userUnblockUserSucceeded(res.data.message));
    } else {
      yield put(userUnblockUserFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userUnblockUserFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}



/*

avatar

*/

export function* userSubmitAvatarSaga(action) {
  try {
    let avatarUrl;
    if (action.fullAvatar && action.tinyAvatar) {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/avatar`,
        {fileType: action.fullAvatar.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.signedRequestFullSize,
        action.fullAvatar,
        {headers: {'Content-Type': action.fullAvatar.type}}
      );
      yield axios.put(
        res1.data.signedRequestTinySize,
        action.tinyAvatar,
        {headers: {'Content-Type': action.tinyAvatar.type}}
      );
      avatarUrl = res1.data.urlFullSize;
    } else {
      avatarUrl = "nobsc-user-default";
    }

    const res = yield axios.post(
      `${endpoint}/user/auth/set-avatar`,
      {avatar: avatarUrl},
      {withCredentials: true}
    );

    if (res.data.message == 'Avatar set.') {
      //yield put();  refresh/update respective list
      yield put(userSubmitAvatarSucceeded(res.data.message));
      yield delay(2000);
      yield put(userMessageClear());
      yield location.reload();
    } else {
      yield put(userSubmitAvatarFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch (err) {
    yield put(userSubmitAvatarFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}
