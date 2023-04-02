import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutContainer,CartTotalCont, CheckoutButton,ItemDetailsHeader,ItemDetailsHeaderSpan} from './checkout.styles';

const Checkout = () => {
   
    const {cartTotal} = useContext(CartContext);
    
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
            <CheckoutItem />
            
            <CartTotalCont>
                Total Price: ${cartTotal}
                <CheckoutButton>PLACE ORDER</CheckoutButton>
            </CartTotalCont>
        </CheckoutContainer>   
    )  
}


export default Checkout;