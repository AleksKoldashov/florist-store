import React, { useState } from 'react'
import basket from '../../../../assets/img/card/basket.svg'
import like from '../../../../assets/img/card/like.svg'
import search from '../../../../assets/img/imgheader/search.svg'
import { NavLink } from 'react-router-dom'


export default function CardProduct({...props}) {
    const item = props.item
    const [togle, setTogle]=useState(false)
  
  const fn=()=>{
    setTogle(true)
  }
  const fn1=()=>{
    setTogle(false)
  }  
  return (
    <>
    <div
    key={item.id}
    className='card-prod'
    onMouseEnter={()=>{fn()}}
    onMouseLeave={()=>fn1()} 
    >
        <img 
        src={`${item.urlimg}`} 
        alt="img" 
        className='card-prod-img'
        />
        <div className='card-prod-hover'>
              {
                togle ?
                <>
                   <img src={basket} alt='img' className='imgcard'/>
                   <img src={like} alt='img' className='imgcard'/>
                   <NavLink to={`/product/${item.id}`}>
                   <img 
                   src={search} 
                   alt='img' 
                   className='imgcard'
                   />
                   </NavLink>
                  
                </>
                :
                null
              }
        </div>
        <div className='card-prod-name'>{item.name}</div>
        <div className='card-prod-price'>$ {item.price}</div>
    </div>
    </>
  )
}
