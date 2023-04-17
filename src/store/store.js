import {compose, createStore, applyMiddleware} from 'redux';
//testing/removing this import by making out own middlewar - logger is middleware: 
//import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//testing/removing this import by making out own middleware
const loggerMiddleware =(store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    console.log('type',action.type);
    console.log('payload',action.payload);
    console.log('currentState',store.getState());

    next(action);
    console.log('next state',store.getState() );
}
// root-reducer
//can be created with only rootReducer
//to be useful include the logger
const middleWares = [loggerMiddleware];

//compose passes multiple functions left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

//pass middle wares 3rd (second is optional)
export const store = createStore(rootReducer, undefined, composedEnhancers);
//const store = createStore(makeRootReducer(),initialState,composedEnhancers);