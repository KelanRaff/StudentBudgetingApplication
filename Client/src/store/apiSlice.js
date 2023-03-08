import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder =>({

        //get categories
       getCategories: builder.query({
        // get http://localhost:8080
        query: () => '/api/catagories'
       }),

       //get 'http://localhost:8080/api/labels'
       getLabels:builder.query({
        query:()=>'/api/labels'
       }),

       //add new transaction
       addTransaction:builder.mutation({
        query:(initialTransaction) => ({
            //POST: 'http://localhost:8080/api/transaction'
            url:'/api/transaction',
            method:"POST",
            body: initialTransaction
        })
       }),
       
       // delete record
       query: recordId => ({
        //DELETE: 'http://localhost:8080/api/transaction'
        url:'/api/transaction',
        method:"DELETE",
        body: recordId
       })
    })
})

export default apiSlice;