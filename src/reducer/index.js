import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"                 // importing all reducer which is made into slices;

const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authReducer,
})

export default rootReducer

