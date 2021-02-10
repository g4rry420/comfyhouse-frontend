import React, {useContext} from 'react'

import "./cart-icon.styles.css"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function CartIcon() {
    const { cartHidden, setCartHidden, cart }  = useContext(ShopProductsContext)
    return (
        <div className="cart-icon-container" onClick={() => setCartHidden(!cartHidden)}>
            <ShoppingIcon className="cart-icon" />
            <span> {cart.length} </span>
        </div>
    )
}
