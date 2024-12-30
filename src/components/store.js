import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/Add-Cart/AddCartSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,  
  },
});

export default store;
