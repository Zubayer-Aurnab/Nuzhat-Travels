import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./Features/NavbarSlice/NavbarSlice";
const store = configureStore({
    reducer: {
        navbar: NavbarSlice
    },
});
export default store;