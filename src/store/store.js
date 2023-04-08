import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// root-reducer
//can be created with only rootReducer
//to be useful include the logger
const middleWares = [logger];

//compose passes multiple functions left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

//pass middle wares 3rd (second is optional)
export const store = createStore(rootReducer, undefined, composedEnhancers);