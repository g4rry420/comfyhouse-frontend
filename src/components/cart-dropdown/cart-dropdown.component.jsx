import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom';

import "./cart-dropdown.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

function CartDropdown({ history, handleCartHidden }) {
    const { cart } = useContext(ShopProductsContext);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cart.length ? 
                    cart.map(({ _id, ...otherProps }) => (
                        <CartItem key={_id} {...otherProps} />
                    ))
                    : <span className="empty-message">Your Cart is empty!</span>
            }
            </div>
            <div className="cart-dropdown-button-container" onClick={() =>{
                history.push("/checkout");
                handleCartHidden();
            }}>
                <CustomButton title="Go&nbsp;to&nbsp;checkout&nbsp;page" button="cart-dropdown-button" />
            </div>
        </div>
    )
}

export default withRouter(CartDropdown)