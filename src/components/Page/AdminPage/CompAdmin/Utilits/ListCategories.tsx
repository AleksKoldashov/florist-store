import React, { memo, useContext, useEffect, useState } from "react";
import { Button, Card, Input, Spin } from "antd";
import { MyAppContext } from "../../../../App";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const deleteMyCategories= async (item:any)=>{
    const response = await fetch(`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories/${item}.json`,{
        method: 'DELETE',
    })
    return response.json()
}

const ListCategories=():any=>{
const {categoriesArray}:any =useContext(MyAppContext)
const queryClient=useQueryClient()
    // const categories:any = queryClient.getQueryData(['categories'])
    // const data = categories
    // const categories:any = queryClient.getQueryCache()
    // const data = categories.queries[0]?.state.data
    // console.log(categories.queries[0]?.state.data);
// const {data, isLoading, isError, refetch}=useQuery({
//     queryKey:['categories'],
//     // queryFn: ()=>
//     // axios
//     // .get(`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
//     // .then((x)=>x.data),
//     queryFn:  async () =>{
//         const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
//         if (!response.ok) {
//             throw new Error('Что-то пошло не так');
//           }
      
//           return await response.json();
//     },
//     enabled: true,
//     // select: data=>data
// })

const deleteCategories=useMutation({
        mutationFn:(item:any):any=>{ 
            deleteMyCategories(item)
        },
        onSuccess: ()=>{
            setTimeout(()=>{
                queryClient.invalidateQueries(['categories'])
            }, 500)
        }, 
    })
// useEffect(()=>{
  
//     },[data, deleteCategories, queryClient])
// if(isLoading){<Spin/>}
// if(isError){<p>error</p>}
 
        return <>
        {  
            categoriesArray ? 
            categoriesArray.map((item:any, index:any)=><Card  key={index} style={{margin: '10px'}}>
            <div className="categoriescard">
                {item}
                <Button
                onClick={()=>{deleteCategories.mutate(item)}}
                >Delete Categories</Button>
            </div>
            </Card>)
            :
            <p>no categories</p>
         
        }
       </>
    }
   


export {ListCategories}