import axios from 'axios';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Checkout(): JSX.Element {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardElement)
    });
  };

  return (
    <Elements stripe={stripePromise}>
      <div onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>Pay</button>
      </div>
    </Elements>
  );
}