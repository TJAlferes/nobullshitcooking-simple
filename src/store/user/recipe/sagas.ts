import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
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

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewRecipeSaga(
  action: (IUserCreateNewPrivateRecipe | IUserCreateNewPublicRecipe)
) {
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
        `${endpoint}/user/get-signed-url/recipe`,
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
        `${endpoint}/user/get-signed-url/recipe-equipment`,
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
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
        `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/create`,
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
          equipmentImage,
          ingredientsImage,
          cookingImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Recipe created.') {
      if (ownership === "private") {
        yield put(userCreateNewPrivateRecipeSucceeded(message));
      } else {
        yield put(userCreateNewPublicRecipeSucceeded(message));
      }
    } else {
      if (ownership === "private") {
        yield put(userCreateNewPrivateRecipeFailed(message));
      } else {
        yield put(userCreateNewPublicRecipeFailed(message));
      }
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    if (ownership === "private") {
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
    const { message } = res.data;
    if (message == 'Recipe deleted.') {
      yield put(userDeletePrivateRecipeSucceeded(message));
    } else {
      yield put(userDeletePrivateRecipeFailed(message));
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
    const { message } = res.data;
    if (message == 'Recipe disowned.') {
      yield put(userDisownPublicRecipeSucceeded(message));
    } else {
      yield put(userDisownPublicRecipeFailed(message));
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
  action: (IUserEditPrivateRecipe | IUserEditPublicRecipe)
) {
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
    if (recipeFullImage && recipeThumbImage && recipeTinyImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/recipe`,
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
        `${endpoint}/user/get-signed-url/recipe-equipment`,
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
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
        `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/update`,
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
          recipePrevImage,
          equipmentImage,
          equipmentPrevImage,
          ingredientsImage,
          ingredientsPrevImage,
          cookingImage,
          cookingPrevImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Recipe updated.') {
      if (ownership === "private") { 
        yield put(userEditPrivateRecipeSucceeded(message));
      } else {
        yield put(userEditPublicRecipeSucceeded(message));
      }
    } else {
      if (ownership === "private") { 
        yield put(userEditPrivateRecipeFailed(message));
      } else {
        yield put(userEditPublicRecipeFailed(message));
      }
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    if (ownership === "private") { 
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