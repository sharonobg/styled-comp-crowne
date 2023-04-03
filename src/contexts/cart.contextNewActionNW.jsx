import{createContext,useReducer} from 'react';

const addCartItem = (cartItems, productToAdd) => {
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
const reduceCartItem = (cartItems,itemToReduce) => {
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

export const CART_ACTION_TYPES = {
    SET_CART_UPDATES:'SET_CART_UPDATES',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_CART_COUNT : 'SET_CART_COUNT',
    SET_CART_TOTAL : 'SET_CART_TOTAL',

}
const INITIAL_STATE = {
    cartItems:[],
    cartCount:0,
    cartTotal:0,
    isCartOpen:false,
}
//adding reducer
const cartReducer = (state,action) => {
    console.log('dispatched')
    console.log('action',action);
    const {type, payload} = action;
    switch(action.type){
        
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                message1: action.payload.message1
            }
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                //return {...state, message2: action.payload.message2}
                message2: action.payload.message2
            }
        case CART_ACTION_TYPES.SET_CART_UPDATES:
            return{
                    ...state, ...action.payload
            }
        default:
            throw new Error(`Unhandled type ${type} found in cartReducer`)
    };
}
export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:() => {},
    addItemToCart: ()=> {},
    reduceCartItem:()=> {},
    removeItem: ()=> {},
    cartTotal: 0,
    cartCount:0,   
});

export const CartProvider = ({children}) => {
    
    const [{cartCount,cartTotal,cartItems,isCartOpen,setIsCartOpen},dispatch]  = useReducer(cartReducer,INITIAL_STATE);
    //const [cartItems,setCartItems] = useState([]);
    //const [cartCount,setCartCount]=useState(0);
    //const [cartTotal,setCartTotal] = useState(0);
    
    const updateCartItemsReducer = (newCartItems) => {
        console.log('cartItems',cartItems);
        console.log('cartCount',cartCount);
        //toggle isCartOpen
        
        //generate a new cart count
        const newCartCount = newCartItems.reduce( (total, cartItem) => total + cartItem.quantity,0);
        //generate a new cart total
        const newCartTotal = newCartItems.reduce((prevTotal, cartItem) =>  prevTotal + cartItem.quantity * cartItem.price, 0);
        
        //dispatch a new action with payload: new cart items, new cart coutn,  new cart total
        dispatch( {   type: CART_ACTION_TYPES.SET_CART_UPDATES,
            //type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload:{
                message1:null,
                message2: {
                    cartItems: newCartItems,
                    cartCount: newCartCount,
                    cartTotal: newCartTotal,
                },
            }
            //type: CART_ACTION_TYPES.SET_CART_ITEMS,
            
        });
    };
    console.log('cartItems after',cartItems);
    console.log('cartCount after',cartCount);
    //const toggleIsCartOpen = () => setIsCartOpen((previous) => !previous);
    const toggleIsCartOpen = () => setIsCartOpen((isCartOpen) => !isCartOpen);
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems,productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    console.log('cartItems',cartItems);
    //filter out the item you want to remove by its id
    const reduceItemQuantity = (itemToReduce) => {
        const newCartItems = reduceCartItem(cartItems,itemToReduce);
        updateCartItemsReducer(newCartItems);
    };
    
    //after removing item - return new arry of cartItems with out it
    const clearItem = (productToRemove) => {
        const newCartItems = removeItem(cartItems,productToRemove);
        updateCartItemsReducer(newCartItems);
    }
    //this is for the icon-component icon has total number of cart items
   //useEffect(() => {
   //const cartCount = cartItems.reduce( (total, //cartItem) => total + cartItem.quantity,0)
   //   setCartCount(cartCount);
   //    },[cartItems]);
   //useEffect(() => {
   //    const cartTotal = cartItems.reduce((prevTotal, cartItem) =>  prevTotal + cartItem.quantity * cartItem.price, 0);
   //    setCartTotal(cartTotal);
   //},[cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        toggleIsCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        reduceCartItem,
        reduceItemQuantity,
        clearItem,
        //setCartTotal
    };
    return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
};
