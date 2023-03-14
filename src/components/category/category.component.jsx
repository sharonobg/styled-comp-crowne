import {useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import {CategoryContainer,CategoryTitle} from './category.styles';

const Category = () => {
    const{category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    //can do but too heavy: const products = categoriesMap[category];
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect( () => {
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);
    return(
        <>
        <CategoryTitle as='h2'>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
        
        {
            products && 
            products.map( (product)  => <ProductCard key = {product.id} product={product} />)
        }
        </CategoryContainer>
        </>
    )

};
export default Category;