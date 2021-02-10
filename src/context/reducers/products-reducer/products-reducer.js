export const productReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_SHOP_PRODUCTS":
            return{
                ...state,
                shopProducts: action.products
            }

        default:
            return state;
    }
}