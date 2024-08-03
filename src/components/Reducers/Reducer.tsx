import React, { createContext, useState } from "react"
import { useQuery } from "react-query"

export const MyReduserContext = createContext({})as any

type iAction={
   type?: string;
   payload?: any;
   payloadimg?: any;
}
export const Product:any ={
  
}
const test=()=>{
   console.log('test');
}
export const reducer=(state:any, action:iAction):any=>{
   switch (action.type) {
      case 'categories': return {
         ...state,
          categories: action.payload
      }
      case 'name': return {
         ...state,
          name: action.payload
      }
      case 'price': return {
         ...state,
         price: action.payload
      }
      case 'quantily': return {
         ...state,
         quantily: action.payload
      }
      case 'description': return {
         ...state,
         description: action.payload
      }
      case 'size': return {
         ...state,
         size: action.payload
      }
      case 'img': return {
         ...state,
         urlimg: action.payload,
         img: action.payloadimg
      }
      case 'test': return {
         ...state,
         test: 'test'
      }
      case 'clear': return {
        
      }
   
   
      default:
         return state;
   }
}