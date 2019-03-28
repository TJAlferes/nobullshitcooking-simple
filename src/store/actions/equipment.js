import * as actionTypes from './actionTypes';

export const getEquipmentRequest = () => ({
  type: actionTypes.GET_EQUIPMENT_REQUEST
});

export const getEquipmentSucceeded = () => ({
  type: actionTypes.GET_EQUIPMENT_SUCCEEDED
});

export const getEquipmentFailed = () => ({
  type: actionTypes.GET_EQUIPMENT_FAILED
});