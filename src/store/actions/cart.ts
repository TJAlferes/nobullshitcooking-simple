import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY
} from './actionTypes';

import { CartActions, CartItem } from '../types/cart';

export const cartAddItem = (item: CartItem): CartActions => ({
  type: CART_ADD_ITEM,
  item
});

export const cartRemoveItem = (item: CartItem): CartActions => ({
  type: CART_REMOVE_ITEM,
  item
});

export const cartEmpty = (): CartActions => ({type: CART_EMPTY});