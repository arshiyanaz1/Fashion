import { createStore,applyMiddleware  } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import cartItems from "../reducer/cartItemReducer";
import {persistReducer,persistStore} from 'redux-persist';/* redux-persist/es/persistReducer */

const persistConfig = {
    timeout: 1000,
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartItems)

export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
  }

/* 
  import { createStore } from "redux";
import cartItems from "../reducer/cartItem";

export default store=createStore(cartItems) */
//export default store = createStore(cartItems)