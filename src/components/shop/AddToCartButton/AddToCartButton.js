import React from 'react';
import { connect } from 'redux';

import './addToCartButton.css';
import { cartItemAdd } from '../../../../store/actions/index';

const AddToCartButton = props => {
  const handleClick = props => props.cartItemAdd(props.itemId);

  return (
    <button
      className="add-to-cart-button"
      onClick={handleClick}
    >
      Add
    </button>
  );
}

const mapDispatchToProps = dispatch => ({
  cartItemAdd: (itemId) => dispatch(cartItemAdd(itemId))
});

export default connect(null, mapDispatchToProps)(AddToCartButton);