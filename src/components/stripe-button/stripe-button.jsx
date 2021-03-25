import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ILxVIF1MbtiV2FGx2JXKXtRE455y2FXPVJVzHN9fJlmm7fG2aET4Fg3upOaHRy7tUMd0MUpAurG4mwLOnyuMXAk00snCQAOcE';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing store'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;