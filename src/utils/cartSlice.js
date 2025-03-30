import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // earlier we must had not mutate the state
      // now we have to mutate the store
      // at that time develpers were making the copy of store and mutate that
      // now Redux doind the same  thing behind the scene using immer.js
      // It is copying store data and make changes and return the difference

      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, item) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(state); // will not show data properly
      console.log(current(state)); // this way we can see data properly

      // state.items = []; won't work here
      // because we are not just mutating the state we are adding the reference to it.
      // it will change the local variable only

      // RTK ==> either mutate the existing state or return a new state
      // we can mutate like this
      state.items.length = 0;
      // or
      // return { items: [] }; // this will also work, because this new [] will be replaced inside originalState = {items: ["pizza"]} with { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
