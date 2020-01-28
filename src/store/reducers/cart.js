import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './actionTypes';

const initialState = {items: []};

const addItem = (state, action) => {
  return {...state, ...{items: state.items.concat(action.itemId)}};
};

const removeItem = (state, action) => {
  return {...state, ...{items: state.items.filter(id => id !== action.itemId)}};
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: return addItem(state, action);
    case CART_REMOVE_ITEM: return removeItem(state, action);
    case CART_EMPTY: return {...state, ...initialState};
  }
  return state;
};

export default cartReducer;