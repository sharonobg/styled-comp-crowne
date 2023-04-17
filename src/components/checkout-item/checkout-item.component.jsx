//import {useContext } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';
import {reduceItemQuantity, clearItem, addItemToCart} from '../../store/cart/cart.action';
import {ItemName,ItemsContainerWrapper,ItemDetailsImgContainer,ItemDetailsImg,CheckoutItemsContainer, ItemsContainer,ItemDetails,ChevronContainer,ChevronIcon,CheckoutButton} from './checkout-item.styles';
const CheckoutItem = ({cartItem}) => {
    const cartItems = useSelector(selectCartItems);
    console.log('cartItems from checkout item: ', {cartItem})
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const reduceItemQuantityHandler = () => dispatch(reduceItemQuantity(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItem(cartItems, cartItem));
    return(
            <CheckoutItemsContainer>
                <ItemsContainer>
                      <ItemsContainerWrapper>
                        <ItemDetails>
                            <ItemDetailsImgContainer as='span'><ItemDetailsImg alt={`${name}`} src={imageUrl} /></ItemDetailsImgContainer>
                            <ItemName as='span'>{name}</ItemName>
                            <ChevronContainer>
                            <ChevronIcon onClick={reduceItemQuantityHandler}>&#8249;</ChevronIcon>{quantity}<ChevronIcon onClick={addItemToCartHandler}>&#8250;</ChevronIcon>
                            </ChevronContainer> 
                            <span className="totalPr">{cartItem.totalPrice}</span>
                            <span>{price}</span>
                            <CheckoutButton onClick={clearItemHandler}>Clear</CheckoutButton>
                        </ItemDetails>
                        
                        </ItemsContainerWrapper>
               
            </ItemsContainer>
</CheckoutItemsContainer>
    )
}
export default CheckoutItem