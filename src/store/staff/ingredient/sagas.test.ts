import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

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
//const mock = new MockAdapter(axios, {delayResponse: 100});
const fullIngredientImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyIngredientImage = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

describe('the staffCreateNewIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateIngredientSaga, action)
    .silentRun(50);
  });*/

  const action = {
    type: STAFF_CREATE_NEW_INGREDIENT,
    ingredientInfo: {
      ingredientTypeId: 3,
      ingredientName: "HOT Sauce",
      ingredientDescription: "From Uncle Bob.",
      ingredientImage: "hot-sauce",
      fullIngredientImage,
      tinyIngredientImage
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewIngredientSaga(action);
    const res = {data: {message: 'Ingredient created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/ingredient`,
      {fileType: action.ingredientInfo.fullIngredientImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.ingredientInfo.fullIngredientImage,
      {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.ingredientInfo.tinyIngredientImage,
      {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/ingredient/create`,
      {ingredientInfo: action.ingredientInfo},
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
    .toEqual(put(
      staffCreateNewIngredientFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('the staffEditIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateIngredientSaga, action)
    .silentRun(50);
  });*/

  const action = {
    type: STAFF_EDIT_INGREDIENT,
    ingredientInfo: {
      ingredientTypeId: 3,
      ingredientName: "HOT Sauce",
      ingredientDescription: "From Uncle Bob.",
      ingredientImage: "hot-sauce",
      fullIngredientImage,
      tinyIngredientImage,
      ingredientId: 377,
      prevIngredientImage: "hot-sauce"
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "ingredientUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = staffEditIngredientSaga(action);
    const res = {data: {message: 'Ingredient updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/ingredient`,
      {fileType: action.ingredientInfo.fullIngredientImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.ingredientInfo.fullIngredientImage,
      {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.ingredientInfo.tinyIngredientImage,
      {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/staff/ingredient/update`,
      {ingredientInfo: action.ingredientInfo},
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
    .toEqual(put(
      staffEditIngredientFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('the staffDeleteIngredientSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateIngredientSaga, action)
    .silentRun(50);
  });*/

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
    .toEqual(put(
      staffDeleteIngredientFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});