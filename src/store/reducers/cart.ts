import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY
} from '../actions/actionTypes';

import { CartState, CartActions } from '../types/cart';

const initialState: CartState = {
  items: []
};

const cartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        ...{
          items: state.items.concat(action.item)
        }
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        ...{
          items: state.items.filter(id => id !== action.item)
        }
      };
    case CART_EMPTY:
      return {
        ...state,
        ...initialState
      };
  }
  return state;
};

export default cartReducer;