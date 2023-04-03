import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles';
import { CartIconContainer, ItemCount, ShoppingIconImg } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext);
    const newtoggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={newtoggleIsCartOpen}>
           <ShoppingIconImg className="shopping-icon"></ShoppingIconImg>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;