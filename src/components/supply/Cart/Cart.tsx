import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ICartItem } from '../../../store/cart/types';
import RemoveFromCartButton from './RemoveFromCartButton/RemoveFromCartButton';
import './cart.css';

const endpoint = '';

export function Cart({ oneColumnATheme, cartItems }: Props) {
  return (
    <div className={`cart one-column-a ${oneColumnATheme}`}>
      {!cartItems && 'Your cart is empty.'}
      {cartItems && cartItems.map(cartItem => (
        <div className="cart-item">
          <span>
            <img src={`${endpoint}/${cartItem.itemName}`} />
          </span>
          <span>
            {cartItem.itemName}
          </span>
          <span>
            <RemoveFromCartButton itemId={cartItem.itemId}/>
          </span>
        </div>
      ))}
    </div>
  );
}

interface RootState {
  cart: {
    items: ICartItem[]
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

/*type Props = RouteComponentProps & PropsFromRedux & {
  twoColumnBTheme: string;
};*/
type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.items
});

const connector = connect(mapStateToProps);

export default connector(Cart);