import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import {CategoryContainer,CategoryTitle} from './category.styles';

const Category = () => {
    const{category} = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap  = useSelector(selectCategoriesMap);
    //can do but too heavy: const products = categoriesMap[category];
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect( () => {
        console.log('effect fired calling setProducts');
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