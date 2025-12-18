import { createAsyncThunk } from "@reduxjs/toolkit";

import { signupUser } from "@/src/services/auth/auth";
import { type User } from "./authTypes";

export const signup = createAsyncThunk('auth/signup', async(payload:User)=> {
    try {
        const res = await signupUser(payload);
        return res;
    } catch (error) {
        console.log('auth/signup thunk error', error)
    }
});

export const login = createAsyncThunk('auth/login', async()=> {

})