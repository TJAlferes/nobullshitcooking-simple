import React from 'react';
import { connect } from 'redux';

import RemoveFromCartButton from './RemoveFromCartButton/RemoveFromCartButton';

import './cart.css';

const endpoint = '';

const Cart = ({
  oneColumnATheme,
  cartItems
}) => (
  <div className={`cart one-column-a ${oneColumnATheme}`}>
    {cartItems && cartItems.map((cartItem) => (
      <div className="cart-item">
        <span>
          <img src={`${endpoint}/${cartItem.imagePath}`} />
        </span>
        <span>
          {cartItem.itemName}
        </span>
        <span>
          <RemoveFromCartButton itemId={cartItem.itemId}/>
        </span>
      </div>
    ))}
    {!cartItems && 'Your cart is empty.'}
  </div>
);

const mapStateToProps = state => ({cartItems: state.cart.cartItems});

export default connect(mapStateToProps)(Cart);