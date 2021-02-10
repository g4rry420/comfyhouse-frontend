import React, { createContext, useReducer, useState,useEffect } from 'react'
import logger from "use-reducer-logger"

import { cartReducer } from "../reducers/cart-reducer/cart-reducer"
import { productReducer } from "../reducers/products-reducer/products-reducer"
import { auth, createUserProfileDocument, firestore, convertShopProductsSnapshotToMap, createCartDocuments  }
     from "../../firebase/firebase.utils"
import { updateShopProducts } from "../reducers/products-reducer/products-actions"
import { updateCart } from "../reducers/cart-reducer/cart-actions"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {  
    const [loading ,setLoading] = useState(true);

    const [cartHidden, setCartHidden] = useState(true);

    const [currentUser, setCurrentUser] = useState(null);

    const [products, dispatchProducts] = useReducer(
        process.env.NODE_ENV === "development" ? logger(productReducer) : productReducer
        ,{ shopProducts: null });

    const [cart, dispatchCart] = useReducer(
        process.env.NODE_ENV === "development" ? logger(cartReducer) : cartReducer, []
        )
    

    useEffect(() => {
        const  collectionRef = firestore.collection("shopProducts").orderBy("id");
        
        collectionRef.get().then(async snapshot => {
            const shopProductsMap = await convertShopProductsSnapshotToMap(snapshot);
            updateShopProducts(dispatchProducts, shopProductsMap);
            setLoading(false);
        })
    }, [dispatchProducts]) 

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
 
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(userAuth);
         })

         return () => {
             unsubcribe();
         }

    },[])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userStatus => {
            if(userStatus){
                if (cart.length){
                    await createCartDocuments(userStatus, cart);
                }
            }
        })

        return () => {
            unsubscribe();
        }

    }, [cart])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userStatus => {
            if(userStatus){
                const cartRef = firestore.collection("cart").doc(`${userStatus.uid}`);
                cartRef.get().then(async doc => {
                    if(doc.exists){
                        updateCart(dispatchCart ,objectsToArray(doc.data()))
                    }
                })
            }
        })

        return () => {
            unsubscribe();
        }

    }, [dispatchCart])

    const objectsToArray = (dataForObjects) => {
        return Object.keys(dataForObjects).map(key => dataForObjects[key])
    };

    const sortFunction = () => (a,b) => {
        return a.id - b.id || a.title.localCompare(b.title);
    }


    return (
        <ShopProductsContext.Provider 
            value={{products,currentUser,setCurrentUser, loading, objectsToArray,sortFunction,
                     dispatchProducts, dispatchCart, cartHidden, setCartHidden, cart}}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider