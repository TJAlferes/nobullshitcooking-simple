import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from './equipment';

import {
  userMessageClear,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the userCreateNewPrivateEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateEquipmentSaga, action)
    .silentRun(50);
  });*/

  it('should dispatch succeeded and server message', () => {
    const action = {
      equipmentInfo: {
        equipmentTypeId: 3,
        equipmentName: "My Teapot",
        equipmentDescription: "From grandmother.",
        equipmentImage: "newFile.jpeg",
        fullEquipmentImage: "newFile.jpeg",
        tinyEquipmentImage: "changeme.jpeg"
      }
    };
    const iterator = userCreateNewPrivateEquipmentSaga(action);
    const res = {data: {message: 'Equipment created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/get-signed-url/equipment`,
      {fileType: action.equipmentInfo.fullEquipmentImage.type},
      {withCredentials: true}
    ));

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      res1.data.signedRequestFullSize,
      action.equipmentInfo.fullEquipmentImage,
      {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
    ));

    expect(iterator.next().value)
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

    expect(iterator.next().value).toEqual(put(userMessageClear()));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed and server message', () => {
    const action = {
      equipmentInfo: {
        equipmentTypeId: 3,
        equipmentName: "My Teapot",
        equipmentDescription: "From grandmother.",
        equipmentImage: "newFile.jpeg",
        fullEquipmentImage: "newFile.jpeg",
        tinyEquipmentImage: "changeme.jpeg"
      }
    };
    const iterator = userCreateNewPrivateEquipmentSaga(action);
    const res = {data: {message: 'Not created, try again.'}};

    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();  //iterator.next(res);

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPrivateEquipmentFailed(res.data.message)));

    expect(iterator.next().value).toEqual(put(userMessageClear()));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const action = {
      equipmentInfo: {
        equipmentTypeId: 3,
        equipmentName: "My Teapot",
        equipmentDescription: "From grandmother.",
        equipmentImage: "newFile.jpeg",
        fullEquipmentImage: "newFile.jpeg",
        tinyEquipmentImage: "changeme.jpeg"
      }
    };
    const iterator = userCreateNewPrivateEquipmentSaga(action);

    /*expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/friendship`,
      {},
      {withCredentials: true}
    ));*/

    expect(iterator.throw('error').value)
    .toEqual(put(userCreateNewPrivateEquipmentFailed()));

    expect(iterator.next().value).toEqual(put(userMessageClear()));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the userEditPrivateEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateEquipmentSaga, action)
    .silentRun(50);
  });*/


});



describe('the userDeletePrivateEquipmentSaga', () => {
  /*it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateEquipmentSaga, action)
    .silentRun(50);
  });*/


});