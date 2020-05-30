import { cartAddItem, cartRemoveItem, cartEmpty } from './actions';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './types';

const item = {itemId: 18, itemTypeId: 1, itemName: 'Item 18'}

describe('the cartItemAdd action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartAddItem(item).type;
    const expected = CART_ADD_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartAddItem(item).item;
    const expected = item;
    expect(actual).toEqual(expected);
  });
});

describe('the cartItemRemove action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartRemoveItem(item).type;
    const expected = CART_REMOVE_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartRemoveItem(item).item;
    const expected = item;
    expect(actual).toEqual(expected);
  });
});

describe('the cartEmpty action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartEmpty().type;
    const expected = CART_EMPTY;
    expect(actual).toEqual(expected);
  });
});