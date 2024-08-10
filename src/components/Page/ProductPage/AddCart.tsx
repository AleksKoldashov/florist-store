import React, { useContext, useEffect, useState } from 'react'
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import { Button } from 'antd'
import { MyReduserContext } from '../../Reducers/Reducer';
import MyMasseger from '../../Hooks/MyMasseger';

export default function AddCart({item}:any) {
const [count, setCount]=useState<number>(0)
const {state, dispatch}= useContext<any>(MyReduserContext)
const message=MyMasseger({bodyS:'Success Add Product'})
const addProductCart=()=>{
const obj = state.basket.find((el:any)=>el.id===item.id)
const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
dispatch({type:'basket', payload: obj===undefined ? [...state.basket,{...item, count}] : [...arrFilter,{...obj, count}]})
}

const plus=()=>{
    setCount(count+1)
}

const minus=()=>{
    if(count!==0){
        setCount(count-1)
    }else{
        const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
        dispatch({type:'basket', payload:[...arrFilter]}) 
    }
}

  return (
    <div className='blok-btn-add-cart'>
       {message.contextHolder}
       <MinusCircleOutlined 
       style={{ fontSize: '200%'}}
       onClick={()=>{minus()}}
       />
       <h1 className='count'>{count}</h1>
       <PlusCircleOutlined 
       style={{ fontSize: '200%', marginLeft: '15px'}}
       onClick={()=>{plus()}}
       />
       <Button
       style={{ marginLeft: '30px', width:'260px'}}
       onClick={()=>{[addProductCart(), message.success()]}}
       >Add Cart</Button>
    </div>
  )
}
