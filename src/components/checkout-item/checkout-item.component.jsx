import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import {ItemDetailsImg,CheckoutItemsContainer, ItemDetails,ChevronContainer,ChevronIcon} from './checkout-item.styles';

const CheckoutItem = () => {
    const {cartItems,addItemToCart,reduceItemFromCart,clearItem} 
    = useContext(CartContext);
    return(
<CheckoutItemsContainer>
<div className='checkout-items'>
    
               { cartItems.map((cartItem) => {
                const {id,name,imageUrl,price, quantity} = cartItem;
                    return(
                      <div key={id}>
                        <ItemDetails>
                            <span className='img'><ItemDetailsImg alt='' src={imageUrl} /></span>
                            <span className='name'>{name}</span>
                            <ChevronContainer>
                            <ChevronIcon onClick={() => reduceItemFromCart(cartItem)}>&#8249;</ChevronIcon>{quantity}<ChevronIcon onClick={() =>addItemToCart(cartItem)}>&#8250;</ChevronIcon>
                            </ChevronContainer> 
                            <span className="totalPr">{cartItem.totalPrice}</span>
                            <span>${price}</span>
                            
                            <Button onClick={() => clearItem(cartItem)}>X</Button>
                        </ItemDetails>
                        
                        </div>
                        
                    ) 
                })}
            </div>
</CheckoutItemsContainer>
    )
}
export default CheckoutItem