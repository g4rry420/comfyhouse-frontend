import React, {useContext} from 'react'

import "./cart-icon.styles.css"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function CartIcon({ handleCartHidden }) {
    const { cart }  = useContext(ShopProductsContext)
    return (
        <div className="cart-icon-container" onClick={handleCartHidden}>
            <ShoppingIcon className="cart-icon" />
            <span> {cart.length} </span>
        </div>
    )
}
