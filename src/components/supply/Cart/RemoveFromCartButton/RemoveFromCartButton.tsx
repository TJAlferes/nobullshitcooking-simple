import React from 'react';
import { connect } from 'redux';

import './removeFromCartButton.css';
import { cartRemoveItem } from '../../../../store/actions/index';

const RemoveFromCartButton = ({
  itemId,
  cartRemoveItem
}) => {
  const handleClick = () => cartRemoveItem(itemId);

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
  cartRemoveItem: (itemId) => dispatch(cartRemoveItem(itemId))
});

export default connect(null, mapDispatchToProps)(RemoveFromCartButton);