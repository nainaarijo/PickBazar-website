import { createSlice } from "@reduxjs/toolkit";

const FavirateSlice = createSlice({
  name: "Favirate",
  initialState: {
    Favire: [],
  },
  reducers: {
    faviratecard: (state, action) => {
      const Have = state.Favire.find((item) => item.id === action.payload.id);

      if (!Have) {
        
        state.Favire.push({ ...action.payload });
      }
    },
  },
});

export const { faviratecard } = FavirateSlice.actions;

export default FavirateSlice.reducer;
