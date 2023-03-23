//import CategoriesData from '../categories-data/categories-data.component';
//import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {DirectoryItemContainer,Body,BackgroundImg} from './directory-item.styles';

const DirectoryItem  = ({ category }) => {
    const {imageUrl, title,route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return ( 
            <DirectoryItemContainer onClick={onNavigateHandler}>
                <BackgroundImg imageUrl={imageUrl} />
                <Body>
                <h2>{title}</h2>
                  <p>Shop Now</p>
                </Body>
              </DirectoryItemContainer>
            ) 
}


export default DirectoryItem