import{createContext,useEffect,useReducer} from 'react';
import {onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// actual value you want to access
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});
//reducer actions
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}
//adding reducer
const userReducer = (state,action) => {
    console.log('dispatched')
    console.log('action',action);
    const {type,payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`)

    }
}
const INITIAL_STATE = {
    currentUser : null
}
//actual functional component that receives children
export const UserProvider = ({children}) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    // also valid - but destructered above: 
    //const { currentUser} = state
    console.log('currentUser',currentUser);
    const setCurrentUser = (user) => {
        dispatch( {type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user} );
    }
    const value = {currentUser,setCurrentUser}
    //signOutUser()
    useEffect(() => {
        const unsubscribe  = onAuthStateChangedListener( (user)=>{
           if(user){
            createUserDocumentFromAuth(user);
           }
            setCurrentUser(user);
            
        });
        return unsubscribe;//cleans up
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
