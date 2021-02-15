import React, { useContext, Fragment } from 'react'
import { useHistory } from "react-router-dom"

import "./individual-item-right-side.styles.css"
import Heading from "../Heading/heading.component"
import CustomButton from '../custom-button/custom-button.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import { addItemToCart } from "../../context/reducers/cart-reducer/cart-actions"

export default function IndividualItemRightSide({ state }) {
    const { cart, dispatchCart, currentUser } = useContext(ShopProductsContext)
    const { product: { title, price }, description } = state;

    const history = useHistory();

    const handleAddToCart =  () => {
        addItemToCart(dispatchCart, state, currentUser);
    }

    const handleCheckoutPage = () => {
        history.push("/checkout")
    }

    return (
        <div className="individual-item-right-side-container">
            <Heading title={title} display="display-5"
                h1="heading-in-individual-item"  />
            <h4 className="display-4 text-center my-5 text-uppercase"> cad ${price}</h4>
            
            <div className="text-center">
            {
                !cart.map(item => item._id).includes(state._id) ? ( 
                    <CustomButton title="Add to cart" button="btn-cart p-2" onClick={handleAddToCart} />
                ) : ( 
                    <CustomButton onClick={handleCheckoutPage} title="Go to Checkout" button="btn-cart p-2" />
                ) 
            }
            </div>
            <div className="descriptions">
            {
                description ? (
                    <Fragment>
                        <h5 className="display-4 my-5">Description</h5>
                        <p> {description} </p>
                    </Fragment>
                ) : null
            }
                <h5 className="display-4 my-4">Product Details</h5>
            </div>
        </div>
    )
}
