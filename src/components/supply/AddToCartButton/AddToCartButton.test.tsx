import { shallow } from 'enzyme';
import React from 'react';

import { AddToCartButton } from './AddToCartButton';

const item = {id: 18, itemTypeId: 1, name: 'Item 18'};

const cartAddItem = jest.fn();

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