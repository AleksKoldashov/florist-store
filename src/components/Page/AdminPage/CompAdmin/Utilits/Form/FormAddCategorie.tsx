import { Button, Input } from "antd"
import React, { useState } from "react"
import { useMutation, useQueryClient } from "react-query"

export const AddMyCategories= async ({id,value}:any)=>{
    const response = await fetch(`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories/${value}.json`,{
        method: 'PUT',
        body:JSON.stringify( value)
    })
    return response.json()
}

const FormAddCategories =()=>{
  const queryClient = useQueryClient()

  const [value, setValue]=useState('')
  const addCategories=useMutation({
    mutationFn: ():any=>{
        const id = Math.floor(Math.random()*100000)   
        AddMyCategories({id, value})
    },
    onSuccess: ()=>{
        setValue('')
        setTimeout(()=>{
            queryClient.invalidateQueries(['categories'])
        }, 500)

    }
})
    return(
        <div>
            <Input 
            onChange={(e:any)=>{setValue(e.target.value)}}
            value={value}
            placeholder="Добавим новую категорию" 
            />
            <Button
            onClick={()=>{addCategories.mutate()}}
            >Добавить</Button>
        </div>
    )
}

export {FormAddCategories}