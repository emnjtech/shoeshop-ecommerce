import { ADD_T0_CART, DEC_QTY, EMPTY_CART, INC_QTY, REMOVE_FROM_CART,} from "./commerce-action";

export const commerceReducer = (state,action) => {
    switch (action.type) {
        case ADD_T0_CART:
            const itemExists = state.basket.find(
                (item) => item.id === action.payload.id // && item.size === action.payload.size
            )
           
            let newItem 
            if (!itemExists){
                
                 newItem = [...state.basket, action.payload]  // ...state, basket:  [...state.basket, action.payload] 
                
            }
            else {
               
                  newItem = state.basket.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : { ...item })
                
            }
            return {
                ...state,
                basket:newItem
            }
         
        case REMOVE_FROM_CART:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.payload}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

            
       /*     return {
                ...state,
                basket: state.basket.filter( item => item.id !== action.payload)
            } */
            
        case INC_QTY:
            return {
                ...state,
                basket: state.basket.map(item =>  item.id === action.payload? {...item, qty: item.qty + 1} : {...item} )
            }
        case DEC_QTY:
            return {
                ...state,
                basket: state.basket.map(item => item.id === action.payload ? { ...item, qty: item.qty - 1 } : { ...item })
            }
        case EMPTY_CART:
            return {
                ...state,
                basket: []
                 
            }

        default:
            return state
    }

}

/* 
            let newBasket = [...state.basket]

            if (index > 0) {
                newBasket.splice(index,1)
 
            }
            else {
                alert("can't remove product")
            } 
            
            
             ...state,
                basket: state.basket.filter(item => item.id !== action.payload)*/