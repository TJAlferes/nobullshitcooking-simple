import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { userMessageClear } from '../actions';
import {
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
  userDisownPublicRecipeFailed
} from './actions';
import {
  IUserCreateNewPrivateRecipe,
  IUserEditPrivateRecipe,
  IUserDeletePrivateRecipe,
  IUserCreateNewPublicRecipe,
  IUserEditPublicRecipe,
  IUserDisownPublicRecipe
} from './types';
import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewRecipeSaga(
  action: (IUserCreateNewPrivateRecipe|IUserCreateNewPublicRecipe)
) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/recipe`,
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
        `${endpoint}/user/get-signed-url/recipe-equipment`,
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
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
        `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe created.') {
      if (action.recipeInfo.ownership === "private") {
        yield put(userCreateNewPrivateRecipeSucceeded(res.data.message));
      } else {
        yield put(userCreateNewPublicRecipeSucceeded(res.data.message));
      }
    } else {
      if (action.recipeInfo.ownership === "private") {
        yield put(userCreateNewPrivateRecipeFailed(res.data.message));
      } else {
        yield put(userCreateNewPublicRecipeFailed(res.data.message));
      }
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    if (action.recipeInfo.ownership === "private") {
      yield put(userCreateNewPrivateRecipeFailed(
        'An error occurred. Please try again.'
      ));
    } else {
      yield put(userCreateNewPublicRecipeFailed(
        'An error occurred. Please try again.'
      ));
    }
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateRecipeSaga(action: IUserDeletePrivateRecipe) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/delete/private`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    if (res.data.message == 'Recipe deleted.') {
      yield put(userDeletePrivateRecipeSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateRecipeFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDisownPublicRecipeSaga(action: IUserDisownPublicRecipe) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/disown/public`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    );
    if (res.data.message == 'Recipe disowned.') {
      yield put(userDisownPublicRecipeSucceeded(res.data.message));
    } else {
      yield put(userDisownPublicRecipeFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDisownPublicRecipeFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditRecipeSaga(
  action: (IUserEditPrivateRecipe|IUserEditPublicRecipe)
) {
  try {
    // 1
    if (
      action.recipeInfo.fullRecipeImage &&
      action.recipeInfo.thumbRecipeImage &&
      action.recipeInfo.tinyRecipeImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/recipe`,
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
        `${endpoint}/user/get-signed-url/recipe-equipment`,
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
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
        `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/update`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Recipe updated.') {
      if (action.recipeInfo.ownership === "private") { 
        yield put(userEditPrivateRecipeSucceeded(res.data.message));
      } else {
        yield put(userEditPublicRecipeSucceeded(res.data.message));
      }
    } else {
      if (action.recipeInfo.ownership === "private") { 
        yield put(userEditPrivateRecipeFailed(res.data.message));
      } else {
        yield put(userEditPublicRecipeFailed(res.data.message));
      }
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    if (action.recipeInfo.ownership === "private") { 
      yield put(userEditPrivateRecipeFailed(
        'An error occurred. Please try again.'
      ));
    } else {
      yield put(userEditPublicRecipeFailed(
        'An error occurred. Please try again.'
      ));
    }
    yield delay(4000);
    yield put(userMessageClear());
  }
}