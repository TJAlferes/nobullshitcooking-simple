import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

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
  //userCreateNewPublicRecipeSucceeded,
  //userCreateNewPublicRecipeFailed,
  //userEditPublicRecipeSucceeded,
  //userEditPublicRecipeFailed,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed
} from './actions';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from './sagas';
import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_EDIT_PRIVATE_RECIPE
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
//const mock = new MockAdapter(axios, {delayResponse: 100});
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

describe('the userCreateNewRecipeSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_RECIPE,
    recipeInfo: creatingRecipeInfo
  };
  /*it('works', () => {
    const action = {ownership: "public"};
    return expectSaga(userCreateNewRecipeSaga, action)
    .silentRun(50);
  });*/

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
    const iterator = userCreateNewRecipeSaga(action);
    const res = {data: {message: 'Recipe created.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe`,
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
      `${endpoint}/user/get-signed-url/recipe-equipment`,
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
      `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
      `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/create`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userCreateNewRecipeSaga(action);
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
    .toEqual(put(userCreateNewPrivateRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userCreateNewRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userCreateNewPrivateRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userDeletePrivateRecipeSaga', () => {
  const action = {type: USER_DELETE_PRIVATE_RECIPE,recipeId: 4};
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateRecipeSaga, action)
    .silentRun(50);
  });*/

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateRecipeSaga(action);
    const res = {data: {message: 'Recipe deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/delete/private`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userDeletePrivateRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userDeletePrivateRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userDeletePrivateRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userDisownPublicRecipeSaga', () => {
  const action = {type: USER_DISOWN_PUBLIC_RECIPE, recipeId: 4};
  /*it('works', () => {
    const action = {};
    return expectSaga(userDisownPublicRecipeSaga, action)
    .silentRun(50);
  });*/

  it('should dispatch succeeded', () => {
    const iterator = userDisownPublicRecipeSaga(action);
    const res = {data: {message: 'Recipe disowned.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/disown/public`,
      {withCredentials: true, data: {recipeId: action.recipeId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDisownPublicRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userDisownPublicRecipeSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDisownPublicRecipeFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userDisownPublicRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userDisownPublicRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userEditRecipeSaga', () => {
  const action = {
    type: USER_EDIT_PRIVATE_RECIPE,
    recipeInfo: editingRecipeInfo
  };
  /*it('works', () => {
    const action = {ownership: "public"};
    return expectSaga(userEditRecipeSaga, action)
    .silentRun(50);
  });*/
  
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
    const iterator = userEditRecipeSaga(action);
    const res = {data: {message: 'Recipe updated.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe`,
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
      `${endpoint}/user/get-signed-url/recipe-equipment`,
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
      `${endpoint}/user/get-signed-url/recipe-ingredients`,
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
      `${endpoint}/user/get-signed-url/recipe-cooking`,
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
      `${endpoint}/user/recipe/update`,
      {recipeInfo: action.recipeInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userEditPrivateRecipeSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userEditRecipeSaga(action);
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
    .toEqual(put(userEditPrivateRecipeFailed(res.data.message)));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userEditRecipeSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userEditPrivateRecipeFailed(
        'An error occurred. Please try again.'
      )
    ));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});