export const CART_ADD_ITEM = 'CART_ADD_ITEM' as const;
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM' as const;
export const CART_EMPTY = 'CART_EMPTY' as const;

export interface ICartState {
  items: ICartItem[];
}

export interface ICartItem {
  itemId: number;
  itemTypeId: number;
  itemName: string;
}

export type CartActions =
ICartAddItem |
ICartRemoveItem |
ICartEmpty;

interface ICartAddItem {
  type: typeof CART_ADD_ITEM;
  item: ICartItem;
}

interface ICartRemoveItem {
  type: typeof CART_REMOVE_ITEM;
  item: ICartItem;
}

interface ICartEmpty {
  type: typeof CART_EMPTY;
}