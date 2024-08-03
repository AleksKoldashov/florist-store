import React, { useContext } from 'react'
import { MyAppContext } from '../../../App';
import CardProduct from './CardProduct';

export default function AllProducts() {
    const { productsArray}:any = useContext(MyAppContext);
  return (
    <>
     {
    productsArray.map((item:any)=><CardProduct item={item} key={item.id}/>)
    }
    </>
  )
}
