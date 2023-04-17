import { CART_ACTION_TYPES } from "./cart.types";
//export const CATEGORIES_INITIAL_STATE = {categories:[],};
export const CART_INITIAL_STATE = {
    cartItems:[],
    isCartOpen:false,
};
//export const categoriesReducer = 
//(state = CATEGORIES_INITIAL_STATE, action = {} ) => {   
 //   const{ type,payload} = action;

export const cartReducer = 
(state = CART_INITIAL_STATE,action = {} ) => {
    const {type,payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state,
                isCartOpen:payload}
            
        case CART_ACTION_TYPES.SET_CART:
            return{
                ...state,
                cartItems: payload
            }
        default:
            return state;
    };
};

