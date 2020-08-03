import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from './actions';
import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga,
} from './sagas';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

const ingredientFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const ingredientTinyImage =
  new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

const creatingIngredientInfo = {
  ingredientTypeId: 3,
  ingredientName: "HOT Sauce",
  ingredientDescription: "From Uncle Bob.",
  ingredientImage: "hot-sauce",
  ingredientFullImage,
  ingredientTinyImage
};

const editingIngredientInfo = {
  ingredientTypeId: 3,
  ingredientName: "HOT Sauce",
  ingredientDescription: "From Uncle Bob.",
  ingredientImage: "hot-sauce",
  ingredientFullImage,
  ingredientTinyImage,
  ingredientId: 377,
  ingredientPrevImage: "hot-sauce"
};

describe('userCreateNewPrivateIngredientSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_INGREDIENT,
    ingredientInfo: creatingIngredientInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };
  const { ingredientFullImage, ingredientTinyImage } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = userCreateNewPrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/ingredient`,
      {fileType: ingredientFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      ingredientFullImage,
      {headers: {'Content-Type': ingredientFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      ingredientTinyImage,
      {headers: {'Content-Type': ingredientTinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/ingredient/create`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userCreateNewPrivateIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userCreateNewPrivateIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userCreateNewPrivateIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userEditPrivateIngredientSaga', () => {
  const action = {
    type: USER_EDIT_PRIVATE_INGREDIENT,
    ingredientInfo: editingIngredientInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };
  const { ingredientFullImage, ingredientTinyImage } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = userEditPrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/ingredient`,
      {fileType: ingredientFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      ingredientFullImage,
      {headers: {'Content-Type': ingredientFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      ingredientTinyImage,
      {headers: {'Content-Type': ingredientTinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/ingredient/update`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userEditPrivateIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userEditPrivateIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userEditPrivateIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userEditPrivateIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userEditPrivateIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeletePrivateIngredientSaga', () => {
  const action = {type: USER_DELETE_PRIVATE_INGREDIENT, ingredientId: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/ingredient/delete`,
      {withCredentials: true, data: {ingredientId: action.ingredientId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userDeletePrivateIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userDeletePrivateIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(userDeletePrivateIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});