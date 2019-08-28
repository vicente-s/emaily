import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckOut
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
