import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY
} from '../actions/actionTypes';

export interface CartState {
  items: CartItem[]
}

export interface CartItem {
  itemId: string
  itemTypeId: string
  itemName: string
}

export type CartActions =
CartAddItem |
CartRemoveItem |
CartEmpty;

interface CartAddItem {
  type: typeof CART_ADD_ITEM
  item: CartItem
}

interface CartRemoveItem {
  type: typeof CART_REMOVE_ITEM
  item: CartItem
}

interface CartEmpty {
  type: typeof CART_EMPTY
}