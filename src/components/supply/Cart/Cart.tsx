import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ICartItem } from '../../../store/cart/types';
import RemoveFromCartButton from './RemoveFromCartButton/RemoveFromCartButton';
import './cart.css';

const endpoint = '';

export function Cart({ cartItems, oneColumnATheme }: Props) {
  return (
    <div className={`cart one-column-a ${oneColumnATheme}`}>
      {
        !cartItems
        ? 'Your cart is empty.'
        : cartItems.map(c => (
          <div className="cart-item">
            <span><img src={`${endpoint}/${c.itemName}`} /></span>
            <span>{c.itemName}</span>
            <span><RemoveFromCartButton itemId={c.itemId}/></span>
          </div>
        ))
      }
    </div>
  );
}

interface RootState {
  cart: {
    items: ICartItem[]
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

/*type Props = RouteComponentProps & PropsFromRedux & {
  twoColumnBTheme: string;
};*/
type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({cartItems: state.cart.items});

const connector = connect(mapStateToProps);

export default connector(Cart);