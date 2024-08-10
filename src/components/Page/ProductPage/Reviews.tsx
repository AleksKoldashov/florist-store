import { Button, Card, Input, Popconfirm, PopconfirmProps } from 'antd'
import React, { useEffect, useState } from 'react'
import {LikeOutlined} from '@ant-design/icons';
import Rating from './Rating';
import { useMutation, useQueryClient } from 'react-query';
import { MyReduserContext } from '../../Reducers/Reducer';
import { MyContextProdPage } from '../../Reducers/ReducerProdPage';
import { useParams } from 'react-router-dom';

const AddReviews = async ({state, id, post}:any) =>{
  const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app/products/id${state.id}/reviews/${id}.json`,{
      method:'PUT',
      body: JSON.stringify(post)
  })
  if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return await response.json();
}

export default function Reviews({item}:any) {
  const queryClient =useQueryClient()
const {stateProd, dispatchProd}= React.useContext<any>(MyContextProdPage)

const valueReviews=stateProd.post.valueReviews;
const rate = stateProd.post.rate

const handelValue=(e:any)=>{
 dispatchProd({type: 'valueReviews', payload: e.target.value})
  }
  
const addPost=useMutation({
    mutationFn:():any=>{
      const id = Math.floor(Math.random()*100000)   
      const post ={
          title: valueReviews,
          date: new Date(),
          rate
      }
      AddReviews({state: item, id, post})
    },
   onSuccess: ()=>{
    setTimeout(()=>{
        queryClient.invalidateQueries('product')
    },500)
   } 
})  

const arrPost=(obj:any)=>{
  const arr=[]
  for(let key in obj){
      arr.push(obj[key])
  }
  return arr
}

useEffect(()=>{
  dispatchProd({type:'postlength', payload: arrPost(item.reviews).length})
},[item.reviews])
  return (
    <div>
        <Input.TextArea
        placeholder='add review'
        onChange={handelValue}
        value={stateProd?.post.valueReviews}
        />
        <Popconfirm
          placement="top"
          title='Rate Product'
          description={<Rating/>}
          okText="Yes"
          cancelText="No"
          icon={<LikeOutlined/>}
          onConfirm={()=>{addPost.mutate()}}
        >
        <Button>Add Review</Button>
        </Popconfirm>
     
        {
          arrPost(item.reviews).map((el:any, index:any)=><Card title={el.date} bordered={true} style={{ width: 1100 , marginTop: 15}} key={index}>
          <p>{el.title}</p>
         <Rating num={el.rate||0}/>
        </Card>)
        }
       
        
    </div>
  )
}
