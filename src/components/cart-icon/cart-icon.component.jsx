import {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles';
import { CartIconContainer, ItemCount, ShoppingIconImg } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,totals} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
           {/*<ShoppingIcon className='shopping-icon' />*/}
           <ShoppingIconImg as={ShoppingIcon}></ShoppingIconImg>
            <ItemCount as='span'>{totals}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;