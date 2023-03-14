import {CartItemContImg,CartItemContainer,ItemDetails,Name} from './cart-item.styles';


const CartItem = ({cartItem}) => {
    
    const {name,imageUrl,price, quantity} = cartItem;
    
    return(
        <CartItemContainer>
            <CartItemContImg src={imageUrl} alt={`${name}`}></CartItemContImg>
            <ItemDetails>
            <Name key="id" className='name'>{name}</Name>
            <span className="chevron">{quantity}x</span> 
            <span>${price}</span>
            </ItemDetails>
            
            
        </CartItemContainer>
        
    )
}

export default CartItem;