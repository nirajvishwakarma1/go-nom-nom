import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "Test",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    claerItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, claerItems } = testSlice.actions;
export default testSlice.reducer;
