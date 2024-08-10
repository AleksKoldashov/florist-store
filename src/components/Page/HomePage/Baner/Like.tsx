import React, { useContext, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import MyMasseger from '../../../Hooks/MyMasseger';

const AddLike= async (count:any) =>{
    const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/like.json`,{
        method:'PUT',
        body: JSON.stringify(count)
    })
    if (!response.ok) {
        throw new Error('Что-то пошло не так');
      }
      return await response.json();
  }
export default function Like({like}:any) {
    const queryClient=useQueryClient()

    const message=MyMasseger({bodyS:`Good Like!!!`, bodyE:'Error'})
    const [count, setCount]=useState(like)

    const funAddLike=useMutation({
        mutationFn: ():any=>{
            AddLike(count)
        },
        onSuccess:()=>{
          setTimeout(()=>{
            queryClient.invalidateQueries('like')
            message.success()
          }, 500)
        },
        onError: ()=>{
          message.error()
        }
      })

    return (
    <>
      {message.contextHolder}
      <button 
      className="btn-baner"
      onClick={()=>{[funAddLike.mutateAsync(), setCount(count+1)]}}
      >LIKE NOW</button>
    </>
  )
}
