import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./authThunk";
import { User } from "./authTypes";

interface InitialStateProps {
    user: User | null;
    status: string;
    error: string | null
}

const initialState: InitialStateProps = {
    user: {
        name: '',
        email: '',
        password: '',
    },
    error: null,
    status: 'idle'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signup.pending, () => {

        }),
        builder.addCase(signup.fulfilled, (state, action) => {

        }),
        builder.addCase(signup.rejected, () => {

        })
    }
});

export default authSlice.reducer;

