import React from 'react';
import {
  CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';
import { Container } from 'react-bootstrap';
import './Checkout.css';
const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();


    const handleSubmit = async(e) =>{
      e.preventDefault();  
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
      // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
    }
    return (
      <Container>
           <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '17px',
              color: '#FFFFFF',
              '::placeholder': {
                color: '#FFFFFF',
              },
            },
            invalid: {
              color: '#FFFFFF',
            },
          },
        }}
      />
      <button className="btttn3 mt-5" type="submit" disabled={!stripe}>
        Pay 
      </button>
    </form>
    </Container>
    );
};

export default CheckOut;

