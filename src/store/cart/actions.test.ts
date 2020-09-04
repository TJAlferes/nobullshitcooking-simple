import { cartAddItem, cartRemoveItem, cartEmpty } from './actions';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_EMPTY_CART } from './types';

const item = {id: 18, itemTypeId: 1, name: "Name", quantity: 1};

describe('cartItemAdd action creator', () => {
  it('returns the correct action type', () => {
    expect(cartAddItem(item).type).toEqual(CART_ADD_ITEM);
  });

  it('returns the correct item', () => {
    expect(cartAddItem(item).item).toEqual(item);
  });
});

describe('cartItemRemove action creator', () => {
  it('returns the correct action type', () => {
    expect(cartRemoveItem(item).type).toEqual(CART_REMOVE_ITEM);
  });
  
  it('returns the correct item', () => {
    expect(cartRemoveItem(item).item).toEqual(item);
  });
});

describe('cartEmpty action creator', () => {
  it('returns the correct action type', () => {
    expect(cartEmpty().type).toEqual(CART_EMPTY_CART);
  });
});