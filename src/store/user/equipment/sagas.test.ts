import axios from 'axios';
import { call, put, delay } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed
} from './actions';
import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from './sagas';
import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
const fullEquipmentImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyEquipmentImage = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

describe('userCreateNewPrivateEquipmentSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_EQUIPMENT,
    equipmentInfo: {
      equipmentTypeId: 3,
      equipmentName: "My Teapot",
      equipmentDescription: "From grandmother.",
      equipmentImage: "my-teapot",
      fullEquipmentImage,
      tinyEquipmentImage
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "equipmentUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = userCreateNewPrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/equipment`,
      {fileType: action.equipmentInfo.fullEquipmentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.equipmentInfo.fullEquipmentImage,
      {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.equipmentInfo.tinyEquipmentImage,
      {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userCreateNewPrivateEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userCreateNewPrivateEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userCreateNewPrivateEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userEditPrivateEquipmentSaga', () => {
  const action = {
    type: USER_EDIT_PRIVATE_EQUIPMENT,
    equipmentInfo: {
      equipmentTypeId: 3,
      equipmentName: "My Teapot",
      equipmentDescription: "From grandmother.",
      equipmentImage: "my-teapot",
      fullEquipmentImage,
      tinyEquipmentImage,
      equipmentId: 377,
      prevEquipmentImage: "my-teapot"
    }
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "equipmentUrlString"
    }
  };

  it('should dispatch succeeded', () => {
    const iterator = userEditPrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/equipment`,
      {fileType: action.equipmentInfo.fullEquipmentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.equipmentInfo.fullEquipmentImage,
      {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      action.equipmentInfo.tinyEquipmentImage,
      {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userEditPrivateEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userEditPrivateEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userEditPrivateEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userEditPrivateEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userEditPrivateEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeletePrivateEquipmentSaga', () => {
  const action = {type: USER_DELETE_PRIVATE_EQUIPMENT, equipmentId: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/equipment/delete`,
      {withCredentials: true, data: {equipmentId: action.equipmentId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = userDeletePrivateEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePrivateEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = userDeletePrivateEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      userDeletePrivateEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});