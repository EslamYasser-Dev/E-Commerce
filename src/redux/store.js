import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./AmazonSlice";

export const store = configureStore({
  reducer: { amazonReducer },
});
