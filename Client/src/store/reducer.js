import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
    transaction:[]
}


export const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        getTransactions:(state) => {
            //get transactions
        }
    }
})

export const {getTransactions} = expenseSlice.actions;
export default expenseSlice.reducer;