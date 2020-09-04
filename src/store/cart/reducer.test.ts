import { cartReducer } from './reducer';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY_CART } from './types';

const initialState = {items: []};

describe('cart reducer', () => {
  it('returns initial state', () => {
    const item = {id: 18, itemTypeId: 1, name: "Name", quantity: 1};

    expect(cartReducer(undefined, {type: CART_ADD_ITEM, item}))
      .toEqual({items: [item]});
  });

  it('handles actions of type CART_ADD_ITEM', () => {
    const beforeState =
      {items: [{id: 87, itemTypeId: 1, name: "Name", quantity: 1}]};

    expect(cartReducer(beforeState, {
      type: CART_ADD_ITEM,
      item: {id: 192, itemTypeId: 1, name: "Name", quantity: 1}
    }))
      .toEqual({
        items: [
          {id: 87, itemTypeId: 1, name: "Name", quantity: 1},
          {id: 192, itemTypeId: 1, name: "Name", quantity: 1}
        ]
      });
  });

  it('handles actions of type CART_REMOVE_ITEM', () => {
    const beforeState = {
      items: [
        {id: 87, itemTypeId: 1, name: "Name", quantity: 1},
        {id: 192, itemTypeId: 1, name: "Name", quantity: 1}
      ]
    };

    expect(cartReducer(beforeState, {
      type: CART_REMOVE_ITEM,
      item: {id: 87, itemTypeId: 1, name: "Name", quantity: 1}
    }))
      .toEqual({items: [{id: 192, itemTypeId: 1, name: "Name", quantity: 1}]});
  });

  it('handles actions of type CART_EMPTY_CART', () => {
    const beforeState = {
      items: [
        {id: 87, itemTypeId: 1, name: "Name", quantity: 1},
        {id: 192, itemTypeId: 1, name: "Name", quantity: 1}
      ]
    };

    expect(cartReducer(beforeState, {type: CART_EMPTY_CART}))
      .toEqual(initialState);
  });
});