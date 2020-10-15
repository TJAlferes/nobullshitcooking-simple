import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ICartItem } from '../../store/cart/types';
import RemoveFromCartButton from './RemoveFromCartButton/RemoveFromCartButton';
import './cart.css';

const endpoint = '';

export function Cart({ cartItems, oneColumnATheme }: Props) {
  return (
    <div className={`cart one-column-a ${oneColumnATheme}`}>
      {!cartItems ? 'Your cart is empty.' : cartItems.map(i => (
        <div className="cart-item">
          <span><img src={`${endpoint}/${i.name}`} /></span>
          <span>{i.name}</span>
          <span><RemoveFromCartButton item={i}/></span>
        </div>
      ))}
    </div>
  );
}

interface RootState {
  cart: {
    items: ICartItem[];  // IWorkProduct?
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({cartItems: state.cart.items});

const connector = connect(mapStateToProps);

export default connector(Cart);