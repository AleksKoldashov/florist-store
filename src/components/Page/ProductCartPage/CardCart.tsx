import { Card } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import { MyReduserContext } from '../../Reducers/Reducer';
import icondel from '../../../assets/img/cart/delete.svg'


export default function CardCart({item}:any) {

const {state, dispatch}= useContext<any>(MyReduserContext)


const plus=()=>{
        const obj = state.basket.find((el:any)=>el.id===item.id)
        const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
         dispatch({type:'basket', payload: [...arrFilter, {...obj, count: item.count+1}]})
    }
    
const minus=()=>{
    if(item.count!==0){
        const obj = state.basket.find((el:any)=>el.id===item.id)
        const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
         dispatch({type:'basket', payload: [...arrFilter, {...obj, count: item.count-1}]})
    }else{
        const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
        dispatch({type:'basket', payload:[...arrFilter]}) 
    }
    }

const total=(a:number, b:string)=>{
      const res=a*Number(b)
      return res
    }

const delItem=()=>{
  const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
  dispatch({type:'basket', payload:[...arrFilter]}) 
}
useEffect(()=>{
  const obj = state.basket.find((el:any)=>el.id===item.id)
      const arrFilter = state.basket.filter((el:any)=>el.id!==item.id)
      dispatch({type:'basket', payload: [...arrFilter, {...obj, res: total(item.count, item.price)}]})
},[item.count])
    
  return ( <>
        <Card 
          style={{width: '750px', height:'80px', padding: '5px', marginTop:'15px'}}
          >
            <div className='cart-content-cart'>
              <img 
                src={item.urlimg} 
                alt="img"
                className="imgprod"
                />
              <h3>{item.name}</h3>
              <h4>{item.price} $</h4>
              <div className='cart-content-quantity'>
              <MinusCircleOutlined 
                // style={{ fontSize: '200%'}}
                onClick={()=>{minus()}}
                />
              <h4 className='count'>{item.count}</h4>
              <PlusCircleOutlined 
            //    style={{ fontSize: '200%', marginLeft: '15px'}}
               onClick={()=>{plus()}}
               />
              </div>
              <h4>{total(item.count, item.price)}$</h4>
              <img
              className='cart-del'
              src={icondel}
              alt='del'
              onClick={()=>{delItem()}}
              />
            </div>
          </Card>
    </>
  )
}
