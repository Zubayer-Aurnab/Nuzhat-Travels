import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const NavbarSlice = createSlice({
    name: "navbarSlice",
    initialState,
    reducers: {
        controlNav: (state) => {
            state.open = !state.open;
        },
    },
});
export const { controlNav } = NavbarSlice.actions;
export default NavbarSlice.reducer;