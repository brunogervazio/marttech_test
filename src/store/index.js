import {createStore, combineReducers} from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import checkoutReducer from './checkout/checkoutReducer';
import shoppingsReducer from './shoppings/shoppingsReducer';


const rootReducer = combineReducers({
    shoppings: shoppingsReducer,
    checkout: checkoutReducer,
});

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store)