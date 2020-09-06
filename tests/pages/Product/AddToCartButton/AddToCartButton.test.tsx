import { shallow } from 'enzyme';
import React from 'react';

import { AddToCartButton } from '../../../../src/pages/Product/AddToCartButton/AddToCartButton';

const cartAddItem = jest.fn();
const item = {id: 18, itemTypeId: 1, name: 'Name', quantity: 1};

const initialProps = {cartAddItem, item};

describe ('AddToCartButton', () => {
  const wrapper = shallow(<AddToCartButton {...initialProps} />);

  it('displays a button with text Add', () => {
    expect(wrapper.find('button.add-to-cart-button').text()).toEqual("Add");
  });

  it('adds item to cart', () => {
    wrapper.find('button.add-to-cart-button').simulate('click');
    expect(cartAddItem).toBeCalledTimes(1);
    expect(cartAddItem).toBeCalledWith(item);
  });
});