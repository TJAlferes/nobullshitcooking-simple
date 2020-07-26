import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY_CART,
  ICartState,
  CartActions
} from './types';

const initialState: ICartState = {items: []};

export const cartReducer = (
  state = initialState,
  action: CartActions
): ICartState => {
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
          items: state.items.filter(item => item.itemId !== action.item.itemId)
        }
      };
    case CART_EMPTY_CART: return {...state, ...initialState};
    default: return state;
  }
};