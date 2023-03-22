import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles';
import { CartIconContainer, ItemCount, ShoppingIconImg } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,totals} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
           <ShoppingIconImg class="shopping-icon"></ShoppingIconImg>
            <ItemCount>{totals}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;