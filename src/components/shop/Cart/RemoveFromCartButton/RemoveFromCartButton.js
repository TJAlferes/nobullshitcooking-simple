import React from 'react';
import { connect } from 'redux';

import './removeFromCartButton.css';
import { cartItemRemove } from '../../../../store/actions/index';

const RemoveFromCartButton = props => {
  const handleClick = props => props.cartItemRemove(props.itemId);

  return (
    <button
      className="remove-from-cart-button"
      onClick={handleClick}
    >
      Remove
    </button>
  );
}

const mapDispatchToProps = dispatch => ({
  cartItemRemove: (itemId) => dispatch(cartItemRemove(itemId))
});

export default connect(null, mapDispatchToProps)(RemoveFromCartButton);