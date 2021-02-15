import API from "../../../API"

export const updateCart = (dispatchCart, items) => {
    dispatchCart({
        type: "UPDATE_CART",
        items
    })
}


export const toggleCartDropdown = (dispatchCart) => {
    dispatchCart({
        type: "TOGGLE_CART_DROPDOWN"
    })
}

export const addItemToCart = (dispatchCart, product, currentUser) => {

    if(currentUser){

        const products = {
            product: product._id,
            qty: 1
        }

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
            .then(data => {
                if(data.success){
                    console.log(data)
                    dispatchCart({
                        type: "ADD_ITEM_TO_CART",
                        product
                    })
                }else{
                    console.log(data)
                }
            })
            .catch(error => console.log(error))
    }else{
        dispatchCart({
            type: "ADD_ITEM_TO_CART",
            product
        })
    }
}

export const removeItem = (dispatchCart, _id, currentUser) => {

    const productId = _id;

    fetch(`${API}/cart/remove/${currentUser.user._id}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ productId })
    })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                console.log(data)
                dispatchCart({
                    type: "REMOVE_ITEM",
                    _id
                })
            }
        })
        .catch(err => console.log(err))
}

export const qtyIncrease = (dispatchCart, _id, currentUser) => {

    const dataToSend = {
        productId: _id
    }

    fetch(`${API}/cart/increase/qty/${currentUser.user._id}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log(data)
            dispatchCart({
                type: "QTY_INCREASE",
                _id
            })
        }else{
            console.log(data)
        }
    })
    .catch(err => console.log(err))
}

export const qtyDecrease = (dispatchCart, product, currentUser) => {
    const dataToSend = {
        productId: product._id
    }

    fetch(`${API}/cart/decrease/qty/${currentUser.user._id}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log(data)
            dispatchCart({
                type: "QTY_DECREASE",
                product
            })
        }else{
            console.log(data)
        }
    })
    .catch(err => console.log(err))
}

export const emptyCart = (dispatchCart) => {
    dispatchCart({
        type: "EMPTY_CART"
    })
}