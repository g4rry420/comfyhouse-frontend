import React, { useContext } from 'react'

import "./individual-item-right-side.styles.css"
import Heading from "../Heading/heading.component"
import CustomButton from '../custom-button/custom-button.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import { addItemToCart } from "../../context/reducers/cart-reducer/cart-actions"

export default function IndividualItemRightSide({ state }) {
    const { cart, dispatchCart } = useContext(ShopProductsContext)
    return (
        <div className="individual-item-right-side-container">
            <Heading title="Car title" display="display-5"
                h1="heading-in-individual-item"  />
            <h4 className="display-4 text-center my-5 text-uppercase"> cad $67</h4>
            
            <div onClick={() => addItemToCart(dispatchCart, state)} className="add-to-cart-button text-center">
            {
                /*!cart.map(item => item.id).includes(state.id) ? ( */
                    <CustomButton title="Add to cart" button="btn-cart p-2" />
              /*  ) : ( */
                    //<CustomButton title="Already Added" button="btn-cart p-2" />
              /*  )  */
            }
                
            </div>
            <div className="descriptions">
                <h5 className="display-4 my-5">Description</h5>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae suscipit nemo aliquam facilis temporibus excepturi molestiae omnis nihil praesentium. Non culpa enim, nesciunt incidunt quae suscipit commodi voluptas. Unde, officiis?</p>
                <h5 className="display-4 my-4">Product Details</h5>
            </div>
        </div>
    )
}
