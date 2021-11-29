import { createStore } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartItems from "../reducer/cartItem";
import {persistReducer,persistStore} from 'redux-persist';/* redux-persist/es/persistReducer */

const persistConfig = {
    timeout: 1000,
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartItems)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }

/* 
  import { createStore } from "redux";
import cartItems from "../reducer/cartItem";

export default store=createStore(cartItems) */
//export default store = createStore(cartItems)