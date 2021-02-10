export const updateShopProducts = (dispatchProducts, products) => {
    dispatchProducts({
        type: "UPDATE_SHOP_PRODUCTS",
        products
    })
}