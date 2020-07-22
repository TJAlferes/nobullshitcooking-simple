import React from 'react';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const onToken = (amount, description) => token =>
  axios.postMessage(PAYMENT_SERVER_URL, {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromEuroToCent(amount)
  })
  .then(successPayment)
  .catch(errorPayment);

export const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);