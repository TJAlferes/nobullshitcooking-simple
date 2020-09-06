import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../../../../src/store/user/actions';
import {
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from '../../../../src/store/user/ingredient/actions';
import {
  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga,
} from '../../../../src/store/user/ingredient/sagas';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT
} from '../../../../src/store/user/ingredient/types';

const endpoint = NOBSCBackendAPIEndpointOne;

const fullImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyImage = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

const creatingIngredientInfo = {
  ingredientTypeId: 3,
  name: "HOT Sauce",
  description: "From Uncle Bob.",
  image: "hot-sauce",
  fullImage,
  tinyImage
};

const editingIngredientInfo = {
  ingredientTypeId: 3,
  name: "HOT Sauce",
  description: "From Uncle Bob.",
  image: "hot-sauce",
  fullImage,
  tinyImage,
  id: 377,
  prevImage: "hot-sauce"
};

describe('userCreateNewPrivateIngredientSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_INGREDIENT,
    ingredientInfo: creatingIngredientInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-tiny",
      fullName: "ingredientUrlString"
    }
  };
  const {
    ingredientTypeId,
    name,
    description,
    fullImage,
    tinyImage
  } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = userCreateNewPrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/ingredient`,
      {fileType: fullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      fullImage,
      {headers: {'Content-Type': fullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.tinySignature,
      tinyImage,
      {headers: {'Content-Type': tinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/ingredient/create`,
      {
        ingredientInfo: {
          ingredientTypeId,
          name,
          description,
          image: "ingredientUrlString"
        }
      },
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
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-tiny",
      fullName: "ingredientUrlString"
    }
  };
  const {
    id,
    ingredientTypeId,
    name,
    description,
    prevImage,
    fullImage,
    tinyImage
  } = action.ingredientInfo;

  it('should dispatch succeeded', () => {
    const iterator = userEditPrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/ingredient`,
      {fileType: fullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.fullSignature,
      fullImage,
      {headers: {'Content-Type': fullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.tinySignature,
      tinyImage,
      {headers: {'Content-Type': tinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/ingredient/update`,
      {
        ingredientInfo: {
          id,
          ingredientTypeId,
          name,
          description,
          prevImage,
          image: "ingredientUrlString"
        }
      },
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
  const action = {type: USER_DELETE_PRIVATE_INGREDIENT, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateIngredientSaga(action);
    const res = {data: {message: 'Ingredient deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/ingredient/delete`,
      {withCredentials: true, data: {id: action.id}}
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