import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
//creating Redux Store

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
