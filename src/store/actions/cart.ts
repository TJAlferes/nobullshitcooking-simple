import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY
} from './actionTypes';

import { CartItem } from '../types/cart';

export const cartAddItem = (item: CartItem) => ({
  type: CART_ADD_ITEM,
  item
});

export const cartRemoveItem = (item: CartItem) => ({
  type: CART_REMOVE_ITEM,
  item
});

export const cartEmpty = () => ({type: CART_EMPTY});