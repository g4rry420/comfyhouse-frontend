import React from 'react'

import "./cart-item.styles.css"

export default function CartItem({ img, title, qty, price  }) {
    return (
        <div className="cart-item" >
            <img src={img} alt="item"/>
            <div className="item-details">
                <span className="name">{title.split(" ").slice(0, 2).join(" ")}</span>
                <span> {qty} x <span className="cart-dropdown-price">${price}</span> </span>
            </div>
        </div>
    )
}
