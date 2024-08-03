import React from 'react'
import { NavLink } from 'react-router-dom'

export default function QuantotyCategories({...props}:any) {
  const a = props.item
 
  const newArr=(arr:any)=>{
    let arrNew=[]
    arrNew=arr.filter((i:any)=>i.categories===a.item)
    return arrNew
  }

  return (
   
        <NavLink 
        to={`/home/categories/${a.item}`} 
        style={{textDecoration: 'none'}}>
        <div  className="wrapcateg">
        <h3>{a.item}</h3>
        <h2>(
        {
            newArr(a.productsArray).length > 0 ? newArr(a.productsArray).length : 0
        }
        )</h2>
        </div>
        </NavLink>
    
  
  )
}
