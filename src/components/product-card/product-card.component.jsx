import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';

import{ProductCardContainer,ProductCardImg,ProductCardFooter,ProductCardName,ProductCardPrice,ProductCardButtonContainer} from './product-card.styles';

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    
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