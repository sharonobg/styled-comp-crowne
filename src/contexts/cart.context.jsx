import{createContext, useState,useEffect} from 'react';

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

export const CartContext = createContext({
    isCartOpen:true,
    setIsCartOpen:() => {},
    addItemToCart: ()=> {},
    reduceCartItem:()=> {},
    removeItem: ()=> {},
    cartTotal: 0,
    cartCount:0,

    
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal] = useState(0);
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    };
    
    //filter out the item you want to remove by its id
    const reduceItemQuantity = (itemToReduce) => {
        setCartItems(reduceCartItem(cartItems,itemToReduce));
    };
    
    //after removing item - return new arry of cartItems with out it
    const clearItem = (productToRemove) => {
        setCartItems(removeItem(cartItems,productToRemove));
    }
    

    //this is for the icon-component icon has total number of cart items
    useEffect(() => {
    const cartCount = cartItems.reduce( (total, cartItem) => total + cartItem.quantity,0)
       setCartCount(cartCount);
        },[cartItems]);
    useEffect(() => {
        const cartTotal = cartItems.reduce((prevTotal, cartItem) =>  prevTotal + cartItem.quantity * cartItem.price, 0);
        setCartTotal(cartTotal);
    },[cartItems]);

    const value = {
        isCartOpen,setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        cartTotal,
        reduceCartItem,
        reduceItemQuantity,
        clearItem,
        setCartTotal
    };
    return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
};
