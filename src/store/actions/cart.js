import * as actionTypes from './actionTypes';  // destructure these???

export const cartItemAdd = itemId => ({
  type: actionTypes.CART_ITEM_ADD,
  itemId
});

export const cartItemRemove = itemId => ({
  type: actionTypes.CART_ITEM_REMOVE,
  itemId
});