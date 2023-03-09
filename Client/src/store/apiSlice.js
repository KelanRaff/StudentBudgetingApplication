import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder =>({

        //get categories
       getCategories: builder.query({
        // get http://localhost:8080
        query: () => '/api/catagories',
        providesTags:['categories']
       }),

       //get 'http://localhost:8080/api/labels'
       getLabels:builder.query({
        query:()=>'/api/labels',
        providesTags:['transaction']
       }),

       //add new transaction
       addTransaction:builder.mutation({
        query:(initialTransaction) => ({
            //POST: 'http://localhost:8080/api/transaction'
            url:'/api/transaction',
            method:"POST",
            body: initialTransaction
        }),
        invalidatesTags:['transaction']
       }),
       
       //delete record
       deleteTransaction: builder.mutation({
        query: recordID => ({
            //DELETE: 'http://localhost:8080/api/transaction'
            url:'/api/transaction',
            method:"DELETE",
            body: recordID
        }),
        invalidatesTags:['transaction']
       })
    })
})

export default apiSlice;