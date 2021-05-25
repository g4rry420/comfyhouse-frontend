import React, { useContext } from 'react'

import "./checkout-item.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import { removeItem, qtyDecrease, qtyIncrease }  from "../../context/reducers/cart-reducer/cart-actions"

export default function CheckoutItem(props) {
    const { dispatchCart, currentUser } = useContext(ShopProductsContext);
    const { cartItem:{_id, title, qty, img, price}, idx } = props;
    return (
        <div className="checkout-item" >
            <div className="checkout-item-img-container">
                <img src={img} alt="item"/>
            </div>
            <span className="checkout-item-title"> {title} </span>
            <div className="checkout-item-quantity">
                <svg onClick={() => qtyIncrease(dispatchCart, _id, currentUser, idx)} className="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                <span> {qty} </span>
                <svg onClick={() => qtyDecrease(dispatchCart, props.cartItem, currentUser, idx)} className="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <span className="checkout-item-price"> ${price} </span>
            <div onClick={() => removeItem(dispatchCart, _id, currentUser)} className="remove-button"> &#10005; </div>  
        </div>
    )
}
