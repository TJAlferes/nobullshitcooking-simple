import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './actionTypes';

export const cartAddItem = itemId => ({
  type: CART_ADD_ITEM,
  itemId
});

export const cartRemoveItem = itemId => ({
  type: CART_REMOVE_ITEM,
  itemId
});

export const cartEmpty = () => ({type: CART_EMPTY});