import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY,
  ICartState,
  CartActions
} from './types';

const initialState: ICartState = {items: []};

const cartReducer = (
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
          items: state.items.filter(id => id !== action.item)
        }
      };
    case CART_EMPTY:
      return {
        ...state,
        ...initialState
      };
    default: return state;
  }
};

export default cartReducer;