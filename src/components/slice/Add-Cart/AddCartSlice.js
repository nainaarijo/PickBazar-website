import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity; 
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 }); 
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);  
    },
    clearCart: (state) => {
      state.items = [];  
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1; 
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1; 
      } else if (itemIndex >= 0 && state.items[itemIndex].quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id); 
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
