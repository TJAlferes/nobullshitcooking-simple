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
    if (action.equipmentInfo.equipmentImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.equipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.equipmentInfo.equipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.equipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.url;
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
    if (action.equipmentInfo.equipmentImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.equipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.equipmentInfo.equipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.equipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.url;
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
    if (action.ingredientInfo.ingredientImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.ingredientImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.ingredientInfo.ingredientImage,
        {headers: {'Content-Type': action.ingredientInfo.ingredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.url;
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
    if (action.ingredientInfo.ingredientImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.ingredientImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.ingredientInfo.ingredientImage,
        {headers: {'Content-Type': action.ingredientInfo.ingredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.url;
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
    if (action.recipeInfo.recipeImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.recipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeImage,
        {headers: {'Content-Type': action.recipeInfo.recipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.url;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    if (action.recipeInfo.recipeEquipmentImage !== "") {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.recipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.recipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.url;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    if (action.recipeInfo.recipeIngredientsImage !== "") {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.recipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.recipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.url;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    if (action.recipeInfo.recipeCookingImage !== "") {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.recipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.recipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.url;
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
    if (action.recipeInfo.recipeImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.recipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeImage,
        {headers: {'Content-Type': action.recipeInfo.recipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.url;
    }

    if (action.recipeInfo.recipeEquipmentImage !== "") {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.recipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.recipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.url;
    }

    if (action.recipeInfo.recipeIngredientsImage !== "") {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.recipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.recipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.url;
    }

    if (action.recipeInfo.recipeCookingImage !== "") {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.recipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.recipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.url;
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
    const res = yield axios.delete(
      `${endpoint}/user/recipe/delete/private`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
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
    if (action.recipeInfo.recipeImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.recipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeImage,
        {headers: {'Content-Type': action.recipeInfo.recipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.url;
    } else {
      action.recipeInfo.recipeImage = "nobsc-recipe-default";
    }

    if (action.recipeInfo.recipeEquipmentImage !== "") {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.recipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.recipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.url;
    } else {
      action.recipeInfo.recipeEquipmentImage = "nobsc-recipe-equipment-default";
    }

    if (action.recipeInfo.recipeIngredientsImage !== "") {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.recipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.recipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.url;
    } else {
      action.recipeInfo.recipeIngredientsImage = "nobsc-recipe-ingredients-default";
    }

    if (action.recipeInfo.recipeCookingImage !== "") {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.recipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.recipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.url;
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
    if (action.recipeInfo.recipeImage !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe`,
        {fileType: action.recipeInfo.recipeImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeImage,
        {headers: {'Content-Type': action.recipeInfo.recipeImage.type}}
      );
      action.recipeInfo.recipeImage = res1.data.url;
    }

    if (action.recipeInfo.recipeEquipmentImage !== "") {
      const res2 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-equipment`,
        {fileType: action.recipeInfo.recipeEquipmentImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeEquipmentImage,
        {headers: {'Content-Type': action.recipeInfo.recipeEquipmentImage.type}}
      );
      action.recipeInfo.recipeEquipmentImage = res2.data.url;
    }

    if (action.recipeInfo.recipeIngredientsImage !== "") {
      const res3 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-ingredients`,
        {fileType: action.recipeInfo.recipeIngredientsImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeIngredientsImage,
        {headers: {'Content-Type': action.recipeInfo.recipeIngredientsImage.type}}
      );
      action.recipeInfo.recipeIngredientsImage = res3.data.url;
    }

    if (action.recipeInfo.recipeCookingImage !== "") {
      const res4 = yield axios.post(
        `${endpoint}/user/get-signed-url/recipe-cooking`,
        {fileType: action.recipeInfo.recipeCookingImage.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.recipeInfo.recipeCookingImage,
        {headers: {'Content-Type': action.recipeInfo.recipeCookingImage.type}}
      );
      action.recipeInfo.recipeCookingImage = res4.data.url;
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

export function userSubmitAvatarSaga(action) {
  try {
    if (action.avatar !== "") {
      const res1 = yield axios.post(
        `${endpoint}/user/get-signed-url/avatar`,
        {fileType: action.avatar.type},
        {withCredentials: true}
      );
      yield axios.put(
        res1.data.url,
        action.avatar,
        {headers: {'Content-Type': action.avatar.type}}
      );
      action.avatar = res1.data.url;
    } else {
      action.avatar = "nobsc-user-default";
    }

    const res = yield axios.post(
      `${endpoint}/user/auth/set-avatar`,
      {avatar: action.avatar},
      {withCredentials: true}
    );

    if (res.data.message == 'Avatar set.') {
      //yield put();  refresh/update respective list
      yield put(userSubmitAvatarSucceeded(res.data.message));
    } else {
      yield put(userSubmitAvatarFailed(res.data.message));
    }

    yield delay(4000);
    yield put(userMessageClear());
  } catch (err) {
    yield put(userSubmitAvatarFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}
