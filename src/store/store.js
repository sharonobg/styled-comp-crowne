import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//testing/removing this import by making out own middlewar - logger is middleware: 
//import logger from 'redux-logger';
//moving custom middleware (alt to redux-logger) to store/middleware

import { rootReducer } from './root-reducer';
import {loggerMiddleware} from './middleware/logger';

const persistConfig = {
    key:'root',
    storage,
    blacklist: ['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

//can be created with only rootReducer
//to be useful include the logger
const middleWares = [process.env.NODE_ENV  !== 'production' && loggerMiddleware].filter(Boolean);

//compose passes multiple functions left to right
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//pass middle wares 3rd (second is optional)
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

//const store = createStore(makeRootReducer(),initialState,composedEnhancers);