import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewEquipmentSucceeded,
  staffCreateNewEquipmentFailed,
  staffEditEquipmentSucceeded,
  staffEditEquipmentFailed,
  staffDeleteEquipmentSucceeded,
  staffDeleteEquipmentFailed
} from './actions';
import {
  staffCreateNewEquipmentSaga,
  staffEditEquipmentSaga,
  staffDeleteEquipmentSaga
} from './sagas';
import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

const equipmentFullImage =
  new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const equipmentTinyImage =
  new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

const creatingEquipmentInfo = {
  equipmentTypeId: 3,
  equipmentName: "Metal Spatula",
  equipmentDescription: "It works.",
  equipmentImage: "nobsc-metal-spatula",
  equipmentFullImage,
  equipmentTinyImage
};

const editingEquipmentInfo = {
  equipmentId: 1,
  equipmentTypeId: 3,
  equipmentName: "Metal Spatula",
  equipmentDescription: "It works.",
  equipmentPrevImage: "nobsc-metal-spatula",
  equipmentImage: "nobsc-metal-spatula",
  equipmentFullImage,
  equipmentTinyImage
};

describe('userCreateNewEquipmentSaga', () => {
  const action = {
    type: STAFF_CREATE_NEW_EQUIPMENT,
    equipmentInfo: creatingEquipmentInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "equipmentUrlString"
    }
  };
  const { equipmentFullImage, equipmentTinyImage } = action.equipmentInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffCreateNewEquipmentSaga(action);
    const res = {data: {message: 'Equipment created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/equipment`,
      {fileType: equipmentFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      equipmentFullImage,
      {headers: {'Content-Type': equipmentFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      equipmentTinyImage,
      {headers: {'Content-Type': equipmentTinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffCreateNewEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffCreateNewEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffCreateNewEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffCreateNewEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffEditEquipmentSaga', () => {
  const action = {
    type: STAFF_EDIT_EQUIPMENT,
    equipmentInfo: editingEquipmentInfo
  };
  const res1 = {
    data: {
      signedRequestFullSize: "signedUrlString",
      signedRequestTinySize: "signedUrlString-tiny",
      urlFullSize: "equipmentUrlString"
    }
  };
  const { equipmentFullImage, equipmentTinyImage } = action.equipmentInfo;

  it('should dispatch succeeded', () => {
    const iterator = staffEditEquipmentSaga(action);
    const res = {data: {message: 'Equipment updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/equipment`,
      {fileType: equipmentFullImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      equipmentFullImage,
      {headers: {'Content-Type': equipmentFullImage.type}}
    ));

    expect(iterator.next(res1).value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestTinySize,
      equipmentTinyImage,
      {headers: {'Content-Type': equipmentTinyImage.type}}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/staff/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffEditEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffEditEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();
    iterator.next(res1);
    iterator.next(res1);
    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffEditEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffEditEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffEditEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('staffDeleteEquipmentSaga', () => {
  const action = {type: STAFF_DELETE_EQUIPMENT, equipmentId: 4};

  it('should dispatch succeeded', () => {
    const iterator = staffDeleteEquipmentSaga(action);
    const res = {data: {message: 'Equipment deleted.'}};

    expect(iterator.next().value).toEqual(call(
      [axios, axios.delete],
      `${endpoint}/staff/equipment/delete`,
      {withCredentials: true, data: {equipmentId: action.equipmentId}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteEquipmentSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = staffDeleteEquipmentSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(staffDeleteEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = staffDeleteEquipmentSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(
      staffDeleteEquipmentFailed(
        'An error occurred. Please try again.'
      )
    ));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(staffMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});