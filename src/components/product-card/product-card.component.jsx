import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import{InvertedButton} from '../button/button.styles';

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
        <ProductCardButtonContainer><InvertedButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</InvertedButton></ProductCardButtonContainer>
    </ProductCardContainer>)
}

export default ProductCard