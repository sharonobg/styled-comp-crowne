
import {Link} from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component'
import {CategoryPreviewContainer,CategoryPreviewTitle,CategoryTitle,Preview} from './category-preview.styles';

const CategoryPreview = ({title,products}) => {
    return (
        <CategoryPreviewContainer>
            <h2><CategoryPreviewTitle as='span'><Link to ={title}>{title.toUpperCase()}</Link></CategoryPreviewTitle></h2>
            <Preview>
                {
                    products
                    .filter( (_,idx) => idx < 4)
                    .map( (product) => (
                        <ProductCard key={product.id} product={product} />
                    ))

                }
            </Preview>
        </CategoryPreviewContainer>
    ); 
}

export default CategoryPreview;