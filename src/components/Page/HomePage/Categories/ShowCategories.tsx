import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyAppContext } from '../../../App';
import CardProduct from '../Products/CardProduct';

export default function ShowCategories() {
    const idCategories = useParams()
    const { productsArray}:any = useContext(MyAppContext);
    console.log(idCategories);
    const filterFunc=(arr:any)=>{
      let arrNew=[]
    arrNew=arr.filter((i:any)=>i.categories===idCategories.idCategories)
    return arrNew
    }
  return (
    <>
      {
       filterFunc(productsArray).length > 0 
       ? 
       filterFunc(productsArray).map((item:any)=> <CardProduct item={item} key={item.id}/>)
        :
        <span>No Product</span>
      }
    </>
  )
}
