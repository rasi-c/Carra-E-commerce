import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reduxCart.js"

export const Store = configureStore({
    reducer:{
        cart : cartReducer,
    }
})