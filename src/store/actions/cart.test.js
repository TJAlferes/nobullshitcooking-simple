import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './actionTypes';

import { cartAddItem, cartRemoveItem, cartEmpty } from './cart';

describe('the cartItemAdd action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartAddItem(480).type;
    const expected = CART_ADD_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartAddItem(480).itemId;
    const expected = 480;
    expect(actual).toEqual(expected);
  });
});

describe('the cartItemRemove action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartRemoveItem(480).type;
    const expected = CART_REMOVE_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartRemoveItem(480).itemId;
    const expected = 480;
    expect(actual).toEqual(expected);
  });
});

describe('the cartEmpty action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartEmpty(480).type;
    const expected = CART_EMPTY;
    expect(actual).toEqual(expected);
  });
});