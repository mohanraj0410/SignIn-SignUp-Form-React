import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "User",
    initialState: {
        user: []
    },
    reducers: {
        addUserDetails: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {addUserDetails}=userSlice.actions
export default userSlice.reducer