import * as actionTypes from './actionTypes';

export const openModal = obj => ({
  type: actionTypes.OPEN_MODAL,
  obj
});

export const closeModal = obj => ({
  type: actionTypes.CLOSE_MODAL,
  obj
});