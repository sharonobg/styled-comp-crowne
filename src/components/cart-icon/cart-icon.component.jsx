import { useDispatch,useSelector } from 'react-redux';
import {selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector';
import{setIsCartOpen} from '../../store/cart/cart.action';
import { CartIconContainer, ItemCount, ShoppingIconImg } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();
    const  cartCount = useSelector(selectCartCount);
    const  isCartOpen = useSelector(selectIsCartOpen);
   
    //const { isCartOpen, setIsCartOpen,cartCount} = useSelector(setCart);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
           <ShoppingIconImg className="shopping-icon"></ShoppingIconImg>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;