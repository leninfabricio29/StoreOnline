import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isFetching: false,
        error: false,
      },
    reducers: {
        //GET ALL
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getUserSucces: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});
export const {getUserStart, getUserSucces, getUserFailure} = usersSlice.actions
export default usersSlice.reducer;
