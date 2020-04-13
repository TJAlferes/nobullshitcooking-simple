import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY,
  ICartItem
} from './types';

export const cartAddItem = (item: ICartItem) => ({
  type: CART_ADD_ITEM,
  item
});

export const cartRemoveItem = (item: ICartItem) => ({
  type: CART_REMOVE_ITEM,
  item
});

export const cartEmpty = () => ({type: CART_EMPTY});