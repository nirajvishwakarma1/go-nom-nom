import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice";

const testStore = configureStore({
  reducer: {
    test: testReducer,
  },
});

export default testStore;
