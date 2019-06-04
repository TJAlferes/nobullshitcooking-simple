import React from 'react';
import { connect } from 'redux';

import './cart.css';
import RemoveFromCartButton from './RemoveFromCartButton/RemoveFromCartButton';

const endpoint = '';

const Cart = props => (
  <div className="cart">
    <ul>
      {props.cartItems.map((cartItem) => (
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
    </ul>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(Cart);