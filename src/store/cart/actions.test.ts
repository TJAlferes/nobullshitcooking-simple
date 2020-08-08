import { cartAddItem, cartRemoveItem, cartEmpty } from './actions';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY_CART } from './types';

const item = {id: 18, itemTypeId: 1, name: 'Item 18'}

describe('cartItemAdd action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartAddItem(item).type;
    const expected = CART_ADD_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct item', () => {
    const actual = cartAddItem(item).item;
    const expected = item;
    expect(actual).toEqual(expected);
  });
});

describe('cartItemRemove action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartRemoveItem(item).type;
    const expected = CART_REMOVE_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct item', () => {
    const actual = cartRemoveItem(item).item;
    const expected = item;
    expect(actual).toEqual(expected);
  });
});

describe('cartEmpty action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartEmpty().type;
    const expected = CART_EMPTY_CART;
    expect(actual).toEqual(expected);
  });
});