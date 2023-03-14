import {BaseButton,GoogleSignInButton,InvertedButton} from './button.styles';

// 3 types of buttons on site: default, inverted, google sign in

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>(
    {//RETURN MAP OBJECT PASSING BUTTON TYPE VALUE
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
    }[buttonType]
)
const Button = ({children,buttonType,...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return  <CustomButton {...otherProps}>{children}</CustomButton>
    
};
export default Button