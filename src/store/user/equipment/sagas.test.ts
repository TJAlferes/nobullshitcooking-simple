import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

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

const fullImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyImage = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

const creatingEquipmentInfo = {
  equipmentTypeId: 3,
  name: "My Teapot",
  description: "From grandmother.",
  image: "my-teapot",
  fullImage,
  tinyImage
};

const editingEquipmentInfo = {
  equipmentTypeId: 3,
  name: "My Teapot",
  description: "From grandmother.",
  image: "my-teapot",
  fullImage,
  tinyImage,
  id: 377,
  prevImage: "my-teapot"
};

describe('userCreateNewPrivateEquipmentSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PRIVATE_EQUIPMENT,
    equipmentInfo: creatingEquipmentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-tiny",
      fullName: "equipmentUrlString"
    }
  };
  const {
    equipmentTypeId,
    name,
    description,
    fullImage,
    tinyImage
  } = action.equipmentInfo;

  it('should dispatch succeeded', () => {
    const iterator = userCreateNewPrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/equipment`,
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
      `${endpoint}/user/equipment/create`,
      {
        equipmentInfo: {
          equipmentTypeId,
          name,
          description,
          image: "equipmentUrlString"
        }
      },
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
    .toEqual(put(userCreateNewPrivateEquipmentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userEditPrivateEquipmentSaga', () => {
  const action = {
    type: USER_EDIT_PRIVATE_EQUIPMENT,
    equipmentInfo: editingEquipmentInfo
  };
  const res1 = {
    data: {
      fullSignature: "signedUrlString",
      tinySignature: "signedUrlString-tiny",
      fullName: "equipmentUrlString"
    }
  };
  const {
    id,
    equipmentTypeId,
    name,
    description,
    prevImage,
    fullImage,
    tinyImage
  } = action.equipmentInfo;

  it('should dispatch succeeded', () => {
    const iterator = userEditPrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/equipment`,
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
      `${endpoint}/user/equipment/update`,
      {
        equipmentInfo: {
          id,
          equipmentTypeId,
          name,
          description,
          prevImage,
          image: "equipmentUrlString"
        }
      },
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
    .toEqual(put(userEditPrivateEquipmentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeletePrivateEquipmentSaga', () => {
  const action = {type: USER_DELETE_PRIVATE_EQUIPMENT, id: 4};

  it('should dispatch succeeded', () => {
    const iterator = userDeletePrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/equipment/delete`,
      {withCredentials: true, data: {id: action.id}}
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
    .toEqual(put(userDeletePrivateEquipmentFailed(
      'An error occurred. Please try again.'
    )));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});