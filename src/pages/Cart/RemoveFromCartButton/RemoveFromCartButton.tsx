import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { cartRemoveItem } from '../../../store/cart/actions';
import { ICartItem } from '../../../store/cart/types';
import './removeFromCartButton.css';

export function RemoveFromCartButton({
  cartRemoveItem,
  item
}: Props): JSX.Element {
  const handleClick = () => cartRemoveItem(item);

  return (
    <button className="remove-from-cart-button" onClick={handleClick}>
      Remove
    </button>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  item: ICartItem;
};

const mapDispatchToProps = {
  cartRemoveItem: (item: ICartItem) => cartRemoveItem(item)
};

const connector = connect(null, mapDispatchToProps);

export default connector(RemoveFromCartButton);