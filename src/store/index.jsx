import { configureStore } from "@reduxjs/toolkit";
import schoolInfoSlice from "./slices/SchoolSlice";

const store = configureStore({
    reducer:{
        schoolInfo: schoolInfoSlice.reducer
    }
})

export default store