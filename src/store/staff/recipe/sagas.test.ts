import axios from 'axios';
import { call, put, delay } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewRecipeSucceeded,
  staffCreateNewRecipeFailed,
  staffDeleteRecipeSucceeded,
  staffDeleteRecipeFailed,
  staffEditRecipeSucceeded,
  staffEditRecipeFailed
} from './actions';
import {
  staffCreateNewRecipeSaga,
  staffDeleteRecipeSaga,
  staffEditRecipeSaga
} from './sagas';
import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_DELETE_RECIPE,
  STAFF_EDIT_RECIPE
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
const fullRecipeImage = new File(
  [(new Blob)], "resizedFinal", {type: "image/jpeg"}
);
const thumbRecipeImage = new File(
  [(new Blob)], "resizedThumb", {type: "image/jpeg"}
);
const tinyRecipeImage = new File(
  [(new Blob)], "resizedTiny", {type: "image/jpeg"}
);
const fullRecipeEquipmentImage = new File(
  [(new Blob)], "resizedFinal", {type: "image/jpeg"}
);
const fullRecipeIngredientsImage = new File(
  [(new Blob)], "resizedFinal", {type: "image/jpeg"}
);
const fullRecipeCookingImage = new File(
  [(new Blob)], "resizedFinal", {type: "image/jpeg"}
);
const creatingRecipeInfo = {
  ownership: "private",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "My Secret Recipe",
  description: "Don't worry about it.",
  directions: "Do nothing.",
  requiredMethods: [{methodId: 1}, {methodId: 3}],
  requiredEquipment: [{amount: 1, equipment: 1}],
  requiredIngredients: [{amount: 1, unit: 1, ingredient: 1}],
  requiredSubrecipes: [],
  recipeImage: null,
  fullRecipeImage,
  thumbRecipeImage,
  tinyRecipeImage,
  recipeEquipmentImage: null,
  fullRecipeEquipmentImage,
  recipeIngredientsImage: null,
  fullRecipeIngredientsImage,
  recipeCookingImage: null,
  fullRecipeCookingImage
};
const editingRecipeInfo = {
  recipeId: 888,
  prevRecipeImage: "nobsc-recipe-default",
  prevEquipmentImage: "nobsc-recipe-equipment-default",
  prevIngredientsImage: "nobsc-recipe-ingredients-default",
  prevCookingImage: "nobsc-recipe-cooking-default",
  ownership: "private",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "My Secret Recipe",
  description: "Don't worry about it.",
  directions: "Do nothing.",
  requiredMethods: [{methodId: 1}, {methodId: 3}],
  requiredEquipment: [{amount: 1, equipment: 1}],
  requiredIngredients: [{amount: 1, unit: 1, ingredient: 1}],
  requiredSubrecipes: [],
  recipeImage: null,
  fullRecipeImage,
  thumbRecipeImage,
  tinyRecipeImage,
  recipeEquipmentImage: null,
  fullRecipeEquipmentImage,
  recipeIngredientsImage: null,
  fullRecipeIngredientsImage,
  recipeCookingImage: null,
  fullRecipeCookingImage
};

describe('staffCreateNewRecipeSaga', () => {
  const action = {
    type: STAFF_CREATE_NEW_RECIPE,
    recipeInfo: creatingRecipeInfo
  };

  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestThumbSize: "signedUrlString-thumb",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "recipeUrlString"
    }
  };
  const res2 = res1;
  const res3 = res1;
  const res4 = res1;

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewRecipeSaga(action);
    const res = {data: {message: 'Recipe created.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe`,
      {fileType: action.recipeInfo.fullRecipeImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestThumbSize,
      action.recipeInfo.thumbRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.recipeInfo.tinyRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
    ));

    // 2

    /*
      We're using JSON.stringify() here because Jest kept bugging out.
      See https://github.com/facebook/jest/issues/8475 for more info.
      Why it was only doing this here, only the gods know.
    */
    expect(JSON.stringify(iterator.next().value))
    .toEqual(JSON.stringify(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-equipment`,
      {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
      {withCredentials: true}
    )));

    expect(iterator.next(res2).value)
    .toEqual(call(
      [axios, axios.put],
      res2.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeEquipmentImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
    ));

    // 3

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-ingredients`,
      {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res3).value)
    .toEqual(call(
      [axios, axios.put],
      res3.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeIngredientsImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
    ));

    // 4

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-cooking`,
      {fileType: action.recipeInfo.fullRecipeCookingImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res4).value)
    .toEqual(call(
      [axios, axios.put],
      res4.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeCookingImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
    ));

    //

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffCreateNewRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next(res1);

    iterator.next();
    iterator.next(res2);

    iterator.next();
    iterator.next(res3);

    iterator.next();
    iterator.next(res4);

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffCreateNewRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffCreateNewRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffDeleteRecipeSaga', () => {
  const action = {type: STAFF_DELETE_RECIPE, recipeId: 4};

  it('should dispatch succeeded', () => {
    const iterator = staffDeleteRecipeSaga(action);
    const res = {data: {message: 'Recipe disowned.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/staff/recipe/delete`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffDeleteRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffDeleteRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffDeleteRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('the staffEditRecipeSaga', () => {
  const action = {
    type: STAFF_EDIT_RECIPE,
    recipeInfo: editingRecipeInfo
  };
  
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestThumbSize: "signedUrlString-thumb",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "recipeUrlString"
    }
  };
  const res2 = res1;
  const res3 = res1;
  const res4 = res1;

  it('should dispatch succeeded', () => {
    const iterator = staffEditRecipeSaga(action);
    const res = {data: {message: 'Recipe updated.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe`,
      {fileType: action.recipeInfo.fullRecipeImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestThumbSize,
      action.recipeInfo.thumbRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.thumbRecipeImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.recipeInfo.tinyRecipeImage,
      {headers: {'Content-Type': action.recipeInfo.tinyRecipeImage.type}}
    ));

    // 2

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-equipment`,
      {fileType: action.recipeInfo.fullRecipeEquipmentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res2).value)
    .toEqual(call(
      [axios, axios.put],
      res2.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeEquipmentImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeEquipmentImage.type}}
    ));

    // 3

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-ingredients`,
      {fileType: action.recipeInfo.fullRecipeIngredientsImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res3).value)
    .toEqual(call(
      [axios, axios.put],
      res3.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeIngredientsImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeIngredientsImage.type}}
    ));

    // 4

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/recipe-cooking`,
      {fileType: action.recipeInfo.fullRecipeCookingImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res4).value)
    .toEqual(call(
      [axios, axios.put],
      res4.data.signedRequestFullSize,
      action.recipeInfo.fullRecipeCookingImage,
      {headers: {'Content-Type': action.recipeInfo.fullRecipeCookingImage.type}}
    ));

    //

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/staff/recipe/update`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffEditRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffEditRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next(res1);

    iterator.next();
    iterator.next(res2);

    iterator.next();
    iterator.next(res3);

    iterator.next();
    iterator.next(res4);

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffEditRecipeFailed(res.data.message)));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffEditRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffEditRecipeFailed('An error occurred. Please try again.')
    ));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});