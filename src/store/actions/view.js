import * as actionTypes from './actionTypes';

export const viewGetIngredients = (types, display, start) => ({
  type: actionTypes.VIEW_GET_INGREDIENTS,
  types,
  display,
  start
});

export const viewGetEquipment = (types, display, start) => ({
  type: actionTypes.VIEW_GET_EQUIPMENT,
  types,
  display,
  start
});