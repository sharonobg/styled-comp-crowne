import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import{CartContext} from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer,CartItems,EmptyMessage,CartDropdownButton} from './cart-dropdown.styles';

const CartDropdown = () => {
    const {cartItems,isCartOpen,setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate('/checkout'); 
        toggleIsCartOpen();
    }
    
    return(
            <CartDropdownContainer>
            
                <CartItems>
                
                    {
                    cartItems.length?(cartItems.map((item) => 
                    (<CartItem key={item.id} cartItem={item} />
                    )))
                    :(<EmptyMessage>Your cart is empty</EmptyMessage>)
                    }
                    
                </CartItems>
                
                
            <CartDropdownButton onClick={gotoCheckoutHandler}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};
export default CartDropdown;