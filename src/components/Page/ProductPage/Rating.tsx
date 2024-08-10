import React, { useContext, useState } from 'react'
import { StarTwoTone } from '@ant-design/icons';
import { MyReduserContext } from '../../Reducers/Reducer';
import { MyContextProdPage } from '../../Reducers/ReducerProdPage';


export default function Rating({num}:any) {
const {stateProd, dispatchProd}= useContext<any>(MyContextProdPage)


const createArray = (length:any) => [...Array(length)];
const Star = ({ selected = false, onSelect = (f:any) => f }) => (
    <StarTwoTone twoToneColor={selected ? "gold" : "grey"} onClick={onSelect} />
  );
 
  return (
    <div>
{
        createArray(5).map((item:any, index)=>
        <Star 
        onSelect={() => num===0 ? null : dispatchProd({type:'rate', payload: index+1})}  
        key={index}
        selected={num ? num > index  : stateProd.post.rate > index}
        />)   
     }

    </div>
  )
}
