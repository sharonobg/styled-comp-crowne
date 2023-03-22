//import CategoriesData from '../categories-data/categories-data.component';
import {Link} from 'react-router-dom';
import {DirectoryItemContainer,Body,BackgroundImg} from './directory-item.styles';

const DirectoryItem  = ({ category }) => {
    const {imageUrl, title } = category;
    return ( 
            <DirectoryItemContainer>
                <BackgroundImg imageUrl={imageUrl} />
                <Body>
                <h2><Link to ={`/shop/${title}`}>{title.toUpperCase()}</Link></h2>
                  
                  <p>Shop Now</p>
                </Body>
              </DirectoryItemContainer>
            ) 
}


export default DirectoryItem