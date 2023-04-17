import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

//helper functions for action creators

const addCartItem = (cartItems, productToAdd) => {
//const cartItems = useSelector(selectCartItems);
    const existingCartItem = cartItems.find(
      (cartItem)=>cartItem.id === productToAdd.id
      );
      //console.log(productToAdd);
      if(existingCartItem){
          return cartItems.map( (cartItem) => 
          cartItem.id === productToAdd.id 
          ? {...cartItem, 
              quantity:cartItem.quantity + 1,
              totalPrice:cartItem.quantity*cartItem.price+cartItem.price
          }
          :{...cartItem ,totalPrice:cartItem.price}
          ); 
      }
      return(
          [...cartItems,
              {...productToAdd,
                  quantity:1,
                  totalPrice:productToAdd.price   
          }]
          
        );
  };
  //on click of the less than (left of quantity) reduce the quantity by 1
  const reduceCartItem = (cartItems, itemToReduce) => {
      const existingCartItem = cartItems.find(
          (cartItem)=>cartItem.id === itemToReduce.id
          );
      if(existingCartItem.quantity ===1){
              return(cartItems.filter(cartItem => cartItem.id !== itemToReduce.id))
      }
      return cartItems.map( (cartItem) => 
      cartItem.id === itemToReduce.id
      ? {...cartItem, 
          quantity: cartItem.quantity - 1,
          totalPrice:cartItem.totalPrice-cartItem.price}
      :  cartItem
      )
  };
  //method removeItem completely: filter out the item you want to remove by its id
  const removeItem = (cartItems, productToRemove) => {
      return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  };


//action creators
export const setIsCartOpen = (boolean)=>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART,newCartItems);
};
//console.log('cartItems',cartItems);
export const reduceItemQuantity = (cartItems, itemToReduce) => {
    const newCartItems = reduceCartItem( cartItems,itemToReduce);
    return createAction(CART_ACTION_TYPES.SET_CART,newCartItems);
};

export const clearItem = (cartItems, productToRemove) => {
    const newCartItems = removeItem(cartItems,productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART,newCartItems);
}

/*export const setCart = (newCartItems) => {
    
    createAction(CART_ACTION_TYPES.SET_CART,
        {   
            cartItems: newCartItems,
            //cartCount: newCartCount,
            //cartTotal: newCartTotal,
        } 
        )
       
}*/