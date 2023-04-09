import{ Fragment, useContext } from 'react';
import  {Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import{ReactComponent as CrownLogo } from '../../assets/crown.svg';
//import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import { setCurrentUser } from '../../store/user/user.selector';
import CartIcon  from '../../components/cart-icon/cart-icon.component';
import CartDropdown  from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { LogoContainer, NavigationContainer, NavLinksContainer,NavLink } from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(setCurrentUser);
  //const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return(
      <Fragment>
      <NavigationContainer>
        
          <LogoContainer to='/'>
             <CrownLogo className='logo' />
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to ='/shop'>
                SHOP 
            </NavLink>
            <NavLink to ='/checkout'>
                CHECKOUT 
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
              ): (<NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinksContainer>
          { isCartOpen &&<CartDropdown />}
        
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }
  export default Navigation