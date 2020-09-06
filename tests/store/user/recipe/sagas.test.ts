import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../../../../src/store/user/actions';
import {
  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,
  //userCreateNewPublicRecipeSucceeded,  // TO DO: write tests
  //userCreateNewPublicRecipeFailed,  // TO DO: write tests
  //userEditPublicRecipeSucceeded,  // TO DO: write tests
  //userEditPublicRecipeFailed,  // TO DO: write tests
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed
} from '../../../../src/store/user/recipe/actions';
import {
  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga
} from '../../../../src/store/user/recipe/sagas';
import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_EDIT_PRIVATE_RECIPE
} from '../../../../src/store/user/recipe/types';

const endpoint = NOBSCBackendAPIEndpointOne;

const recipeFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const recipeThumbImage =
  new File([(new Blob)], "resizedThumb", {type: "image/jpeg"});
const recipeTinyImage =
  new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});
const equipmentFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const ingredientsFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const cookingFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});

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
  recipeFullImage,
  recipeThumbImage,
  recipeTinyImage,
  equipmentImage: null,
  equipmentFullImage,
  ingredientsImage: null,
  ingredientsFullImage,
  cookingImage: null,
  cookingFullImage
};

const editingRecipeInfo = {
  id: 888,
  recipePrevImage: "nobsc-recipe-default",
  equipmentPrevImage: "nobsc-recipe-equipment-default",
  ingredientsPrevImage: "nobsc-recipe-ingredients-default",
  cookingPrevImage: "nobsc-recipe-cooking-default",
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
  recipeFullImage,
  recipeThumbImage,
  recipeTinyImage,
  equipmentImage: null,
  equipmentFullImage,
  ingredientsImage: null,
  ingredientsFullImage,
  cookingImage: null,
  cookingFullImage
};

describe('userCreateNewRecipeSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_RECIPE,
    recipeInfo: creatingRecipeInfo
  };

  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      thumbSignature: "signedUrlString-thumb",
      tinySignature: "signedUrlString-tiny",
      fullName: "recipeUrlString"
    }
  };
  const res2 = res1;
  const res3 = res1;
  const res4 = res1;

  const {
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
    recipeFullImage,
    recipeThumbImage,
    recipeTinyImage,
    equipmentFullImage,
    ingredientsFullImage,
    cookingFullImage
  } = action.recipeInfo;

  it('should dispatch succeeded', () => {
    const iterator = userCreateNewRecipeSaga(action);
    const res = {data: {message: 'Recipe created.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe`,
      {fileType: recipeFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      recipeFullImage,
      {headers: {'Content-Type': recipeFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.thumbSignature,
      recipeThumbImage,
      {headers: {'Content-Type': recipeThumbImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.tinySignature,
      recipeTinyImage,
      {headers: {'Content-Type': recipeTinyImage.type}}
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
      {fileType: equipmentFullImage.type},
      {withCredentials: true}
    )));

    expect(iterator.next(res2).value)
    .toEqual(call(
      [axios, axios.put],
      res2.data.fullSignature,
      equipmentFullImage,
      {headers: {'Content-Type': equipmentFullImage.type}}
    ));

    // 3

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe-ingredients`,
      {fileType: ingredientsFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res3).value)
    .toEqual(call(
      [axios, axios.put],
      res3.data.fullSignature,
      ingredientsFullImage,
      {headers: {'Content-Type': ingredientsFullImage.type}}
    ));

    // 4

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe-cooking`,
      {fileType: cookingFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res4).value)
    .toEqual(call(
      [axios, axios.put],
      res4.data.fullSignature,
      cookingFullImage,
      {headers: {'Content-Type': cookingFullImage.type}}
    ));

    //

    expect(iterator.next().value)
    .toEqual(call(
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
          recipeImage: "recipeUrlString",
          equipmentImage: "recipeUrlString",
          ingredientsImage: "recipeUrlString",
          cookingImage: "recipeUrlString"
        }
      },
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
    .toEqual(put(userCreateNewPrivateRecipeFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeletePrivateRecipeSaga', () => {
  const action = {type: USER_DELETE_PRIVATE_RECIPE, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateRecipeSaga(action);
    const res = {data: {message: 'Recipe deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/delete/private`,
      {withCredentials: true, data: {id: action.id}}
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
    .toEqual(put(userDeletePrivateRecipeFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDisownPublicRecipeSaga', () => {
  const action = {type: USER_DISOWN_PUBLIC_RECIPE, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDisownPublicRecipeSaga(action);
    const res = {data: {message: 'Recipe disowned.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/recipe/disown/public`,
      {withCredentials: true, data: {id: action.id}}
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
    .toEqual(put(userDisownPublicRecipeFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userEditRecipeSaga', () => {
  const action = {
    type: USER_EDIT_PRIVATE_RECIPE,
    recipeInfo: editingRecipeInfo
  };
  
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      thumbSignature: "signedUrlString-thumb",
      tinySignature: "signedUrlString-tiny",
      fullName: "recipeUrlString"
    }
  };
  const res2 = res1;
  const res3 = res1;
  const res4 = res1;

  const {
    id,
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
    recipeFullImage,
    recipePrevImage,
    recipeThumbImage,
    recipeTinyImage,
    equipmentFullImage,
    equipmentPrevImage,
    ingredientsFullImage,
    ingredientsPrevImage,
    cookingFullImage,
    cookingPrevImage
  } = action.recipeInfo;

  it('should dispatch succeeded', () => {
    const iterator = userEditRecipeSaga(action);
    const res = {data: {message: 'Recipe updated.'}};

    // 1

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe`,
      {fileType: recipeFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      recipeFullImage,
      {headers: {'Content-Type': recipeFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.thumbSignature,
      recipeThumbImage,
      {headers: {'Content-Type': recipeThumbImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.tinySignature,
      recipeTinyImage,
      {headers: {'Content-Type': recipeTinyImage.type}}
    ));

    // 2

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe-equipment`,
      {fileType: equipmentFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res2).value)
    .toEqual(call(
      [axios, axios.put],
      res2.data.fullSignature,
      equipmentFullImage,
      {headers: {'Content-Type': equipmentFullImage.type}}
    ));

    // 3

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe-ingredients`,
      {fileType: ingredientsFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res3).value)
    .toEqual(call(
      [axios, axios.put],
      res3.data.fullSignature,
      ingredientsFullImage,
      {headers: {'Content-Type': ingredientsFullImage.type}}
    ));

    // 4

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/recipe-cooking`,
      {fileType: cookingFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res4).value)
    .toEqual(call(
      [axios, axios.put],
      res4.data.fullSignature,
      cookingFullImage,
      {headers: {'Content-Type': cookingFullImage.type}}
    ));

    //

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/recipe/update`,
      {
        recipeInfo: {
          id,
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
          recipeImage: "recipeUrlString",
          recipePrevImage,
          equipmentImage: "recipeUrlString",
          equipmentPrevImage,
          ingredientsImage: "recipeUrlString",
          ingredientsPrevImage,
          cookingImage: "recipeUrlString",
          cookingPrevImage
        }
      },
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
    .toEqual(put(userEditPrivateRecipeFailed(
      'An error occurred. Please try again.'
    )));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});