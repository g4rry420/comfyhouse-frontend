export const cartReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "UPDATE_CART":
            return [
                ...state,
                ...action.items
            ]
        
        case "EMPTY_CART":
            return []    
            
        case "ADD_ITEM_TO_CART":
            if(!state.map(item => item.id).includes(action.product.id)){
                return [...state,{
                    img: action.product.item[0].largeImage1,
                    title: action.product.title,
                    price: action.product.price,
                    id: action.product.id,
                    qty: 1,
                }]
            }else{
                return state.filter(item => {
                        if(item.id === action.product.id){
                            return item.qty++;
                        }
                        return item;
                    })
            }
        
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.id)
        
        case "QTY_INCREASE":
            return state.filter(item => {
                if(item.id === action.id){
                    return item.qty++;
                }
                return item;
            })
         
        case "QTY_DECREASE":
            if(action.product.qty === 1){
                return state.filter(item => item.id !== action.product.id)
            }
            
            return state.filter(item => {
                if(item.id === action.product.id){
                    return item.qty--;
                }
                return item;
            })
            

        default:
            return state
    }
}