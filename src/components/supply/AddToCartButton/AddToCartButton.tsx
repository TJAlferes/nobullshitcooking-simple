import React from 'react';
import { connect } from 'redux';

import './addToCartButton.css';
import { cartAddItem } from '../../../../store/actions/index';

const AddToCartButton = ({
  itemId,
  cartAddItem
}) => {
  const handleClick = () => cartAddItem(itemId);
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
  cartAddItem: (itemId) => dispatch(cartAddItem(itemId))
});

export default connect(null, mapDispatchToProps)(AddToCartButton);