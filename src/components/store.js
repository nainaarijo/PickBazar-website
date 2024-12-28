import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/Add-Cart/AddCartSlice'; 

const store = configureStore({
  reducer: {
    Cart: cartReducer, 
  },
});

export default store;
