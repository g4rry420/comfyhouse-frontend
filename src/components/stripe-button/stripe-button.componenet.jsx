import React from 'react'
import StripeCheckout from "react-stripe-checkout"

export default function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H0FNhKAONAeMcm84S1EmYaex9AG4c56r8fWM1HNRMHTHDlvWCqYjiyy7QUrzRBEzZwvJyS3UHM6i9N5Cut4LXm500ZBfo02rx";

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
          label="Pay Now"
          name="Comfy House"
          billingAddress
          shippingAddress
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}