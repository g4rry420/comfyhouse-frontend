export const cartReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_CART":
            return [
                ...state,
                ...action.items
            ]
        
        case "EMPTY_CART":
            return []    
            
        case "ADD_ITEM_TO_CART":
            if(!state.map(item => item._id).includes(action.product._id)){
                return [...state,{
                    img: action.product.largeImage[0].largeImage,
                    title: action.product.product.title,
                    price: action.product.product.price,
                    _id: action.product._id,
                    qty: 1,
                }]
            }else{
                return state.filter(item => {
                        if(item._id === action.product._id){
                            return item.qty++;
                        }
                        return item;
                    })
            }
        
        case "REMOVE_ITEM":
            return state.filter(item => item._id !== action._id)
        
        case "QTY_INCREASE":
            return state.filter(item => {
                if(item._id === action._id){
                    return item.qty++;
                }
                return item;
            })
         
        case "QTY_DECREASE":
            if(action.product.qty === 1){
                return state.filter(item => item._id !== action.product._id)
            }
            
            return state.filter(item => {
                if(item._id === action.product._id){
                    return item.qty--;
                }
                return item;
            })
            

        default:
            return state
    }
}