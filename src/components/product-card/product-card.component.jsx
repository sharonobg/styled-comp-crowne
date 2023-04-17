//import { useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import  {addItemToCart } from '../../store/cart/cart.action';
import{ProductCardContainer,ProductCardImg,ProductCardFooter,ProductCardName,ProductCardPrice,ProductCardButtonContainer} from './product-card.styles';

const ProductCard = ( {product} ) => {
    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
    
    return(
        <ProductCardContainer>
            <ProductCardImg src={imageUrl} alt={`${name}`} />
            <ProductCardFooter>
                <ProductCardName as='span'>{name}</ProductCardName>
                <ProductCardPrice as='span'>{price}</ProductCardPrice>
            </ProductCardFooter>
        <ProductCardButtonContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardButtonContainer>
    </ProductCardContainer>)
}

export default ProductCard