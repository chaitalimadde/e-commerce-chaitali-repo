import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token: null
 }

const TokenSlice = createSlice({
name: "tokenSlice",
initialState,
reducers: 
{ 
    addToken:(state, action)=>{

        state.token = action.payload;
    },

    clearToken:(state)=>{
        state.token =null;
    }
}

});

export const {addToken, clearTOken} =TokenSlice.actions;
export default TokenSlice.reducer;

