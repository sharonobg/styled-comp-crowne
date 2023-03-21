import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import {ItemName,ItemsContainerWrapper,ItemDetailsImgContainer,ItemDetailsImg,CheckoutItemsContainer, ItemsContainer,ItemDetails,ChevronContainer,ChevronIcon,CheckoutButton} from './checkout-item.styles';

const CheckoutItem = () => {
    const {cartItems,addItemToCart,reduceItemFromCart,clearItem} 
    = useContext(CartContext);
    return(
<CheckoutItemsContainer>
<ItemsContainer>
    
               { cartItems.map((cartItem) => {
                const {id,name,imageUrl,price, quantity} = cartItem;
                    return(
                      <ItemsContainerWrapper key={id}>
                        <ItemDetails>
                            <ItemDetailsImgContainer as='span'><ItemDetailsImg alt='' src={imageUrl} /></ItemDetailsImgContainer>
                            <ItemName as='span'>{name}</ItemName>
                            <ChevronContainer>
                            <ChevronIcon onClick={() => reduceItemFromCart(cartItem)}>&#8249;</ChevronIcon>{quantity}<ChevronIcon onClick={() =>addItemToCart(cartItem)}>&#8250;</ChevronIcon>
                            </ChevronContainer> 
                            <span className="totalPr">{cartItem.totalPrice}</span>
                            <span>${price}</span>
                            
                            <CheckoutButton onClick={() => clearItem(cartItem)}>X</CheckoutButton>
                        </ItemDetails>
                        
                        </ItemsContainerWrapper>
                        
                    ) 
                })}
            </ItemsContainer>
</CheckoutItemsContainer>
    )
}
export default CheckoutItem