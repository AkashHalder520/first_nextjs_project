import { Authslice } from "./Authslice";

const { configureStore } = require("@reduxjs/toolkit");

export const store= configureStore({
    reducer:{
        auth:Authslice.reducer
    }
})