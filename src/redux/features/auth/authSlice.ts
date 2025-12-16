import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
    user: {
        name: string;
        email: string;
        password: string;
    }
}

const initialState:InitialStateProps = {
    user: {
        name:'',
        email: '',
        password:'',
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers :{},
    extraReducers : (builder) => {
        
    }
});

export default authSlice.reducer;

