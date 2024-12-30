import { createSlice } from '@reduxjs/toolkit';

// Load cart items from localStorage if available
const initialState = {
  items: [],  // Cart items will be stored here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If item already exists, update quantity
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);  // Removes item from cart
    },
    clearCart: (state) => {
      state.items = [];  // Clears all items from the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
