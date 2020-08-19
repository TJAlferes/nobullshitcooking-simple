import axios from 'axios';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

// TO DO: finish

const onToken = (amount, description) => token =>
  axios.postMessage(PAYMENT_SERVER_URL, {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromEuroToCent(amount)
  })
  .then(successPayment)
  .catch(errorPayment);

export const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    amount={}
    currency={CURRENCY}
    description={description}
    name={name}
    stripeKey={STRIPE_PUBLISHABLE}
    token={onToken(amount, description)}
  />;