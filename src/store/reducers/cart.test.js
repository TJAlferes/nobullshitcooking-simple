import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from '../actions/actionTypes';

import cartReducer from './cart';

const initialState = {items: []};

describe('the cart reducer', () => {
  it('returns initial state', () => {
    const actual = cartReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_ADD_ITEM', () => {
    const beforeState = {items: [87, 192, 16]};
    const actual = cartReducer(beforeState, {type: CART_ADD_ITEM, itemId: 18});
    const expected = {items: [87, 192, 16, 18]};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_REMOVE_ITEM', () => {
    const beforeState = {items: [87, 192, 16]};
    const actual = cartReducer(beforeState, {type: CART_REMOVE_ITEM, itemId: 87});
    const expected = {items: [192, 16]};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_EMPTY', () => {
    const beforeState = {items: [87, 192, 16]};
    const actual = cartReducer(beforeState, {type: CART_EMPTY});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});