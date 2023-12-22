import CartSlice from '../Slices/CartSlice';
import { configureStore } from '@reduxjs/toolkit';
import TokenSlice from '../Slices/TokenSlice';


const store = configureStore({
    reducer:{
        cart: CartSlice,
        token: TokenSlice
    }
})

export default store;