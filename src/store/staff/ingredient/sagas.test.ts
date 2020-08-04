import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewIngredientSucceeded,
  staffCreateNewIngredientFailed,
  staffEditIngredientSucceeded,
  staffEditIngredientFailed,
  staffDeleteIngredientSucceeded,
  staffDeleteIngredientFailed
} from './actions';
import {
  staffCreateNewIngredientSaga,
  staffEditIngredientSaga,
  staffDeleteIngredientSaga,
} from './sagas';
import {
  STAFF_CREATE_NEW_INGREDIENT,
  STAFF_EDIT_INGREDIENT,
  STAFF_DELETE_INGREDIENT
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

describe('staffCreateNewIngredientSaga', () => {
  const action = {
    type: STAFF_CREATE_NEW_INGREDIENT,
    ingredientInfo: creatingIngredientInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };
  const {
    ingredientTypeId,
    ingredientName,
    ingredientDescription,
    ingredientFullImage,
    ingredientTinyImage
  } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewIngredientSaga(action);
    const res = {data: {message: 'Ingredient created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/ingredient`,
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
      `${endpoint}/staff/ingredient/create`,
      {
        ingredientInfo: {
          ingredientTypeId,
          ingredientName,
          ingredientDescription,
          ingredientImage: "ingredientUrlString"
        }
      },
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffCreateNewIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffCreateNewIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffCreateNewIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffEditIngredientSaga', () => {
  const action = {
    type: STAFF_EDIT_INGREDIENT,
    ingredientInfo: editingIngredientInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };
  const {
    ingredientId,
    ingredientTypeId,
    ingredientName,
    ingredientDescription,
    ingredientPrevImage,
    ingredientFullImage,
    ingredientTinyImage
  } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffEditIngredientSaga(action);
    const res = {data: {message: 'Ingredient updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/ingredient`,
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
      `${endpoint}/staff/ingredient/update`,
      {
        ingredientInfo: {
          ingredientId,
          ingredientTypeId,
          ingredientName,
          ingredientDescription,
          ingredientPrevImage,
          ingredientImage: "ingredientUrlString"
        }
      },
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffEditIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffEditIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffEditIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffEditIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffEditIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffDeleteIngredientSaga', () => {
  const action = {type: STAFF_DELETE_INGREDIENT, ingredientId: 4};

  it('should dispatch succeeded', () => {
    const iterator = staffDeleteIngredientSaga(action);
    const res = {data: {message: 'Ingredient deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/staff/ingredient/delete`,
      {withCredentials: true, data: {ingredientId: action.ingredientId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteIngredientSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffDeleteIngredientSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteIngredientFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffDeleteIngredientSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(staffDeleteIngredientFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});