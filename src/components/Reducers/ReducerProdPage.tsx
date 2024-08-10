import React, { createContext, useState } from "react"


export const MyContextProdPage = createContext({})as any 

type iAction={
    type?: string;
    payload?: any;
 }

export const InitStateProductPage:any ={
  post: {}, 
  postlength: 0
}

export const reducerProdPage=(state:any, action:iAction):any=>{
    switch (action.type) {
      case 'rate': return {
         ...state,
        post: {...state.post,rate: action.payload}
      }
      case 'valueReviews': return {
         ...state,
         post: {...state.post,valueReviews: action.payload}
      }
      case 'postlength': return {
         ...state,
         postlength: action.payload 
      }
   
       default:
          return state;
    }
 }
