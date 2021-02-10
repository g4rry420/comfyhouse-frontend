import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"

import "./checkout.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.componenet';

function CheckoutPage({ location }) {
    const { cart, currentUser } = useContext(ShopProductsContext);
    if(!currentUser) return <Redirect to={{ pathname: "/loginorsignup", state: { previousPath: location.pathname } }} />

    let total = cart.reduce((accQty, item) => {
        return (accQty + (item.qty * item.price));
            }, 0)
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block" id="product">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cart.map( ({id, ...otherProps} ) => (
                    <CheckoutItem key={id} {...otherProps} id={id} />
                ))
            }

            <div className="total">
                <span className="text-uppercase">Total: ${total} </span>
            </div>
            <div className="test-warning text-danger my-2">
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <div className="my-4 text-right">
                <StripeCheckoutButton price={total}  />
            </div>
        </div>
    )
}

export default CheckoutPage