import CartSlice from '../Slices/CartSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer:{
        cart: CartSlice,
    }
})

export default store;