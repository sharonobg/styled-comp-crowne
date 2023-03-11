 
import{useState} from 'react';
import  FormInput from '../form-input/form-input.component';
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils" ;
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''   
}

const SignInForm = () => {
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {email, password}= formFields;
    const resetFormFields= () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };
    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(user);
            resetFormFields();
        } catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('wrong password or email');
                break;
                case 'auth/user-not-found':
                    alert('no user associate with this email');
                break;
                default:
                console.log(error);
            }
        } 
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,[name]: value})
    }
    return(
        <div className='sign-in-form-container'>
            <h2>I already have an account</h2>
            <span >Sign in with your email and password</span>
            <form onSubmit={handleSignInSubmit}>
                
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleFormChange} 
                    name="email" 
                    value={email} 
                />
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleFormChange} 
                    name="password" 
                    value={password} 
                />
                <div className='buttons-container'>
                <Button type="submit">Sign In</Button>
                <Button buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
};
export default SignInForm;