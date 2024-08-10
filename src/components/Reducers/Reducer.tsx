import React, { createContext, useState } from "react"

export const MyReduserContext = createContext({})as any

type iAction={
   type?: string;
   payload?: any;
   payloadimg?: any;
}
const basket:any = localStorage.getItem('basket')
const order:any = localStorage.getItem('order')

export const Product:any ={
  prod: {},
  basket: JSON.parse(basket) || [],
  order: JSON.parse(order) || [],

}



export const reducer=(state:any, action:iAction):any=>{
   switch (action.type) {
      case 'categories': return {
         ...state,
         prod:{...state.prod,categories: action.payload}
      }
      case 'name': return {
         ...state,
         prod:{...state.prod,name: action.payload}
         
      }
      case 'price': return {
         ...state,
         prod:{...state.prod,price: action.payload}
         
      }
      case 'quantily': return {
         ...state,
         prod:{...state.prod,quantily: action.payload}
        
      }
      case 'description': return {
         ...state,
         prod:{...state.prod,description: action.payload}
         
      }
      case 'size': return {
         ...state,
         prod:{...state.prod,size: action.payload}
         
      }
      case 'img': return {
         ...state,
         prod:{...state.prod, urlimg: action.payload,img: action.payloadimg} 
      }
      case 'test': return {
         ...state
      }
      case 'clear': return {
         ...state,
         prod: {}, 
         success: null
      }
      case 'clearBasket': 
      return {
         ...state,
         basket: [],
         
      }
      case 'success': return {
         ...state,
         success:  <h3>Product success add</h3>
      }
      case 'modal': return {
         ...state,
         modal: action.payload
      }
      case 'basket': return {
         ...state,
         basket: action.payload
      }
      case 'like': return {
         ...state,
         like: 0
      }
        
      default:
         return state;
   }
}