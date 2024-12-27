import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/Add-Cart/AddCartSlice'; // make sure the path is correct

const store = configureStore({
  reducer: {
    Cart: cartReducer, // Cart is the name of the reducer slice
  },
});

export default store;
