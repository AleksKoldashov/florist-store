import React, { useCallback, useContext, useEffect, useReducer } from "react"
import { useMutation, useQueryClient } from "react-query"
import MyFormAdmin from "./Utilits/Form/MyFormAdmin"
import { MyAppContext } from "../../../App"
import { Button } from "antd"
import { MyReduserContext, Product, reducer } from "../../../../components/Reducers/Reducer";

const AddMyProduct= async ({state, id}:any) =>{
    const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products/id${id}.json`,{
        method:'PUT',
        body: JSON.stringify({...state, rating: 0, reviews: 0, id})
    })
    if (!response.ok) {
        throw new Error('Что-то пошло не так');
      }
      return await response.json();
}

const AdminAddProduct =()=>{
const queryClient = useQueryClient()
const {categoriesArray}:any = useContext(MyAppContext)
const {state, dispatch}= useContext<any>(MyReduserContext)



const addfoto= async (state:any)=>{
    const url = 'https://firebasestorage.googleapis.com/v0/b/florist-project-78b45.appspot.com/o/img%2'
     const formData = new FormData();
     formData.append(`${state?.name}`, state?.img)
     const res = await fetch(`${url}${state?.name}`,{
         method:'POST',
         body: formData
     });
     const data = await res.json();
     }  

const AddProduct=useMutation({
    mutationFn: ():any=>{
        const id = Math.floor(Math.random()*100000)   
        AddMyProduct({state, id})
        addfoto(state)
    },
    onSuccess: ()=>{
        setTimeout(()=>{
            queryClient.invalidateQueries(['products'])
        }, 500) 
    }
})
useEffect(()=>{
    dispatch({type:'test'})
},[])
    return(
      <>
       <div>
            <MyFormAdmin categoriesArray={categoriesArray}/>
            <Button
            onClick={()=>{AddProduct.mutate()}}
            >Add Product</Button>
        </div>
            <Button
            onClick={()=>{dispatch({type:'test'})}}
            >Test</Button>
      </>
           
   
           
    
        
    )
}

export {AdminAddProduct}