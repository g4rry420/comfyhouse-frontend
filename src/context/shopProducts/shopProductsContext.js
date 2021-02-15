import React, { createContext, useReducer, useState,useEffect } from 'react'
// import logger from "use-reducer-logger"

import { cartReducer } from "../reducers/cart-reducer/cart-reducer";
import API from "../../API"
import { updateCart } from "../reducers/cart-reducer/cart-actions"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {  
    const [loading ,setLoading] = useState(true);

    const [cartHidden, setCartHidden] = useState(true);

    const [currentUser, setCurrentUser] = useState(null);

    const [cart, dispatchCart] = useReducer(
        // process.env.NODE_ENV === "development" ? logger(cartReducer) : cartReducer
        cartReducer
    ,[])

    const autheticate = (token, next) => {
        if(window !== undefined){
            localStorage.setItem("comfyHouse_jwt", JSON.stringify(token))
            next();
        }
    }

    useEffect(() => {
        if(currentUser) return;
        if(window !== undefined){
            if(localStorage.getItem("comfyHouse_jwt")){
                const data = JSON.parse(localStorage.getItem("comfyHouse_jwt"))
                setCurrentUser(data)
            }
        }

    }, [currentUser])

    useEffect(() => {
        if(!!!currentUser || !!!cart.length) return;

        const products = cart.map(item => {
            return {
                product: item._id,
                qty: item.qty
            }
        })

        const order = {
            products: products,
            user: null
        }

        fetch(`${API}/cart/add/${currentUser.user._id}`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.token}`
            },
            body: JSON.stringify({ order })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
       

    },[currentUser])

    useEffect(() => {
        if(!!!currentUser) return;
        fetch(`${API}/cart/user/${currentUser.user._id}`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    const items = data.products.products.map(item => {
                        return {
                            img: item.product.largeImage1,
                            title: item.product.product.title,
                            price: item.product.product.price,
                            _id: item.product._id,
                            qty: item.qty,
                        }
                    })
                    updateCart(dispatchCart, items)
                }else{
                    console.log(data)
                }
            })
            .catch(error => console.log(error))
    },[currentUser])



    return (
        <ShopProductsContext.Provider 
            value={{currentUser,setCurrentUser, loading,
                    dispatchCart, cartHidden, setCartHidden, cart, autheticate}}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider