//import {useContext} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import{selectCartItems} from '../../store/cart/cart.selector'
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate('/checkout'); 
        //toggleIsCartOpen();
    }

    return(
            <CartDropdownContainer>
            
                <CartItems>
                    {cartItems.length?(
                        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                    ):(<EmptyMessage>Your cart is empty</EmptyMessage>)
                    }
                    
                </CartItems>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} type='button' onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
        
    );
};
export default CartDropdown;