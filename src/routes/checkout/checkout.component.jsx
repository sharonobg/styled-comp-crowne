import { useSelector } from 'react-redux';
import { selectCartTotal,selectCartItems } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutContainer,CartTotalCont, CheckoutButton,ItemDetailsHeader,ItemDetailsHeaderSpan} from './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    console.log('cartTotal',cartTotal);
    
    return(
        <CheckoutContainer>
            <ItemDetailsHeader>
                <ItemDetailsHeaderSpan>Product</ItemDetailsHeaderSpan>
                <ItemDetailsHeaderSpan>Description</ItemDetailsHeaderSpan>
                <ItemDetailsHeaderSpan>Quantity</ItemDetailsHeaderSpan>
                <ItemDetailsHeaderSpan>Item Total</ItemDetailsHeaderSpan>
                <ItemDetailsHeaderSpan>Price</ItemDetailsHeaderSpan>
                <ItemDetailsHeaderSpan>Remove</ItemDetailsHeaderSpan>
            </ItemDetailsHeader>
            { cartItems.map( (cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <CartTotalCont>
                Total Price: ${cartTotal}
                <CheckoutButton>PLACE ORDER</CheckoutButton>
            </CartTotalCont>
        </CheckoutContainer>   
    )  
}


export default Checkout;