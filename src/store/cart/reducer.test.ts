import { cartReducer } from './reducer';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY_CART } from './types';

const initialState = {items: []};

describe('cart reducer', () => {
  it('returns initial state', () => {
    const actual = cartReducer(undefined, {
      type: CART_ADD_ITEM,
      item: {id: 18, itemTypeId: 1, name: 'Item 18'}
    });
    const expected = {items: [{id: 18, itemTypeId: 1, name: 'Item 18'}]};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_ADD_ITEM', () => {
    const beforeState = {
      items: [
        {id: 87, itemTypeId: 1, name: 'Item 87'},
        {id: 192, itemTypeId: 1, name: 'Item 192'},
        {id: 16, itemTypeId: 1, name: 'Item 16'},
      ]
    };
    const actual = cartReducer(beforeState, {
      type: CART_ADD_ITEM,
      item: {id: 18, itemTypeId: 1, name: 'Item 18'}
    });
    const expected = {
      items: [
        {id: 87, itemTypeId: 1, name: 'Item 87'},
        {id: 192, itemTypeId: 1, name: 'Item 192'},
        {id: 16, itemTypeId: 1, name: 'Item 16'},
        {id: 18, itemTypeId: 1, name: 'Item 18'},
      ]
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_REMOVE_ITEM', () => {
    const beforeState = {
      items: [
        {id: 87, itemTypeId: 1, name: 'Item 87'},
        {id: 192, itemTypeId: 1, name: 'Item 192'},
        {id: 16, itemTypeId: 1, name: 'Item 16'},
      ]
    };
    const actual = cartReducer(beforeState, {
      type: CART_REMOVE_ITEM,
      item: {id: 87, itemTypeId: 1, name: 'Item 87'}
    });
    const expected = {
      items: [
        {id: 192, itemTypeId: 1, name: 'Item 192'},
        {id: 16, itemTypeId: 1, name: 'Item 16'},
      ]
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_EMPTY_CART', () => {
    const beforeState = {
      items: [
        {id: 87, itemTypeId: 1, name: 'Item A'},
        {id: 192, itemTypeId: 1, name: 'Item A'},
        {id: 16, itemTypeId: 1, name: 'Item A'},
      ]
    };
    const actual = cartReducer(beforeState, {type: CART_EMPTY_CART});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});