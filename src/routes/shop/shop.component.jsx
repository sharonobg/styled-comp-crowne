import{useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import {useDispatch  } from 'react-redux';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';
import { getCategoriesAndDocments} from '../../utils/firebase/firebase.utils.js';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {

    const dispatch = useDispatch();
    //const [categoriesMap, setCategoriesMap] = useState({});
    //const categoriesMap = useSelector(setCategoriesMap)
   //you can't put a promise inside useEffect so:since getCategoriesAndDocments returns a promise -  make a new async inside the callback then callback from within like so:
    useEffect(() => {
        const getCategoriesMap = async ()=> {
            const categoryMap = await getCategoriesAndDocments('categories');
            //console.log(categoryMap);
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();

    },[]);


    return (
     <Routes>
        <Route index element ={<CategoriesPreview />} />
        <Route path=':category' element ={<Category />} />
     </Routes> 
    )
};
export default Shop;