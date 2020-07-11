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
//const mock = new MockAdapter(axios, {delayResponse: 100});
const fullEquipmentImage = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyEquipmentImage = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

describe('the userCreateNewEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateEquipmentSaga, action)
    .silentRun(50);
  });*/

  const action = {
    type: STAFF_CREATE_NEW_EQUIPMENT,
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
    const iterator = staffCreateNewEquipmentSaga(action);
    const res = {data: {message: 'Equipment created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/equipment`,
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

describe('the staffEditEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateEquipmentSaga, action)
    .silentRun(50);
  });*/

  const action = {
    type: STAFF_EDIT_EQUIPMENT,
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
    const iterator = staffEditEquipmentSaga(action);
    const res = {data: {message: 'Equipment updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/get-signed-url/equipment`,
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

describe('the staffDeleteEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateEquipmentSaga, action)
    .silentRun(50);
  });*/

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