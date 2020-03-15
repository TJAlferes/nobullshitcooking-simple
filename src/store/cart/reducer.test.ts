import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './types';

import cartReducer from './reducer';

const initialState = {items: []};

describe('the cart reducer', () => {
  it('returns initial state', () => {
    const actual = cartReducer(undefined, {
      type: CART_ADD_ITEM,
      item: {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    });
    const expected = {
      items: [
        {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
      ]
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_ADD_ITEM', () => {
    const beforeState = {
      items: [
        {itemId: '87', itemTypeId: '1', itemName: 'Item 87'},
        {itemId: '192', itemTypeId: '1', itemName: 'Item 192'},
        {itemId: '16', itemTypeId: '1', itemName: 'Item 16'},
      ]
    };
    const actual = cartReducer(beforeState, {
      type: CART_ADD_ITEM,
      item: {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    });
    const expected = {
      items: [
        {itemId: '87', itemTypeId: '1', itemName: 'Item 87'},
        {itemId: '192', itemTypeId: '1', itemName: 'Item 192'},
        {itemId: '16', itemTypeId: '1', itemName: 'Item 16'},
        {itemId: '18', itemTypeId: '1', itemName: 'Item 18'},
      ]
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_REMOVE_ITEM', () => {
    const beforeState = {
      items: [
        {itemId: '87', itemTypeId: '1', itemName: 'Item 87'},
        {itemId: '192', itemTypeId: '1', itemName: 'Item 192'},
        {itemId: '16', itemTypeId: '1', itemName: 'Item 16'},
      ]
    };
    const actual = cartReducer(beforeState, {
      type: CART_REMOVE_ITEM,
      item: {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    });
    const expected = {
      items: [
        {itemId: '192', itemTypeId: '1', itemName: 'Item 192'},
        {itemId: '16', itemTypeId: '1', itemName: 'Item 16'},
      ]
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type CART_EMPTY', () => {
    const beforeState = {
      items: [
        {itemId: '87', itemTypeId: '1', itemName: 'Item A'},
        {itemId: '192', itemTypeId: '1', itemName: 'Item A'},
        {itemId: '16', itemTypeId: '1', itemName: 'Item A'},
      ]
    };
    const actual = cartReducer(beforeState, {type: CART_EMPTY});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});