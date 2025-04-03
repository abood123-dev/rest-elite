import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer:
  {
    Cart:cartSlice,
  }

})
export default store;
