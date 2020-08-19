import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { cartAddItem } from '../../../../store/cart/actions';
import { ICartItem } from '../../../../store/cart/types';
import './addToCartButton.css';

export function AddToCartButton({
  cartAddItem,
  item
}: Props): JSX.Element {
  const handleClick = () => cartAddItem(item);

  return (
    <button className="add-to-cart-button" onClick={handleClick}>Add</button>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  item: ICartItem;
};

const mapDispatchToProps = {
  cartAddItem: (item: ICartItem) => cartAddItem(item)
};

const connector = connect(null, mapDispatchToProps);

export default connector(AddToCartButton);