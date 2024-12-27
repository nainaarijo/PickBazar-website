import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const addCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add item to cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item from cart
    },
    clearCart: (state) => {
      state.items = []; // Clear all items
    },
  },
});

export const { addItem, removeItem, clearCart } = addCartSlice.actions;

export default addCartSlice.reducer;




