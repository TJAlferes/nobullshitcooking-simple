const initialState = {};

const addItem = (state, action) => {

};

const removeItem = (state, action) => {

};

const empty = (state, action) => {

};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: return addItem(state, action);
    case actionTypes.CART_REMOVE_ITEM: return removeItem(state, action);
    case actionTypes.CART_EMPTY: return empty(state, action);
  }
  return state;
};

export default cartReducer;