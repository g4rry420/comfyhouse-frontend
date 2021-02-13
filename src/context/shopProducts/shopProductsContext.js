import React, { createContext, useReducer, useState,useEffect } from 'react'
// import logger from "use-reducer-logger"

import { cartReducer } from "../reducers/cart-reducer/cart-reducer"
// import { productReducer } from "../reducers/products-reducer/products-reducer"
// import { auth, createUserProfileDocument, firestore, convertShopProductsSnapshotToMap, createCartDocuments  }
//      from "../../firebase/firebase.utils"
// import { updateShopProducts } from "../reducers/products-reducer/products-actions"
// import { updateCart } from "../reducers/cart-reducer/cart-actions"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {  
    const [loading ,setLoading] = useState(true);

    const [cartHidden, setCartHidden] = useState(true);

    const [currentUser, setCurrentUser] = useState(null);

    // const [products, dispatchProducts] = useReducer(
    //     // process.env.NODE_ENV === "development" ? logger(productReducer) : productReducer
    //     productReducer
    //     ,{ shopProducts: null });

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
        console.log(" I am called ")
        if(window !== undefined){
            if(localStorage.getItem("comfyHouse_jwt")){
                const data = JSON.parse(localStorage.getItem("comfyHouse_jwt"))
                setCurrentUser(data)
            }
        }
    }, [currentUser])
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(async userStatus => {
    //         if(userStatus){
    //             if (cart.length){
    //                 await createCartDocuments(userStatus, cart);
    //             }
    //         }
    //     })

    //     return () => {
    //         unsubscribe();
    //     }

    // }, [cart])

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(async userStatus => {
    //         if(userStatus){
    //             const cartRef = firestore.collection("cart").doc(`${userStatus.uid}`);
    //             cartRef.get().then(async doc => {
    //                 if(doc.exists){
    //                     updateCart(dispatchCart ,objectsToArray(doc.data()))
    //                 }
    //             })
    //         }
    //     })

    //     return () => {
    //         unsubscribe();
    //     }

    // }, [dispatchCart])

  


    return (
        <ShopProductsContext.Provider 
            value={{currentUser,setCurrentUser, loading,
                    dispatchCart, cartHidden, setCartHidden, cart, autheticate}}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider