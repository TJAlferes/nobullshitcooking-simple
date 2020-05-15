import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY } from './types';
import { cartAddItem, cartRemoveItem, cartEmpty } from './actions';

describe('the cartItemAdd action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartAddItem(
      {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    ).type;
    const expected = CART_ADD_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartAddItem(
      {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    ).item;
    const expected = {itemId: '18', itemTypeId: '1', itemName: 'Item 18'};
    expect(actual).toEqual(expected);
  });
});

describe('the cartItemRemove action creator', () => {
  it('returns the correct action type', () => {
    const actual = cartRemoveItem(
      {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    ).type;
    const expected = CART_REMOVE_ITEM;
    expect(actual).toEqual(expected);
  });
  it('returns the correct itemId', () => {
    const actual = cartRemoveItem(
      {itemId: '18', itemTypeId: '1', itemName: 'Item 18'}
    ).item;
    const expected = {itemId: '18', itemTypeId: '1', itemName: 'Item 18'};
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